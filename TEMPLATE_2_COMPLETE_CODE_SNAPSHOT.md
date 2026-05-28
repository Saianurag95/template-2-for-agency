# Template 2 Complete Code Snapshot

Template ID: `AG-LOCAL-02`

Generated from the live local repo:

```text
C:\Users\reddy\Documents\New project\template-2-for-agency
```

Use this snapshot when an agent or team member needs to understand or recreate Template 2 quickly.

For fast client customization, edit `src/siteData.ts` first. Only edit component files when section layout or behavior must change.

## Fast Edit Priority

1. `src/siteData.ts` - brand, services, pain points, demos, packages, testimonials, trust stats, template IDs.
2. `src/pages/IntakePage.tsx` - intake fields, template IDs, validation rules.
3. `src/components/Hero.tsx` - hero layout/copy if needed.
4. `src/components/PainPoints.tsx` - local problem/impact section if needed.
5. `src/components/DemoShowcase.tsx` - demo card presentation if needed.

## Build Verification

```text
npm.cmd run typecheck
npm.cmd run build
```

## File Tree Snapshot

```text
package.json
vercel.json
src/main.tsx
src/App.tsx
src/siteData.ts
src/pages/HomePage.tsx
src/pages/IntakePage.tsx
src/components/Navbar.tsx
src/components/Hero.tsx
src/components/TrustBand.tsx
src/components/PainPoints.tsx
src/components/Services.tsx
src/components/DemoShowcase.tsx
src/components/Packages.tsx
src/components/Process.tsx
src/components/Testimonials.tsx
src/components/BookingCTA.tsx
src/components/ContactForm.tsx
src/components/Footer.tsx
src/index.css
tailwind.config.js
vite.config.ts
```

## package.json

Dependencies and scripts.

`$(System.Collections.Hashtable.Lang)
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}

```

## vercel.json

Vercel rewrite so /intake works on deployment.

`$(System.Collections.Hashtable.Lang)
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

```

## src/main.tsx

React entry file.

`$(System.Collections.Hashtable.Lang)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

## src/App.tsx

Route handling for / and /intake.

`$(System.Collections.Hashtable.Lang)
import { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import IntakePage from './pages/IntakePage';

function getPath() {
  return window.location.pathname;
}

export default function App() {
  const [path, setPath] = useState(getPath());

  useEffect(() => {
    const handler = () => setPath(getPath());
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  // Intercept anchor clicks for client-side navigation
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;
      if (href.startsWith('/') && !href.startsWith('//')) {
        e.preventDefault();
        window.history.pushState(null, '', href);
        setPath(href);
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  if (path === '/intake') return <IntakePage />;
  return <HomePage />;
}

```

## src/siteData.ts

Main editable content/data file for fast customization.

`$(System.Collections.Hashtable.Lang)
// Replace these placeholder values with your actual agency details
export const AGENCY = {
  name: '{{agency_name}}',
  displayName: 'WebCraft Studio',
  tagline: '{{agency_tagline}}',
  displayTagline: 'Websites that help local businesses grow',
  location: '{{agency_location}}',
  displayLocation: 'Hyderabad, India',
  email: '{{email}}',
  displayEmail: 'hello@webcraft.in',
  phone: '{{phone}}',
  displayPhone: '+91 98490 00000',
  whatsapp: '{{whatsapp_number}}',
  displayWhatsapp: '+91 98490 00000',
  bookingUrl: '{{booking_url}}',
};

export const SERVICES = [
  {
    id: 1,
    title: 'Business Websites',
    description: 'Mobile-first, fast-loading websites built for local Hyderabad businesses that need to convert visitors into real phone calls and walk-ins.',
    icon: 'Globe',
  },
  {
    id: 2,
    title: 'Google Business Setup',
    description: 'Get listed correctly on Google Maps and Search so local customers in Hyderabad, Secunderabad and beyond can find you instantly.',
    icon: 'MapPin',
  },
  {
    id: 3,
    title: 'Lead Landing Pages',
    description: 'Focused single-page designs for a specific offer, campaign or promotion â€” built to capture enquiries from day one.',
    icon: 'Target',
  },
  {
    id: 4,
    title: 'Maintenance & Support',
    description: 'Keep your site updated, secure and running perfectly so you never lose a customer to a broken page or outdated information.',
    icon: 'Wrench',
  },
];

export const PAIN_POINTS = [
  {
    id: 1,
    problem: 'No website or an outdated one',
    impact: 'Customers question if your business is even still open',
    icon: 'AlertCircle',
  },
  {
    id: 2,
    problem: 'Looks broken on mobile',
    impact: '70% of visitors leave within seconds â€” never to return',
    icon: 'Smartphone',
  },
  {
    id: 3,
    problem: 'No clear call or enquiry path',
    impact: 'Visitors browse, get confused, and call a competitor',
    icon: 'PhoneOff',
  },
  {
    id: 4,
    problem: 'Not appearing on Google',
    impact: 'The top 3 results get 75% of all clicks â€” you get none',
    icon: 'EyeOff',
  },
];

export const DEMOS = [
  {
    id: 'AG-LOCAL-SALON',
    niche: 'Salon & Beauty',
    description: 'Elegant, booking-focused design for hair, nail and beauty studios. Service menu, pricing cards, gallery, and WhatsApp booking.',
    packageFit: 'Business or Premium',
    color: 'from-rose-100 to-pink-50',
    accent: 'text-rose-600',
    badge: 'bg-rose-100 text-rose-700',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'AG-LOCAL-CLINIC',
    niche: 'Clinic & Healthcare',
    description: 'Trust-building layout for general practitioners, dental clinics and specialist doctors. Appointment booking, services and team profiles.',
    packageFit: 'Business or Premium',
    color: 'from-sky-100 to-blue-50',
    accent: 'text-sky-600',
    badge: 'bg-sky-100 text-sky-700',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'AG-LOCAL-RESTAURANT',
    niche: 'Restaurant & Dhaba',
    description: 'Appetite-driven design with menu sections, opening hours, location map, and online table reservation or Zomato/Swiggy links.',
    packageFit: 'Starter or Business',
    color: 'from-amber-100 to-orange-50',
    accent: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'AG-LOCAL-REALESTATE',
    niche: 'Real Estate Agent',
    description: 'Property-forward portfolio with active listings, agent profile, EMI calculator link, and WhatsApp enquiry integration.',
    packageFit: 'Business or Premium',
    color: 'from-teal-100 to-emerald-50',
    accent: 'text-teal-600',
    badge: 'bg-teal-100 text-teal-700',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'AG-LOCAL-COACHING',
    niche: 'Coaching & Education',
    description: 'Authority-building layout for tutoring centres, IIT/NEET coaching institutes. Batch schedule, results, faculty and enquiry form.',
    packageFit: 'Business or Premium',
    color: 'from-violet-100 to-purple-50',
    accent: 'text-violet-600',
    badge: 'bg-violet-100 text-violet-700',
    image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'AG-LOCAL-CONTRACTOR',
    niche: 'Construction & Interior',
    description: 'Bold, portfolio-heavy layout for builders, electricians, plumbers and interior designers. Project gallery, services, certifications and CTA.',
    packageFit: 'Business or Premium',
    color: 'from-stone-100 to-gray-50',
    accent: 'text-stone-600',
    badge: 'bg-stone-100 text-stone-700',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const PACKAGES = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'â‚¹6,000',
    delivery: '1 business day',
    pages: '1â€“2 pages',
    revisions: '1 revision round',
    highlight: false,
    features: [
      'Mobile-responsive design',
      'Contact form + WhatsApp button',
      'Google Maps embed',
      'Basic on-page SEO',
      'Hosting setup guidance',
      'Social media links',
    ],
    cta: 'Start with Starter',
  },
  {
    id: 'business',
    name: 'Business',
    price: 'â‚¹8,000',
    delivery: '2 business days',
    pages: '3â€“5 pages',
    revisions: '2 revision rounds',
    highlight: true,
    features: [
      'Everything in Starter',
      'Services / menu section',
      'Team or about section',
      'Gallery or portfolio',
      'Google Business setup',
      'WhatsApp enquiry integration',
      'Basic analytics setup',
    ],
    cta: 'Get Business Site',
  },
  {
    id: 'premium',
    name: 'Premium Growth',
    price: 'â‚¹12,000',
    delivery: '3 business days',
    pages: '5â€“8 pages',
    revisions: '3 revision rounds',
    highlight: false,
    features: [
      'Everything in Business',
      'Lead capture landing page',
      'Blog / news section',
      'Advanced SEO on-page setup',
      'Speed optimisation',
      'Social media integration',
      'Booking or quote form',
      '1-month post-launch support',
    ],
    cta: 'Go Premium',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Fill the Intake Form',
    description: 'Share your business details, choose your template, and describe your goals. Takes about 10â€“15 minutes.',
  },
  {
    step: '02',
    title: 'We Build Your Site',
    description: 'Our team gets to work using your content and branding. You receive a live preview link within the agreed delivery time.',
  },
  {
    step: '03',
    title: 'Review & Revise',
    description: 'Check everything in detail, request your included revision rounds, and sign off on the final version.',
  },
  {
    step: '04',
    title: 'Go Live',
    description: 'We deploy your site, verify it loads flawlessly on all devices, and hand over full access to you.',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Reddy',
    business: 'Aura Beauty Salon, Banjara Hills',
    quote: 'We went from zero online presence to 15+ enquiries a week through our new website. Professional, fast, and exactly what we needed.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Dr. Venkat Kumar',
    business: 'Sree Clinic, Secunderabad',
    quote: 'Patients now find us on Google and book appointments directly. The site looks credible and loads fast on every phone.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Ravi Constructions',
    business: 'Interior & Civil Works, KPHB',
    quote: 'We had a basic idea in mind but got a site that actively generates project enquiries. Best investment we made this year.',
    stars: 5,
  },
];

export const TRUST_STATS = [
  { value: '150+', label: 'Hyderabad businesses live' },
  { value: '1â€“3', label: 'Business days delivery' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '6 niches', label: 'Specialised templates' },
];

export const TEMPLATE_IDS = [
  { id: 'AG-MOD-01', name: 'Modern Minimal', category: 'General Business' },
  { id: 'AG-LOCAL-02', name: 'Local Growth', category: 'Local Services' },
  { id: 'AG-LEAD-03', name: 'Lead Machine', category: 'Lead Generation' },
  { id: 'AG-SEO-04', name: 'SEO First', category: 'Search Visibility' },
  { id: 'AG-CREATIVE-05', name: 'Creative Studio', category: 'Creative / Design' },
  { id: 'AG-SOCIAL-06', name: 'Social Proof', category: 'Reviews / Trust' },
  { id: 'AG-REAL-07', name: 'Real Estate Pro', category: 'Real Estate' },
  { id: 'AG-HEALTH-08', name: 'Health & Wellness', category: 'Clinic / Healthcare' },
  { id: 'AG-ECOM-09', name: 'Shop Ready', category: 'E-Commerce / Products' },
  { id: 'AG-PREMIUM-10', name: 'Premium Brand', category: 'High-End / Luxury' },
];

```

## src/pages/HomePage.tsx

Main website composition.

`$(System.Collections.Hashtable.Lang)
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBand from '../components/TrustBand';
import PainPoints from '../components/PainPoints';
import Services from '../components/Services';
import DemoShowcase from '../components/DemoShowcase';
import Packages from '../components/Packages';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <PainPoints />
        <Services />
        <DemoShowcase />
        <Packages />
        <Process />
        <Testimonials />
        <BookingCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

```

## src/pages/IntakePage.tsx

Complete information retrieval page with validation.

`$(System.Collections.Hashtable.Lang)
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

// â”€â”€â”€ Types â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

interface FormData {
  // Step 1 â€“ Business
  businessName: string;
  businessType: string;
  businessLocation: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  websiteGoal: string;

  // Step 2 â€“ Website Requirements
  numberOfPages: string;
  requiredFeatures: string[];
  hasExistingWebsite: string;
  existingWebsiteUrl: string;
  competitorUrls: string;
  designNotes: string;

  // Step 3 â€“ Template Selection
  selectedTemplateId: string;
  selectedTemplateName: string;
  templateNotes: string;

  // Step 4 â€“ Brand
  primaryColor: string;
  secondaryColor: string;
  fontPreference: string;
  logoStatus: string;
  brandNotes: string;

  // Step 5 â€“ Content
  hasPageContent: string;
  contentFormat: string;
  tagline: string;
  aboutText: string;
  servicesList: string;

  // Step 6 â€“ Media
  hasLogo: string;
  hasPhotos: string;
  photosCount: string;
  hasConfirmedUploads: boolean;

  // Step 7 â€“ Credentials
  domainStatus: string;
  domainName: string;
  hostingPreference: string;
  credentialNotes: string;

  // Step 8 â€“ SEO
  primaryKeyword: string;
  secondaryKeywords: string;
  targetLocation: string;
  metaDescription: string;

  // Step 9 â€“ Package
  selectedPackage: string;

  // Step 10 â€“ Payment
  paymentConfirmed: boolean;
  paymentMethod: string;
  milestoneAcknowledged: boolean;

  // Step 11 â€“ Final Review (read-only)
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

// â”€â”€â”€ Step metadata â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€â”€ Validation per step â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€â”€ Shared input classes â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const inputCls =
  'w-full border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent';

const labelCls = 'block text-sm font-medium text-gray-700 mb-1.5';

// â”€â”€â”€ Step Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
          <option>2â€“3 pages</option>
          <option>4â€“5 pages</option>
          <option>6â€“8 pages</option>
          <option>Not sure â€” recommend for me</option>
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
  const fontPrefs = ['Clean & modern (sans-serif)', 'Elegant & classic (serif)', 'Bold & strong', 'Friendly & casual', 'No preference â€” match template'];

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
  const contentOptions = ['I have everything written and ready', 'I have rough notes â€” you can polish them', 'I will write it after this form', 'Please create basic placeholder content for me'];
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
        <textarea className={inputCls} rows={3} placeholder="e.g. Haircut â€” Rs 500&#10;Colour treatment â€” Rs 1,500&#10;Bridal package â€” Rs 8,000" value={form.servicesList} onChange={(e) => setForm((p) => ({ ...p, servicesList: e.target.value }))} />
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
          {['Yes â€” ready to send', 'No â€” need one created', 'Not sure yet'].map((v) => (
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
            <option>1â€“5 photos</option>
            <option>6â€“15 photos</option>
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
  const domainStatuses = ['I own a domain â€” I will share access', 'I need a new domain â€” please advise', 'Not sure â€” explain the options to me'];
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
      {form.domainStatus === 'I own a domain â€” I will share access' && (
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
        <p className="text-xs text-gray-400 mt-1">Ideal length: 120â€“160 characters</p>
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
            <div className="text-xs text-gray-400 mb-3">{pkg.pages} Â· {pkg.delivery}</div>
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
              <div className="text-xs text-teal-600 mt-0.5">{selectedPkg.pages} Â· Delivery: {selectedPkg.delivery}</div>
            </div>
            <div className="font-display font-bold text-teal-700 text-xl">{selectedPkg.price}</div>
          </div>
          <p className="text-xs text-teal-500 mt-2">Demo pricing â€” confirm with agency before transferring</p>
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
    { label: 'Contact', value: `${form.contactName} Â· ${form.contactPhone}` },
    { label: 'Website Goal', value: form.websiteGoal },
    { label: 'Pages Needed', value: form.numberOfPages },
    { label: 'Template', value: selectedTemplate ? `${selectedTemplate.name} (${selectedTemplate.id})` : 'â€”' },
    { label: 'Logo Status', value: form.logoStatus || 'â€”' },
    { label: 'Package', value: selectedPkg ? `${selectedPkg.name} â€” ${selectedPkg.price}` : 'â€”' },
    { label: 'Delivery', value: selectedPkg?.delivery || 'â€”' },
    { label: 'Payment Method', value: form.paymentMethod || 'â€”' },
    { label: 'Primary Keyword', value: form.primaryKeyword || 'â€”' },
    { label: 'Target Location', value: form.targetLocation || 'â€”' },
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
            <span className="text-gray-900 font-medium">{row.value || 'â€”'}</span>
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

// â”€â”€â”€ Main IntakePage â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
              <span className="font-medium text-gray-900">{form.selectedTemplateId || 'â€”'}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Package</span>
              <span className="font-medium text-gray-900">{PACKAGES.find((p) => p.id === form.selectedPackage)?.name || 'â€”'}</span>
            </div>
          </div>
          <a href="/" className="inline-block text-teal-600 hover:text-teal-700 text-sm font-medium">
            â† Back to home
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

      {/* Step nav â€” scrollable on mobile */}
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

```

## src/components/Navbar.tsx

Navbar and CTA routing.

`$(System.Collections.Hashtable.Lang)
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

```

## src/components/Hero.tsx

Hero section.

`$(System.Collections.Hashtable.Lang)
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
  'Delivered in 1â€“3 days',
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

          {/* â”€â”€ Left â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
              We help shops, clinics, restaurants and local service providers across Hyderabad launch professional websites â€” delivered in{' '}
              <strong className="text-ink-700 font-semibold">1â€“3 business days</strong>.
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

          {/* â”€â”€ Right: Premium visual card â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
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
                  <div className="text-white/70 text-xs mt-0.5">Tolichowki, Hyderabad Â· Now accepting online orders</div>
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
                    <div className="text-white font-semibold text-sm mt-0.5">Hyderabad Â· 1 Business Day</div>
                  </div>
                  <a href="/intake" className="bg-white text-teal-700 text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-cream-50 transition-colors whitespace-nowrap">
                    Book now â†’
                  </a>
                </div>
              </div>
            </div>

            {/* Floating price tag */}
            <div className="absolute -top-5 -right-4 bg-gold-400 text-gold-900 text-xs font-bold px-4 py-2.5 rounded-2xl shadow-lg shadow-gold-300/50 rotate-3 leading-snug">
              Demo pricing
              <br />
              from â‚¹6,000
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

```

## src/components/TrustBand.tsx

Trust stats band.

`$(System.Collections.Hashtable.Lang)
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

```

## src/components/PainPoints.tsx

Local business pain points.

`$(System.Collections.Hashtable.Lang)
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
            A professional website fixes all of this â€” and we can have yours live in{' '}
            <strong className="text-teal-400">1â€“3 business days</strong> from right now.
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

```

## src/components/Services.tsx

Service grid.

`$(System.Collections.Hashtable.Lang)
import { Globe, MapPin, Target, Wrench } from 'lucide-react';
import { SERVICES } from '../siteData';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Globe, MapPin, Target, Wrench,
};

const accentColors = [
  { bg: 'bg-teal-50', border: 'border-teal-100', icon: 'text-teal-600', dot: 'bg-teal-500' },
  { bg: 'bg-gold-50', border: 'border-gold-100', icon: 'text-gold-600', dot: 'bg-gold-500' },
  { bg: 'bg-rose-50', border: 'border-rose-100', icon: 'text-rose-600', dot: 'bg-rose-500' },
  { bg: 'bg-sky-50', border: 'border-sky-100', icon: 'text-sky-600', dot: 'bg-sky-500' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-cream-50 relative">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header â€” asymmetric editorial split */}
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-10 mb-16">
          <div>
            <span className="section-label">What we offer</span>
            <h2 className="heading-lg text-ink-900">
              Everything a local business needs
              <br />
              to dominate online in Hyderabad
            </h2>
          </div>
          <a href="/intake" className="btn-ghost hidden lg:inline-flex whitespace-nowrap">
            Start a project â†’
          </a>
        </div>

        {/* Service cards â€” two-column editorial layout */}
        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const c = accentColors[i];
            return (
              <div
                key={service.id}
                className="group card-premium p-7 flex gap-5"
              >
                <div className={`w-12 h-12 rounded-2xl border ${c.bg} ${c.border} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                  {Icon && <Icon size={22} className={c.icon} />}
                </div>
                <div>
                  <div className={`inline-flex items-center gap-1.5 mb-2`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                    <h3 className="font-semibold text-ink-900 text-[15px]">{service.title}</h3>
                  </div>
                  <p className="text-ink-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-ink-400">
            All services include post-launch support. Prices are demo â€” contact us to confirm.
          </p>
        </div>
      </div>
    </section>
  );
}

```

## src/components/DemoShowcase.tsx

Local demo showcase.

`$(System.Collections.Hashtable.Lang)
import { ArrowRight, ExternalLink } from 'lucide-react';
import { DEMOS } from '../siteData';

export default function DemoShowcase() {
  return (
    <section id="demos" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ink-100 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="section-label">Template library</span>
          <h2 className="heading-lg text-ink-900 mb-4">
            Built for every local niche<br />in Hyderabad
          </h2>
          <p className="text-ink-400 leading-relaxed">
            Each template is crafted for a specific business type. Not generic. Not cookie-cutter.
            Pick the one that fits â€” or mix elements from multiple styles.
          </p>
        </div>

        {/* Asymmetric grid: 2 featured + 4 smaller */}
        <div className="grid lg:grid-cols-3 gap-5">
          {DEMOS.map((demo, i) => {
            const isFeatured = i < 2;
            return (
              <div
                key={demo.id}
                className={`group relative bg-white rounded-2xl border border-ink-100 overflow-hidden hover:shadow-2xl hover:shadow-ink-900/8 hover:-translate-y-1 transition-all duration-400 ${isFeatured ? 'lg:row-span-1' : ''}`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${isFeatured ? 'h-52' : 'h-40'}`}>
                  <img
                    src={demo.image}
                    alt={`${demo.niche} website`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />

                  {/* Niche badge */}
                  <div className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm ${demo.badge}`}>
                    {demo.niche}
                  </div>

                  {/* Template ID â€” on hover */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white/80 text-[10px] font-mono bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                      {demo.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-semibold text-ink-900 text-[15px]">{demo.niche}</h3>
                    <span className={`text-xs font-medium ${demo.accent} whitespace-nowrap mt-0.5 bg-gray-50 px-2 py-0.5 rounded-md`}>
                      {demo.packageFit}
                    </span>
                  </div>
                  <p className="text-ink-400 text-sm leading-relaxed mb-4">{demo.description}</p>

                  <a
                    href="/intake"
                    className={`inline-flex items-center gap-1.5 text-sm font-semibold ${demo.accent} hover:underline underline-offset-2`}
                  >
                    Choose this style <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 bg-teal-50 border border-teal-100 rounded-2xl px-7 py-6">
          <div>
            <p className="font-semibold text-ink-900 mb-1">Don't see your niche?</p>
            <p className="text-sm text-ink-400">We build custom designs too. Tell us about your business in the intake form.</p>
          </div>
          <a
            href="/intake"
            className="btn-primary whitespace-nowrap flex-shrink-0"
          >
            <ExternalLink size={15} />
            Start intake form
          </a>
        </div>
      </div>
    </section>
  );
}

```

## src/components/Packages.tsx

Package pricing cards.

`$(System.Collections.Hashtable.Lang)
import { Check, ArrowRight } from 'lucide-react';
import { PACKAGES } from '../siteData';

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-ink-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-teal-700/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="section-label text-teal-500 mx-auto justify-center">Pricing</span>
          <h2 className="heading-lg text-white mb-3">
            Transparent pricing,<br />no surprises
          </h2>
          <p className="text-ink-400 text-sm max-w-sm mx-auto">
            All prices are demo pricing. Contact us to confirm your final package cost before proceeding.
          </p>
        </div>

        {/* Comparison table â€” premium layout */}
        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlight
                  ? 'bg-teal-600 shadow-2xl shadow-teal-600/30 ring-1 ring-teal-500'
                  : 'bg-ink-800/80 border border-ink-700 hover:border-ink-600'
              }`}
            >
              {/* Popular label */}
              {pkg.highlight && (
                <div className="bg-gold-400 text-gold-900 text-xs font-bold text-center py-2 tracking-wider">
                  MOST POPULAR
                </div>
              )}

              <div className="p-7">
                {/* Plan name + pages */}
                <div className="mb-1">
                  <span className={`text-xs font-semibold uppercase tracking-widest ${pkg.highlight ? 'text-teal-200' : 'text-ink-400'}`}>
                    {pkg.pages}
                  </span>
                </div>
                <h3 className={`font-display text-2xl font-bold mb-4 ${pkg.highlight ? 'text-white' : 'text-ink-100'}`}>
                  {pkg.name}
                </h3>

                {/* Price block */}
                <div className={`flex items-end gap-1 mb-1 ${pkg.highlight ? 'text-white' : 'text-ink-100'}`}>
                  <span className="font-display text-5xl font-bold tracking-tight">{pkg.price}</span>
                </div>
                <p className={`text-sm mb-6 ${pkg.highlight ? 'text-teal-200' : 'text-ink-400'}`}>
                  {pkg.revisions} Â· Delivered in {pkg.delivery}
                </p>

                {/* Divider */}
                <div className={`h-px mb-6 ${pkg.highlight ? 'bg-teal-500/50' : 'bg-ink-700'}`} />

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${pkg.highlight ? 'bg-teal-500/30' : 'bg-ink-700'}`}>
                        <Check size={11} className={pkg.highlight ? 'text-teal-200' : 'text-teal-400'} />
                      </div>
                      <span className={`text-sm ${pkg.highlight ? 'text-teal-100' : 'text-ink-300'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/intake"
                  className={`flex items-center justify-center gap-2 w-full font-semibold text-sm py-3.5 rounded-xl transition-all ${
                    pkg.highlight
                      ? 'bg-white text-teal-700 hover:bg-cream-50 shadow-md'
                      : 'border border-ink-600 hover:border-teal-500 text-ink-200 hover:text-teal-300'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-ink-500 text-xs mt-8">
          Demo pricing only. Final pricing confirmed via WhatsApp or call before any payment is processed.
        </p>
      </div>
    </section>
  );
}

```

## src/components/Process.tsx

Production process section.

`$(System.Collections.Hashtable.Lang)
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

```

## src/components/Testimonials.tsx

Testimonials section.

`$(System.Collections.Hashtable.Lang)
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

        {/* Testimonial cards â€” staggered layout */}
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

```

## src/components/BookingCTA.tsx

Final booking CTA.

`$(System.Collections.Hashtable.Lang)
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
                <strong className="text-white">1â€“3 business days</strong>.
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
                { value: 'â‚¹6,000', label: 'Starting from', sub: 'Demo pricing' },
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

```

## src/components/ContactForm.tsx

Contact form frontend state.

`$(System.Collections.Hashtable.Lang)
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
    sublabel: 'Monâ€“Sat, 10amâ€“7pm',
    value: AGENCY.displayPhone,
    href: `tel:${AGENCY.displayPhone}`,
    colors: 'bg-sky-50 border-sky-100 hover:border-sky-300 text-sky-600',
    iconBg: 'bg-sky-500',
    external: false,
  },
  {
    icon: Mail,
    label: 'Email',
    sublabel: 'Response in 4â€“6 hours',
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
                        <span className="text-xs text-ink-400">â€” {ch.sublabel}</span>
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
              <p className="text-sm text-ink-700">Monday â€“ Saturday Â· 10:00 AM to 7:00 PM IST</p>
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

```

## src/components/Footer.tsx

Footer.

`$(System.Collections.Hashtable.Lang)
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
                    Start Intake Form â†’
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
                  Mon â€“ Sat Â· 10am â€“ 7pm IST
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
            &copy; {new Date().getFullYear()} {AGENCY.displayName} Â· Hyderabad, India Â· Template: agency-local-growth-01
          </p>
          <p className="text-xs text-ink-700">
            All prices shown are demo pricing only
          </p>
        </div>
      </div>
    </footer>
  );
}

```

## src/index.css

Global styles and Tailwind imports.

`$(System.Collections.Hashtable.Lang)
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    background-color: #fdfcf8;
    color: #1a1a1a;
  }

  ::selection {
    background: #ccfbf1;
    color: #0f766e;
  }
}

@layer components {
  .section-label {
    @apply inline-flex items-center gap-2 text-teal-600 text-xs font-semibold uppercase tracking-[0.15em] mb-4;
  }

  .section-label::before {
    content: '';
    @apply block w-6 h-px bg-teal-400;
  }

  .heading-xl {
    @apply font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight;
  }

  .heading-lg {
    @apply font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight;
  }

  .heading-md {
    @apply font-display text-2xl font-bold leading-snug;
  }

  .btn-primary {
    @apply inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-600/20 active:scale-[0.98];
  }

  .btn-ghost {
    @apply inline-flex items-center justify-center gap-2 border border-ink-200 hover:border-teal-300 bg-white hover:bg-teal-50 text-ink-700 hover:text-teal-700 font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200;
  }

  .card-premium {
    @apply bg-white rounded-2xl border border-ink-100 shadow-sm hover:shadow-xl hover:shadow-ink-900/5 hover:-translate-y-0.5 transition-all duration-300;
  }

  .input-field {
    @apply w-full border border-ink-200 bg-white rounded-xl px-4 py-3 text-sm text-ink-900 placeholder-ink-300 focus:outline-none focus:ring-2 focus:ring-teal-400/40 focus:border-teal-400 transition-all duration-150;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .bg-noise {
    position: relative;
  }
  .bg-noise::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
  }
}

```

## tailwind.config.js

Tailwind config.

`$(System.Collections.Hashtable.Lang)
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        cream: {
          50: '#fdfcf8',
          100: '#faf7f0',
          200: '#f2ead8',
          300: '#e8dcc4',
        },
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#0a3330',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        ink: {
          50: '#f4f4f4',
          100: '#e8e8e8',
          200: '#d4d4d4',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#3a3a3a',
          700: '#272727',
          800: '#1a1a1a',
          900: '#111111',
          950: '#080808',
        },
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

```

## vite.config.ts

Vite config.

`$(System.Collections.Hashtable.Lang)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

```

