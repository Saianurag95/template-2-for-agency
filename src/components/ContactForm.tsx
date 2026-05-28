import { useState } from 'react';
import { Send, MessageCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { AGENCY } from '../siteData';

const contactChannels = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    sublabel: 'Fastest response',
    value: AGENCY.displayWhatsapp,
    href: `https://wa.me/${AGENCY.displayWhatsapp.replace(/\D/g, '')}`,
    colors: 'bg-green-50 border-green-100 hover:border-green-300 text-green-600',
    iconBg: 'bg-green-500',
    external: true,
  },
  {
    icon: Phone,
    label: 'Call us',
    sublabel: 'Mon–Sat, 10am–7pm',
    value: AGENCY.displayPhone,
    href: `tel:${AGENCY.displayPhone}`,
    colors: 'bg-sky-50 border-sky-100 hover:border-sky-300 text-sky-600',
    iconBg: 'bg-sky-500',
    external: false,
  },
  {
    icon: Mail,
    label: 'Email',
    sublabel: 'Response in 4–6 hours',
    value: AGENCY.displayEmail,
    href: `mailto:${AGENCY.displayEmail}`,
    colors: 'bg-teal-50 border-teal-100 hover:border-teal-300 text-teal-600',
    iconBg: 'bg-teal-600',
    external: false,
  },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', business: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_520px] gap-14 items-start">

          {/* Left */}
          <div>
            <span className="section-label">Get in touch</span>
            <h2 className="heading-lg text-ink-900 mb-4">
              Quick question?<br />We're right here.
            </h2>
            <p className="text-ink-400 leading-relaxed mb-8 max-w-md">
              For full project details and package selection, use the{' '}
              <a href="/intake" className="text-teal-600 font-medium hover:underline underline-offset-2">intake form</a>.
              This form is for quick enquiries only.
            </p>

            <div className="space-y-3">
              {contactChannels.map((ch) => {
                const Icon = ch.icon;
                return (
                  <a
                    key={ch.label}
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 group ${ch.colors}`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${ch.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon size={17} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-ink-900 text-sm">{ch.label}</span>
                        <span className="text-xs text-ink-400">— {ch.sublabel}</span>
                      </div>
                      <div className="text-sm text-ink-600 font-medium mt-0.5 truncate">{ch.value}</div>
                    </div>
                    <ArrowRight size={14} className="text-ink-300 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </a>
                );
              })}
            </div>

            {/* Hours */}
            <div className="mt-6 p-4 bg-cream-100 rounded-2xl border border-cream-200">
              <p className="text-xs font-semibold text-ink-600 uppercase tracking-widest mb-2">Business hours</p>
              <p className="text-sm text-ink-700">Monday – Saturday · 10:00 AM to 7:00 PM IST</p>
              <p className="text-xs text-ink-400 mt-1">WhatsApp messages answered until 9:00 PM</p>
            </div>
          </div>

          {/* Right: form card */}
          <div className="bg-cream-50 rounded-2xl border border-cream-200 p-7 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mx-auto mb-5">
                  <Send size={24} className="text-teal-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-ink-900 mb-2">Message received</h3>
                <p className="text-ink-400 text-sm mb-6 leading-relaxed">
                  We'll get back to you within 2 hours during business hours.
                </p>
                <a href="/intake" className="btn-primary text-sm">
                  Ready to start? Fill the intake form <ArrowRight size={14} />
                </a>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-bold text-ink-900 mb-5">Send a quick message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-ink-600 uppercase tracking-wide mb-2">Your name</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Priya Reddy" className="input-field" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ink-600 uppercase tracking-wide mb-2">Phone / WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98490 00000" className="input-field" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 uppercase tracking-wide mb-2">Business name</label>
                    <input name="business" value={form.business} onChange={handleChange} placeholder="Your business name" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-ink-600 uppercase tracking-wide mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} required placeholder="Tell us briefly what you need..." className="input-field resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full text-[14px]">
                    Send Message
                    <Send size={14} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
