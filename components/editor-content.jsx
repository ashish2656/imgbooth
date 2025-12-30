"use client"
import { EditorProvider } from "@/contexts/editor-context"
import Sidebar from "@/components/sidebar"
import Toolbar from "@/components/toolbar"
import CanvasArea from "@/components/canvas-area"
import TextEditorPanel from "@/components/text-editor-panel"

export default function EditorContent() {
  return (
    <EditorProvider>
      <div className="flex h-[calc(100vh-8rem)] flex-col overflow-hidden">
        <Toolbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <CanvasArea />
          <TextEditorPanel />
        </div>
      </div>
    </EditorProvider>
  )
}
