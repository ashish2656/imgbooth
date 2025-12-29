"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MoreVertical, Trash2, Edit } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="border border-border bg-card rounded-sm overflow-hidden">
      <div className="aspect-square relative bg-muted">
        <Image src={project.preview || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-card-foreground mb-1">{project.name}</h3>
            <p className="text-xs text-muted-foreground">
              {new Date(project.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-sm hover:bg-muted">
            <MoreVertical className="h-4 w-4" />
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="flex flex-1 items-center justify-center gap-2 h-9 rounded-sm border border-border hover:bg-muted text-sm font-medium">
            <Edit className="h-3.5 w-3.5" />
            Edit
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-sm border border-border hover:bg-destructive hover:text-destructive-foreground">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
