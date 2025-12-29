"use client"

import { useEffect, useRef, useState } from "react"
import { useEditor } from "@/contexts/editor-context"
import { motion } from "framer-motion"
import { fabric } from "fabric" // v5 Import Syntax

export default function CanvasArea() {
  const {
    template,
    userPhoto,
    textFields,
    photoPosition,
    setFabricCanvas,
    setFabricImage,
    updatePhotoPosition
  } = useEditor()

  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const fabricCanvasRef = useRef(null)

  // 1. Initialize Responsive Canvas
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    // Clean up previous instance
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.dispose()
    }

    // Get parent dimensions
    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    const canvas = new fabric.Canvas(canvasRef.current, {
      width: width,
      height: height,
      backgroundColor: "#ffffff",
      selection: true,
      preserveObjectStacking: true
    })

    fabricCanvasRef.current = canvas
    setFabricCanvas(canvas)

    // Resize logic
    const handleResize = () => {
        if (!containerRef.current || !fabricCanvasRef.current) return
        const newWidth = containerRef.current.clientWidth
        const newHeight = containerRef.current.clientHeight
        
        fabricCanvasRef.current.setDimensions({
            width: newWidth,
            height: newHeight
        })
        fabricCanvasRef.current.renderAll()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.dispose()
      fabricCanvasRef.current = null
      setFabricCanvas(null)
    }
  }, [setFabricCanvas])

  // 2. Handle Template Background (v5 Callback Syntax)
  useEffect(() => {
    const canvas = fabricCanvasRef.current
    if (!canvas || !template) return

    canvas.getObjects().forEach(obj => {
      if (obj.isTemplateBackground) canvas.remove(obj)
    })

    // v5 uses callbacks, not Promises
    fabric.Image.fromURL(template.background, (img) => {
      // Scale to cover
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
      
      img.scale(scale)
      img.set({
        left: canvas.width / 2,
        top: canvas.height / 2,
        originX: "center",
        originY: "center",
        selectable: false,
        evented: false,
        isTemplateBackground: true
      })
      canvas.add(img)
      canvas.sendToBack(img)
      canvas.renderAll()
    })

  }, [template])

  // 3. Update User Photo Position
  useEffect(() => {
    if (!fabricCanvasRef.current) return
    const img = fabricCanvasRef.current.getObjects().find(obj => obj.userPhoto)
    if (!img) return
    
    // Check if values differ to avoid loops
    if (img.left !== photoPosition.x || img.top !== photoPosition.y) {
        img.set({
            left: photoPosition.x,
            top: photoPosition.y,
            scaleX: photoPosition.scale,
            scaleY: photoPosition.scale,
            angle: photoPosition.rotation
        })
        fabricCanvasRef.current.renderAll()
    }
  }, [photoPosition])

  // 4. Handle User Photo Upload (v5 Callback Syntax)
  useEffect(() => {
    if (!fabricCanvasRef.current || !userPhoto) return
    const canvas = fabricCanvasRef.current

    const existingImage = canvas.getObjects().find(obj => obj.userPhoto === true)
    if (existingImage) canvas.remove(existingImage)

    fabric.Image.fromURL(userPhoto, (img) => {
      const initialX = canvas.width / 2
      const initialY = canvas.height / 2
      const targetWidth = canvas.width * 0.5
      const scale = targetWidth / img.width

      img.set({
        left: initialX,
        top: initialY,
        scaleX: scale,
        scaleY: scale,
        originX: "center",
        originY: "center",
        selectable: true,
        evented: true,
        userPhoto: true,
        borderColor: "#2563eb",
        cornerColor: "white",
        cornerStrokeColor: "#2563eb",
        cornerSize: 10,
        transparentCorners: false
      })

      img.on("moving", function () {
        updatePhotoPosition({ x: Math.round(this.left), y: Math.round(this.top) })
      })
      img.on("scaling", function () {
        updatePhotoPosition({ scale: this.scaleX })
      })
      img.on("rotating", function () {
        updatePhotoPosition({ rotation: this.angle })
      })

      canvas.add(img)
      setFabricImage(img)
      canvas.setActiveObject(img)
      canvas.renderAll()
    })
  }, [userPhoto, setFabricImage, updatePhotoPosition])

  // ... (Keep your allowDrop and handleDrop functions same as before) ...
  function allowDrop(e) { e.preventDefault() }
  const handleDrop = (e) => { /* logic */ } 

  return (
    <div className="flex flex-1 items-center justify-center bg-muted p-4 h-full w-full">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-full bg-background shadow-lg overflow-hidden border border-border rounded-md"
        onDragOver={allowDrop}
        onDrop={handleDrop}
      >
        <canvas ref={canvasRef} />
      </motion.div>
    </div>
  )
}