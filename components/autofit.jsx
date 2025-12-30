"use client"
import { useState } from "react"
import { useEditor } from "@/contexts/editor-context"

export default function useAutoFit() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { fabricCanvasRef, fabricImageRef, template, userPhoto } = useEditor()

  /**
   * Convert a URL or data URL to a Blob
   */
  const urlToBlob = async (url) => {
    const response = await fetch(url)
    return await response.blob()
  }

  const detectAndFit = async () => {
    // Get current values from refs
    const fabricCanvas = fabricCanvasRef?.current
    const fabricImage = fabricImageRef?.current
    
    if (!fabricCanvas || !fabricImage) {
      setError("Canvas or image not ready")
      return
    }

    if (!template?.background || !userPhoto) {
      setError("Template or photo not loaded")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // Convert template and photo to Blobs
      const templateBlob = await urlToBlob(template.background)
      const photoBlob = await urlToBlob(userPhoto)

      // Create FormData
      const formData = new FormData()
      formData.append("template", templateBlob, "template.png")
      formData.append("photo", photoBlob, "photo.png")

      // Send to API
      const response = await fetch("/api/autofit", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Autofit failed")
      }

      const box = await response.json()
      console.log("📦 Autofit result:", box)

      // Apply the detected bounding box to Fabric.js image
      applyBoxToImage(box)

    } catch (err) {
      console.error("❌ Autofit error:", err)
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const applyBoxToImage = (box) => {
    // Get current values from refs
    const fabricImage = fabricImageRef?.current
    const fabricCanvas = fabricCanvasRef?.current
    
    if (!fabricImage || !fabricCanvas) return

    const { x, y, width, height, mode } = box

    // Get template background to access scale info
    const templateBg = fabricCanvas.getObjects().find(obj => obj.isTemplateBackground)
    
    if (templateBg) {
      // Convert coordinates from original template space to canvas space
      const templateScale = templateBg.templateScale || 1
      const templateLeft = templateBg.left - (templateBg.width * templateBg.scaleX) / 2
      const templateTop = templateBg.top - (templateBg.height * templateBg.scaleY) / 2
      
      // Scale the coordinates
      const scaledX = x * templateScale + templateLeft
      const scaledY = y * templateScale + templateTop
      const scaledWidth = width * templateScale
      const scaledHeight = height * templateScale
      
      // Use independent scaleX and scaleY to EXACTLY fill the box (no gaps, no overflow)
      const scaleX = scaledWidth / fabricImage.width
      const scaleY = scaledHeight / fabricImage.height
      // Stretch to exact box dimensions (may distort aspect ratio slightly)

      // Calculate center position
      const centerX = scaledX + scaledWidth / 2
      const centerY = scaledY + scaledHeight / 2

      // Preserve current rotation
      const currentRotation = fabricImage.angle || 0
      
      // Store detected box bounds on the image for reference
      fabricImage.detectedBoxBounds = {
        left: scaledX,
        top: scaledY,
        width: scaledWidth,
        height: scaledHeight
      }
      
      // Apply circular clip path if this is a circular/masked placeholder
      if (mode === "MASK + FACE") {
        // Create circular clip path matching the detected placeholder size
        const radius = Math.max(scaledWidth, scaledHeight) / (2 * Math.max(scaleX, scaleY))
        const clipPath = new fabric.Circle({
          radius: radius,
          originX: 'center',
          originY: 'center'
        })
        fabricImage.clipPath = clipPath
      } else {
        // Remove any existing clip path for rectangular frames
        fabricImage.clipPath = null
      }

      // Apply transformations with independent scaleX/scaleY to exactly fill box
      fabricImage.set({
        left: centerX,
        top: centerY,
        scaleX: scaleX,
        scaleY: scaleY,
        angle: currentRotation,
        originX: "center",
        originY: "center",
      })

      console.log(`✅ Applied ${mode} - Coords: (${x},${y}) → Canvas: (${centerX.toFixed(0)},${centerY.toFixed(0)})`)
    } else {
      // Fallback if no template background found
      const scaleX = width / fabricImage.width
      const scaleY = height / fabricImage.height
      const scale = Math.min(scaleX, scaleY)
      const centerX = x + width / 2
      const centerY = y + height / 2
      
      fabricImage.set({
        left: centerX,
        top: centerY,
        scaleX: scale,
        scaleY: scale,
        originX: "center",
        originY: "center",
      })
    }

    // Update canvas
    fabricCanvas.renderAll()
    fabricCanvas.setActiveObject(fabricImage)
  }

  return { detectAndFit, isLoading, error }
}