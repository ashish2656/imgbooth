"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background/50 py-12 md:py-16 mt-auto">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl">FrameCraft</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Professional certificate generation for modern teams and institutions.
            Built with precision and care.
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm tracking-wider uppercase text-foreground/80">Product</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/editor" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Editor
            </Link>
            <Link href="/templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </Link>
            <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm tracking-wider uppercase text-foreground/80">Company</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-sm tracking-wider uppercase text-foreground/80">Legal</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-4 md:px-6 mt-12 pt-8 border-t border-border/50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} FrameCraft Inc. All rights reserved.</p>
          <div className="flex gap-4">
             {/* Social placeholders could go here */}
          </div>
        </div>
      </div>
    </footer>
  )
}
