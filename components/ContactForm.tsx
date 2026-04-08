'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapInteractive, setMapInteractive] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('form-name', 'contact');
    
    try {
      await fetch('/forms.html', {
        method: 'POST',
        headers: { 
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded' 
        },
        body: new URLSearchParams(formData as any).toString(),
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-sky-blue/10 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column: Trust Info & Map */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-4xl font-extrabold tracking-tight text-legacy-black mb-4">
                Ready to Upgrade Your Enclosure?
              </h2>
              <p className="text-lg text-legacy-black/70 max-w-md">
                Serving Deerfield Beach and surrounding areas with premium screen repair and 35 years of local expertise.
              </p>
            </div>

            {/* Google Map - High Vibrancy with Business Rating/Name */}
            <div className="flex flex-col gap-3 group">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Our Local HQ</span>
                <span className="text-xs font-medium text-legacy-black/60 italic">Quality Screen Services Inc</span>
              </div>

              <div 
                className="w-full h-[350px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border-4 border-white shadow-2xl relative cursor-pointer"
                onClick={() => setMapInteractive(true)}
                onMouseLeave={() => setMapInteractive(false)}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114480.08271985978!2d-80.18145800269512!3d26.277802510316775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91da3bfe5adb7%3A0x2548b3d0ba4f1bab!2sQuality%20Screen%20Services%20Inc!5e0!3m2!1sen!2sus!4v1775653957381!5m2!1sen!2sus" 
                  className={`w-full h-full transition-opacity duration-300 ${mapInteractive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Quality Screen Services Inc Location and Reviews"
                ></iframe>
                
                {!mapInteractive && (
                  <div className="absolute inset-0 bg-brand-blue/5 flex items-center justify-center transition-opacity group-hover:bg-transparent">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg text-sm font-bold text-brand-blue border border-brand-blue/10">
                      Tap to interact with Map
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="rounded-3xl bg-pale-yellow border border-brand-blue/10 shadow-xl p-8 md:p-10 flex flex-col justify-center">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 animate-in fade-in zoom-in duration-500">
                <div className="h-20 w-20 bg-brand-blue text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-brand-blue">Estimate Requested!</h3>
                <p className="text-legacy-black/70 text-lg">Thanks for reaching out. Jon or one of our team members will call you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-brand-blue font-bold hover:text-brand-yellow transition-colors"
                  aria-label="Send another message"
                >
                  ← Send another request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h3 className="font-heading text-3xl font-bold text-brand-blue mb-2">Get Your Free Estimate</h3>
                  <p className="text-sm font-medium text-legacy-black/60 italic font-bold">Fast Response | No Obligation</p>
                </div>

                <form 
                  name="contact" 
                  method="POST" 
                  action="/forms.html"
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  encType="multipart/form-data"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                  </p>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-brand-blue ml-1">Full Name</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      required 
                      placeholder="Enter your name"
                      className="w-full rounded-xl border-2 border-brand-blue/5 bg-white px-4 py-3.5 text-legacy-black focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-brand-blue ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="(561) 994-9373"
                      className="w-full rounded-xl border-2 border-brand-blue/5 bg-white px-4 py-3.5 text-legacy-black focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-wider text-brand-blue ml-1">Service Type</label>
                    <div className="relative">
                      <select 
                        id="serviceType" 
                        name="serviceType" 
                        required 
                        defaultValue=""
                        className="w-full appearance-none rounded-xl border-2 border-brand-blue/5 bg-white px-4 py-3.5 text-legacy-black focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all shadow-sm"
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="Pool Enclosure">Pool Enclosure Re-screening</option>
                        <option value="Patio Re-screening">Patio / Lanai Re-screening</option>
                        <option value="Repair">Frame & Door Repairs</option>
                        <option value="Pet Mesh">Pet-Resistant Mesh Upgrade</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-blue">
                        <svg className="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-blue ml-1">Message (Optional)</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={3} 
                      placeholder="Tell us about your project..."
                      className="w-full rounded-xl border-2 border-brand-blue/5 bg-white px-4 py-3.5 text-legacy-black focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/5 transition-all resize-none shadow-sm"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-brand-yellow px-8 py-5 text-lg font-bold text-legacy-black shadow-lg hover:bg-brand-blue hover:text-white transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed group"
                    aria-label="Submit contact form"
                  >
                    {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
                    {!isSubmitting && <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}