"use client"

import { motion } from "framer-motion"
import { useEditor } from "@/contexts/editor-context"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Download, RotateCcw } from "lucide-react"

export default function TextEditorPanel() {
  const { template, textFields, updateTextField, resetEditor, fabricCanvasRef } = useEditor()

  const exportCertificate = () => {
    if (!fabricCanvasRef.current) {
      alert('Canvas not ready. Please try again.')
      return
    }

    // Export the Fabric.js canvas as PNG
    const dataURL = fabricCanvasRef.current.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 2 // Higher resolution
    })

    // Download the certificate
    const link = document.createElement('a')
    link.download = 'certificate.png'
    link.href = dataURL
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!template) {
    return (
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-80 border-l border-border bg-background p-6"
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="text-muted-foreground">
            <h3 className="text-lg font-semibold mb-2">Text Editor</h3>
            <p className="text-sm">Choose a template to start editing text</p>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-80 border-l border-border bg-background p-6 overflow-y-auto"
    >
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Edit Text</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Customize the text fields for your certificate
          </p>
        </div>

        <div className="space-y-4">
          {template.textFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <Label htmlFor={field.id} className="text-sm font-medium">
                {field.label}
              </Label>
              <Input
                id={field.id}
                value={textFields[field.id] || field.defaultValue}
                onChange={(e) => updateTextField(field.id, e.target.value)}
                placeholder={field.defaultValue}
                className="w-full"
              />
            </div>
          ))}
        </div>

        <div className="space-y-3 pt-6 border-t">
          <Button onClick={exportCertificate} className="w-full">
            <Download className="h-4 w-4 mr-2" />
            Export Certificate
          </Button>
          
          <Button 
            variant="outline" 
            onClick={resetEditor} 
            className="w-full"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset All
          </Button>
        </div>

        <div className="text-xs text-muted-foreground pt-4 border-t">
          <p className="mb-2">Template: {template.name}</p>
          <p>Photo area: {template.photoArea.width}×{template.photoArea.height}px</p>
        </div>
      </div>
    </motion.div>
  )
}
