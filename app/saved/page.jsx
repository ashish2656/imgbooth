"use client"

import { useState, useEffect } from "react"

import { motion } from "framer-motion"
import { FolderOpen } from "lucide-react"
import ProjectCard from "@/components/project-card"

const projects = [
  { id: 1, name: "Summer Vacation", preview: "/summer-vacation-photo.jpg", date: "2025-01-15" },
  { id: 2, name: "Family Portrait", preview: "/family-portrait-photo.jpg", date: "2025-01-10" },
  { id: 3, name: "Wedding Memories", preview: "/romantic-outdoor-wedding.png", date: "2025-01-05" },
]

export default function SavedPage() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { getAllProjects } = await import('@/lib/db')
        const data = await getAllProjects()
        // Sort by date desc
        setProjects(data.reverse())
      } catch (error) {
        console.error("Failed to load projects", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProjects()
  }, [])

  /* Logic moved inside useEffect, but we need global handlers */
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return
    try {
        const { deleteProject } = await import('@/lib/db')
        await deleteProject(id)
        setProjects(prev => prev.filter(p => p.id !== id))
    } catch (e) {
        console.error("Delete failed", e)
    }
  }

  const handleOpen = (id) => {
    // Navigate to editor with project ID
    // Since our EditorContext loads based on ID if we had a route param, 
    // but typically we might just set it in local storage or use a URL param.
    // For now, let's use a URL query param.
    window.location.href = `/editor?project=${id}` 
  }

  return (
    <main className="min-h-[calc(100vh-8rem)] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Saved Projects</h1>
          <p className="text-lg text-muted-foreground">Continue working on your photo frame designs</p>
        </motion.div>

        {isLoading ? (
             <div className="text-center py-20 text-muted-foreground">Loading projects...</div>
        ) : projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <ProjectCard 
                    project={project} 
                    onDelete={handleDelete}
                    onOpen={handleOpen}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-border rounded-xl bg-muted/20"
          >
            <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mb-6">
                <FolderOpen className="h-10 w-10 text-muted-foreground/50" />
            </div>
            <h3 className="text-xl font-bold mb-2">No projects yet</h3>
            <p className="text-muted-foreground mb-8 max-w-sm">
                Start your first creative project by selecting a template or uploading a photo.
            </p>
            <a
              href="/editor"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              Start Creating
            </a>
          </motion.div>
        )}
      </div>
    </main>
  )
}
