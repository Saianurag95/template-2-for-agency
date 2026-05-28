import { Check, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../siteData';

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-ink-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-teal-700/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="section-label text-teal-500 mx-auto justify-center">Pricing</span>
          <h2 className="heading-lg text-white mb-3">
            Transparent pricing,<br />no surprises
          </h2>
          <p className="text-ink-400 text-sm max-w-sm mx-auto">
            All prices are demo pricing. Contact us to confirm your final package cost before proceeding.
          </p>
        </div>

        {/* Comparison table — premium layout */}
        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlight
                  ? 'bg-teal-600 shadow-2xl shadow-teal-600/30 ring-1 ring-teal-500'
                  : 'bg-ink-800/80 border border-ink-700 hover:border-ink-600'
              }`}
            >
              {/* Popular label */}
              {pkg.highlight && (
                <div className="bg-gold-400 text-gold-900 text-xs font-bold text-center py-2 tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div className="p-7">
                {/* Plan name + pages */}
                <div className="mb-1">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${pkg.highlight ? 'text-teal-200' : 'text-ink-400'}`}>
                    {pkg.pages}
                  </span>
                </div>
                <h3 className={`font-display text-2xl font-bold mb-4 ${pkg.highlight ? 'text-white' : 'text-ink-100'}`}>
                  {pkg.name}
                </h3>

                {/* Price block */}
                <div className={`flex items-end gap-1 mb-1 ${pkg.highlight ? 'text-white' : 'text-ink-100'}`}>
                  <span className="font-display text-5xl font-bold tracking-tight">{pkg.price}</span>
                </div>
                <p className={`text-sm mb-6 ${pkg.highlight ? 'text-teal-200' : 'text-ink-400'}`}>
                  {pkg.revisions} · Delivered in {pkg.delivery}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${pkg.highlight ? 'bg-teal-500/50' : 'bg-ink-700'}`} />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.highlight ? 'bg-teal-500/30' : 'bg-ink-700'}`}>
                        <Check size={11} className={pkg.highlight ? 'text-teal-200' : 'text-teal-400'} />
                      </div>
                      <span className={`text-sm ${pkg.highlight ? 'text-teal-100' : 'text-ink-300'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/intake"
                  className={`flex items-center justify-center gap-2 w-full font-semibold text-sm py-3.5 rounded-xl transition-all ${
                    pkg.highlight
                      ? 'bg-white text-teal-700 hover:bg-cream-50 shadow-md'
                      : 'border border-ink-600 hover:border-teal-500 text-ink-200 hover:text-teal-300'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-ink-500 text-xs mt-8">
          Demo pricing only. Final pricing confirmed via WhatsApp or call before any payment is processed.
        </p>
      </div>
    </section>
  );
}
