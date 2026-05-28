import { ArrowRight, MapPin, Star, CheckCircle2, Scissors, Stethoscope, UtensilsCrossed, GraduationCap, Home, HardHat } from 'lucide-react';

const niches = [
  { icon: Scissors, label: 'Salons', color: 'bg-rose-50 text-rose-600 border-rose-100' },
  { icon: Stethoscope, label: 'Clinics', color: 'bg-sky-50 text-sky-600 border-sky-100' },
  { icon: UtensilsCrossed, label: 'Restaurants', color: 'bg-amber-50 text-amber-600 border-amber-100' },
  { icon: GraduationCap, label: 'Coaching', color: 'bg-teal-50 text-teal-600 border-teal-100' },
  { icon: Home, label: 'Real Estate', color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
  { icon: HardHat, label: 'Contractors', color: 'bg-stone-50 text-stone-600 border-stone-100' },
];

const proof = [
  '150+ businesses launched',
  'Delivered in 1–3 days',
  'Hyderabad-focused',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream-50 overflow-hidden flex items-center pt-20">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-teal-100/50 blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gold-100/40 blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_480px] gap-14 lg:gap-20 items-center">

          {/* ── Left ────────────────────────────────── */}
          <div>
            {/* Location pill */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-teal-200/80 text-teal-700 text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm mb-8">
              <MapPin size={11} />
              Serving local businesses across Hyderabad & Secunderabad
            </div>

            {/* Headline */}
            <h1 className="heading-xl text-ink-900 text-balance mb-6">
              Websites that turn{' '}
              <span className="relative text-teal-600 whitespace-nowrap">
                visitors
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 280 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M3 11C70 4 210 4 277 11" stroke="#14b8a6" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </span>{' '}
              into calls
            </h1>

            {/* Sub */}
            <p className="text-lg text-ink-400 leading-[1.75] max-w-[520px] mb-8 font-light">
              We help shops, clinics, restaurants and local service providers across Hyderabad launch professional websites — delivered in{' '}
              <strong className="text-ink-700 font-semibold">1–3 business days</strong>.
            </p>

            {/* Proof chips */}
            <div className="flex flex-wrap gap-2.5 mb-9">
              {proof.map((p) => (
                <div key={p} className="flex items-center gap-1.5 bg-white/80 border border-ink-100 text-ink-600 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                  <CheckCircle2 size={12} className="text-teal-500" />
                  {p}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="/intake" className="btn-primary text-[15px] px-7 py-4">
                Get a Website Quote
                <ArrowRight size={16} />
              </a>
              <a href="#demos" className="btn-ghost text-[15px] px-7 py-4">
                See Local Demos
              </a>
            </div>

            {/* Social proof row */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {['PR', 'VK', 'SR', 'AM'].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-9 h-9 rounded-full border-2 border-cream-50 flex items-center justify-center text-white text-[10px] font-bold shadow-sm"
                    style={{ background: ['#0d9488', '#14b8a6', '#f59e0b', '#0f766e'][i] }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-xs text-ink-400 mt-0.5">
                  Trusted by <strong className="text-ink-600">150+</strong> Hyderabad businesses
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Premium visual card ──────────── */}
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-6 rounded-[2.5rem] border border-teal-200/40 pointer-events-none" />

            <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-ink-900/10 border border-ink-100 overflow-hidden">

              {/* Browser chrome */}
              <div className="bg-ink-50 border-b border-ink-100 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-gold-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 ml-2 bg-white border border-ink-200 rounded-md px-3 py-1.5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="text-xs text-ink-400 font-mono">yourbiryanihouse.in</span>
                </div>
              </div>

              {/* Site preview image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=700"
                  alt="Local business website preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-display font-bold text-xl leading-tight">Al-Baik Biryani House</div>
                  <div className="text-white/70 text-xs mt-0.5">Tolichowki, Hyderabad · Now accepting online orders</div>
                </div>
              </div>

              {/* Niche pills grid */}
              <div className="p-4">
                <p className="text-[10px] font-semibold text-ink-400 uppercase tracking-widest mb-3">Built for every local niche</p>
                <div className="grid grid-cols-3 gap-2">
                  {niches.map(({ icon: Icon, label, color }) => (
                    <div
                      key={label}
                      className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl border text-center ${color}`}
                    >
                      <Icon size={16} />
                      <span className="text-[10px] font-semibold">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery bar */}
              <div className="px-4 pb-4">
                <div className="bg-teal-600 rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-teal-200 text-[10px] font-medium uppercase tracking-wide">Next delivery slot</div>
                    <div className="text-white font-semibold text-sm mt-0.5">Hyderabad · 1 Business Day</div>
                  </div>
                  <a href="/intake" className="bg-white text-teal-700 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-cream-50 transition-colors whitespace-nowrap">
                    Book now →
                  </a>
                </div>
              </div>
            </div>

            {/* Floating price tag */}
            <div className="absolute -top-5 -right-4 bg-gold-400 text-gold-900 text-xs font-bold px-4 py-2.5 rounded-2xl shadow-lg shadow-gold-300/50 rotate-3 leading-snug">
              Demo pricing
              <br />
              from ₹6,000
            </div>

            {/* Floating "live" badge */}
            <div className="absolute -bottom-4 -left-4 bg-white border border-ink-100 shadow-lg rounded-2xl px-3 py-2.5 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-semibold text-ink-700">Site live in 24 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
