import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../siteData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <span className="section-label">Client stories</span>
            <h2 className="heading-lg text-ink-900">
              Hyderabad businesses
              <br />that trust us
            </h2>
          </div>
          <p className="text-ink-400 leading-relaxed">
            Real results from real businesses across Banjara Hills, Secunderabad, KPHB and beyond.
            No stock reviews, no generic quotes.
          </p>
        </div>

        {/* Testimonial cards — staggered layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`relative bg-white rounded-2xl border border-ink-100 p-7 shadow-sm hover:shadow-xl hover:shadow-ink-900/5 hover:-translate-y-0.5 transition-all duration-300 ${i === 1 ? 'md:mt-6' : ''}`}
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6">
                <Quote size={32} className="text-teal-100" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink-600 text-sm leading-[1.8] mb-6 relative z-10">
                "{t.quote}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-5 border-t border-ink-50">
                <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md shadow-teal-300/30">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-ink-900 text-sm">{t.name}</div>
                  <div className="text-ink-400 text-xs mt-0.5">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
