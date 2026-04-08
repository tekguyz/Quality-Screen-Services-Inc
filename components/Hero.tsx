import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, PenTool, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-pale-yellow pt-24 pb-20 lg:pt-32 lg:pb-24">
      {/* Subtle Brand Accent - Bubbly Sun Flare */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-yellow/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-72 w-72 rounded-full bg-sky-blue/20 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT COLUMN: High-Contrast Conversion Text */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 flex flex-col items-start text-left">
            
            {/* Trust Pill: Fast Response Priority */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-6 border border-brand-yellow shadow-sm">
              <Zap className="h-4 w-4 text-brand-blue fill-brand-blue" strokeWidth={3} />
              <span className="text-sm font-bold tracking-wide text-brand-blue uppercase">
                Fast Response | Free On-Site Estimates
              </span>
            </div>
            
            {/* Main Typography */}
            <h1 className="font-heading text-5xl font-extrabold tracking-tight text-legacy-black sm:text-6xl lg:text-[4.5rem] leading-[1.1] mb-6">
              YOUR PATIO, <br />
              <span className="text-brand-blue relative inline-block group">
                PERFECTED.
                {/* Brand Yellow Decorative underline */}
                <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-brand-yellow rounded-full shadow-sm"></span>
              </span>
            </h1>
            
            <h2 className="text-lg font-medium text-legacy-black/80 sm:text-xl mb-10 max-w-lg leading-relaxed">
              Florida-Grade Re-Screening & Enclosure Repairs in Deerfield Beach. We don&apos;t just fix screens; we restore your outdoor lifestyle.
            </h2>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="#contact" 
                className="inline-flex items-center justify-center gap-3 rounded-md bg-brand-blue px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-brand-yellow hover:text-legacy-black transition-all duration-300 hover:-translate-y-1 active:scale-95"
                aria-label="Get Your Free Estimate"
              >
                Get a Free Estimate
                <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
              </Link>
            </div>

            {/* Sub-CTA Trust Signals */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-bold text-legacy-black/70">
               <div className="flex items-center gap-2">
                 <Check className="h-5 w-5 text-brand-blue" strokeWidth={3} /> 
                 35 Years Exp.
               </div>
               <div className="flex items-center gap-2">
                 <Check className="h-5 w-5 text-brand-blue" strokeWidth={3} /> 
                 Licensed & Insured
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: High-Fidelity Professional Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            
            {/* The Outer Mesh Grid Accent (Architectural Vibe) */}
            {/* Kept in the background to avoid Moiré/Low-res effects on the photo */}
            <div className="absolute -inset-6 rounded-2xl border-2 border-brand-blue/10 bg-[linear-gradient(to_right,#0073B210_1px,transparent_1px),linear-gradient(to_bottom,#0073B210_1px,transparent_1px)] bg-[size:32px_32px] md:-inset-8 lg:-inset-12 hidden md:block">
              <PenTool className="absolute -top-3 -left-3 h-6 w-6 text-brand-blue/30" />
              <div className="absolute -bottom-2 -right-2 h-4 w-4 border-r-2 border-b-2 border-brand-blue/30"></div>
            </div>

            {/* Main Image Frame - High Fidelity / Crystal Clear */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-2xl border-4 border-white bg-sky-blue group">
              <Image
                src="https://images.unsplash.com/photo-1656443876192-22c578744a04?q=80&w=1074&auto=format&fit=crop"
                alt="High Quality Screen Installation by Quality Screen Services Inc"
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Premium Gradient Sheen instead of Grid Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-transparent to-white/10 pointer-events-none"></div>
              
              {/* Subtle Branding Multiply Overlay for richness */}
              <div className="absolute inset-0 bg-brand-blue/5 mix-blend-multiply pointer-events-none"></div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-brand-yellow p-4 shadow-xl border-2 border-white flex flex-col items-center justify-center min-w-[110px]">
               <span className="text-4xl font-extrabold text-legacy-black leading-none">35+</span>
               <span className="text-[10px] font-bold uppercase tracking-widest text-legacy-black/80 mt-1">Years Strong</span>
            </div>

            {/* Floating Badge 2: Location Credibility */}
            <div className="absolute top-4 right-4 rounded-md bg-white/95 backdrop-blur-md px-3 py-1.5 shadow-md border border-brand-blue/10 hidden sm:flex items-center gap-2">
               <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-bold text-brand-blue uppercase tracking-tight">Deerfield Beach Expert</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}