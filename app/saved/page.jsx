"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/project-card"

const projects = [
  { id: 1, name: "Summer Vacation", preview: "/summer-vacation-photo.jpg", date: "2025-01-15" },
  { id: 2, name: "Family Portrait", preview: "/family-portrait-photo.jpg", date: "2025-01-10" },
  { id: 3, name: "Wedding Memories", preview: "/romantic-outdoor-wedding.png", date: "2025-01-05" },
]

export default function SavedPage() {
  return (
    <main className="min-h-[calc(100vh-8rem)] px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Saved Projects</h1>
          <p className="text-lg text-muted-foreground">Continue working on your photo frame designs</p>
        </motion.div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <p className="text-muted-foreground mb-4">No saved projects yet</p>
            <a
              href="/editor"
              className="inline-flex h-10 items-center justify-center rounded-sm bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Create Your First Project
            </a>
          </motion.div>
        )}
      </div>
    </main>
  )
}
