import { Award, ShieldCheck, Users, Hammer } from 'lucide-react';

const trustItems = [
  {
    title: 'Family Owned & Operated',
    description: 'Personalized service from our family to yours for over 35 years.',
    icon: Users,
  },
  {
    title: 'Guaranteed Workmanship',
    description: 'We stand behind every screen we install with a full satisfaction guarantee.',
    icon: Award,
  },
  {
    title: 'Licensed & Insured',
    description: 'Complete protection for your home with certified Florida contractors.',
    icon: ShieldCheck,
  },
  {
    title: 'Expert Installation',
    description: 'Precision techniques that ensure your screens stay tight for years.',
    icon: Hammer,
  },
];

export default function Trust() {
  return (
    <section id="trust" className="py-24 bg-brand-blue text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8 leading-tight">
              Built on <span className="text-brand-yellow">Trust</span> & <span className="text-brand-yellow">Durability</span>
            </h2>
            <p className="text-xl text-pale-yellow/80 mb-12 max-w-xl leading-relaxed">
              Quality Screen Services Inc isn&apos;t just a business; it&apos;s a 35-year legacy of protecting Florida homes. We treat every pool enclosure as if it were our own.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="font-bold tracking-wide uppercase text-sm">Certified Contractor</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                  <Award className="h-6 w-6" />
                </div>
                <span className="font-bold tracking-wide uppercase text-sm">A+ Rated Service</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {trustItems.map((item) => (
              <div key={item.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                <item.icon className="h-10 w-10 text-brand-yellow mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-pale-yellow/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
