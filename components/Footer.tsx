import Link from 'next/link';
import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blue pt-16 pb-8 text-white border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-white">
              Quality Screen Services Inc
            </h3>
            <p className="text-pale-yellow/70 max-w-xs">
              Deerfield Beach&apos;s trusted pool and patio re-screening experts for over 35 years. Licensed, insured, and dedicated to quality.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#services" className="text-pale-yellow/70 hover:text-brand-yellow transition-colors w-fit">
                Our Services
              </Link>
              <Link href="#trust" className="text-pale-yellow/70 hover:text-brand-yellow transition-colors w-fit">
                Why Choose Us
              </Link>
              <Link href="#tech-specs" className="text-pale-yellow/70 hover:text-brand-yellow transition-colors w-fit">
                Tech Specs
              </Link>
              <Link href="#contact" className="text-pale-yellow/70 hover:text-brand-yellow transition-colors w-fit">
                Get an Estimate
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-white">Contact</h4>
            <address className="not-italic text-pale-yellow/70 flex flex-col gap-2">
              <p>Quality Screen Services Inc</p>
              <p>1504 N.W. 3rd Street, #304, Deerfield Beach, FL 33442</p>
              <a href="tel:5619949373" className="hover:text-brand-yellow transition-colors w-fit">
                561-994-9373
              </a>
              <a href="mailto:jpznscreen@aol.com" className="hover:text-brand-yellow transition-colors w-fit">
                jpznscreen@aol.com
              </a>
            </address>
            <div className="pt-4">
              <a 
                href="https://www.facebook.com/p/Quality-Screen-Service-Inc-100063802762049/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[oklch(52.5%_0.13_250)] text-white px-6 py-3 rounded-md font-bold transition-colors shadow-md"
                aria-label="Follow our latest projects on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
                Follow our latest projects
              </a>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-pale-yellow/50">
            &copy; {new Date().getFullYear()} Quality Screen Services Inc All rights reserved.
          </p>
          <p className="text-sm text-pale-yellow/50">
            Licensed & Insured Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}
