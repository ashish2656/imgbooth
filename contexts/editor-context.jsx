"use client"

import { createContext, useContext, useState, useCallback, useRef } from "react"

const EditorContext = createContext()

export function useEditor() {
  const context = useContext(EditorContext)
  if (!context) {
    throw new Error("useEditor must be used within EditorProvider")
  }
  return context
}

export function EditorProvider({ children }) {
  const [template, setTemplate] = useState(null)
  const [userPhoto, setUserPhoto] = useState(null)
  const [textFields, setTextFields] = useState({})
  const [photoPosition, setPhotoPosition] = useState({ x: 0, y: 0, scale: 1, scaleX: 1, scaleY: 1, rotation: 0 })
  const [activeTool, setActiveTool] = useState("upload")
  const fabricCanvasRef = useRef(null)
  const fabricImageRef = useRef(null)

  const updateTextField = useCallback((fieldId, value) => {
    setTextFields(prev => ({ ...prev, [fieldId]: value }))
  }, [])

  const updatePhotoPosition = useCallback((position) => {
    setPhotoPosition(prev => ({ ...prev, ...position }))
    
    // Update Fabric.js image if it exists
    if (fabricImageRef.current) {
      const img = fabricImageRef.current
      if (position.x !== undefined) img.set('left', position.x)
      if (position.y !== undefined) img.set('top', position.y)
      if (position.scale !== undefined) img.set('scaleX', position.scale)
      if (position.scale !== undefined) img.set('scaleY', position.scale)
      if (position.rotation !== undefined) img.set('angle', position.rotation)
      
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.renderAll()
      }
    }
  }, [])

  const setFabricCanvas = useCallback((canvas) => {
    fabricCanvasRef.current = canvas
  }, [])

  const setFabricImage = useCallback((image) => {
    fabricImageRef.current = image
  }, [])

  const resetEditor = useCallback(() => {
    setTemplate(null)
    setUserPhoto(null)
    setTextFields({})
    setPhotoPosition({ x: 0, y: 0, scale: 1, rotation: 0 })
    setActiveTool("upload")
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.clear()
    }
    fabricImageRef.current = null
  }, [])

  const value = {
    template,
    setTemplate,
    userPhoto,
    setUserPhoto,
    textFields,
    updateTextField,
    photoPosition,
    updatePhotoPosition,
    activeTool,
    setActiveTool,
    resetEditor,
    fabricCanvas: fabricCanvasRef.current,
    fabricImage: fabricImageRef.current,
    fabricCanvasRef,
    fabricImageRef,
    setFabricCanvas,
    setFabricImage
  }

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  )
}
