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
    description: 'Focused single-page designs for a specific offer, campaign or promotion — built to capture enquiries from day one.',
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
    impact: '70% of visitors leave within seconds — never to return',
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
    impact: 'The top 3 results get 75% of all clicks — you get none',
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
    price: '₹6,000',
    hostingPrice: '₹6,500 with domain + hosting',
    delivery: '1 business day',
    pages: '1–2 pages',
    revisions: '1 revision round',
    highlight: false,
    features: [
      'Mobile-responsive design',
      'Contact form + WhatsApp button',
      'Google Maps embed',
      'Basic on-page SEO',
      'Hosting setup guidance',
      'Domain + hosting add-on: ₹500',
      'Social media links',
    ],
    cta: 'Start with Starter',
  },
  {
    id: 'business',
    name: 'Business',
    price: '₹8,000',
    hostingPrice: '₹8,700 with domain + hosting',
    delivery: '2 business days',
    pages: '3–5 pages',
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
      'Domain + hosting add-on: ₹700',
    ],
    cta: 'Get Business Site',
  },
  {
    id: 'premium',
    name: 'Premium Growth',
    price: '₹12,000',
    hostingPrice: '₹12,900 with domain + hosting',
    delivery: '3 business days',
    pages: '5–8 pages',
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
    description: 'Share your business details, choose your template, and describe your goals. Takes about 10–15 minutes.',
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
  { value: '1–3', label: 'Business days delivery' },
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
