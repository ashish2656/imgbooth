"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Upload,
  Layout,
  Type,
  Crop,
  Sparkles,
  Sticker,
  Wand2,
  Download,
  RotateCw,
  ZoomIn,
  Move,
} from "lucide-react"
import { useEditor } from "@/contexts/editor-context"
import { certificateTemplates } from "@/data/templates"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

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
    fabricImageRef
  } = useEditor()

  const tools = [
    { icon: Upload, label: "Upload Photo", tool: "upload" },
    { icon: Layout, label: "Choose Template", tool: "template" },
    { icon: Type, label: "Edit Text", tool: "text" },
    { icon: Crop, label: "Position Photo", tool: "crop" },
    { icon: Sparkles, label: "Filters", tool: "filters" },
    { icon: Sticker, label: "Stickers", tool: "stickers" },
    { icon: Wand2, label: "Auto Fit", tool: "autofit", badge: "AI" },
  ]

  function handlePhotoUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    setUserPhoto(URL.createObjectURL(file))
  }

  function handleTemplateSelect(templateData) {
    setTemplate(templateData)
    setActiveTool("text")
  }

  function autoFit() {
    const targetX = template?.photoArea?.x || 0
    const targetY = template?.photoArea?.y || 0
    const targetScale = 1
    const targetRotation = 0

    // Update state
    updatePhotoPosition({
      x: targetX,
      y: targetY,
      scale: targetScale,
      rotation: targetRotation
    })

    // Update Fabric.js image directly if it exists
    if (fabricImageRef.current && fabricCanvasRef.current) {
      const img = fabricImageRef.current
      const canvas = fabricCanvasRef.current
      
      img.set({
        left: targetX,
        top: targetY,
        scaleX: targetScale,
        scaleY: targetScale,
        angle: targetRotation
      })
      
      canvas.setActiveObject(img)
      canvas.renderAll()
    }
  }

  return (
    <div className="flex h-screen">
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 border-r border-border bg-sidebar p-4 overflow-y-auto"
      >
        <h2 className="text-sm font-semibold mb-4">Tools</h2>

        <div className="flex flex-col gap-2 mb-6">
          {tools.map((tool, index) => {
            const isActive = activeTool === tool.tool

            return (
              <motion.button
                key={tool.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                onClick={() => setActiveTool(tool.tool)}
                className={`flex items-center gap-3 rounded-sm px-4 py-3 text-sm font-medium transition-colors
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "border bg-background hover:bg-sidebar-accent"
                  }`}
              >
                <tool.icon className="h-4 w-4" />
                <span className="flex-1">{tool.label}</span>

                {tool.badge && (
                  <span className="rounded-sm bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                    {tool.badge}
                  </span>
                )}
              </motion.button>
            )
          })}
        </div>

        <div className="space-y-6">
          {activeTool === "upload" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Label htmlFor="photo-upload" className="text-sm font-medium">
                Upload Photo
              </Label>
              <Input
                id="photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="cursor-pointer"
              />
              {userPhoto && (
                <div className="mt-4">
                  <img 
                    src={userPhoto} 
                    alt="Uploaded" 
                    className="w-full h-32 object-cover rounded-sm border"
                  />
                </div>
              )}
            </motion.div>
          )}

          {activeTool === "template" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Label className="text-sm font-medium">Choose Template</Label>
              <div className="space-y-2">
                {certificateTemplates.map((tmpl) => (
                  <button
                    key={tmpl.id}
                    onClick={() => handleTemplateSelect(tmpl)}
                    className={`w-full text-left p-3 rounded-sm border transition-colors ${
                      template?.id === tmpl.id
                        ? "border-primary bg-primary/10"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    <div className="font-medium text-sm">{tmpl.name}</div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {activeTool === "crop" && template && userPhoto && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Label className="text-sm font-medium">Position Photo</Label>
              
              <div className="space-y-3">
                <div>
                  <Label className="text-xs">X Position</Label>
                  <Slider
                    value={[photoPosition.x]}
                    onValueChange={([value]) => updatePhotoPosition({ x: value })}
                    max={400}
                    step={1}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label className="text-xs">Y Position</Label>
                  <Slider
                    value={[photoPosition.y]}
                    onValueChange={([value]) => updatePhotoPosition({ y: value })}
                    max={300}
                    step={1}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label className="text-xs">Scale</Label>
                  <Slider
                    value={[photoPosition.scale]}
                    onValueChange={([value]) => updatePhotoPosition({ scale: value })}
                    min={0.5}
                    max={2}
                    step={0.1}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label className="text-xs">Rotation</Label>
                  <Slider
                    value={[photoPosition.rotation]}
                    onValueChange={([value]) => updatePhotoPosition({ rotation: value })}
                    min={-180}
                    max={180}
                    step={1}
                    className="mt-1"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTool === "autofit" && template && userPhoto && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Button onClick={autoFit} className="w-full">
                <Wand2 className="h-4 w-4 mr-2" />
                Apply Auto Fit
              </Button>
            </motion.div>
          )}

          {activeTool === "filters" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Label className="text-sm font-medium">Filters</Label>
              <p className="text-xs text-muted-foreground">Filter options coming soon...</p>
            </motion.div>
          )}

          {activeTool === "stickers" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <Label className="text-sm font-medium">Stickers & Elements</Label>
              <p className="text-xs text-muted-foreground">Sticker options coming soon...</p>
            </motion.div>
          )}
        </div>
      </motion.aside>
    </div>
  )
}