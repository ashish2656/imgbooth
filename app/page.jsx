
"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-8rem)] flex-col">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 md:py-36 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance"
        >
          Generate Certificates
          <br /> Without Manual Editing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl text-pretty"
        >
          Upload your certificate template and photo —
          we automatically place everything in the right position
          with precision and consistency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href="/editor"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-primary px-10 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Create Certificate
          </Link>
        </motion.div>
      </section>
      {/* How It Works */}
      <section className="px-4 py-24 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-16"
          >
            How It Works
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Upload Certificate Template",
                desc: "Use your official certificate design with predefined photo space",
              },
              {
                title: "Upload Photo",
                desc: "Add the participant or student photo securely",
              },
              {
                title: "Auto Placement & Export",
                desc: "Photo is aligned automatically and certificate is ready to download",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 py-24 md:py-32 bg-muted/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-14">
            Built For
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-muted-foreground">
            <div>Colleges & Universities</div>
            <div>Online Courses</div>
            <div>Events & Workshops</div>
            <div>Corporate Training</div>
          </div>
        </motion.div>
      </section>

    </main>
  )
}