import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronRight } from 'lucide-react';
import { AGENCY } from '../siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Templates', href: '#demos' },
    { label: 'Pricing', href: '#packages' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-ink-100 shadow-sm shadow-ink-900/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[68px] lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-teal-600 flex items-center justify-center shadow-md shadow-teal-600/30 group-hover:shadow-teal-600/50 transition-shadow">
                <span className="text-white font-bold text-base font-display">W</span>
              </div>
              <div>
                <span className="font-display font-bold text-[17px] text-ink-900 leading-none tracking-tight">
                  {AGENCY.displayName}
                </span>
                <span className="block text-[10px] text-ink-400 font-medium leading-none mt-0.5 tracking-wide">
                  {AGENCY.displayLocation}
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium text-ink-500 hover:text-ink-900 transition-colors relative group py-1"
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px bg-teal-500 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`https://wa.me/${AGENCY.displayWhatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-teal-700 transition-colors px-3 py-2"
              >
                <MessageCircle size={15} className="text-green-500" />
                WhatsApp
              </a>
              <a
                href="/intake"
                className="btn-primary text-[13px] px-5 py-2.5"
              >
                Start Your Project
                <ChevronRight size={14} />
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-ink-600 hover:text-teal-600 transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } bg-white border-b border-ink-100`}
        >
          <div className="px-5 py-4 space-y-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-3 py-3 text-sm font-medium text-ink-700 hover:bg-cream-100 hover:text-teal-700 rounded-xl transition-colors"
              >
                {l.label}
                <ChevronRight size={14} className="text-ink-300" />
              </a>
            ))}
            <div className="pt-4 border-t border-ink-100 mt-3 space-y-2">
              <a
                href={`https://wa.me/${AGENCY.displayWhatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-green-200 bg-green-50 text-green-700 text-sm font-semibold px-4 py-3 rounded-xl"
              >
                <MessageCircle size={15} />
                Chat on WhatsApp
              </a>
              <a
                href="/intake"
                className="btn-primary w-full text-[13px]"
                onClick={() => setOpen(false)}
              >
                Start Your Project <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
