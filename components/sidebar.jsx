"use client"

import { motion, AnimatePresence } from "framer-motion"
import React from "react"
import {
  Upload,
  Layout,
  Type,
  Crop,
  Sparkles,
  Wand2,
  Maximize,
  Loader2,
  Trash2,
  Plus,
  Image as ImageIcon,
  Settings2
} from "lucide-react"
import { useEditor } from "@/contexts/editor-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider" // Need to check if this exists, otherwise use input range with better style
import useAutoFit from "@/components/autofit"
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
    fabricCanvasRef 
  } = useEditor()

  const { detectAndFit, isLoading, error } = useAutoFit()
  const [isEnhancing, setIsEnhancing] = React.useState(false)
  const [isAnalyzingText, setIsAnalyzingText] = React.useState(false)
  const [detectedTextColor, setDetectedTextColor] = React.useState(null)

  const tools = [
    { icon: Upload, label: "Upload", tool: "upload" },
    { icon: Layout, label: "Template", tool: "template" },
    { icon: Type, label: "Text", tool: "text" },
    { icon: Crop, label: "Adjust", tool: "crop" },
    { icon: Wand2, label: "Magic", tool: "autofit", badge: "AI" },
  ]

  const getCanvas = () => fabricCanvasRef?.current

  const handlePhotoAdjustment = (key, value) => {
    const newValue = parseFloat(value)
    const canvas = getCanvas()
    if (!canvas) return

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
        }
        img.setCoords()
        canvas.renderAll()
    }
  }

  function handlePhotoUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    setUserPhoto(URL.createObjectURL(file))
  }

  const analyzeTemplateText = async () => {
    if (!template) return
    setIsAnalyzingText(true)
    try {
      const templateBlob = await fetch(template.background).then(r => r.blob())
      const formData = new FormData()
      formData.append("template", templateBlob, "template.png")
      
      const response = await fetch("/api/analyze-text", { method: "POST", body: formData })
      if (!response.ok) throw new Error("Text analysis failed")
      
      const data = await response.json()
      setDetectedTextColor(data.color)
      toast.success(`✨ Detected text color: ${data.color}`)
    } catch (err) {
      console.error(err)
      toast.error("Failed to analyze text color")
    } finally {
      setIsAnalyzingText(false)
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
    
    const fillColor = color || detectedTextColor || "#000000"
    
    const text = new fabric.IText(textContent, {
        left: canvas.width / 2,
        top: canvas.height / 2,
        originX: 'center',
        originY: 'center',
        fontSize: fontSize,
        fontWeight: fontWeight,
        fill: fillColor,
        fontFamily: "Geist, Arial",
    })

    canvas.add(text)
    canvas.setActiveObject(text)
    canvas.renderAll()
  }

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="h-full w-[340px] border-r border-border bg-sidebar/50 backdrop-blur-xl flex flex-col shadow-xl z-20"
    >
      {/* Header */}
      <div className="p-4 border-b border-border/50">
        <h2 className="font-semibold text-sm tracking-tight flex items-center gap-2">
            <Settings2 className="w-4 h-4" /> Editor Tools
        </h2>
      </div>

      <div className="flex flex-1 overflow-hidden">
          {/* Icon Navigation (Left Strip) */}
          <nav className="w-16 flex flex-col items-center py-4 gap-3 border-r border-border/50 bg-background/50">
            {tools.map((tool) => {
              const isActive = activeTool === tool.tool
              return (
                <button
                  key={tool.label}
                  onClick={() => setActiveTool(tool.tool)}
                  className={`relative p-3 rounded-xl transition-all duration-200 group ${
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25" 
                      : "hover:bg-muted hover:text-foreground"
                  }`}
                  title={tool.label}
                >
                  <tool.icon className="w-5 h-5" />
                  {tool.badge && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-500 text-[8px] font-bold text-white shadow-sm ring-2 ring-background">
                        AI
                    </span>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Active Tool Panel (Right Area) */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
             <AnimatePresence mode="wait">
                <motion.div
                    key={activeTool}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                >
                    {/* TITLE */}
                    <div className="mb-6">
                        <h3 className="font-medium text-lg text-foreground mb-1">
                            {tools.find(t => t.tool === activeTool)?.label}
                        </h3>
                        <p className="text-xs">
                            Configure your workspace settings.
                        </p>
                    </div>

                    {/* PANELS */}
                    {activeTool === "upload" && (
                        <div className="space-y-6">
                             <div className="p-4 border-2 border-dashed border-border rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors text-center cursor-pointer relative">
                                <input type="file" accept="image/*" onChange={handlePhotoUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                                <Upload className="w-8 h-8 mx-auto  mb-2" />
                                <p className="text-sm font-medium">Click to Upload Photo</p>
                                <p className="text-xs ">JPG, PNG up to 5MB</p>
                             </div>

                             {userPhoto && (
                                <div className="space-y-3 p-3 bg-muted/30 rounded-lg border border-border/50">
                                    <Label className="text-xs font-medium">Current Photo</Label>
                                    <div className="aspect-video w-full rounded-md overflow-hidden bg-background border border-border">
                                        <img src={userPhoto} className="w-full h-full object-cover" alt="User upload" />
                                    </div>
                                    <Button variant="destructive" size="sm" className="w-full" onClick={() => setUserPhoto(null)}>
                                        <Trash2 className="w-3 h-3 mr-2" /> Remove Image
                                    </Button>
                                </div>
                             )}
                        </div>
                    )}

                    {activeTool === "template" && (
                        <div className="space-y-6">
                             <div className="p-4 border-2 border-dashed border-border rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors text-center cursor-pointer relative">
                                <input type="file" accept="image/*" onChange={(e) => {
                                    const file = e.target.files[0]
                                    if(file) {
                                      setTemplate({ background: URL.createObjectURL(file), id: Date.now() })
                                    }
                                }} className="absolute inset-0 opacity-0 cursor-pointer" />
                                <Layout className="w-8 h-8 mx-auto  mb-2" />
                                <p className="text-sm font-medium">Upload Template</p>
                             </div>
                             {template && (
                                <div className="aspect-video w-full rounded-md overflow-hidden bg-background border border-border">
                                    <img src={template.background} className="w-full h-full object-cover" alt="Template" />
                                </div>
                             )}
                        </div>
                    )}

                    {activeTool === "crop" && (
                         <div className="space-y-6">
                            <ControlGroup 
                                label="Zoom Scale" 
                                value={photoPosition.scale} 
                                onChange={(v) => handlePhotoAdjustment("scale", v)} 
                                min={0.1} max={3} step={0.05}
                            />
                            <ControlGroup 
                                label="Horizontal Stretch" 
                                value={photoPosition.scaleX ?? photoPosition.scale} 
                                onChange={(v) => handlePhotoAdjustment("scaleX", v)} 
                                min={0.1} max={3} step={0.05}
                            />
                            <ControlGroup 
                                label="Vertical Stretch" 
                                value={photoPosition.scaleY ?? photoPosition.scale} 
                                onChange={(v) => handlePhotoAdjustment("scaleY", v)} 
                                min={0.1} max={3} step={0.05}
                            />
                         </div>
                    )}

                    {activeTool === "autofit" && (
                        <div className="space-y-6">
                             <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                                <h4 className="font-medium text-primary flex items-center gap-2 mb-2">
                                    <Wand2 className="w-4 h-4" /> AI Auto-Format
                                </h4>
                                <p className="text-xs  mb-4">
                                    Automatically detect faces and align text colors to match your template.
                                </p>
                                <Button 
                                    className="w-full shadow-lg shadow-primary/20" 
                                    onClick={detectAndFit} 
                                    disabled={isLoading || !userPhoto}
                                >
                                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : "Auto-Fit Layout"}
                                </Button>
                             </div>

                             <Button 
                                variant="outline" 
                                className="w-full"
                                onClick={() => {
                                    if(userPhoto) setIsEnhancing(true)
                                      // Enhancement logic...
                                }}
                                disabled={isEnhancing || !userPhoto}
                             >
                                <Sparkles className="w-4 h-4 mr-2" /> Enhance Quality (Beta)
                             </Button>
                        </div>
                    )}

                     {activeTool === "text" && (
                        <div className="space-y-4">
                             <Button 
                                variant="outline" 
                                className="w-full justify-start h-12"
                                onClick={() => addText('heading')}
                             >
                                <Type className="w-5 h-5 mr-3 " />
                                <div className="flex flex-col items-start">
                                    <span className="text-sm font-medium">Add Heading</span>
                                    <span className="text-[10px] ">Large, bold text</span>
                                </div>
                             </Button>
                             
                              <Button 
                                variant="outline" 
                                className="w-full justify-start h-12"
                                onClick={() => addText('subheading')}
                             >
                                <Type className="w-5 h-5 mr-3 " />
                                <div className="flex flex-col items-start">
                                    <span className="text-sm font-medium">Add Subtext</span>
                                    <span className="text-[10px] ">Medium size text</span>
                                </div>
                             </Button>

                             {template && (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className="w-full text-xs "
                                    onClick={analyzeTemplateText}
                                    disabled={isAnalyzingText}
                                >
                                    {isAnalyzingText ? <Loader2 className="w-3 h-3 animate-spin mr-2"/> : <Sparkles className="w-3 h-3 mr-2"/>}
                                    Match Template Colors
                                </Button>
                             )}
                        </div>
                     )}

                </motion.div>
             </AnimatePresence>
          </div>
      </div>
    </motion.aside>
  )
}

function ControlGroup({ label, value, onChange, min, max, step }) {
    return (
        <div className="space-y-3">
            <div className="flex justify-between items-center">
                <Label className="text-xs font-medium ">{label}</Label>
                <span className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded text-foreground">{Number(value).toFixed(2)}</span>
            </div>
            <input 
                type="range"
                min={min} max={max} step={step}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-1.5 bg-secondary rounded-full appearance-none cursor-pointer accent-primary hover:accent-primary/90 transition-all"
            />
        </div>
    )
}