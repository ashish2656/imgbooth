"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MoreVertical, Trash2, Edit, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectCard({ project, onDelete, onOpen }) {
  return (
    <motion.div 
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative border border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all"
    >
      {/* Image Preview with overlay */}
      <div 
        className="aspect-[4/3] relative bg-zinc-100 dark:bg-zinc-800 overflow-hidden cursor-pointer"
        onClick={() => onOpen(project.id)}
      >
        <Image 
            src={project.preview || "/placeholder.svg"} 
            alt={project.name} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Floating Action Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <Button variant="secondary" size="sm" className="rounded-full shadow-lg font-semibold bg-white/90 text-zinc-900 hover:bg-white pointer-events-none">
                Open Project
             </Button>
        </div>
      </div>

      <div className="p-4 bg-gradient-to-b from-transparent to-white/50 dark:to-zinc-950/50">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground tracking-tight truncate group-hover:text-primary transition-colors">
                {project.name}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {new Date(project.date || project.lastModified).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 h-9 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            onClick={() => onOpen(project.id)}
          >
            <Edit className="h-3.5 w-3.5 mr-2 text-zinc-500" />
            Edit
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
            onClick={() => onDelete(project.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
