"use client"

import { motion } from "framer-motion"
import React from "react"
import {
  Upload,
  Layout,
  Type,
  Crop,
  Sparkles,
  Sticker,
  Wand2,
  Maximize,
  RotateCw,
  Plus,
  Loader2,
  Trash2
} from "lucide-react"
import { useEditor } from "@/contexts/editor-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import useAutoFit from "@/components/autofit" // Hook Import

// Ensure fabric is available for text creation
import { fabric } from "fabric"
import { toast } from "sonner" 

export default function Sidebar() {
  const { 
    activeTool, 
    setActiveTool, 
    template,
    setTemplate, 
    userPhoto, 
    setUserPhoto, 
    photoPosition, 
    updatePhotoPosition,
    fabricCanvas, // Assuming Context provides the object directly
    fabricCanvasRef // Or the ref
  } = useEditor()

  // 1. Initialize the AI Hook
  const { detectAndFit, isLoading, error } = useAutoFit()
  const [isEnhancing, setIsEnhancing] = React.useState(false)
  const [isAnalyzingText, setIsAnalyzingText] = React.useState(false)
  const [detectedTextColor, setDetectedTextColor] = React.useState(null)

  const tools = [
    { icon: Upload, label: "Upload", tool: "upload" },
    { icon: Layout, label: "Template", tool: "template" },
    { icon: Type, label: "Text", tool: "text", draggable: true },
    { icon: Crop, label: "Position", tool: "crop" },
    { icon: Wand2, label: "Auto Fit", tool: "autofit", badge: "AI" },
  ]

  // --- Helper: Get the active canvas (Ref or Object) ---
  const getCanvas = () => fabricCanvasRef?.current || fabricCanvas

  // --- Update Fabric Object ---
  const handlePhotoAdjustment = (key, value) => {
    const newValue = parseFloat(value)
    
    const canvas = getCanvas()
    if (canvas) {
      const img = canvas.getObjects().find((obj) => obj.userPhoto === true)

      if (img) {
        if (key === "scale") {
          img.set({ scaleX: newValue, scaleY: newValue })
          updatePhotoPosition({ scale: newValue, scaleX: newValue, scaleY: newValue })
        } else if (key === "scaleX") {
          img.set({ scaleX: newValue })
          updatePhotoPosition({ scaleX: newValue })
        } else if (key === "scaleY") {
          img.set({ scaleY: newValue })
          updatePhotoPosition({ scaleY: newValue })
        } else if (key === "rotation") {
          img.rotate(newValue)
          updatePhotoPosition({ rotation: newValue })
        } else if (key === "x") {
          img.set("left", newValue)
          updatePhotoPosition({ x: newValue })
        } else if (key === "y") {
          img.set("top", newValue)
          updatePhotoPosition({ y: newValue })
        }

        img.setCoords()
        canvas.renderAll()
      }
    }
  }

  function handlePhotoUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    setUserPhoto(URL.createObjectURL(file))
  }
  
  // Analyze template text color
  const analyzeTemplateText = async () => {
    if (!template) return
    
    setIsAnalyzingText(true)
    try {
      const templateBlob = await fetch(template.background).then(r => r.blob())
      const formData = new FormData()
      formData.append("template", templateBlob, "template.png")
      
      const response = await fetch("/api/analyze-text", {
        method: "POST",
        body: formData,
      })
      
      if (!response.ok) throw new Error("Text analysis failed")
      
      const data = await response.json()
      setDetectedTextColor(data.color)
      toast.success(`✨ Detected text color: ${data.color}`)
      return data.color
    } catch (err) {
      console.error(err)
      toast.error("Failed to analyze text color")
      return null
    } finally {
      setIsAnalyzingText(false)
    }
  }

  function manualReset() {
    const canvas = getCanvas()
    if (!canvas) return
    
    const img = canvas.getObjects().find(obj => obj.userPhoto === true)
    if (img) {
        const center = canvas.getCenter()
        handlePhotoAdjustment("x", center.left)
        handlePhotoAdjustment("y", center.top)
        handlePhotoAdjustment("scale", 0.5)
        handlePhotoAdjustment("rotation", 0)
    }
  }

  const addText = (textType, color = null) => {
    const canvas = getCanvas()
    if (!canvas) return
    
    let fontSize = 20
    let fontWeight = 'normal'
    let textContent = "Add Text"

    if (textType === 'heading') {
        fontSize = 32; fontWeight = 'bold'; textContent = "Heading"
    } else if (textType === 'subheading') {
        fontSize = 24; fontWeight = '600'; textContent = "Subheading"
    }
    
    const fillColor = color || detectedTextColor || "#000000" // Use passed color, detected color, or default
    
    const text = new fabric.IText(textContent, {
        left: canvas.width / 2,
        top: canvas.height / 2,
        originX: 'center',
        originY: 'center',
        fontSize: fontSize,
        fontWeight: fontWeight,
        fill: fillColor,
        fontFamily: "Arial",
    })

    canvas.add(text)
    canvas.setActiveObject(text)
    canvas.renderAll()
  }

  return (
    <div className="flex h-screen">
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 border-r border-border bg-sidebar p-4 overflow-y-auto"
      >
        <h2 className="text-sm font-semibold mb-4">Tools</h2>

        {/* Navigation */}
        <div className="flex flex-col gap-2 mb-6">
          {tools.map((tool) => {
            const isActive = activeTool === tool.tool
            return (
              <motion.button
                key={tool.label}
                draggable={tool.draggable}
                onDragStart={(e) => {
                  if (tool.tool === "text") e.dataTransfer.setData("application/editor-item", JSON.stringify({ type: "text" }))
                }}
                onClick={() => setActiveTool(tool.tool)}
                className={`flex items-center gap-3 rounded-sm px-4 py-3 text-sm font-medium transition-colors
                  ${isActive ? "bg-primary text-primary-foreground" : "border bg-background hover:bg-sidebar-accent"}`}
              >
                <tool.icon className="h-4 w-4" />
                <span className="flex-1 text-left">{tool.label}</span>
                {tool.badge && <span className="rounded-sm bg-primary px-2 py-0.5 text-xs text-primary-foreground">{tool.badge}</span>}
              </motion.button>
            )
          })}
        </div>

        {/* PANELS */}
        {activeTool === "upload" && (
          <div className="space-y-4">
            <Label>Upload Photo</Label>
            <Input type="file" accept="image/*" onChange={handlePhotoUpload} />
            {userPhoto && (
              <>
                <img src={userPhoto} className="w-full h-32 object-cover border rounded" alt="Preview" />
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    const canvas = getCanvas()
                    if (canvas) {
                      const img = canvas.getObjects().find(obj => obj.userPhoto)
                      if (img) {
                        canvas.remove(img)
                        canvas.renderAll()
                      }
                    }
                    setUserPhoto(null)
                    updatePhotoPosition({ x: 0, y: 0, scale: 1, scaleX: 1, scaleY: 1, rotation: 0 })
                    toast.success("Photo deleted")
                  }}
                >
                  <Trash2 className="w-4 h-4 mr-2" /> Delete Photo
                </Button>
              </>
            )}
          </div>
        )}

        {activeTool === "template" && (
             <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Select a template background.</p>
                <Input type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                        const url = URL.createObjectURL(file)
                        setTemplate({ 
                          background: url, 
                          id: Date.now(),
                          textFields: [],
                          photoArea: { x: 50, y: 50, width: 200, height: 200 } 
                        })
                    }
                }} />
             </div>
        )}

        {activeTool === "crop" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="flex items-center gap-2"><Maximize className="w-3 h-3"/> Zoom</Label>
                <span className="text-xs text-muted-foreground">{Number(photoPosition.scale).toFixed(2)}x</span>
              </div>
              <input 
                type="range" min="0.1" max="3" step="0.05"
                value={photoPosition.scale}
                onChange={(e) => handlePhotoAdjustment("scale", e.target.value)}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="text-xs">Width Stretch</Label>
                <span className="text-xs text-muted-foreground">{Number(photoPosition.scaleX ?? photoPosition.scale).toFixed(2)}x</span>
              </div>
              <input 
                type="range" min="0.1" max="3" step="0.05"
                value={photoPosition.scaleX ?? photoPosition.scale}
                onChange={(e) => handlePhotoAdjustment("scaleX", e.target.value)}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="text-xs">Height Stretch</Label>
                <span className="text-xs text-muted-foreground">{Number(photoPosition.scaleY ?? photoPosition.scale).toFixed(2)}x</span>
              </div>
              <input 
                type="range" min="0.1" max="3" step="0.05"
                value={photoPosition.scaleY ?? photoPosition.scale}
                onChange={(e) => handlePhotoAdjustment("scaleY", e.target.value)}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            
            {/* ... other crop controls ... */}
             <Button variant="outline" size="sm" onClick={manualReset} className="w-full mt-2">
                Reset Position
             </Button>
          </div>
        )}

        {/* AUTO FIT PANEL */}
        {activeTool === "autofit" && (
            <div className="text-center space-y-4 animate-in fade-in slide-in-from-left-4">
                <div className="p-4 border border-dashed rounded-md bg-muted/50">
                    <Wand2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm font-medium">AI Face Positioning</p>
                    <p className="text-xs text-muted-foreground mt-1">
                        Automatically detect and center the face in the template frame.
                    </p>
                </div>
                
                {error && (
                    <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                        <p className="text-xs text-destructive">{error}</p>
                    </div>
                )}
                
                <div className="space-y-2">
                    <Button 
                        onClick={detectAndFit} 
                        disabled={isLoading || !userPhoto || isEnhancing} 
                        className="w-full" 
                        size="lg"
                        variant="default"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Detecting Position...
                            </>
                        ) : (
                            <>
                                <Wand2 className="h-4 w-4 mr-2" />
                                Auto Fit Position
                            </>
                        )}
                    </Button>

                    <Button 
                        onClick={async () => {
                            if (!userPhoto) return
                            setIsEnhancing(true)
                            try {
                                const photoBlob = await fetch(userPhoto).then(r => r.blob())
                                const formData = new FormData()
                                formData.append("photo", photoBlob, "photo.png")
                                formData.append("width", "400")
                                formData.append("height", "400")

                                const response = await fetch("http://localhost:8001/enhance", {
                                    method: "POST",
                                    body: formData,
                                })

                                if (!response.ok) throw new Error("Enhancement failed")

                                const blob = await response.blob()
                                const enhancedUrl = URL.createObjectURL(blob)
                                setUserPhoto(enhancedUrl)
                                toast.success("✨ Photo enhanced with AI!")
                            } catch (err) {
                                console.error(err)
                                toast.error("Failed to enhance photo")
                            } finally {
                                setIsEnhancing(false)
                            }
                        }} 
                        disabled={isEnhancing || !userPhoto || isLoading} 
                        className="w-full" 
                        size="lg"
                        variant="outline"
                    >
                        {isEnhancing ? (
                            <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Enhancing Face...
                            </>
                        ) : (
                            <>
                                <Sparkles className="h-4 w-4 mr-2" />
                                AI Face Enhancement
                            </>
                        )}
                    </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-2">
                    💡 Use Enhancement first for best results
                </p>
            </div>
        )}

        {activeTool === "text" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-left-4">
                <Label>Add Text Layer</Label>
                
                {template && (
                  <Button 
                    variant="outline" 
                    onClick={analyzeTemplateText}
                    disabled={isAnalyzingText}
                    className="w-full mb-2"
                  >
                    {isAnalyzingText ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Detect Template Color
                      </>
                    )}
                  </Button>
                )}
                
                {detectedTextColor && (
                  <div className="p-2 bg-muted rounded flex items-center gap-2">
                    <div 
                      className="w-6 h-6 rounded border" 
                      style={{ backgroundColor: detectedTextColor }}
                    />
                    <span className="text-xs">{detectedTextColor}</span>
                  </div>
                )}
                
                <div className="grid grid-cols-1 gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => addText('heading', detectedTextColor)} 
                      className="justify-start"
                    >
                        <Plus className="w-4 h-4 mr-2"/> Heading
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => addText('subheading', detectedTextColor)} 
                      className="justify-start"
                    >
                        <Plus className="w-4 h-4 mr-2"/> Subheading
                    </Button>
                </div>
            </div>
        )}
      </motion.aside>
    </div>
  )
}