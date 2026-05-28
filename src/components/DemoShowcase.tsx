import { ArrowRight, ExternalLink } from 'lucide-react';
import { DEMOS } from '../siteData';

export default function DemoShowcase() {
  return (
    <section id="demos" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">Template library</span>
          <h2 className="heading-lg text-ink-900 mb-4">
            Built for every local niche<br />in Hyderabad
          </h2>
          <p className="text-ink-400 leading-relaxed">
            Each template is crafted for a specific business type. Not generic. Not cookie-cutter.
            Pick the one that fits — or mix elements from multiple styles.
          </p>
        </div>

        {/* Asymmetric grid: 2 featured + 4 smaller */}
        <div className="grid lg:grid-cols-3 gap-5">
          {DEMOS.map((demo, i) => {
            const isFeatured = i < 2;
            return (
              <div
                key={demo.id}
                className={`group relative bg-white rounded-2xl border border-ink-100 overflow-hidden hover:shadow-2xl hover:shadow-ink-900/8 hover:-translate-y-1 transition-all duration-400 ${isFeatured ? 'lg:row-span-1' : ''}`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${isFeatured ? 'h-52' : 'h-40'}`}>
                  <img
                    src={demo.image}
                    alt={`${demo.niche} website`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />

                  {/* Niche badge */}
                  <div className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm ${demo.badge}`}>
                    {demo.niche}
                  </div>

                  {/* Template ID — on hover */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white/80 text-[10px] font-mono bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                      {demo.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-ink-900 text-[15px]">{demo.niche}</h3>
                    <span className={`text-xs font-medium ${demo.accent} whitespace-nowrap mt-0.5 bg-gray-50 px-2 py-0.5 rounded-md`}>
                      {demo.packageFit}
                    </span>
                  </div>
                  <p className="text-ink-400 text-sm leading-relaxed mb-4">{demo.description}</p>

                  <a
                    href="/intake"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${demo.accent} hover:underline underline-offset-2`}
                  >
                    Choose this style <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-teal-50 border border-teal-100 rounded-2xl px-7 py-6">
          <div>
            <p className="font-semibold text-ink-900 mb-1">Don't see your niche?</p>
            <p className="text-sm text-ink-400">We build custom designs too. Tell us about your business in the intake form.</p>
          </div>
          <a
            href="/intake"
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            <ExternalLink size={15} />
            Start intake form
          </a>
        </div>
      </div>
    </section>
  );
}
