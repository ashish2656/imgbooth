"use client"

import { useEffect, useRef } from "react"
import { useEditor } from "@/contexts/editor-context"
import { motion } from "framer-motion"
import { fabric } from "fabric"

export default function CanvasArea() {
  const {
    template,
    userPhoto,
    photoPosition,
    setFabricCanvas,
    setFabricImage,
    updatePhotoPosition
  } = useEditor()

  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const fabricCanvasRef = useRef(null)

  // 1. Initialize Canvas
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.dispose()
    }

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
    setFabricCanvas(canvas) // IMPORTANT: This exposes the canvas to Context

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

  // 2. Load Template Background
  useEffect(() => {
    const canvas = fabricCanvasRef.current
    if (!canvas || !template) return

    canvas.getObjects().forEach(obj => {
      if (obj.isTemplateBackground) canvas.remove(obj)
    })

    fabric.Image.fromURL(template.background, (img) => {
      // Store original dimensions for coordinate mapping
      const originalWidth = img.width
      const originalHeight = img.height
      
      // Calculate scale to fit (contain) without distortion
      const scaleX = canvas.width / originalWidth
      const scaleY = canvas.height / originalHeight
      const scale = Math.min(scaleX, scaleY)
      
      img.scale(scale)
      img.set({
        left: canvas.width / 2,
        top: canvas.height / 2,
        originX: "center",
        originY: "center",
        selectable: false,
        evented: false,
        isTemplateBackground: true,
        // Store these for coordinate conversion
        originalWidth: originalWidth,
        originalHeight: originalHeight,
        templateScale: scale
      })
      canvas.add(img)
      canvas.sendToBack(img)
      canvas.renderAll()
    })

  }, [template])

  // 3. Sync Photo Position from State (Context -> Canvas)
  useEffect(() => {
    if (!fabricCanvasRef.current) return
    const img = fabricCanvasRef.current.getObjects().find(obj => obj.userPhoto)
    if (!img) return
    
    // Only update if values are actually different to avoid loops
    const scaleX = photoPosition.scaleX || photoPosition.scale
    const scaleY = photoPosition.scaleY || photoPosition.scale
    
    if (Math.abs(img.left - photoPosition.x) > 1 || Math.abs(img.top - photoPosition.y) > 1 || 
        Math.abs(img.scaleX - scaleX) > 0.01 || Math.abs(img.scaleY - scaleY) > 0.01) {
        img.set({
            left: photoPosition.x,
            top: photoPosition.y,
            scaleX: scaleX,
            scaleY: scaleY,
            angle: photoPosition.rotation
        })
        img.setCoords()
        fabricCanvasRef.current.renderAll()
    }
  }, [photoPosition])

  // 4. Load User Photo
  useEffect(() => {
    if (!fabricCanvasRef.current || !userPhoto) return
    const canvas = fabricCanvasRef.current

    const existingImage = canvas.getObjects().find(obj => obj.userPhoto === true)
    if (existingImage) {
      canvas.remove(existingImage)
      setFabricImage(null) // Clear the reference immediately
    }

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
        transparentCorners: false,
        lockScalingFlip: false
      })
      
      // Enable non-uniform scaling by customizing corner controls
      img.setControlsVisibility({
        mt: true, // middle top
        mb: true, // middle bottom
        ml: true, // middle left
        mr: true, // middle right
        tl: true, // top left
        tr: true, // top right
        bl: true, // bottom left
        br: true  // bottom right
      })
      
      // Override corner controls to allow non-uniform scaling
      const customControls = {
        tl: new fabric.Control({
          x: -0.5, y: -0.5,
          cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
          actionHandler: fabric.controlsUtils.scalingEqually,
          actionName: 'scale'
        }),
        tr: new fabric.Control({
          x: 0.5, y: -0.5,
          cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
          actionHandler: fabric.controlsUtils.scalingEqually,
          actionName: 'scale'
        }),
        bl: new fabric.Control({
          x: -0.5, y: 0.5,
          cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
          actionHandler: fabric.controlsUtils.scalingEqually,
          actionName: 'scale'
        }),
        br: new fabric.Control({
          x: 0.5, y: 0.5,
          cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
          actionHandler: fabric.controlsUtils.scalingEqually,
          actionName: 'scale'
        }),
        ml: new fabric.Control({
          x: -0.5, y: 0,
          cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
          actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
          actionName: 'scaleX'
        }),
        mr: new fabric.Control({
          x: 0.5, y: 0,
          cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
          actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
          actionName: 'scaleX'
        }),
        mt: new fabric.Control({
          x: 0, y: -0.5,
          cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
          actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
          actionName: 'scaleY'
        }),
        mb: new fabric.Control({
          x: 0, y: 0.5,
          cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
          actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
          actionName: 'scaleY'
        })
      }
      
      img.controls = customControls

      // Constrain photo within template boundaries (not too strict)
      const constrainBounds = function(e) {
        const obj = e.target
        if (!obj) return
        
        const bound = obj.getBoundingRect(true)
        
        // Only constrain to template background bounds (allow some overflow for fill)
        const templateBg = canvas.getObjects().find(o => o.isTemplateBackground)
        if (!templateBg) return
        
        const templateBound = templateBg.getBoundingRect(true)
        const minX = templateBound.left
        const minY = templateBound.top
        const maxX = templateBound.left + templateBound.width
        const maxY = templateBound.top + templateBound.height
        
        // Keep photo mostly within template (allow reasonable overflow)
        const tolerance = 10 // pixels
        
        if (bound.left < minX - tolerance) {
          obj.left = obj.left + ((minX - tolerance) - bound.left)
        }
        if (bound.top < minY - tolerance) {
          obj.top = obj.top + ((minY - tolerance) - bound.top)
        }
        if (bound.left + bound.width > maxX + tolerance) {
          obj.left = obj.left - ((bound.left + bound.width) - (maxX + tolerance))
        }
        if (bound.top + bound.height > maxY + tolerance) {
          obj.top = obj.top - ((bound.top + bound.height) - (maxY + tolerance))
        }
        
        obj.setCoords()
      }

      // Update Context when user drags manually
      img.on("moving", function (e) {
        constrainBounds(e)
        updatePhotoPosition({ x: Math.round(this.left), y: Math.round(this.top) })
      })
      img.on("scaling", function (e) {
        constrainBounds(e)
        // Only update scale if uniform scaling (both scaleX and scaleY are equal)
        if (Math.abs(this.scaleX - this.scaleY) < 0.001) {
          updatePhotoPosition({ 
            scale: this.scaleX,
            scaleX: this.scaleX,
            scaleY: this.scaleY
          })
        } else {
          // Independent stretching - don't update uniform scale
          updatePhotoPosition({ 
            scaleX: this.scaleX,
            scaleY: this.scaleY
          })
        }
      })
      img.on("rotating", function () {
        updatePhotoPosition({ rotation: this.angle })
      })

      canvas.add(img)
      canvas.setActiveObject(img)
      canvas.renderAll()
      
      // Set the reference after everything is ready
      setFabricImage(img)
      
      console.log("✅ New photo loaded and fabricImage updated")
    })
  }, [userPhoto, setFabricImage, updatePhotoPosition])

  function allowDrop(e) { e.preventDefault() }
  const handleDrop = (e) => { /* drag drop logic */ } 

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