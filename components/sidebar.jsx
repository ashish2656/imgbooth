"use client"
import { Plus } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { fabric } from "fabric" // Fabric v5 import
import {
  Upload,
  Layout,
  Type,
  Crop,
  Sparkles,
  Sticker,
  Wand2,
  Move,
  RotateCw,
  Maximize
} from "lucide-react"
import { useEditor } from "@/contexts/editor-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// If you don't have a Slider component, standard <input type="range"> is used below
// import { Slider } from "@/components/ui/slider" 

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
    fabricCanvasRef,
  } = useEditor()

  const tools = [
    { icon: Upload, label: "Upload Photo", tool: "upload" },
    { icon: Layout, label: "Choose Template", tool: "template" },
    { icon: Type, label: "Text", tool: "text", draggable: true },
    { icon: Crop, label: "Position Photo", tool: "crop" }, // This is the one we are fixing
    { icon: Sparkles, label: "Filters", tool: "filters" },
    { icon: Sticker, label: "Sticker", tool: "sticker", draggable: true },
    { icon: Wand2, label: "Auto Fit", tool: "autofit", badge: "AI" },
  ]

  // --- CORE LOGIC: Update Fabric Object from Sidebar ---
  const handlePhotoAdjustment = (key, value) => {
    // 1. Update React State (so sliders don't jump)
    const newValue = parseFloat(value)
    updatePhotoPosition({ [key]: newValue })

    // 2. Update Canvas Immediately
    if (fabricCanvasRef.current) {
      const canvas = fabricCanvasRef.current
      // Find the object specifically tagged as 'userPhoto'
      const img = canvas.getObjects().find((obj) => obj.userPhoto === true)

      if (img) {
        if (key === "scale") {
          img.scale(newValue)
        } else if (key === "rotation") {
          img.rotate(newValue)
        } else if (key === "x") {
          img.set("left", newValue)
        } else if (key === "y") {
          img.set("top", newValue)
        }

        img.setCoords() // Recalculate hit box
        canvas.renderAll()
      }
    }
  }

  // --- Helper: File Uploads ---
  function handlePhotoUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    setUserPhoto(URL.createObjectURL(file))
  }

  // --- Helper: Auto Fit Logic ---
  function autoFit() {
    if (!fabricCanvasRef.current) return
    const canvas = fabricCanvasRef.current
    const img = canvas.getObjects().find(obj => obj.userPhoto === true)
    
    if (img) {
        // Reset to center
        const center = canvas.getCenter()
        handlePhotoAdjustment("x", center.left)
        handlePhotoAdjustment("y", center.top)
        handlePhotoAdjustment("scale", 0.5)
        handlePhotoAdjustment("rotation", 0)
    }
  }
// --- Function to Add Text to Canvas ---
  const addText = (textType) => {
    if (!fabricCanvasRef.current) return
    const canvas = fabricCanvasRef.current
    
    let fontSize = 20
    let fontWeight = 'normal'
    let textContent = "Add Text"

    if (textType === 'heading') {
        fontSize = 32; fontWeight = 'bold'; textContent = "Heading"
    } else if (textType === 'subheading') {
        fontSize = 24; fontWeight = '600'; textContent = "Subheading"
    }

    // Create the text object
    const text = new fabric.IText(textContent, {
        left: canvas.width / 2,
        top: canvas.height / 2,
        originX: 'center',
        originY: 'center',
        fontSize: fontSize,
        fontWeight: fontWeight,
        fill: "#000000",
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

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-2 mb-6">
          {tools.map((tool, index) => {
            const isActive = activeTool === tool.tool
            return (
              <motion.button
                key={tool.label}
                draggable={tool.draggable}
                // Drag start logic for text/stickers
                onDragStart={(e) => {
                  if (tool.tool === "text") e.dataTransfer.setData("application/editor-item", JSON.stringify({ type: "text" }))
                  if (tool.tool === "sticker") e.dataTransfer.setData("application/editor-item", JSON.stringify({ type: "sticker" }))
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

        {/* --- DYNAMIC TOOL PANELS --- */}

        {/* 1. UPLOAD PANEL */}
        {activeTool === "upload" && (
          <div className="space-y-4">
            <Label>Upload Photo</Label>
            <Input type="file" accept="image/*" onChange={handlePhotoUpload} />
            {userPhoto && <img src={userPhoto} className="w-full h-32 object-cover border rounded" alt="Preview" />}
          </div>
        )}

        {/* 2. TEMPLATE PANEL */}
        {activeTool === "template" && (
             <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Select a template from the dashboard or upload one here.</p>
                <Input type="file" accept="image/*" onChange={(e) => {
                    const file = e.target.files[0]
                    if (file) {
                        const url = URL.createObjectURL(file)
                        setTemplate({ background: url, id: Date.now() })
                        setActiveTool("text")
                    }
                }} />
             </div>
        )}

        {/* 3. POSITION / CROP PANEL (FIXED) */}
        {activeTool === "crop" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4">
            
            {/* Zoom Control */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="flex items-center gap-2"><Maximize className="w-3 h-3"/> Zoom</Label>
                <span className="text-xs text-muted-foreground">{Number(photoPosition.scale).toFixed(2)}x</span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="3" 
                step="0.05"
                value={photoPosition.scale}
                onChange={(e) => handlePhotoAdjustment("scale", e.target.value)}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Rotation Control */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="flex items-center gap-2"><RotateCw className="w-3 h-3"/> Rotation</Label>
                <span className="text-xs text-muted-foreground">{Math.round(photoPosition.rotation)}°</span>
              </div>
              <input 
                type="range" 
                min="-180" 
                max="180" 
                step="1"
                value={photoPosition.rotation}
                onChange={(e) => handlePhotoAdjustment("rotation", e.target.value)}
                className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Position X/Y Controls */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-xs">Position X</Label>
                <Input 
                  type="number" 
                  value={Math.round(photoPosition.x)} 
                  onChange={(e) => handlePhotoAdjustment("x", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs">Position Y</Label>
                <Input 
                  type="number" 
                  value={Math.round(photoPosition.y)} 
                  onChange={(e) => handlePhotoAdjustment("y", e.target.value)}
                />
              </div>
            </div>

             <Button variant="outline" size="sm" onClick={autoFit} className="w-full mt-2">
                Reset Position
             </Button>
          </div>
        )}

        {/* 4. AUTO FIT PANEL */}
        {activeTool === "autofit" && (
            <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">Automatically center and scale your photo.</p>
                <Button onClick={autoFit} className="w-full">
                    <Wand2 className="h-4 w-4 mr-2" />
                    Auto Fit
                </Button>
            </div>
        )}
        {/* TEXT TOOL PANEL */}
        {activeTool === "text" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-left-4">
                <Label>Add Text Layer</Label>
                <div className="grid grid-cols-1 gap-2">
                    <Button variant="outline" onClick={() => addText('heading')} className="justify-start h-12 text-lg font-bold">
                        <Plus className="w-4 h-4 mr-2"/> Add Heading
                    </Button>
                    <Button variant="outline" onClick={() => addText('subheading')} className="justify-start h-10 font-semibold">
                        <Plus className="w-4 h-4 mr-2"/> Add Subheading
                    </Button>
                    <Button variant="outline" onClick={() => addText('body')} className="justify-start">
                        <Plus className="w-4 h-4 mr-2"/> Add Body Text
                    </Button>
                </div>
                <div className="p-3 bg-muted rounded-md text-xs text-muted-foreground mt-4">
                    <p className="font-semibold mb-1">How to edit:</p>
                    <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Double-click</strong> text on canvas to type.</li>
                        <li>Drag corners to resize.</li>
                        <li>Drag the object to move.</li>
                    </ul>
                </div>
            </div>
        )}

      </motion.aside>
    </div>
  )
}