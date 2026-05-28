import { useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Check,
  AlertCircle,
  Building2,
  Globe,
  LayoutTemplate,
  Palette,
  FileText,
  Image,
  Key,
  Search,
  CreditCard,
  DollarSign,
  ClipboardList,
} from 'lucide-react';
import { TEMPLATE_IDS, PACKAGES } from '../siteData';

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormData {
  // Step 1 – Business
  businessName: string;
  businessType: string;
  businessLocation: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  websiteGoal: string;

  // Step 2 – Website Requirements
  numberOfPages: string;
  requiredFeatures: string[];
  hasExistingWebsite: string;
  existingWebsiteUrl: string;
  competitorUrls: string;
  designNotes: string;

  // Step 3 – Template Selection
  selectedTemplateId: string;
  selectedTemplateName: string;
  templateNotes: string;

  // Step 4 – Brand
  primaryColor: string;
  secondaryColor: string;
  fontPreference: string;
  logoStatus: string;
  brandNotes: string;

  // Step 5 – Content
  hasPageContent: string;
  contentFormat: string;
  tagline: string;
  aboutText: string;
  servicesList: string;

  // Step 6 – Media
  hasLogo: string;
  hasPhotos: string;
  photosCount: string;
  hasConfirmedUploads: boolean;

  // Step 7 – Credentials
  domainStatus: string;
  domainName: string;
  hostingPreference: string;
  credentialNotes: string;

  // Step 8 – SEO
  primaryKeyword: string;
  secondaryKeywords: string;
  targetLocation: string;
  metaDescription: string;

  // Step 9 – Package
  selectedPackage: string;

  // Step 10 – Payment
  paymentConfirmed: boolean;
  paymentMethod: string;
  milestoneAcknowledged: boolean;

  // Step 11 – Final Review (read-only)
}

const defaultForm: FormData = {
  businessName: '',
  businessType: '',
  businessLocation: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  websiteGoal: '',
  numberOfPages: '',
  requiredFeatures: [],
  hasExistingWebsite: '',
  existingWebsiteUrl: '',
  competitorUrls: '',
  designNotes: '',
  selectedTemplateId: '',
  selectedTemplateName: '',
  templateNotes: '',
  primaryColor: '#14b8a6',
  secondaryColor: '#f59e0b',
  fontPreference: '',
  logoStatus: '',
  brandNotes: '',
  hasPageContent: '',
  contentFormat: '',
  tagline: '',
  aboutText: '',
  servicesList: '',
  hasLogo: '',
  hasPhotos: '',
  photosCount: '',
  hasConfirmedUploads: false,
  domainStatus: '',
  domainName: '',
  hostingPreference: '',
  credentialNotes: '',
  primaryKeyword: '',
  secondaryKeywords: '',
  targetLocation: '',
  metaDescription: '',
  selectedPackage: '',
  paymentConfirmed: false,
  paymentMethod: '',
  milestoneAcknowledged: false,
};

// ─── Step metadata ────────────────────────────────────────────────────────────

const STEPS = [
  { number: 1, label: 'Business Info', icon: Building2 },
  { number: 2, label: 'Requirements', icon: Globe },
  { number: 3, label: 'Template', icon: LayoutTemplate },
  { number: 4, label: 'Brand', icon: Palette },
  { number: 5, label: 'Content', icon: FileText },
  { number: 6, label: 'Media', icon: Image },
  { number: 7, label: 'Credentials', icon: Key },
  { number: 8, label: 'SEO', icon: Search },
  { number: 9, label: 'Package', icon: CreditCard },
  { number: 10, label: 'Payment', icon: DollarSign },
  { number: 11, label: 'Review', icon: ClipboardList },
];

// ─── Validation per step ──────────────────────────────────────────────────────

function getMissingFields(step: number, form: FormData): string[] {
  switch (step) {
    case 1:
      return [
        !form.businessName && 'Business name',
        !form.businessType && 'Business type',
        !form.businessLocation && 'Business location',
        !form.contactName && 'Contact person name',
        !form.contactPhone && 'Contact phone / WhatsApp',
        !form.websiteGoal && 'Main website goal',
      ].filter(Boolean) as string[];
    case 2:
      return [
        !form.numberOfPages && 'Number of pages',
        form.requiredFeatures.length === 0 && 'At least one required feature',
        !form.hasExistingWebsite && 'Existing website status',
      ].filter(Boolean) as string[];
    case 3:
      return [
        !form.selectedTemplateId && 'Select a template',
      ].filter(Boolean) as string[];
    case 4:
      return [
        !form.logoStatus && 'Logo status',
      ].filter(Boolean) as string[];
    case 5:
      return [
        !form.hasPageContent && 'Content availability',
      ].filter(Boolean) as string[];
    case 6:
      return [
        !form.hasLogo && 'Logo file status',
        !form.hasPhotos && 'Photos status',
        !form.hasConfirmedUploads && 'Confirm uploads or missing files acknowledgement',
      ].filter(Boolean) as string[];
    case 7:
      return [
        !form.domainStatus && 'Domain status',
      ].filter(Boolean) as string[];
    case 8:
      return [
        !form.primaryKeyword && 'Primary keyword',
        !form.targetLocation && 'Target location',
      ].filter(Boolean) as string[];
    case 9:
      return [
        !form.selectedPackage && 'Select a package',
      ].filter(Boolean) as string[];
    case 10:
      return [
        !form.paymentMethod && 'Payment method',
        !form.paymentConfirmed && 'Payment / demo confirmation',
        !form.milestoneAcknowledged && 'Milestone schedule acknowledgement',
      ].filter(Boolean) as string[];
    default:
      return [];
  }
}

// ─── Shared input classes ─────────────────────────────────────────────────────

const inputCls =
  'w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent';

const labelCls = 'block text-sm font-medium text-gray-700 mb-1.5';

// ─── Step Components ──────────────────────────────────────────────────────────

function Step1({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  const businessTypes = ['Salon / Beauty', 'Clinic / Healthcare', 'Restaurant / Cafe', 'Real Estate', 'Cleaning Service', 'Construction / Contractor', 'Retail Shop', 'Fitness / Gym', 'Education / Tutoring', 'Other'];
  const goals = ['Get more calls / enquiries', 'Show my services / menu', 'Build credibility and trust', 'Appear on Google Search', 'Accept bookings online', 'Showcase my portfolio/work'];

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Business name *</label>
          <input className={inputCls} placeholder="e.g. Bloom Beauty Salon" value={form.businessName} onChange={(e) => setForm((p) => ({ ...p, businessName: e.target.value }))} />
        </div>
        <div>
          <label className={labelCls}>Business type *</label>
          <select className={inputCls} value={form.businessType} onChange={(e) => setForm((p) => ({ ...p, businessType: e.target.value }))}>
            <option value="">Select type...</option>
            {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls}>Business location / service area *</label>
        <input className={inputCls} placeholder="e.g. Gulshan-e-Iqbal, Karachi" value={form.businessLocation} onChange={(e) => setForm((p) => ({ ...p, businessLocation: e.target.value }))} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Contact person name *</label>
          <input className={inputCls} placeholder="Your full name" value={form.contactName} onChange={(e) => setForm((p) => ({ ...p, contactName: e.target.value }))} />
        </div>
        <div>
          <label className={labelCls}>Phone / WhatsApp *</label>
          <input className={inputCls} placeholder="+92 300 0000000" value={form.contactPhone} onChange={(e) => setForm((p) => ({ ...p, contactPhone: e.target.value }))} />
        </div>
      </div>
      <div>
        <label className={labelCls}>Email address (optional)</label>
        <input type="email" className={inputCls} placeholder="you@email.com" value={form.contactEmail} onChange={(e) => setForm((p) => ({ ...p, contactEmail: e.target.value }))} />
      </div>
      <div>
        <label className={labelCls}>Main goal for your website *</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {goals.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setForm((p) => ({ ...p, websiteGoal: g }))}
              className={`text-left text-sm px-4 py-2.5 rounded-xl border transition-all ${form.websiteGoal === g ? 'bg-teal-50 border-teal-400 text-teal-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step2({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  const features = ['Contact form', 'WhatsApp chat button', 'Gallery / portfolio', 'Services / menu listing', 'Price list', 'Booking / appointment form', 'Blog / news', 'Google Maps embed', 'Team / staff profiles', 'FAQ section', 'Testimonials section', 'Social media links'];

  const toggleFeature = (f: string) => {
    setForm((p) => ({
      ...p,
      requiredFeatures: p.requiredFeatures.includes(f) ? p.requiredFeatures.filter((x) => x !== f) : [...p.requiredFeatures, f],
    }));
  };

  return (
    <div className="space-y-5">
      <div>
        <label className={labelCls}>How many pages do you need? *</label>
        <select className={inputCls} value={form.numberOfPages} onChange={(e) => setForm((p) => ({ ...p, numberOfPages: e.target.value }))}>
          <option value="">Select...</option>
          <option>1 page (single-page site)</option>
          <option>2–3 pages</option>
          <option>4–5 pages</option>
          <option>6–8 pages</option>
          <option>Not sure — recommend for me</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Required features * (select all that apply)</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {features.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => toggleFeature(f)}
              className={`flex items-center gap-2 text-left text-sm px-3 py-2.5 rounded-xl border transition-all ${form.requiredFeatures.includes(f) ? 'bg-teal-50 border-teal-400 text-teal-700' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}
            >
              <div className={`w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${form.requiredFeatures.includes(f) ? 'bg-teal-500' : 'border border-gray-300'}`}>
                {form.requiredFeatures.includes(f) && <Check size={10} className="text-white" />}
              </div>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Do you have an existing website? *</label>
        <div className="flex gap-3">
          {['Yes', 'No'].map((v) => (
            <button key={v} type="button" onClick={() => setForm((p) => ({ ...p, hasExistingWebsite: v }))} className={`flex-1 py-2.5 rounded-xl border text-sm font-medium transition-all ${form.hasExistingWebsite === v ? 'bg-teal-50 border-teal-400 text-teal-700' : 'border-gray-200 text-gray-600'}`}>{v}</button>
          ))}
        </div>
      </div>
      {form.hasExistingWebsite === 'Yes' && (
        <div>
          <label className={labelCls}>Existing website URL</label>
          <input className={inputCls} placeholder="https://yourbusiness.com" value={form.existingWebsiteUrl} onChange={(e) => setForm((p) => ({ ...p, existingWebsiteUrl: e.target.value }))} />
        </div>
      )}
      <div>
        <label className={labelCls}>Competitor or reference websites (optional)</label>
        <textarea className={inputCls} rows={2} placeholder="Links to sites you like or want to be similar to..." value={form.competitorUrls} onChange={(e) => setForm((p) => ({ ...p, competitorUrls: e.target.value }))} />
      </div>
      <div>
        <label className={labelCls}>Additional design notes (optional)</label>
        <textarea className={inputCls} rows={2} placeholder="Any specific layout, style or tone requests..." value={form.designNotes} onChange={(e) => setForm((p) => ({ ...p, designNotes: e.target.value }))} />
      </div>
    </div>
  );
}

function Step3({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  return (
    <div className="space-y-5">
      <div>
        <label className={labelCls}>Select a template *</label>
        <div className="grid sm:grid-cols-2 gap-3">
          {TEMPLATE_IDS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setForm((p) => ({ ...p, selectedTemplateId: t.id, selectedTemplateName: t.name }))}
              className={`text-left p-4 rounded-xl border-2 transition-all ${form.selectedTemplateId === t.id ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-200 bg-white'}`}
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <span className="font-semibold text-gray-900 text-sm">{t.name}</span>
                {form.selectedTemplateId === t.id && (
                  <div className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-white" />
                  </div>
                )}
              </div>
              <div className="text-xs text-gray-500 mb-1.5">{t.category}</div>
              <div className="text-xs font-mono text-teal-600 bg-teal-50 px-2 py-0.5 rounded w-fit">{t.id}</div>
            </button>
          ))}
        </div>
      </div>
      {form.selectedTemplateId && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <p className="text-sm text-teal-800 font-medium">Selected: {form.selectedTemplateName}</p>
          <p className="text-xs text-teal-600 mt-0.5">Template ID: {form.selectedTemplateId}</p>
        </div>
      )}
      <div>
        <label className={labelCls}>Template notes (optional)</label>
        <textarea className={inputCls} rows={3} placeholder="e.g. 'I like the layout of template AG-LOCAL-02 but want a darker colour scheme'" value={form.templateNotes} onChange={(e) => setForm((p) => ({ ...p, templateNotes: e.target.value }))} />
      </div>
    </div>
  );
}

function Step4({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  const logoStatuses = ['I have a logo file ready', 'I need a basic text logo created', 'I will send the logo after this form', 'No logo needed'];
  const fontPrefs = ['Clean & modern (sans-serif)', 'Elegant & classic (serif)', 'Bold & strong', 'Friendly & casual', 'No preference — match template'];

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>Primary brand colour</label>
          <div className="flex items-center gap-3">
            <input type="color" value={form.primaryColor} onChange={(e) => setForm((p) => ({ ...p, primaryColor: e.target.value }))} className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5" />
            <input className={`${inputCls} flex-1`} value={form.primaryColor} onChange={(e) => setForm((p) => ({ ...p, primaryColor: e.target.value }))} placeholder="#14b8a6" />
          </div>
        </div>
        <div>
          <label className={labelCls}>Secondary / accent colour</label>
          <div className="flex items-center gap-3">
            <input type="color" value={form.secondaryColor} onChange={(e) => setForm((p) => ({ ...p, secondaryColor: e.target.value }))} className="w-12 h-10 rounded-lg border border-gray-200 cursor-pointer p-0.5" />
            <input className={`${inputCls} flex-1`} value={form.secondaryColor} onChange={(e) => setForm((p) => ({ ...p, secondaryColor: e.target.value }))} placeholder="#f59e0b" />
          </div>
        </div>
      </div>
      <div>
        <label className={labelCls}>Font / typography preference</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {fontPrefs.map((f) => (
            <button key={f} type="button" onClick={() => setForm((p) => ({ ...p, fontPreference: f }))} className={`text-left text-sm px-3 py-2.5 rounded-xl border transition-all ${form.fontPreference === f ? 'bg-teal-50 border-teal-400 text-teal-700' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}>{f}</button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Logo status *</label>
        <div className="space-y-2">
          {logoStatuses.map((s) => (
            <button key={s} type="button" onClick={() => setForm((p) => ({ ...p, logoStatus: s }))} className={`w-full text-left text-sm px-4 py-2.5 rounded-xl border transition-all ${form.logoStatus === s ? 'bg-teal-50 border-teal-400 text-teal-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}>{s}</button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Additional brand notes (optional)</label>
        <textarea className={inputCls} rows={3} placeholder="e.g. 'Our brand colours are teal and gold, we want to feel premium but approachable'" value={form.brandNotes} onChange={(e) => setForm((p) => ({ ...p, brandNotes: e.target.value }))} />
      </div>
    </div>
  );
}

function Step5({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  const contentOptions = ['I have everything written and ready', 'I have rough notes — you can polish them', 'I will write it after this form', 'Please create basic placeholder content for me'];
  const formats = ['I will paste text in this form', 'I will send via WhatsApp', 'I will email Word / Google Docs', 'Content is already on my existing website'];

  return (
    <div className="space-y-5">
      <div>
        <label className={labelCls}>Do you have page content ready? *</label>
        <div className="space-y-2">
          {contentOptions.map((o) => (
            <button key={o} type="button" onClick={() => setForm((p) => ({ ...p, hasPageContent: o }))} className={`w-full text-left text-sm px-4 py-2.5 rounded-xl border transition-all ${form.hasPageContent === o ? 'bg-teal-50 border-teal-400 text-teal-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}>{o}</button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>How will you send content?</label>
        <div className="grid sm:grid-cols-2 gap-2">
          {formats.map((f) => (
            <button key={f} type="button" onClick={() => setForm((p) => ({ ...p, contentFormat: f }))} className={`text-left text-sm px-3 py-2.5 rounded-xl border transition-all ${form.contentFormat === f ? 'bg-teal-50 border-teal-400 text-teal-700' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}>{f}</button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Business tagline / slogan (optional)</label>
        <input className={inputCls} placeholder="e.g. 'Karachi's trusted clinic for 15 years'" value={form.tagline} onChange={(e) => setForm((p) => ({ ...p, tagline: e.target.value }))} />
      </div>
      <div>
        <label className={labelCls}>About your business (optional)</label>
        <textarea className={inputCls} rows={3} placeholder="Brief description of your business, history, and what makes you different..." value={form.aboutText} onChange={(e) => setForm((p) => ({ ...p, aboutText: e.target.value }))} />
      </div>
      <div>
        <label className={labelCls}>List your main services or menu items (optional)</label>
        <textarea className={inputCls} rows={3} placeholder="e.g. Haircut — Rs 500&#10;Colour treatment — Rs 1,500&#10;Bridal package — Rs 8,000" value={form.servicesList} onChange={(e) => setForm((p) => ({ ...p, servicesList: e.target.value }))} />
      </div>
    </div>
  );
}

function Step6({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  return (
    <div className="space-y-5">
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
        <strong>Note:</strong> After submitting this form, send all media files via WhatsApp to confirm your booking slot.
      </div>
      <div>
        <label className={labelCls}>Do you have a logo file? *</label>
        <div className="flex gap-3">
          {['Yes — ready to send', 'No — need one created', 'Not sure yet'].map((v) => (
            <button key={v} type="button" onClick={() => setForm((p) => ({ ...p, hasLogo: v }))} className={`flex-1 py-2.5 px-3 rounded-xl border text-xs font-medium transition-all text-center ${form.hasLogo === v ? 'bg-teal-50 border-teal-400 text-teal-700' : 'border-gray-200 text-gray-600'}`}>{v}</button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Do you have business photos / images? *</label>
        <div className="flex gap-3">
          {['Yes', 'No', 'I will use stock photos'].map((v) => (
            <button key={v} type="button" onClick={() => setForm((p) => ({ ...p, hasPhotos: v }))} className={`flex-1 py-2.5 px-2 rounded-xl border text-xs font-medium transition-all text-center ${form.hasPhotos === v ? 'bg-teal-50 border-teal-400 text-teal-700' : 'border-gray-200 text-gray-600'}`}>{v}</button>
          ))}
        </div>
      </div>
      {form.hasPhotos === 'Yes' && (
        <div>
          <label className={labelCls}>Approximately how many photos?</label>
          <select className={inputCls} value={form.photosCount} onChange={(e) => setForm((p) => ({ ...p, photosCount: e.target.value }))}>
            <option value="">Select...</option>
            <option>1–5 photos</option>
            <option>6–15 photos</option>
            <option>15+ photos</option>
          </select>
        </div>
      )}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.hasConfirmedUploads}
            onChange={(e) => setForm((p) => ({ ...p, hasConfirmedUploads: e.target.checked }))}
            className="mt-0.5 w-4 h-4 rounded accent-teal-600"
          />
          <span className="text-sm text-gray-700">
            I confirm I will send all available media via WhatsApp after submitting, OR I acknowledge that missing files may delay the project. *
          </span>
        </label>
      </div>
    </div>
  );
}

function Step7({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  const domainStatuses = ['I own a domain — I will share access', 'I need a new domain — please advise', 'Not sure — explain the options to me'];
  const hostingOptions = ['I already have hosting', 'I need hosting recommendation', 'Include in the package pricing'];

  return (
    <div className="space-y-5">
      <div className="bg-sky-50 border border-sky-200 rounded-xl p-4 text-sm text-sky-800">
        <strong>Security note:</strong> Do not enter any passwords in this form. We will request credentials securely via WhatsApp when needed.
      </div>
      <div>
        <label className={labelCls}>Domain name status *</label>
        <div className="space-y-2">
          {domainStatuses.map((s) => (
            <button key={s} type="button" onClick={() => setForm((p) => ({ ...p, domainStatus: s }))} className={`w-full text-left text-sm px-4 py-2.5 rounded-xl border transition-all ${form.domainStatus === s ? 'bg-teal-50 border-teal-400 text-teal-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}>{s}</button>
          ))}
        </div>
      </div>
      {form.domainStatus === 'I own a domain — I will share access' && (
        <div>
          <label className={labelCls}>Your domain name</label>
          <input className={inputCls} placeholder="e.g. mybiusiness.com.pk" value={form.domainName} onChange={(e) => setForm((p) => ({ ...p, domainName: e.target.value }))} />
        </div>
      )}
      <div>
        <label className={labelCls}>Hosting preference</label>
        <div className="space-y-2">
          {hostingOptions.map((o) => (
            <button key={o} type="button" onClick={() => setForm((p) => ({ ...p, hostingPreference: o }))} className={`w-full text-left text-sm px-4 py-2.5 rounded-xl border transition-all ${form.hostingPreference === o ? 'bg-teal-50 border-teal-400 text-teal-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}>{o}</button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls}>Additional credentials notes (optional)</label>
        <textarea className={inputCls} rows={2} placeholder="e.g. 'Site is on Hostinger, will share panel access via WhatsApp'" value={form.credentialNotes} onChange={(e) => setForm((p) => ({ ...p, credentialNotes: e.target.value }))} />
      </div>
    </div>
  );
}

function Step8({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  return (
    <div className="space-y-5">
      <div>
        <label className={labelCls}>Primary keyword you want to rank for *</label>
        <input className={inputCls} placeholder="e.g. 'best salon in Karachi' or 'dentist near me'" value={form.primaryKeyword} onChange={(e) => setForm((p) => ({ ...p, primaryKeyword: e.target.value }))} />
      </div>
      <div>
        <label className={labelCls}>Secondary keywords (optional)</label>
        <textarea className={inputCls} rows={2} placeholder="Additional keywords, one per line..." value={form.secondaryKeywords} onChange={(e) => setForm((p) => ({ ...p, secondaryKeywords: e.target.value }))} />
      </div>
      <div>
        <label className={labelCls}>Target location for SEO *</label>
        <input className={inputCls} placeholder="e.g. Gulshan-e-Iqbal, Karachi or all of Lahore" value={form.targetLocation} onChange={(e) => setForm((p) => ({ ...p, targetLocation: e.target.value }))} />
      </div>
      <div>
        <label className={labelCls}>Meta description / homepage SEO summary (optional)</label>
        <textarea className={inputCls} rows={3} placeholder="One or two sentences describing your business for search results. We'll write this for you if left blank." value={form.metaDescription} onChange={(e) => setForm((p) => ({ ...p, metaDescription: e.target.value }))} />
        <p className="text-xs text-gray-400 mt-1">Ideal length: 120–160 characters</p>
      </div>
    </div>
  );
}

function Step9({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500">All prices are demo pricing. Confirm with the agency before payment.</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => setForm((p) => ({ ...p, selectedPackage: pkg.id }))}
            className={`relative text-left p-5 rounded-2xl border-2 transition-all ${form.selectedPackage === pkg.id ? 'border-teal-500 bg-teal-50' : 'border-gray-200 hover:border-teal-200 bg-white'}`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-0.5 rounded-full">
                Popular
              </div>
            )}
            {form.selectedPackage === pkg.id && (
              <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center">
                <Check size={11} className="text-white" />
              </div>
            )}
            <div className="font-display font-bold text-xl text-gray-900 mb-0.5">{pkg.price}</div>
            <div className="font-semibold text-gray-800 text-sm mb-1">{pkg.name}</div>
            <div className="text-xs text-gray-400 mb-3">{pkg.pages} · {pkg.delivery}</div>
            <ul className="space-y-1">
              {pkg.features.slice(0, 4).map((f) => (
                <li key={f} className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Check size={11} className="text-teal-400 flex-shrink-0" />
                  {f}
                </li>
              ))}
              {pkg.features.length > 4 && (
                <li className="text-xs text-teal-500 font-medium">+{pkg.features.length - 4} more features</li>
              )}
            </ul>
          </button>
        ))}
      </div>
    </div>
  );
}

function Step10({ form, setForm }: { form: FormData; setForm: React.Dispatch<React.SetStateAction<FormData>> }) {
  const selectedPkg = PACKAGES.find((p) => p.id === form.selectedPackage);
  const paymentMethods = ['Bank transfer (account shared via WhatsApp)', 'Easypaisa / JazzCash', 'Cash on meeting', 'I will confirm payment method later'];

  return (
    <div className="space-y-5">
      {selectedPkg && (
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="font-semibold text-teal-800">{selectedPkg.name}</div>
              <div className="text-xs text-teal-600 mt-0.5">{selectedPkg.pages} · Delivery: {selectedPkg.delivery}</div>
            </div>
            <div className="font-display font-bold text-teal-700 text-xl">{selectedPkg.price}</div>
          </div>
          <p className="text-xs text-teal-500 mt-2">Demo pricing — confirm with agency before transferring</p>
        </div>
      )}
      <div>
        <label className={labelCls}>How will you pay? *</label>
        <div className="space-y-2">
          {paymentMethods.map((m) => (
            <button key={m} type="button" onClick={() => setForm((p) => ({ ...p, paymentMethod: m }))} className={`w-full text-left text-sm px-4 py-2.5 rounded-xl border transition-all ${form.paymentMethod === m ? 'bg-teal-50 border-teal-400 text-teal-700 font-medium' : 'border-gray-200 text-gray-600 hover:border-teal-200'}`}>{m}</button>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={form.paymentConfirmed} onChange={(e) => setForm((p) => ({ ...p, paymentConfirmed: e.target.checked }))} className="mt-0.5 w-4 h-4 accent-teal-600" />
          <span className="text-sm text-gray-700">
            I understand this is demo pricing and will confirm the final amount with the agency before any payment. *
          </span>
        </label>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={form.milestoneAcknowledged} onChange={(e) => setForm((p) => ({ ...p, milestoneAcknowledged: e.target.checked }))} className="mt-0.5 w-4 h-4 accent-teal-600" />
          <span className="text-sm text-gray-700">
            I understand the project begins only after payment confirmation, and revisions are limited to the rounds in my package. *
          </span>
        </label>
      </div>
    </div>
  );
}

function Step11({ form }: { form: FormData }) {
  const selectedPkg = PACKAGES.find((p) => p.id === form.selectedPackage);
  const selectedTemplate = TEMPLATE_IDS.find((t) => t.id === form.selectedTemplateId);

  const rows = [
    { label: 'Business Name', value: form.businessName },
    { label: 'Business Type', value: form.businessType },
    { label: 'Location', value: form.businessLocation },
    { label: 'Contact', value: `${form.contactName} · ${form.contactPhone}` },
    { label: 'Website Goal', value: form.websiteGoal },
    { label: 'Pages Needed', value: form.numberOfPages },
    { label: 'Template', value: selectedTemplate ? `${selectedTemplate.name} (${selectedTemplate.id})` : '—' },
    { label: 'Logo Status', value: form.logoStatus || '—' },
    { label: 'Package', value: selectedPkg ? `${selectedPkg.name} — ${selectedPkg.price}` : '—' },
    { label: 'Delivery', value: selectedPkg?.delivery || '—' },
    { label: 'Payment Method', value: form.paymentMethod || '—' },
    { label: 'Primary Keyword', value: form.primaryKeyword || '—' },
    { label: 'Target Location', value: form.targetLocation || '—' },
  ];

  return (
    <div className="space-y-5">
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-2">
          <Check size={22} className="text-green-600" />
        </div>
        <h3 className="font-semibold text-gray-900 mb-1">Review your submission</h3>
        <p className="text-sm text-gray-500">Check everything below before submitting. Once submitted we'll contact you within 2 hours.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {rows.map((row, i) => (
          <div key={row.label} className={`flex items-start gap-4 px-4 py-3 text-sm ${i % 2 === 0 ? 'bg-cream-50' : 'bg-white'}`}>
            <span className="text-gray-500 w-36 flex-shrink-0">{row.label}</span>
            <span className="text-gray-900 font-medium">{row.value || '—'}</span>
          </div>
        ))}
      </div>

      {form.requiredFeatures.length > 0 && (
        <div>
          <div className="text-sm font-medium text-gray-700 mb-2">Required features:</div>
          <div className="flex flex-wrap gap-2">
            {form.requiredFeatures.map((f) => (
              <span key={f} className="bg-teal-50 text-teal-700 text-xs px-2.5 py-1 rounded-lg">{f}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main IntakePage ──────────────────────────────────────────────────────────

export default function IntakePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState<FormData>(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  const missing = getMissingFields(currentStep, form);
  const canContinue = missing.length === 0;

  const handleNext = () => {
    if (currentStep < 11 && canContinue) setCurrentStep((s) => s + 1);
    if (currentStep === 11) setSubmitted(true);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream-100 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-5">
            <Check size={36} className="text-teal-600" />
          </div>
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-3">You're all set!</h1>
          <p className="text-gray-600 mb-2">Your intake form has been submitted successfully.</p>
          <p className="text-gray-500 text-sm mb-6">We'll review your details and contact <strong>{form.contactName || 'you'}</strong> within 2 hours on business days to confirm your booking.</p>
          <div className="bg-white rounded-2xl border border-cream-200 p-4 text-left mb-6 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Business</span>
              <span className="font-medium text-gray-900">{form.businessName}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Template</span>
              <span className="font-medium text-gray-900">{form.selectedTemplateId || '—'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Package</span>
              <span className="font-medium text-gray-900">{PACKAGES.find((p) => p.id === form.selectedPackage)?.name || '—'}</span>
            </div>
          </div>
          <a href="/" className="inline-block text-teal-600 hover:text-teal-700 text-sm font-medium">
            ← Back to home
          </a>
        </div>
      </div>
    );
  }

  const StepIcon = STEPS[currentStep - 1].icon;
  const progress = ((currentStep - 1) / (STEPS.length - 1)) * 100;

  return (
    <div className="min-h-screen bg-cream-100">
      {/* Top bar */}
      <div className="bg-white border-b border-cream-200 sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">L</span>
            </div>
            <span className="font-display font-bold text-gray-900 text-sm hidden sm:block">LocalSite Co</span>
          </a>
          <div className="flex-1 max-w-sm">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
              <span>Step {currentStep} of {STEPS.length}</span>
              <span className="font-medium text-teal-600">{Math.round(progress)}% complete</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step nav — scrollable on mobile */}
      <div className="bg-white border-b border-cream-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto scrollbar-hide gap-1 py-2">
            {STEPS.map((s) => {
              const Icon = s.icon;
              const done = s.number < currentStep;
              const active = s.number === currentStep;
              return (
                <button
                  key={s.number}
                  type="button"
                  disabled={s.number > currentStep}
                  onClick={() => s.number <= currentStep && setCurrentStep(s.number)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap flex-shrink-0 transition-all ${
                    active
                      ? 'bg-teal-100 text-teal-700'
                      : done
                      ? 'text-teal-600 hover:bg-teal-50 cursor-pointer'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {done ? <Check size={12} /> : <Icon size={12} />}
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white rounded-2xl border border-cream-200 shadow-sm overflow-hidden">
          {/* Step header */}
          <div className="px-6 sm:px-8 pt-8 pb-6 border-b border-cream-100">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center">
                <StepIcon size={18} className="text-teal-600" />
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Step {currentStep}</div>
                <h2 className="font-display text-xl font-bold text-gray-900">{STEPS[currentStep - 1].label}</h2>
              </div>
            </div>
          </div>

          {/* Step content */}
          <div className="px-6 sm:px-8 py-6">
            {currentStep === 1 && <Step1 form={form} setForm={setForm} />}
            {currentStep === 2 && <Step2 form={form} setForm={setForm} />}
            {currentStep === 3 && <Step3 form={form} setForm={setForm} />}
            {currentStep === 4 && <Step4 form={form} setForm={setForm} />}
            {currentStep === 5 && <Step5 form={form} setForm={setForm} />}
            {currentStep === 6 && <Step6 form={form} setForm={setForm} />}
            {currentStep === 7 && <Step7 form={form} setForm={setForm} />}
            {currentStep === 8 && <Step8 form={form} setForm={setForm} />}
            {currentStep === 9 && <Step9 form={form} setForm={setForm} />}
            {currentStep === 10 && <Step10 form={form} setForm={setForm} />}
            {currentStep === 11 && <Step11 form={form} />}
          </div>

          {/* Validation warning */}
          {!canContinue && missing.length > 0 && (
            <div className="mx-6 sm:mx-8 mb-4 bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-red-700 mb-1">Please complete the following before continuing:</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    {missing.map((m) => (
                      <li key={m} className="text-xs text-red-600">{m}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="px-6 sm:px-8 pb-8 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 1}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2.5 rounded-xl border border-gray-200 hover:border-gray-300"
            >
              <ChevronLeft size={16} />
              Back
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canContinue}
              className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-200 disabled:cursor-not-allowed text-white disabled:text-gray-400 text-sm font-semibold px-6 py-2.5 rounded-xl transition-all"
            >
              {currentStep === 11 ? 'Submit Project' : 'Save & Continue'}
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
