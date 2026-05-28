import { Globe, MapPin, Target, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SERVICES } from '../siteData';

const iconMap: Record<string, LucideIcon> = {
  Globe, MapPin, Target, Wrench,
};

const accentColors = [
  { bg: 'bg-teal-50', border: 'border-teal-100', icon: 'text-teal-600', dot: 'bg-teal-500' },
  { bg: 'bg-gold-50', border: 'border-gold-100', icon: 'text-gold-600', dot: 'bg-gold-500' },
  { bg: 'bg-rose-50', border: 'border-rose-100', icon: 'text-rose-600', dot: 'bg-rose-500' },
  { bg: 'bg-sky-50', border: 'border-sky-100', icon: 'text-sky-600', dot: 'bg-sky-500' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream-50 relative">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header — asymmetric editorial split */}
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-10 mb-16">
          <div>
            <span className="section-label">What we offer</span>
            <h2 className="heading-lg text-ink-900">
              Everything a local business needs
              <br />
              to dominate online in Hyderabad
            </h2>
          </div>
          <a href="/intake" className="btn-ghost hidden lg:inline-flex whitespace-nowrap">
            Start a project →
          </a>
        </div>

        {/* Service cards — two-column editorial layout */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const c = accentColors[i];
            return (
              <div
                key={service.id}
                className="group card-premium p-7 flex gap-5"
              >
                <div className={`w-12 h-12 rounded-2xl border ${c.bg} ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  {Icon && <Icon size={22} className={c.icon} />}
                </div>
                <div>
                  <div className={`inline-flex items-center gap-1.5 mb-2`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    <h3 className="font-semibold text-ink-900 text-[15px]">{service.title}</h3>
                  </div>
                  <p className="text-ink-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-ink-400">
            All services include post-launch support. Prices are demo — contact us to confirm.
          </p>
        </div>
      </div>
    </section>
  );
}
