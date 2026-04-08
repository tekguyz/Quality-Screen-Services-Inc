import Image from 'next/image';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Pool & Patio Re-screening',
    subtitle: 'Premium Phifer mesh for maximum durability.',
    description: 'Our signature service uses high-tensile Phifer mesh, engineered specifically for the Florida climate. We don&apos;t just replace screens; we ensure every panel is drum-tight and built to last.',
    image: 'https://images.unsplash.com/photo-1565011577972-f8ede4e07111?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Phifer 18/14 Grade Mesh', 'UV Resistant Coating', '10-Year Material Warranty'],
    align: 'left',
  },
  {
    title: 'Frame & Enclosure Repairs',
    subtitle: 'Hardware replacement, structural adjustments, and cable ties.',
    description: 'A screen is only as good as the frame holding it. We specialize in structural tune-ups, replacing rusted hardware, and reinforcing cable ties to withstand high winds.',
    image: 'https://plus.unsplash.com/premium_photo-1681732426294-dac48b812e0e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Stainless Steel Hardware', 'Structural Reinforcement', 'Door Adjustment & Repair'],
    align: 'right',
  },
  {
    title: 'Specialty Upgrades',
    subtitle: 'Pet-resistant screens and custom patio doors.',
    description: 'Upgrade your living space with specialized solutions. From PetScreen® that resists claws and teeth to custom-fitted privacy mesh and heavy-duty patio doors.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    features: ['PetScreen® Technology', 'Privacy Mesh Options', 'Custom Door Installation'],
    align: 'left',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-brand-blue sm:text-5xl mb-6">
            Core Services <span className="text-sky-blue">&</span> Solutions
          </h2>
          <p className="text-xl text-legacy-black/70 leading-relaxed">
            We provide comprehensive screening and structural services designed to enhance your outdoor living experience while providing maximum protection.
          </p>
        </div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
                service.align === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-blue/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="max-w-xl">
                  <span className="inline-block text-sky-blue font-bold tracking-widest uppercase text-sm mb-4">
                    {service.subtitle}
                  </span>
                  <h3 className="font-heading text-3xl font-bold text-brand-blue mb-6 sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="text-lg text-legacy-black/70 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-brand-yellow shrink-0" />
                        <span className="text-sm font-semibold text-legacy-black/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-brand-blue font-bold hover:gap-4 transition-all group"
                  >
                    Request an Estimate
                    <ArrowRight className="h-5 w-5 group-hover:text-brand-yellow" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
