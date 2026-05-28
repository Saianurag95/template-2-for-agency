import { ArrowRight, MessageCircle, Clock, Zap } from 'lucide-react';
import { AGENCY } from '../siteData';

export default function BookingCTA() {
  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* High-contrast CTA card */}
        <div className="relative bg-ink-900 rounded-[2rem] overflow-hidden px-8 sm:px-14 py-16 shadow-2xl shadow-ink-900/30">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-600/15 blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-gold-400/10 blur-[80px]" />
          </div>

          {/* Subtle grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6">
                <Clock size={11} />
                Response within 2 hours on business days
              </div>

              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight text-balance">
                Ready to get your
                <br />
                <span className="text-teal-400">Hyderabad business</span>
                <br />
                live online?
              </h2>

              <p className="text-ink-300 text-base max-w-lg leading-relaxed mb-8">
                Fill the intake form and your professional website will be live within{' '}
                <strong className="text-white">1–3 business days</strong>.
                No technical knowledge needed.
              </p>

              {/* Benefits row */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  'No upfront hidden costs',
                  'Mobile-first design',
                  'WhatsApp enquiry ready',
                ].map((b) => (
                  <div key={b} className="flex items-center gap-2 text-ink-300 text-sm">
                    <Zap size={12} className="text-teal-400" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/intake"
                  className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-teal-500/30 text-[15px]"
                >
                  Start Project Intake
                  <ArrowRight size={16} />
                </a>
                <a
                  href={`https://wa.me/${AGENCY.displayWhatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-ink-600 hover:border-green-500/60 bg-ink-800/60 hover:bg-green-500/10 text-ink-200 hover:text-green-400 font-semibold px-8 py-4 rounded-xl transition-all text-[15px]"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: quick-stat card */}
            <div className="hidden lg:flex flex-col gap-4 min-w-[220px]">
              {[
                { value: '₹6,000', label: 'Starting from', sub: 'Demo pricing' },
                { value: '1 day', label: 'Fastest delivery', sub: 'Starter plan' },
                { value: '150+', label: 'Sites launched', sub: 'Across Hyderabad' },
              ].map((s) => (
                <div key={s.label} className="bg-ink-800/60 border border-ink-700 rounded-2xl px-5 py-4">
                  <div className="font-display font-bold text-2xl text-white mb-0.5">{s.value}</div>
                  <div className="text-ink-300 text-xs font-medium">{s.label}</div>
                  <div className="text-ink-500 text-[11px] mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
