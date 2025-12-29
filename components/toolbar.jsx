"use client"

import { motion } from "framer-motion"
import { Undo, Redo, Save, Download } from "lucide-react"
import { useEditor } from "@/contexts/editor-context"

export default function Toolbar() {
  const { template, userPhoto, resetEditor, fabricCanvasRef } = useEditor()

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

  const tools = [
    { icon: Undo, label: "Undo", disabled: true },
    { icon: Redo, label: "Redo", disabled: true },
    { icon: Save, label: "Save", disabled: true },
    { icon: Download, label: "Export", disabled: !template, onClick: exportCertificate },
  ]

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between border-b border-border bg-card px-4 py-3"
    >
      <div className="flex items-center gap-2">
        {tools.map((tool, index) => (
          <motion.button
            key={tool.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: tool.disabled ? 1 : 1.05 }}
            whileTap={{ scale: tool.disabled ? 1 : 0.95 }}
            onClick={tool.onClick}
            disabled={tool.disabled}
            className={`flex h-9 w-9 items-center justify-center rounded-sm border transition-colors ${
              tool.disabled 
                ? "border-border text-muted-foreground cursor-not-allowed" 
                : "border-border hover:bg-muted cursor-pointer"
            }`}
            aria-label={tool.label}
          >
            <tool.icon className="h-4 w-4" />
          </motion.button>
        ))}
      </div>
      <div className="text-sm font-medium text-muted-foreground">
        {template ? template.name : "No Template Selected"}
      </div>
    </motion.div>
  )
}
