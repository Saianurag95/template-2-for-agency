import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { AGENCY } from '../siteData';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Templates', href: '#demos' },
  { label: 'Pricing', href: '#packages' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-400">
      {/* Pre-footer strip */}
      <div className="border-t border-ink-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-300">
            Ready to launch your business website?
          </p>
          <a
            href="/intake"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-teal-900/30"
          >
            Start Project Intake <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="border-t border-ink-800/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Brand col */}
            <div className="lg:col-span-2">
              <a href="/" className="flex items-center gap-2.5 mb-4 group">
                <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center shadow-md shadow-teal-800/50">
                  <span className="text-white font-bold text-base font-display">W</span>
                </div>
                <div>
                  <span className="font-display font-bold text-[17px] text-white leading-none">{AGENCY.displayName}</span>
                  <span className="block text-[10px] text-ink-500 mt-0.5 tracking-wide">Premium web design studio</span>
                </div>
              </a>
              <p className="text-sm leading-relaxed max-w-xs mb-5 text-ink-400">
                Professional websites for local businesses in Hyderabad.
                Fast delivery. Fair pricing. Real results.
              </p>
              <div className="flex items-center gap-1.5 text-sm text-ink-500">
                <MapPin size={13} className="text-teal-500 flex-shrink-0" />
                <span>{AGENCY.displayLocation}</span>
              </div>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Navigate</h4>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm hover:text-teal-400 transition-colors">{l.label}</a>
                  </li>
                ))}
                <li className="pt-1">
                  <a href="/intake" className="text-sm text-teal-400 hover:text-teal-300 transition-colors font-semibold">
                    Start Intake Form →
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`https://wa.me/${AGENCY.displayWhatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm hover:text-green-400 transition-colors"
                  >
                    <MessageCircle size={14} className="text-green-500" />
                    {AGENCY.displayWhatsapp}
                  </a>
                </li>
                <li>
                  <a href={`tel:${AGENCY.displayPhone}`} className="flex items-center gap-2.5 text-sm hover:text-teal-400 transition-colors">
                    <Phone size={14} className="text-teal-500" />
                    {AGENCY.displayPhone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${AGENCY.displayEmail}`} className="flex items-center gap-2.5 text-sm hover:text-teal-400 transition-colors">
                    <Mail size={14} className="text-teal-500" />
                    {AGENCY.displayEmail}
                  </a>
                </li>
              </ul>

              <div className="mt-5 pt-5 border-t border-ink-800">
                <p className="text-[11px] text-ink-500 leading-relaxed">
                  Mon – Sat · 10am – 7pm IST
                  <br />
                  WhatsApp until 9pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-800/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-600">
            &copy; {new Date().getFullYear()} {AGENCY.displayName} · Hyderabad, India · Template: agency-local-growth-01
          </p>
          <p className="text-xs text-ink-700">
            All prices shown are demo pricing only
          </p>
        </div>
      </div>
    </footer>
  );
}
