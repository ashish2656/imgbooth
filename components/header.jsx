"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="border-b border-border bg-background"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.05 }} className="text-3xl font-serif font-bold text-foreground">
            FrameCraft
          </motion.div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/editor"
            className="text-xl font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Editor
          </Link>
          
        
        </nav>
      </div>
    </motion.header>
  )
}
