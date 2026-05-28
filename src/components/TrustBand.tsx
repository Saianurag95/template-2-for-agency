import { TRUST_STATS } from '../siteData';

export default function TrustBand() {
  return (
    <section className="bg-ink-900 py-12 relative overflow-hidden">
      {/* Subtle teal shimmer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-full bg-teal-500/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-ink-700">
          {TRUST_STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i !== 0 ? 'lg:px-10' : 'lg:pr-10'}`}>
              <div className="font-display text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-ink-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
