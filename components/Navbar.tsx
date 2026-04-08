'use client';

import Link from 'next/link';
import { Phone, Menu, X, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-300 border-b-[4px] border-brand-yellow ${
          scrolled ? 'bg-white shadow-lg py-2' : 'bg-white py-4'
        }`}
      >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Quality Screen Services Inc Home">
          <span className="font-heading text-xl font-bold tracking-tight sm:text-2xl text-brand-blue">
            Quality Screen Services Inc
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-brand-blue text-legacy-black/70">
            Services
          </Link>
          <Link href="#trust" className="text-sm font-medium transition-colors hover:text-brand-blue text-legacy-black/70">
            Our Legacy
          </Link>
          <Link href="#tech-specs" className="text-sm font-medium transition-colors hover:text-brand-blue text-legacy-black/70">
            Tech Specs
          </Link>
          <a 
            href="https://www.facebook.com/p/Quality-Screen-Service-Inc-100063802762049/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-legacy-black/70 hover:text-brand-blue transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook className="h-5 w-5" aria-hidden="true" />
          </a>
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center rounded-md bg-brand-yellow px-6 py-2.5 text-sm font-semibold text-legacy-black shadow-sm hover:bg-[oklch(52.5%_0.13_250)] hover:text-white transition-all hover:scale-105"
            aria-label="Get a Free Estimate"
          >
            Get a Free Estimate
          </Link>
          <a 
            href="tel:5619949373" 
            className="flex items-center gap-2 text-sm font-bold transition-colors hover:text-brand-blue text-legacy-black"
            aria-label="Call us at 561-994-9373"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            561-994-9373
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-legacy-black" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden border-t border-legacy-black/10 bg-white px-4 py-6 shadow-lg absolute top-full left-0 w-full">
          <nav className="flex flex-col gap-4">
            <Link href="#services" className="text-base font-medium text-legacy-black/70 hover:text-brand-blue" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link href="#trust" className="text-base font-medium text-legacy-black/70 hover:text-brand-blue" onClick={() => setIsOpen(false)}>
              Our Legacy
            </Link>
            <Link href="#tech-specs" className="text-base font-medium text-legacy-black/70 hover:text-brand-blue" onClick={() => setIsOpen(false)}>
              Tech Specs
            </Link>
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center rounded-md bg-brand-yellow px-4 py-3 text-base font-semibold text-legacy-black shadow-sm"
              onClick={() => setIsOpen(false)}
              aria-label="Get a Free Estimate"
            >
              Get a Free Estimate
            </Link>
            <a 
              href="https://www.facebook.com/p/Quality-Screen-Service-Inc-100063802762049/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-md border-2 border-brand-blue py-3 text-base font-bold text-brand-blue hover:bg-[oklch(52.5%_0.13_250)] hover:text-white transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
              Follow us on Facebook
            </a>
            <a 
              href="tel:5619949373" 
              className="flex items-center justify-center gap-2 rounded-md border-2 border-brand-yellow py-3 text-base font-bold text-legacy-black hover:bg-brand-yellow/10 transition-colors"
              aria-label="Call us at 561-994-9373"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              561-994-9373
            </a>
          </nav>
        </div>
      )}
    </header>

    {/* Mobile Sticky CTA */}
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 flex shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <a 
        href="tel:5619949373" 
        className="w-1/2 bg-brand-blue text-white py-4 flex items-center justify-center gap-2 font-bold text-sm hover:bg-[oklch(52.5%_0.13_250)] transition-colors"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call Now
      </a>
      <Link 
        href="#contact" 
        className="w-1/2 bg-brand-yellow text-legacy-black py-4 flex items-center justify-center font-bold text-sm hover:bg-[oklch(52.5%_0.13_250)] hover:text-white transition-colors"
      >
        Free Quote
      </Link>
    </div>
    </>
  );
}
