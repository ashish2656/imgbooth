"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Upload, Layout, Download } from "lucide-react"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-none">
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden w-full bg-dot-pattern"> 
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="z-10 text-center max-w-5xl mx-auto px-4 w-full flex flex-col items-center" 
        >
          <div className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-500 mb-6 backdrop-blur-md uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse" />
            V2.0 is Live
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground text-balance leading-[0.9] mb-6">
            Design Certificates <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">at Warp Speed.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            The professional tool for generating certificates, awards, and social cards. Drag, drop, and export in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/editor">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all">
                Start Creating Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#start">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900">
                    View Templates
                </Button>
            </Link>
          </div>
        </motion.div>
        
        {/* Template Showcase Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="mt-20 relative w-full max-w-6xl perspective-1000"
        >
          {/* Main Showcase Image */}
          <div className="relative rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden aspect-[16/9] group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
            
            {/* Mock Editor Interface */}
            <div className="absolute inset-4 flex flex-col rounded-lg bg-zinc-950 border border-zinc-800 overflow-hidden">
                {/* Mock Header */}
                <div className="h-12 border-b border-zinc-800 flex items-center px-4 gap-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                </div>
                
                <div className="flex flex-1 overflow-hidden">
                    {/* Mock Sidebar */}
                    <div className="w-16 border-r border-zinc-800 flex flex-col items-center py-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800" />
                        ))}
                    </div>
                    
                    {/* Mock Canvas */}
                    <div className="flex-1 bg-dot-pattern flex items-center justify-center p-8 relative">
                        <div className="aspect-[1.414] h-[80%] bg-white shadow-2xl flex flex-col relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                             <div className="h-4 w-full bg-indigo-500" />
                             <div className="p-8 flex flex-col items-center text-center space-y-4 mt-8">
                                <div className="text-3xl font-serif text-zinc-900 font-bold">Certificate of Achievement</div>
                                <div className="text-zinc-500 text-sm">is proudly presented to</div>
                                <div className="text-4xl font-cursive text-indigo-600 font-bold py-4">Alex Morgan</div>
                                <div className="text-zinc-500 text-xs max-w-xs">For outstanding performance and dedication in the fundamental principles of design.</div>
                             </div>
                             <div className="mt-auto p-8 flex justify-between items-end">
                                 <div className="w-20 h-px bg-zinc-300" />
                                 <div className="w-12 h-12 rounded-full border-2 border-indigo-500 border-dashed opacity-50" />
                                 <div className="w-20 h-px bg-zinc-300" />
                             </div>
                        </div>
                        
                        {/* Mock Toolbar */}
                        <div className="absolute bottom-6 bg-zinc-900/90 backdrop-blur text-white px-4 py-2 rounded-full border border-zinc-700 shadow-xl flex gap-4 text-xs opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                             <span>Edit Text</span>
                             <div className="w-px h-4 bg-zinc-700" />
                             <span>Add Shape</span>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section - Grid */}
      <section id="features" className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built for Professionals</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create stunning certificates without the design headache.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
                icon={Layout} 
                title="Smart Layouts" 
                desc="Templates that automatically adapt to your content and images."
                delay={0}
            />
             <FeatureCard 
                icon={Upload} 
                title="Drag & Drop" 
                desc="Simply drag your photos onto the canvas. We handle the formatting."
                delay={0.1}
            />
             <FeatureCard 
                icon={Download} 
                title="Instant Export" 
                desc="Download high-resolution PNGs ready for print or digital sharing."
                delay={0.2}
            />
             <FeatureCard 
                icon={Check} 
                title="Local Privacy" 
                desc="No servers. All processing happens locally in your secure browser."
                delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works - Steps */}
      <section id="how-it-works" className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                     <h2 className="text-3xl md:text-4xl font-bold">From idea to export in three simple steps.</h2>
                     <div className="space-y-6">
                         <StepItem number="01" title="Choose a Template" desc="Select from our curated collection of professional designs or upload your own background." />
                         <StepItem number="02" title="Customize Content" desc="Add names, dates, and drag in your recipient's photo. Our smart tools handle the alignment." />
                         <StepItem number="03" title="Export & Share" desc="Download your finished certificates immediately in high quality." />
                     </div>
                 </div>
                 <div className="relative">
                     <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 flex items-center justify-center relative overflow-hidden">
                         {/* Abstract UI representation */}
                         <div className="w-[80%] h-[60%] bg-background rounded-lg shadow-2xl border border-border p-4 flex gap-4">
                             <div className="w-16 h-full bg-muted/30 rounded" />
                             <div className="flex-1 bg-muted/10 rounded border border-dashed border-muted-foreground/20 flex items-center justify-center">
                                 <div className="text-center p-4">
                                     <div className="w-12 h-12 rounded-full bg-indigo-500/20 mx-auto mb-2" />
                                     <div className="h-2 w-20 bg-muted rounded mx-auto" />
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 bg-zinc-50/50 dark:bg-zinc-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Simple Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start for free, upgrade when you need power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="p-8 rounded-2xl bg-background border border-border flex flex-col relative overflow-hidden">
                <h3 className="text-xl font-bold mb-2">Hobby</h3>
                <div className="text-4xl font-bold mb-6">$0<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <p className="text-muted-foreground mb-6 text-sm">Perfect for trying out the editor.</p>
                <ul className="space-y-3 mb-8 flex-1">
                    <PricingFeature text="3 Free Exports/mo" />
                    <PricingFeature text="Standard Templates" />
                    <PricingFeature text="Low Res Preview" />
                </ul>
                <Button variant="outline" className="w-full rounded-full">Get Started</Button>
            </div>

            {/* Pro Plan */}
            <div className="p-8 rounded-2xl bg-zinc-900 text-white border border-zinc-800 flex flex-col relative overflow-hidden shadow-xl transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-bold mb-6">$12<span className="text-lg font-normal text-zinc-400">/mo</span></div>
                <p className="text-zinc-400 mb-6 text-sm">For professionals and creators.</p>
                <ul className="space-y-3 mb-8 flex-1">
                    <PricingFeature text="Unlimited Exports" light />
                    <PricingFeature text="All Premium Templates" light />
                    <PricingFeature text="High-Res (4k) Export" light />
                    <PricingFeature text="Remove Watermark" light />
                </ul>
                <Button className="w-full rounded-full bg-white text-zinc-900 hover:bg-zinc-100">Upgrade Now</Button>
            </div>

            {/* Team Plan */}
            <div className="p-8 rounded-2xl bg-background border border-border flex flex-col relative overflow-hidden">
                <h3 className="text-xl font-bold mb-2">Team</h3>
                <div className="text-4xl font-bold mb-6">$49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
                <p className="text-muted-foreground mb-6 text-sm">For branding agencies.</p>
                <ul className="space-y-3 mb-8 flex-1">
                    <PricingFeature text="Everything in Pro" />
                    <PricingFeature text="Shared Workspace" />
                    <PricingFeature text="Custom Fonts" />
                    <PricingFeature text="Priority Support" />
                </ul>
                <Button variant="outline" className="w-full rounded-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4">
         <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Built by Designers, for Everyone.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
                FrameCraft was born from a simple frustration: certificate design tools were either too complex (Photoshop) or too rigid (generators). 
                We believe in the sweet spot—smart automation with full creative control. 
            </p>
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                 <StatItem value="10k+" label="Users" />
                 <StatItem value="50k+" label="Exports" />
                 <StatItem value="99.9%" label="Uptime" />
                 <StatItem value="4.9/5" label="Rating" />
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto rounded-3xl p-12 md:p-24 relative overflow-hidden bg-zinc-900 text-white"
         >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/30 via-zinc-950 to-zinc-950" />
            <div className="relative z-10 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to start creating?</h2>
                <p className="text-zinc-400 max-w-xl mx-auto text-lg">Join thousands of professionals saving time with FrameCraft today.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link href="/editor">
                        <Button size="lg" className="bg-white text-zinc-950 hover:bg-zinc-100 h-14 px-8 rounded-full font-bold text-lg border-0">
                            Launch Editor
                        </Button>
                    </Link>
                </div>
            </div>
         </motion.div>
      </section>

    </main>
  )
}

function FeatureCard({ icon: Icon, title, desc, delay }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="p-6 rounded-2xl bg-background border border-border/50 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group"
        >
            <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
        </motion.div>
    )
}

function StepItem({ number, title, desc }) {
    return (
        <div className="flex gap-6">
            <span className="text-3xl font-bold text-indigo-500/30">{number}</span>
            <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
            </div>
        </div>
    )
}

function PricingFeature({ text, light }) {
    return (
        <li className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${light ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                <Check className="w-3 h-3" />
            </div>
            <span className={`text-sm ${light ? 'text-zinc-300' : 'text-zinc-600'}`}>{text}</span>
        </li>
    )
}

function StatItem({ value, label }) {
    return (
        <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{label}</div>
        </div>
    )
}