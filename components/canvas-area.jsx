"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import * as fabric from 'fabric'
import { useEditor } from "@/contexts/editor-context"

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
  
  const canvasRef = useRef(null)
  const fabricCanvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Initialize Fabric.js canvas
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 600,
      height: 400,
      backgroundColor: '#ffffff',
      selection: true
    })

    fabricCanvasRef.current = canvas
    setFabricCanvas(canvas)

    // Add template background if exists
    if (template) {
      fabric.Image.fromURL(template.background, (img) => {
        // Scale image to fit canvas
        const scale = Math.min(
          canvas.width / img.width,
          canvas.height / img.height
        )
        img.scale(scale)
        img.set({
          left: canvas.width / 2,
          top: canvas.height / 2,
          originX: 'center',
          originY: 'center',
          selectable: false,
          evented: false
        })
        canvas.add(img)
        canvas.sendToBack(img)
      }).catch(() => {
        // If image fails to load, create a placeholder
        const rect = new fabric.Rect({
          left: 20,
          top: 20,
          width: 560,
          height: 360,
          fill: '#f8f9fa',
          stroke: '#dee2e6',
          strokeWidth: 2,
          selectable: false,
          evented: false
        })
        canvas.add(rect)
        canvas.sendToBack(rect)
      })

      // Add photo area indicator
      if (template.photoArea) {
        const photoRect = new fabric.Rect({
          left: template.photoArea.x,
          top: template.photoArea.y,
          width: template.photoArea.width,
          height: template.photoArea.height,
          fill: 'rgba(59, 130, 246, 0.1)',
          stroke: '#3b82f6',
          strokeWidth: 2,
          strokeDashArray: [5, 5],
          selectable: false,
          evented: false
        })
        canvas.add(photoRect)
      }
    }

    return () => {
      canvas.dispose()
    }
  }, [template, setFabricCanvas])

  useEffect(() => {
    if (!fabricCanvasRef.current || !userPhoto) return

    const canvas = fabricCanvasRef.current

    // Remove existing image if any
    const existingImage = canvas.getObjects().find(obj => obj.userPhoto === true)
    if (existingImage) {
      canvas.remove(existingImage)
    }

    // Add new user photo
    fabric.Image.fromURL(userPhoto, (img) => {
      // Set initial position and size based on template or defaults
      const initialX = template?.photoArea?.x || 50
      const initialY = template?.photoArea?.y || 50
      const initialWidth = template?.photoArea?.width || 120
      const initialHeight = template?.photoArea?.height || 150

      // Scale image to fit the photo area
      const scale = Math.min(
        initialWidth / img.width,
        initialHeight / img.height
      )
      
      img.scale(scale)
      img.set({
        left: initialX,
        top: initialY,
        selectable: true,
        evented: true,
        hasControls: true,
        hasBorders: true,
        lockScalingFlip: true,
        userPhoto: true // Mark as user photo
      })

      // Add event listeners for real-time updates
      img.on('moving', function() {
        updatePhotoPosition({
          x: Math.round(this.left),
          y: Math.round(this.top)
        })
      })

      img.on('scaling', function() {
        updatePhotoPosition({
          scale: this.scaleX
        })
      })

      img.on('rotating', function() {
        updatePhotoPosition({
          rotation: this.angle
        })
      })

      canvas.add(img)
      setFabricImage(img)
      canvas.setActiveObject(img)
      canvas.renderAll()
    })

  }, [userPhoto, template, updatePhotoPosition, setFabricImage])

  // Add text fields to canvas
  useEffect(() => {
    if (!fabricCanvasRef.current || !template) return

    const canvas = fabricCanvasRef.current

    // Remove existing text objects
    canvas.getObjects().forEach(obj => {
      if (obj.isTextField === true) {
        canvas.remove(obj)
      }
    })

    // Add text fields
    template.textFields.forEach((field) => {
      const text = new fabric.Text(textFields[field.id] || field.defaultValue, {
        left: field.x,
        top: field.y,
        fontSize: field.fontSize,
        fontWeight: field.fontWeight,
        fill: field.color,
        fontFamily: field.fontFamily || 'serif',
        selectable: false,
        evented: false,
        isTextField: true
      })
      canvas.add(text)
    })

    canvas.renderAll()
  }, [template, textFields])

  return (
    <div className="flex flex-1 items-center justify-center bg-muted p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex h-full max-h-[600px] w-full max-w-[600px] items-center justify-center rounded-sm border-2 border-border bg-background shadow-lg overflow-hidden"
      >
        {!template ? (
          <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="h-32 w-32 rounded-sm border-2 border-dashed border-border flex items-center justify-center"
            >
              <svg className="h-12 w-12 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </motion.div>
            <div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Your Canvas</h3>
              <p className="text-sm text-muted-foreground">Choose a template and upload a photo to get started</p>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center">
            <canvas ref={canvasRef} />
          </div>
        )}
      </motion.div>
    </div>
  )
}
