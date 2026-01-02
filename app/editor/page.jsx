"use client"
import dynamic from 'next/dynamic'

// Disable SSR for editor components that use fabric/canvas
const EditorContent = dynamic(() => import('@/components/editor-content'), {
  ssr: false,
  loading: () => <div className="flex h-[calc(100vh-8rem)] items-center justify-center">Loading editor...</div>
})

import { Suspense, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useEditor, EditorProvider } from '@/contexts/editor-context'

function EditorContentWrapper() {
  const searchParams = useSearchParams()
  const projectId = searchParams.get('project')
  const { loadProject, resetEditor } = useEditor()
  
  useEffect(() => {
    if (projectId) {
      loadProject(Number(projectId))
    } else {
         // Reset logic if needed
    }
  }, [projectId, loadProject])

  return <EditorContent />
}

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
      <EditorProvider>
        <EditorContentWrapper />
      </EditorProvider>
    </Suspense>
  )
}
