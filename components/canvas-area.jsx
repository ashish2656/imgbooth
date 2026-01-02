"use client"

import { useEffect, useRef, useState } from "react"
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
    updatePhotoPosition,
    addToHistory,
    isHistoryAction
  } = useEditor()

  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const fabricCanvasRef = useRef(null)
  const [canvasInstance, setCanvasInstance] = useState(null)

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
    setCanvasInstance(canvas)

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
      setCanvasInstance(null)
    }

  }, [setFabricCanvas])

  // 1.5 Setup History Listeners
  useEffect(() => {
    if (!canvasInstance) return
    const canvas = canvasInstance

    const saveHistory = () => {
      if (!isHistoryAction) {
        addToHistory(canvas)
      }
    }
    
    canvas.on('object:modified', saveHistory)
    canvas.on('object:added', saveHistory)
    canvas.on('object:removed', saveHistory)
    
    return () => {
        canvas.off('object:modified', saveHistory)
        canvas.off('object:added', saveHistory)
        canvas.off('object:removed', saveHistory)
    }
  }, [canvasInstance, isHistoryAction, addToHistory])

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

  // 3.5 Setup Object Listeners (Handles restore from history too)
  useEffect(() => {
    if (!canvasInstance) return
    const canvas = canvasInstance

    const handleObjectAdded = (e) => {
      const img = e.target
      if (!img || !img.userPhoto || img.hasControlsSetup) return

      // Enable non-uniform scaling by customizing corner controls
      img.setControlsVisibility({
        mt: true, mb: true, ml: true, mr: true,
        tl: true, tr: true, bl: true, br: true
      })
      
      // Override corner controls
      const customControls = {
        tl: new fabric.Control({ x: -0.5, y: -0.5, cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler, actionHandler: fabric.controlsUtils.scalingEqually, actionName: 'scale' }),
        tr: new fabric.Control({ x: 0.5, y: -0.5, cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler, actionHandler: fabric.controlsUtils.scalingEqually, actionName: 'scale' }),
        bl: new fabric.Control({ x: -0.5, y: 0.5, cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler, actionHandler: fabric.controlsUtils.scalingEqually, actionName: 'scale' }),
        br: new fabric.Control({ x: 0.5, y: 0.5, cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler, actionHandler: fabric.controlsUtils.scalingEqually, actionName: 'scale' }),
        ml: new fabric.Control({ x: -0.5, y: 0, cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler, actionHandler: fabric.controlsUtils.scalingXOrSkewingY, actionName: 'scaleX' }),
        mr: new fabric.Control({ x: 0.5, y: 0, cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler, actionHandler: fabric.controlsUtils.scalingXOrSkewingY, actionName: 'scaleX' }),
        mt: new fabric.Control({ x: 0, y: -0.5, cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler, actionHandler: fabric.controlsUtils.scalingYOrSkewingX, actionName: 'scaleY' }),
        mb: new fabric.Control({ x: 0, y: 0.5, cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler, actionHandler: fabric.controlsUtils.scalingYOrSkewingX, actionName: 'scaleY' })
      }
      img.controls = customControls

      // Constrain photo within template boundaries
      const constrainBounds = function(e) {
        const obj = e.target
        if (!obj) return
        
        const bound = obj.getBoundingRect(true)
        const templateBg = canvas.getObjects().find(o => o.isTemplateBackground)
        if (!templateBg) return
        
        const templateBound = templateBg.getBoundingRect(true)
        const minX = templateBound.left
        const minY = templateBound.top
        const maxX = templateBound.left + templateBound.width
        const maxY = templateBound.top + templateBound.height
        
        const tolerance = 10
        if (bound.left < minX - tolerance) obj.left += ((minX - tolerance) - bound.left)
        if (bound.top < minY - tolerance) obj.top += ((minY - tolerance) - bound.top)
        if (bound.left + bound.width > maxX + tolerance) obj.left -= ((bound.left + bound.width) - (maxX + tolerance))
        if (bound.top + bound.height > maxY + tolerance) obj.top -= ((bound.top + bound.height) - (maxY + tolerance))
        obj.setCoords()
      }

      img.on("moving", function (e) {
        constrainBounds(e)
        updatePhotoPosition({ x: Math.round(this.left), y: Math.round(this.top) })
      })
      img.on("scaling", function (e) {
        constrainBounds(e)
        if (Math.abs(this.scaleX - this.scaleY) < 0.001) {
          updatePhotoPosition({ scale: this.scaleX, scaleX: this.scaleX, scaleY: this.scaleY })
        } else {
          updatePhotoPosition({ scaleX: this.scaleX, scaleY: this.scaleY })
        }
      })
      img.on("rotating", function () {
        updatePhotoPosition({ rotation: this.angle })
      })
      
      img.hasControlsSetup = true
      setFabricImage(img)
      console.log("✅ Object configured via event listener")
    }

    canvas.on('object:added', handleObjectAdded)
    return () => canvas.off('object:added', handleObjectAdded)
  }, [canvasInstance, updatePhotoPosition, setFabricImage])

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

      canvas.add(img)
      canvas.setActiveObject(img)
      canvas.renderAll()
      
      console.log("✅ New photo loaded")
    })
  }, [userPhoto, setFabricImage, updatePhotoPosition])


  function allowDrop(e) { e.preventDefault() }
  const handleDrop = (e) => { /* drag drop logic */ } 

  return (
    <div className="flex flex-1 items-center justify-center bg-transparent p-8 h-full w-full">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-full bg-background shadow-lg overflow-hidden border border-border rounded-md touch-none"
        onDragOver={allowDrop}
        onDrop={handleDrop}
      >
        <canvas ref={canvasRef} />
      </motion.div>
    </div>
  )
}