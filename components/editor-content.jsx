import { useEditor } from "@/contexts/editor-context"
import Sidebar from "@/components/sidebar"
import Toolbar from "@/components/toolbar"
import CanvasArea from "@/components/canvas-area"
import TextEditorPanel from "@/components/text-editor-panel"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Settings2 } from "lucide-react" // Import Menu icon
import { Button } from "@/components/ui/button"
import { useState } from "react"

import { motion } from "framer-motion"

export default function EditorContent() {
  return (
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="flex h-[100dvh] overflow-hidden bg-zinc-50 dark:bg-zinc-950"
      >
        
        {/* Mobile Header / Sidebar Trigger */}
        <div className="md:hidden fixed top-4 left-4 z-50">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="shadow-lg bg-background/80 backdrop-blur-md">
                        <Menu className="w-5 h-5" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="p-0 border-r w-[85vw] sm:w-[340px]">
                    <Sidebar className="w-full h-full border-0 shadow-none" />
                </SheetContent>
            </Sheet>
        </div>

        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden md:flex h-full z-20">
            <Sidebar />
        </div>
        
        {/* Main Content Area */}
        <main className="flex-1 relative flex flex-row overflow-hidden">
          
          {/* Canvas Area - Centers the artwork */}
          <div className="flex-1 relative border-l border-r border-zinc-200 dark:border-zinc-800 bg-dot-pattern flex flex-col min-w-0">
             <CanvasArea />
             
             {/* Floating Toolbar */}
             <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none w-full max-w-md px-4 flex justify-center">
                <div className="pointer-events-auto rounded-full">
                    <Toolbar />
                </div>
             </div>
          </div>

          {/* Text Editor Panel - Responsive */}
          <div className="hidden lg:flex h-full z-20">
             <TextEditorPanel />
          </div>

        </main>
      </motion.div>
  )
}