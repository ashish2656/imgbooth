"use client"

import { createContext, useContext, useState, useCallback, useRef } from "react"
import { toast } from "sonner"

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

  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isHistoryAction, setIsHistoryAction] = useState(false)

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



  const addToHistory = useCallback((canvas) => {
    if (!canvas) return
    
    // Save current state based on what's important (objects, background)
    // We filter out 'selectable: false' if we only want to track user changes, 
    // but usually saving the whole JSON is safer.
    const json = canvas.toJSON(['id', 'locked', 'movementLimits', 'isTemplateBackground', 'userPhoto', 'originalWidth', 'originalHeight', 'templateScale'])
    
    setHistory(prev => {
      // If we are in the middle of history, discard future states
      const newHistory = prev.slice(0, historyIndex + 1)
      newHistory.push(json)
      // Limit history size if needed (e.g., 50 states)
      if (newHistory.length > 50) newHistory.shift()
      return newHistory
    })
    
    setHistoryIndex(prev => {
      const newIndex = prev + 1
      // If we shifted history, index stays at max-1
      return newIndex >= 50 ? 49 : newIndex
    })
  }, [historyIndex])

  const loadState = useCallback((state) => {
    if (!fabricCanvasRef.current || !state) return
    
    setIsHistoryAction(true) // Prevent triggering history save during load
    
    fabricCanvasRef.current.loadFromJSON(state, () => {
      fabricCanvasRef.current.renderAll()
      
      // Update internal state references like userPhoto position
      const img = fabricCanvasRef.current.getObjects().find(obj => obj.userPhoto)
      if (img) {
        fabricImageRef.current = img
        // Sync the React state with the restored canvas object
        setPhotoPosition({
            x: img.left,
            y: img.top,
            scale: img.scaleX, // Assuming uniform for simplicity or primary scale
            scaleX: img.scaleX,
            scaleY: img.scaleY,
            rotation: img.angle
        })
      } else {
        fabricImageRef.current = null
        setUserPhoto(null)
      }
      
      // We need to re-attach controls to userPhoto if it exists, as loadFromJSON might lose custom controls
      // But standard controls should persist if not custom classes.
      // If we have custom controls logic in canvas-area, it might need to re-run or we do it here.
      // For now, let's assume basic properties restore is enough, 
      // but ideally canvas-area should handle "object:added" to re-apply logic?
      // Or we just re-apply the custom controls here if needed.
       if (img) {
          // Re-apply custom controls logic similar to canvas-area
          // Note context doesn't import fabric, so we rely on what's available
          // or we trust standard behavior. 
       }
       
      setIsHistoryAction(false)
    })
  }, [])

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      loadState(history[newIndex])
    }
  }, [history, historyIndex, loadState])

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      loadState(history[newIndex])
    }
  }, [history, historyIndex, loadState])

  // --- Persistence Logic ---
  const saveProject = useCallback(async (name = "Untitled Project") => {
    if (!fabricCanvasRef.current) return null
    
    try {
        const canvas = fabricCanvasRef.current
        // 1. Get Canvas JSON
        const json = canvas.toJSON(['id', 'locked', 'movementLimits', 'isTemplateBackground', 'userPhoto', 'originalWidth', 'originalHeight', 'templateScale'])
        
        // 2. Generate Preview Image
        // Use a multiplier for better quality, but keep it performant
        const dataURL = canvas.toDataURL({
            format: 'png',
            quality: 0.8,
            multiplier: 0.5 // Smaller preview
        })
        
        // 3. Save to DB
        // We dynamically import to avoid SSR issues with idb if any
        const { saveProjectToDB } = await import('@/lib/db')
        const id = await saveProjectToDB({
            name,
            preview: dataURL,
            canvasState: json,
            template, // Save template metadata if needed for quick reload
            lastModified: Date.now()
        })
        
        toast.success("Project saved successfully!")
        return id
    } catch (err) {
        console.error("Failed to save project:", err)
        toast.error("Failed to save project")
        return null
    }
  }, [template])
  
  const loadProject = useCallback(async (id) => {
      try {
          const { getProjectById } = await import('@/lib/db')
          const project = await getProjectById(id)
          if (!project) throw new Error("Project not found")
          
          // Restore Template meta first if needed
          if (project.template) setTemplate(project.template)
          
          // Load Canvas
          loadState(project.canvasState)
          
          toast.success(`Loaded "${project.name}"`)
          return true
      } catch (err) {
          console.error("Failed to load project:", err)
          toast.error("Failed to load project")
          return false
      }
  }, [loadState])

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
    setFabricImage,
    undo,
    redo,
    canUndo: historyIndex > 0,
    canRedo: historyIndex < history.length - 1,
    addToHistory,
    isHistoryAction,
    saveProject,
    loadProject
  }

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  )
}

