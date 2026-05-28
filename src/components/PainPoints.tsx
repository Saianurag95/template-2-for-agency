import { AlertCircle, Smartphone, PhoneOff, EyeOff, ArrowRight } from 'lucide-react';
import { PAIN_POINTS } from '../siteData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  AlertCircle, Smartphone, PhoneOff, EyeOff,
};

export default function PainPoints() {
  return (
    <section className="py-24 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-900/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-14">
          <div>
            <span className="section-label text-teal-500">
              The real cost of a bad website
            </span>
            <h2 className="heading-lg text-white leading-tight">
              These problems are costing your business{' '}
              <em className="text-teal-400 not-italic">every single day</em>
            </h2>
          </div>
          <p className="text-ink-400 leading-relaxed lg:text-right">
            Most local businesses in Hyderabad lose hundreds of potential customers
            every month to competitors with better websites. Here's why.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {PAIN_POINTS.map((point) => {
            const Icon = iconMap[point.icon];
            return (
              <div
                key={point.id}
                className="group relative bg-ink-800/60 hover:bg-ink-800 border border-ink-700 hover:border-teal-700/50 rounded-2xl p-5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-teal-950/40 to-transparent" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                    {Icon && <Icon size={18} className="text-red-400" />}
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-sm leading-snug">{point.problem}</h3>
                  <p className="text-ink-400 text-sm leading-relaxed">{point.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-teal-600/10 border border-teal-600/20 rounded-2xl px-6 py-5 backdrop-blur">
          <p className="text-ink-300 text-sm max-w-lg">
            A professional website fixes all of this — and we can have yours live in{' '}
            <strong className="text-teal-400">1–3 business days</strong> from right now.
          </p>
          <a
            href="/intake"
            className="flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap shadow-lg shadow-teal-500/20"
          >
            Fix this today <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
