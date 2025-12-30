"use client"
import dynamic from 'next/dynamic'

// Disable SSR for editor components that use fabric/canvas
const EditorContent = dynamic(() => import('@/components/editor-content'), {
  ssr: false,
  loading: () => <div className="flex h-[calc(100vh-8rem)] items-center justify-center">Loading editor...</div>
})

export default function EditorPage() {
  return <EditorContent />
}
