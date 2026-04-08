'use client';

import { Sun, Shield, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function MeshTechSpecs() {
  return (
    <section id="tech-specs" className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Pitch */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="font-heading text-4xl font-extrabold tracking-tight text-legacy-black sm:text-5xl">
                We Install Industry-Leading <span className="text-brand-blue">Phifer® Screen Mesh.</span>
              </h2>
              <p className="text-lg text-legacy-black/70 leading-relaxed max-w-xl">
                Standard builder-grade screens oxidize and tear within a few years. We use premium, heavy-duty fiberglass mesh designed for the brutal Florida sun.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1 rounded-full bg-brand-blue/10 p-2">
                  <Sun className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-legacy-black">UV Resistant</h3>
                  <p className="text-legacy-black/60">Won&apos;t fade or flake under intense solar exposure.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 rounded-full bg-brand-blue/10 p-2">
                  <Shield className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-legacy-black">Pet & Pest Tough</h3>
                  <p className="text-legacy-black/60">Resists claw punctures and keeps even the smallest No-See-Ums out.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 rounded-full bg-brand-blue/10 p-2">
                  <Eye className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-legacy-black">High Visibility</h3>
                  <p className="text-legacy-black/60">Dark mesh absorbs light for a crystal-clear view of your pool and landscape.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right Column: CSS Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square w-full max-w-md mx-auto rounded-3xl bg-professional-navy shadow-2xl relative overflow-hidden border-8 border-white">
              {/* Mesh Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:8px_8px]" />
              
              {/* Center Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="bg-brand-yellow px-8 py-4 rounded-xl shadow-lg border-2 border-white transform -rotate-2"
                >
                  <span className="text-xl font-extrabold text-legacy-black whitespace-nowrap">
                    10-Year Material Guarantee
                  </span>
                </motion.div>
              </div>

              {/* Decorative architectural lines */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-10 left-0 w-full h-px bg-white/5" />
                <div className="absolute top-0 left-10 w-px h-full bg-white/5" />
              </div>
            </div>

            {/* Background decorative element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
