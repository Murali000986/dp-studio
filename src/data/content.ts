// ─── Site Data ───────────────────────────────────────────────────────────────

export const SITE = {
  name: 'TN DP Studio 2.0',
  tagline: 'Capturing Moments, Creating Impact!',
  phone: '+91 90927 83899',
  whatsapp: '919092783899',
  email: 'tndpstudio2.0@gmail.com',
  address: 'Salem',
  city: 'Salem, Tamil Nadu',
  instagram: 'https://instagram.com/tn_dp_studio_',
  youtube: 'https://youtube.com/@dpstudios',
  facebook: 'https://facebook.com/dpstudios',
  linkedin: 'https://linkedin.com/company/dpstudios',
};

export const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'About',     href: '/about' },
  {
    label: 'Services', href: '/services',
    children: [
      { label: 'Video Shoot',          href: '/services/videoshoot' },
      { label: 'Video Editing',        href: '/services/videoediting' },
      { label: 'Social Media',         href: '/services/socialmedia' },
      { label: 'Graphic Design',       href: '/services/graphicdesign' },
    ],
  },
  { label: 'Portfolio',  href: '/portfolio' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Careers',    href: '/careers' },
  { label: 'Contact',    href: '/contact' },
];

export interface ServiceContent {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
}

export const SERVICES: ServiceContent[] = [
  {
    id: 'videoshoot',
    title: 'Video Shoot',
    shortDesc: 'Professional shoots for promotions, events, interviews, and more.',
    description: 'We bring your vision to life through professional video shoots for promotions, events, interviews, and more. Our creative and experienced team ensures high-quality deliverables.',
    longDescription: 'At TN DP Studio 2.0, we believe that every brand has a unique story, and there is no better medium to tell it than through high-quality video. Whether you are launching a new product, hosting a corporate event, or looking to record a professional interview, our video shoot services are tailored to meet your specific needs. We use state-of-the-art camera equipment, professional lighting, and expert framing to capture stunning visuals that engage and inspire your audience.',
    features: ['Corporate Promotions', 'Event Coverage (Weddings, Corporate)', 'Documentary & Interviews', 'Product Showcases', 'Music Videos'],
    benefits: [
      { title: 'Cinematic Quality', description: 'We shoot in 4K resolution with professional lenses to give your video a polished, cinematic look.' },
      { title: 'Experienced Crew', description: 'Our team comprises seasoned directors, cinematographers, and lighting experts.' },
      { title: 'Tailored Approach', description: 'We don\'t use a one-size-fits-all approach. Every shoot is meticulously planned around your goals.' }
    ],
    process: [
      { step: '01', title: 'Pre-Production & Planning', description: 'We discuss your goals, draft a script or storyboard, and plan the logistics of the shoot.' },
      { step: '02', title: 'Production Day', description: 'Our crew arrives on set with top-tier equipment to capture all the necessary footage beautifully.' },
      { step: '03', title: 'Review & Wrap', description: 'We review the raw footage with you on-site to ensure we have captured your vision perfectly.' }
    ],
    faqs: [
      { question: 'Do you provide locations and actors?', answer: 'We can assist in location scouting and talent casting for an additional fee depending on the project scope.' },
      { question: 'How long does a typical shoot take?', answer: 'A standard promotional shoot usually takes a full day (8 hours), but we also offer half-day packages for smaller projects.' }
    ],
    image: '/portfolio_wedding.png',
  },
  {
    id: 'videoediting',
    title: 'Video Editing',
    shortDesc: 'High-quality editing that tells your story with impact.',
    description: 'High-quality video editing that tells your story with impact. We don\'t just create content, we build connections.',
    longDescription: 'Raw footage is only half the battle. The real magic happens in the editing room. Our professional video editing services transform your raw clips into a compelling, cohesive narrative. We specialize in color grading, sound design, motion graphics, and precise cutting to ensure your final video holds the viewer\'s attention from the first second to the last. Whether it is a fast-paced social media reel or a long-form documentary, we edit with impact in mind.',
    features: ['Advanced Color Grading', 'Audio Mixing & Sound Design', 'Motion Graphics & Titles', 'Multi-cam Editing', 'Reel & TikTok Formatting'],
    benefits: [
      { title: 'Maximum Engagement', description: 'We pace our edits to maximize viewer retention and engagement.' },
      { title: 'Brand Consistency', description: 'We ensure the color palette, fonts, and style align perfectly with your brand identity.' },
      { title: 'Fast Turnaround', description: 'We respect your deadlines and provide quick turnarounds without sacrificing quality.' }
    ],
    process: [
      { step: '01', title: 'Footage Ingest & Assembly', description: 'We organize your raw files and create a rough timeline assembly.' },
      { step: '02', title: 'Creative Editing & Pacing', description: 'We refine the cuts, add transitions, and pace the video to match the desired tone.' },
      { step: '03', title: 'Finishing & Export', description: 'We apply final color grading, sound design, and export the video in your required formats.' }
    ],
    faqs: [
      { question: 'Can I provide my own raw footage?', answer: 'Absolutely! We offer editing-only services where you can send us your raw files via a secure cloud link.' },
      { question: 'How many revisions do I get?', answer: 'Our standard editing packages include 2 rounds of revisions to ensure you are completely satisfied with the final result.' }
    ],
    image: '/hero_bg.png',
  },
  {
    id: 'socialmedia',
    title: 'Social Media Management',
    shortDesc: 'Content creation, posting, engagement & page growth strategies.',
    description: 'Complete social media page maintenance including content creation, posting, engagement, and page growth strategies designed to elevate your brand.',
    longDescription: 'In today\'s digital age, your social media page is your digital storefront. Our social media management services take the burden of daily posting off your shoulders. We create engaging, high-quality content, write compelling captions, and strategically manage your posting schedule to maximize reach and engagement. We don\'t just post; we build a community around your brand and implement growth strategies to increase your follower base and conversions.',
    features: ['Monthly Content Calendars', 'Custom Post Design & Copywriting', 'Hashtag & Trend Strategy', 'Community Engagement', 'Analytics & Reporting'],
    benefits: [
      { title: 'Consistent Presence', description: 'Keep your audience engaged with a consistent, reliable posting schedule.' },
      { title: 'Audience Growth', description: 'We utilize organic strategies to grow your followers with genuine, interested users.' },
      { title: 'Time Saving', description: 'Free up your time to focus on running your business while we handle your digital presence.' }
    ],
    process: [
      { step: '01', title: 'Brand Audit & Strategy', description: 'We analyze your current presence and develop a tailored social media strategy.' },
      { step: '02', title: 'Content Creation', description: 'We shoot, design, and write all the content for the upcoming month.' },
      { step: '03', title: 'Publishing & Monitoring', description: 'We schedule the posts and actively monitor comments and messages to engage with your audience.' }
    ],
    faqs: [
      { question: 'Which platforms do you manage?', answer: 'We specialize in Instagram, Facebook, LinkedIn, and YouTube.' },
      { question: 'Do you reply to comments and DMs?', answer: 'Yes, community management (replying to comments and basic DMs) is included in our comprehensive packages.' }
    ],
    image: '/portfolio_restaurant.png',
  },
  {
    id: 'graphicdesign',
    title: 'Graphic Design',
    shortDesc: 'Creative visuals for branding, ads, social media, and print.',
    description: 'Creative visuals and graphic design for branding, ads, social media, and print. We deliver innovative ideas with a client-first approach.',
    longDescription: 'Great design communicates your brand\'s value instantly. Our graphic design team crafts visually stunning assets that capture attention and convey your message effectively. From a complete brand identity overhaul (logos, typography, color palettes) to daily social media graphics and large-scale print materials, we ensure your visual communication is top-tier. We blend aesthetics with psychology to create designs that not only look beautiful but also drive results.',
    features: ['Logo & Brand Identity', 'Social Media Creatives', 'Marketing Collateral (Flyers, Brochures)', 'Ad Creatives', 'Packaging Design'],
    benefits: [
      { title: 'Stand Out Visually', description: 'Unique, custom designs that differentiate you from your competitors.' },
      { title: 'Cohesive Identity', description: 'Ensure all your marketing materials share a unified, professional look.' },
      { title: 'Conversion Focused', description: 'Our designs are strategically crafted to guide the viewer\'s eye and drive action.' }
    ],
    process: [
      { step: '01', title: 'Discovery & Briefing', description: 'We gather your requirements, brand guidelines, and design inspirations.' },
      { step: '02', title: 'Concept Creation', description: 'Our designers create initial concepts and mockups for your review.' },
      { step: '03', title: 'Refinement & Delivery', description: 'Based on your feedback, we refine the designs and deliver the final source files.' }
    ],
    faqs: [
      { question: 'Do I get the source files?', answer: 'Yes, upon project completion and final payment, we provide all high-resolution source files (AI, PSD, EPS, etc.).' },
      { question: 'How long does a logo design take?', answer: 'A standard logo design process takes about 1-2 weeks, including concept generation and revisions.' }
    ],
    image: '/portfolio_product.png',
  },
];

export const PORTFOLIO_ITEMS = [
  { id: 1,  title: 'Event Coverage',          category: 'Events',    tag: 'Photography', image: '/pic/C0CCD7E0-330B-4A2C-A2DC-C4568220F8DB.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 2,  title: 'Portrait Session',         category: 'Portraits', tag: 'Photography', image: '/pic/C859950A-63A7-4B4D-BF96-98E090B0B2CB.jpeg', client: 'TN DP Studio 2.0', year: '2024' },
  { id: 3,  title: 'Candid Moments',           category: 'Events',    tag: 'Photography', image: '/pic/IMG_0858.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 4,  title: 'Golden Hour Shoot',        category: 'Portraits', tag: 'Photography', image: '/pic/IMG_5857.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 5,  title: 'Creative Frames',          category: 'Creative',  tag: 'Photography', image: '/pic/IMG_5858.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 6,  title: 'Lifestyle Photography',    category: 'Creative',  tag: 'Photography', image: '/pic/IMG_5859.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 7,  title: 'Dynamic Capture',          category: 'Events',    tag: 'Photography', image: '/pic/IMG_5867.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 8,  title: 'Outdoor Session',          category: 'Portraits', tag: 'Photography', image: '/pic/IMG_5870.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 9,  title: 'Vibrant Moments',          category: 'Creative',  tag: 'Photography', image: '/pic/IMG_5873.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 10, title: 'Studio Shoot',             category: 'Portraits', tag: 'Photography', image: '/pic/_DSC0773.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 11, title: 'Professional Portrait',    category: 'Portraits', tag: 'Photography', image: '/pic/_DSC0790.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 12, title: 'Artistic Vision',          category: 'Creative',  tag: 'Photography', image: '/pic/_DSC0848.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 13, title: 'Close-Up Details',         category: 'Creative',  tag: 'Photography', image: '/pic/_DSC0852.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 14, title: 'Cinematic Shot',           category: 'Cinematic', tag: 'Photography', image: '/pic/_DSC1065.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 15, title: 'Premium Cinematic',        category: 'Cinematic', tag: 'Photography', image: '/pic/_DSC1131.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 16, title: 'Story Frame',              category: 'Cinematic', tag: 'Photography', image: '/pic/_DSC1135.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 17, title: 'Epic Composition',         category: 'Cinematic', tag: 'Photography', image: '/pic/_DSC1349.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 18, title: 'Expressive Portrait',      category: 'Portraits', tag: 'Photography', image: '/pic/_DSC2243.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 19, title: 'Natural Light Session',    category: 'Portraits', tag: 'Photography', image: '/pic/_DSC2247.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
  { id: 20, title: 'The Perfect Frame',        category: 'Cinematic', tag: 'Photography', image: '/pic/_DSC8542.JPG',  client: 'TN DP Studio 2.0', year: '2024' },
];

export const PORTFOLIO_CATS = ['All', 'Events', 'Portraits', 'Creative', 'Cinematic'];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Their wedding film left us completely speechless. Every emotion, every detail — perfectly captured. We have watched it more than 50 times and it still brings us to tears.',
    name: 'Priya & Rohan Sharma',
    title: 'Wedding Clients, 2024',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&q=80&fit=crop&crop=face',
    stars: 5,
  },
  {
    id: 2,
    quote: 'Within two weeks of posting the restaurant promo video DP Studios made, our table reservations doubled. The ROI was immediate and measurable.',
    name: 'Arjun Mehta',
    title: 'Owner, La Maison Restaurant',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&fit=crop&crop=face',
    stars: 5,
  },
  {
    id: 3,
    quote: 'Our social media following grew from 2,000 to 45,000 in six months with their management strategy. The content quality is consistently premium.',
    name: 'Sameer Khan',
    title: 'CEO, Nexus Corp',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&q=80&fit=crop&crop=face',
    stars: 5,
  },
  {
    id: 4,
    quote: 'Our product photography transformed completely. The DP Studios team understood our brand vision immediately and delivered images that now headline our entire website.',
    name: 'Kavitha Nair',
    title: 'Brand Manager, Prestige Co.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&q=80&fit=crop&crop=face',
    stars: 5,
  },
];

export const STATS = [
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 50,  suffix: '+', label: 'Brands Managed' },
  { value: 5,   suffix: 'M+', label: 'Content Views' },
];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'how-to-plan-a-perfect-wedding-film',
    title: 'How to Plan the Perfect Wedding Film in 2024',
    excerpt: 'From the first inquiry to the final delivery, we break down exactly what goes into creating a cinematic wedding film that you will cherish forever.',
    category: 'Weddings',
    readTime: '6 min read',
    date: 'June 18, 2024',
    image: '/portfolio_wedding.png',
  },
  {
    id: 2,
    slug: 'product-photography-tips-for-ecommerce',
    title: '10 Product Photography Tips That Boost E-commerce Sales',
    excerpt: 'Great product photos can increase conversion rates by up to 30%. Here are the techniques our studio uses to make every product look its absolute best.',
    category: 'Photography',
    readTime: '8 min read',
    date: 'May 30, 2024',
    image: '/portfolio_product.png',
  },
  {
    id: 3,
    slug: 'social-media-content-strategy-for-restaurants',
    title: 'A Complete Social Media Strategy for Restaurants in 2024',
    excerpt: 'Restaurants that post consistently and with high-quality visuals see 3x more foot traffic from social media. Here is our proven approach.',
    category: 'Digital Marketing',
    readTime: '10 min read',
    date: 'May 12, 2024',
    image: '/portfolio_restaurant.png',
  },
  {
    id: 4,
    slug: 'behind-the-scenes-corporate-brand-film',
    title: 'Behind the Scenes: Creating a Corporate Brand Film',
    excerpt: 'We take you through the full production process of a corporate documentary — from pre-production planning to the colour-graded final cut.',
    category: 'Videography',
    readTime: '7 min read',
    date: 'April 25, 2024',
    image: '/bts_videographer.png',
  },
  {
    id: 5,
    slug: 'branding-vs-marketing-whats-the-difference',
    title: 'Branding vs. Marketing: What Every Business Owner Needs to Know',
    excerpt: 'Many businesses confuse branding with marketing. Understanding the difference — and how they work together — is the foundation of long-term growth.',
    category: 'Branding',
    readTime: '5 min read',
    date: 'April 10, 2024',
    image: '/studio_about.png',
  },
  {
    id: 6,
    slug: 'why-drone-footage-sells-real-estate',
    title: 'Why Drone Footage Is Now Essential for Real Estate Marketing',
    excerpt: 'Properties listed with professional aerial footage sell 68% faster and at higher prices. Here is why — and what you need to know before your next shoot.',
    category: 'Real Estate',
    readTime: '5 min read',
    date: 'March 28, 2024',
    image: '/hero_bg.png',
  },
];

export const TEAM = [
  {
    name: 'Mr. Parvesh',
    role: 'Founder',
    bio: 'TN DP STUDIO 2.0 is your creative partner for all your digital needs. We turn ideas into impactful visual stories that connect, inspire, and elevate your brand.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&q=80&fit=crop&crop=face',
  },
];

export const CAREER_ROLES = [
  {
    title: 'Photographer / Videographer',
    type: 'Full-Time',
    location: 'Mumbai (On-site)',
    description: 'We are looking for an experienced photographer and/or videographer to join our growing production team.',
  },
  {
    title: 'Senior Video Editor',
    type: 'Full-Time',
    location: 'Mumbai / Remote',
    description: 'DaVinci Resolve or Premiere Pro expert with strong colour grading skills. Experience in brand and commercial projects preferred.',
  },
  {
    title: 'Social Media Manager',
    type: 'Full-Time',
    location: 'Mumbai (Hybrid)',
    description: 'Proven track record growing brand accounts on Instagram, YouTube, and LinkedIn. Creative, data-driven, and excellent at writing.',
  },
  {
    title: 'Brand Designer (Graphic)',
    type: 'Full-Time / Freelance',
    location: 'Remote',
    description: 'Strong portfolio in brand identity, packaging, and digital design. Proficient in Figma and Adobe Suite.',
  },
];
