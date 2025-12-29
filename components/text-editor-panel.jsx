"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useEditor } from "@/contexts/editor-context"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider" // Ensure you have this or use <input type="range">
import { 
  Download, RotateCcw, Trash2, 
  Bold, Italic, Underline, 
  AlignLeft, AlignCenter, AlignRight, Type
} from "lucide-react"

export default function TextEditorPanel() {
  const { template, textFields, updateTextField, resetEditor, fabricCanvasRef } = useEditor()
  
  // Local state to track the currently selected object on canvas
  const [activeObject, setActiveObject] = useState(null)
  
  // Force update UI when object properties change
  const [forceUpdate, setForceUpdate] = useState(0)

  // 1. Listen for Canvas Selection Events
  useEffect(() => {
    if (!fabricCanvasRef.current) return
    const canvas = fabricCanvasRef.current

    const handleSelection = () => {
      const active = canvas.getActiveObject()
      // We only care if it is a Text object (IText, Text, or Textbox)
      if (active && (active.type === 'i-text' || active.type === 'text' || active.type === 'textbox')) {
        setActiveObject(active)
      } else {
        setActiveObject(null)
      }
    }

    const handleClear = () => setActiveObject(null)

    // Listen to Fabric.js events
    canvas.on('selection:created', handleSelection)
    canvas.on('selection:updated', handleSelection)
    canvas.on('selection:cleared', handleClear)
    
    // Cleanup listeners
    return () => {
      canvas.off('selection:created', handleSelection)
      canvas.off('selection:updated', handleSelection)
      canvas.off('selection:cleared', handleClear)
    }
  }, [fabricCanvasRef, forceUpdate])

  // --- Helper: Update Active Object Style ---
  const updateStyle = (key, value) => {
    if (!fabricCanvasRef.current || !activeObject) return
    
    // Special handling for numeric values
    if (key === 'fontSize') value = parseInt(value)
    
    activeObject.set(key, value)
    
    // If we changed text content programmatically, we might need this
    if (key === 'text') {
        // Optional: layout logic if needed
    }

    activeObject.setCoords()
    fabricCanvasRef.current.requestRenderAll()
    setForceUpdate(prev => prev + 1) // Trigger re-render of this panel to show new state
  }

  // --- Helper: Delete Active Object ---
  const deleteSelected = () => {
    if (!fabricCanvasRef.current || !activeObject) return
    fabricCanvasRef.current.remove(activeObject)
    fabricCanvasRef.current.discardActiveObject()
    fabricCanvasRef.current.requestRenderAll()
    setActiveObject(null)
  }

  // --- Helper: Toggle Boolean Styles (Bold, Italic) ---
  const toggleStyle = (key, onValue, offValue) => {
    if (!activeObject) return
    const current = activeObject.get(key)
    const newValue = current === onValue ? offValue : onValue
    updateStyle(key, newValue)
  }

  // --- Export Function ---
  const exportCertificate = () => {
    if (!fabricCanvasRef.current) return
    const dataURL = fabricCanvasRef.current.toDataURL({ format: 'png', quality: 1, multiplier: 2 })
    const link = document.createElement('a')
    link.download = 'certificate.png'
    link.href = dataURL
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Safe guard for template fields
  const safeFields = template?.textFields || []

  return (
    <div className="w-80 border-l border-border bg-background flex flex-col h-full shadow-xl z-20">
      
      {/* HEADER */}
      <div className="p-4 border-b border-border bg-muted/30">
        <h2 className="text-sm font-semibold flex items-center gap-2">
          {activeObject ? <><Type className="w-4 h-4"/> Text Properties</> : "Template Fields"}
        </h2>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <AnimatePresence mode="wait">
          
          {/* MODE 1: ACTIVE SELECTION (FORMATTING) */}
          {activeObject ? (
            <motion.div
              key="properties"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Content Edit */}
              <div className="space-y-2">
                <Label>Text Content</Label>
                <textarea
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  rows={3}
                  value={activeObject.text}
                  onChange={(e) => updateStyle('text', e.target.value)}
                />
              </div>

              {/* Font Family & Size */}
              <div className="grid grid-cols-2 gap-3">
                 <div className="space-y-2">
                    <Label>Font Size</Label>
                    <Input 
                        type="number" 
                        value={activeObject.fontSize} 
                        onChange={(e) => updateStyle('fontSize', e.target.value)}
                    />
                 </div>
                 <div className="space-y-2">
                    <Label>Color</Label>
                    <div className="flex gap-2">
                        <input 
                            type="color" 
                            className="h-10 w-10 p-0 border-0 rounded cursor-pointer"
                            value={activeObject.fill}
                            onChange={(e) => updateStyle('fill', e.target.value)}
                        />
                        <Input 
                            value={activeObject.fill} 
                            onChange={(e) => updateStyle('fill', e.target.value)} 
                            className="flex-1 font-mono text-xs"
                        />
                    </div>
                 </div>
              </div>

              {/* Style Toggles */}
              <div className="space-y-2">
                <Label>Style & Alignment</Label>
                <div className="flex flex-wrap gap-2">
                    <Button
                        variant={activeObject.fontWeight === 'bold' ? "default" : "outline"}
                        size="icon" onClick={() => toggleStyle('fontWeight', 'bold', 'normal')}
                    >
                        <Bold className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={activeObject.fontStyle === 'italic' ? "default" : "outline"}
                        size="icon" onClick={() => toggleStyle('fontStyle', 'italic', 'normal')}
                    >
                        <Italic className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={activeObject.underline ? "default" : "outline"}
                        size="icon" onClick={() => toggleStyle('underline', true, false)}
                    >
                        <Underline className="w-4 h-4" />
                    </Button>
                    
                    <div className="w-px h-8 bg-border mx-1"></div>

                    <Button
                        variant={activeObject.textAlign === 'left' ? "default" : "ghost"}
                        size="icon" onClick={() => updateStyle('textAlign', 'left')}
                    >
                        <AlignLeft className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={activeObject.textAlign === 'center' ? "default" : "ghost"}
                        size="icon" onClick={() => updateStyle('textAlign', 'center')}
                    >
                        <AlignCenter className="w-4 h-4" />
                    </Button>
                    <Button
                        variant={activeObject.textAlign === 'right' ? "default" : "ghost"}
                        size="icon" onClick={() => updateStyle('textAlign', 'right')}
                    >
                        <AlignRight className="w-4 h-4" />
                    </Button>
                </div>
              </div>

              {/* Delete Button */}
              <div className="pt-6 border-t">
                <Button variant="destructive" className="w-full" onClick={deleteSelected}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Text Layer
                </Button>
              </div>

            </motion.div>
          ) : (
            
          /* MODE 2: TEMPLATE FORM (DEFAULT) */
            <motion.div
              key="template"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {safeFields.length > 0 ? (
                <>
                  <div className="space-y-4">
                    {safeFields.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <Label htmlFor={field.id} className="text-sm font-medium">
                          {field.label}
                        </Label>
                        <Input
                          id={field.id}
                          value={textFields[field.id] || field.defaultValue}
                          onChange={(e) => updateTextField(field.id, e.target.value)}
                          placeholder={field.defaultValue}
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                    <Type className="w-12 h-12 mx-auto mb-3 opacity-20" />
                    <p className="text-sm">Select a text object on the canvas to edit its properties.</p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* FOOTER ACTIONS */}
      <div className="p-4 border-t border-border space-y-3 bg-background">
        <Button onClick={exportCertificate} className="w-full" size="lg">
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
        <Button variant="ghost" onClick={resetEditor} className="w-full text-muted-foreground hover:text-destructive">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset Canvas
        </Button>
      </div>
    </div>
  )
}