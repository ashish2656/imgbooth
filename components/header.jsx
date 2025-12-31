"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-header w-full"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
           <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:scale-105 transition-transform duration-300">
             <span className="font-serif font-bold text-lg">F</span>
           </div>
          <motion.div className="text-xl font-bold tracking-tight text-foreground">
            Frame<span className="text-muted-foreground">Craft</span>
          </motion.div>
        </Link>
        
        <nav className="flex items-center gap-2">
           <Link href="/gallery" className="hidden md:block">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Gallery
              </Button>
           </Link>
          <Link href="/editor">
            <Button variant="default" size="sm" className="font-semibold shadow-primary/20">
              Launch Editor
            </Button>
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}
