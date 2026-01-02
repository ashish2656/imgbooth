"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TemplateCard({ template }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative border border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-colors"
    >
      <div className="aspect-square relative bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
        <Image 
            src={template.preview || "/placeholder.svg"} 
            alt={template.name} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>
      <div className="p-4 border-t border-white/10">
        <h3 className="font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">{template.name}</h3>
      </div>
    </motion.div>
  )
}
