import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../siteData';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-cream-50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[380px_1fr] gap-16 items-start">

          {/* Left sticky copy */}
          <div className="lg:sticky lg:top-28">
            <span className="section-label">How it works</span>
            <h2 className="heading-lg text-ink-900 mb-5">
              From intake form<br />to live site in days
            </h2>
            <p className="text-ink-400 leading-relaxed mb-8">
              We've stripped out all the unnecessary back-and-forth that makes
              web projects slow. Fill in once, we build, you review, we launch.
            </p>
            <a href="/intake" className="btn-primary">
              Start your project
              <ArrowRight size={16} />
            </a>

            {/* Small stat */}
            <div className="mt-8 inline-flex items-center gap-3 bg-white border border-ink-100 rounded-2xl px-5 py-4 shadow-sm">
              <div className="text-center">
                <div className="font-display font-bold text-3xl text-teal-600">48h</div>
                <div className="text-xs text-ink-400 mt-0.5">avg. delivery</div>
              </div>
              <div className="w-px h-10 bg-ink-100" />
              <div className="text-sm text-ink-600 max-w-[160px] leading-snug">
                Most Business plans delivered within 2 days
              </div>
            </div>
          </div>

          {/* Right: steps */}
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-teal-300 via-teal-200 to-transparent" />

            <div className="space-y-8">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.step} className="relative flex gap-7">
                  {/* Step circle */}
                  <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center border-2 shadow-md transition-all duration-300 ${
                    i === 0
                      ? 'bg-teal-600 border-teal-600 text-white shadow-teal-300/40'
                      : 'bg-white border-ink-200 text-ink-600'
                  }`}>
                    <span className="font-display font-bold text-sm">{step.step}</span>
                  </div>

                  {/* Content card */}
                  <div className={`flex-1 rounded-2xl border p-5 ${i === 0 ? 'bg-teal-50 border-teal-100' : 'bg-white border-ink-100'}`}>
                    <h3 className="font-semibold text-ink-900 mb-1.5">{step.title}</h3>
                    <p className="text-ink-400 text-sm leading-relaxed">{step.description}</p>
                    {i === 0 && (
                      <a href="/intake" className="inline-flex items-center gap-1.5 text-teal-600 text-xs font-semibold mt-3 hover:underline underline-offset-2">
                        Open intake form <ArrowRight size={11} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
