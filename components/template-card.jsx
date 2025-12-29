"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TemplateCard({ template }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="border border-border bg-card rounded-sm overflow-hidden cursor-pointer"
    >
      <div className="aspect-square relative bg-muted">
        <Image src={template.preview || "/placeholder.svg"} alt={template.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-card-foreground">{template.name}</h3>
      </div>
    </motion.div>
  )
}
