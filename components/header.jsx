"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  
  if (pathname?.startsWith("/editor")) return null

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-header w-full border-b border-border/5 fixed top-0 z-50 transition-all duration-300"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
           {/* Refined Logo */}
           <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
               <path d="M15 3h6v6" />
               <path d="M10 21H3v-6" />
               <path d="M21 3l-7 7" />
               <path d="M3 21l7-7" />
             </svg>
           </div>
          <span className="text-xl font-bold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">
            Frame<span className="text-indigo-500">Craft</span>
          </span>
        </Link>
        
        {/* Navigation - Hidden on mobile, can add mobile menu later if strictly needed but keep simple for now */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#templates" className="hover:text-primary transition-colors">Templates</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">
             <Link href="/saved">
                <Button variant="ghost" size="sm" className="hidden sm:flex text-muted-foreground hover:text-foreground">
                    Saved Projects
                </Button>
            </Link>
             <Link href="/editor">
                <Button size="sm" className="rounded-full px-4 bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-500/20">
                    Launch App
                </Button>
            </Link>
        </div>
      </div>
    </motion.header>
  )
}
