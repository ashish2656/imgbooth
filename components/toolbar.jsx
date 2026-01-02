"use client"

import { motion } from "framer-motion"
import { Undo, Redo, Save, Download, ZoomIn, ZoomOut } from "lucide-react"
import { useEditor } from "@/contexts/editor-context"
import { Button } from "@/components/ui/button"
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Toolbar() {
  const { template, resetEditor, fabricCanvasRef, undo, redo, canUndo, canRedo, saveProject } = useEditor()

  const exportCertificate = () => {
    if (!fabricCanvasRef.current) return
    const dataURL = fabricCanvasRef.current.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 2
    })
    const link = document.createElement('a')
    link.download = 'certificate.png'
    link.href = dataURL
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center gap-2 p-2 rounded-full bg-zinc-950 text-white border border-zinc-800 shadow-2xl overflow-x-auto max-w-[90vw] md:max-w-none scrollbar-hide"
    >
      <div className="flex items-center gap-1 border-r border-zinc-700 pr-2 mr-1 flex-shrink-0">
        <ToolbarButton 
            icon={Undo} 
            label="Undo" 
            onClick={undo} 
            disabled={!canUndo} 
        />
        <ToolbarButton 
            icon={Redo} 
            label="Redo" 
            onClick={redo} 
            disabled={!canRedo} 
        />
      </div>

      <div className="flex items-center gap-1 border-r border-zinc-700 pr-2 mr-1 flex-shrink-0 hidden sm:flex">
        <ToolbarButton icon={ZoomOut} label="Zoom Out" disabled={true} />
        <span className="text-xs font-mono w-12 text-center text-zinc-400">100%</span>
        <ToolbarButton icon={ZoomIn} label="Zoom In" disabled={true} />
      </div>

      <div className="flex items-center gap-2 pl-2 flex-shrink-0">
         <Button 
            variant="ghost" 
            size="sm" 
            className="rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 px-3"
            disabled={!template}
            onClick={() => saveProject()}
         >
            <Save className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Save</span>
         </Button>


         <Button 
            variant="secondary" 
            size="sm" 
            className="rounded-full px-6 bg-indigo-500 hover:bg-indigo-600 text-white border-0 font-semibold"
            disabled={!template}
            onClick={exportCertificate}
         >
            <Download className="w-4 h-4 mr-2" />
            Export
         </Button>
      </div>
    </motion.div>
  )
}

function ToolbarButton({ icon: Icon, label, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-2 rounded-full transition-all duration-200 relative group ${
        disabled 
          ? "opacity-50 cursor-not-allowed text-zinc-600" 
          : "hover:bg-zinc-800 text-zinc-300 hover:text-white active:scale-95"
      }`}
      title={label}
    >
      <Icon className="w-5 h-5" />
      <span className="sr-only">{label}</span>
      {!disabled && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-zinc-950 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-bold shadow-sm">
            {label}
        </span>
      )}
    </button>
  )
}
