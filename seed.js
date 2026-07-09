import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://ajuyhiikbseeunwahxoy.supabase.co',
  'sb_publishable_i0znmIM-zDQRoCzobcZLgQ_H0_pJUZs'
);

const PORTFOLIO_ITEMS = [
  { title: 'Event Coverage', category: 'Events', tag: 'Photography', image_url: '/pic/C0CCD7E0-330B-4A2C-A2DC-C4568220F8DB.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Portrait Session', category: 'Portraits', tag: 'Photography', image_url: '/pic/C859950A-63A7-4B4D-BF96-98E090B0B2CB.jpeg', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Candid Moments', category: 'Events', tag: 'Photography', image_url: '/pic/IMG_0858.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Golden Hour Shoot', category: 'Portraits', tag: 'Photography', image_url: '/pic/IMG_5857.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Creative Frames', category: 'Creative', tag: 'Photography', image_url: '/pic/IMG_5858.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Lifestyle Photography', category: 'Creative', tag: 'Photography', image_url: '/pic/IMG_5859.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Dynamic Capture', category: 'Events', tag: 'Photography', image_url: '/pic/IMG_5867.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Outdoor Session', category: 'Portraits', tag: 'Photography', image_url: '/pic/IMG_5870.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Vibrant Moments', category: 'Creative', tag: 'Photography', image_url: '/pic/IMG_5873.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Studio Shoot', category: 'Portraits', tag: 'Photography', image_url: '/pic/_DSC0773.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Professional Portrait', category: 'Portraits', tag: 'Photography', image_url: '/pic/_DSC0790.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Artistic Vision', category: 'Creative', tag: 'Photography', image_url: '/pic/_DSC0848.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Close-Up Details', category: 'Creative', tag: 'Photography', image_url: '/pic/_DSC0852.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Cinematic Shot', category: 'Cinematic', tag: 'Photography', image_url: '/pic/_DSC1065.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Premium Cinematic', category: 'Cinematic', tag: 'Photography', image_url: '/pic/_DSC1131.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Story Frame', category: 'Cinematic', tag: 'Photography', image_url: '/pic/_DSC1135.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Epic Composition', category: 'Cinematic', tag: 'Photography', image_url: '/pic/_DSC1349.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Expressive Portrait', category: 'Portraits', tag: 'Photography', image_url: '/pic/_DSC2243.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'Natural Light Session', category: 'Portraits', tag: 'Photography', image_url: '/pic/_DSC2247.JPG', client: 'TN DP Studio 2.0', year: '2024' },
  { title: 'The Perfect Frame', category: 'Cinematic', tag: 'Photography', image_url: '/pic/_DSC8542.JPG', client: 'TN DP Studio 2.0', year: '2024' },
];

const BLOG_POSTS = [
  { slug: 'how-to-plan-a-perfect-wedding-film', title: 'How to Plan the Perfect Wedding Film in 2024', excerpt: 'From the first inquiry to the final delivery, we break down exactly what goes into creating a cinematic wedding film that you will cherish forever.', content: 'Full content goes here...', category: 'Weddings', read_time: '6 min read', date: 'June 18, 2024', image_url: '/portfolio_wedding.png' },
  { slug: 'product-photography-tips-for-ecommerce', title: '10 Product Photography Tips That Boost E-commerce Sales', excerpt: 'Great product photos can increase conversion rates by up to 30%. Here are the techniques our studio uses to make every product look its absolute best.', content: 'Full content goes here...', category: 'Photography', read_time: '8 min read', date: 'May 30, 2024', image_url: '/portfolio_product.png' },
  { slug: 'social-media-content-strategy-for-restaurants', title: 'A Complete Social Media Strategy for Restaurants in 2024', excerpt: 'Restaurants that post consistently and with high-quality visuals see 3x more foot traffic from social media. Here is our proven approach.', content: 'Full content goes here...', category: 'Digital Marketing', read_time: '10 min read', date: 'May 12, 2024', image_url: '/portfolio_restaurant.png' },
  { slug: 'behind-the-scenes-corporate-brand-film', title: 'Behind the Scenes: Creating a Corporate Brand Film', excerpt: 'We take you through the full production process of a corporate documentary — from pre-production planning to the colour-graded final cut.', content: 'Full content goes here...', category: 'Videography', read_time: '7 min read', date: 'April 25, 2024', image_url: '/bts_videographer.png' },
  { slug: 'branding-vs-marketing-whats-the-difference', title: 'Branding vs. Marketing: What Every Business Owner Needs to Know', excerpt: 'Many businesses confuse branding with marketing. Understanding the difference — and how they work together — is the foundation of long-term growth.', content: 'Full content goes here...', category: 'Branding', read_time: '5 min read', date: 'April 10, 2024', image_url: '/studio_about.png' },
  { slug: 'why-drone-footage-sells-real-estate', title: 'Why Drone Footage Is Now Essential for Real Estate Marketing', excerpt: 'Properties listed with professional aerial footage sell 68% faster and at higher prices. Here is why — and what you need to know before your next shoot.', content: 'Full content goes here...', category: 'Real Estate', read_time: '5 min read', date: 'March 28, 2024', image_url: '/hero_bg.png' },
];
const CAREER_ROLES = [
  {
    title: 'Photographer / Videographer',
    type: 'Full-Time',
    location: 'Mumbai (On-site)',
    description: 'We are looking for a versatile shooter who can seamlessly switch between capturing high-end stills and cinematic video content. You will be responsible for shooting on location and in-studio across various projects including weddings, corporate, and commercial work.',
  },
  {
    title: 'Senior Video Editor',
    type: 'Full-Time',
    location: 'Mumbai / Remote',
    description: 'Join our post-production team to craft compelling stories. You must have advanced proficiency in Premiere Pro and DaVinci Resolve. The ideal candidate has a strong sense of pacing, color grading, and audio mixing.',
  },
  {
    title: 'Social Media Manager',
    type: 'Full-Time',
    location: 'Mumbai (Hybrid)',
    description: 'We need a creative strategist who understands how to build community and drive engagement. You will manage content calendars, write copy, and develop social-first campaigns for our studio and our clients.',
  },
  {
    title: 'Brand Designer (Graphic)',
    type: 'Full-Time / Freelance',
    location: 'Remote',
    description: 'We are seeking a talented graphic designer with a strong portfolio in brand identity and digital design. You will work on client branding projects as well as internal marketing materials for DP Studios.',
  },
];

async function seed() {
  console.log('Seeding portfolio...');
  for (const item of PORTFOLIO_ITEMS) {
    const { error } = await supabase.from('portfolio').insert(item);
    if (error) console.error('Error inserting portfolio:', error.message);
  }
  console.log('Seeding blogs...');
  for (const item of BLOG_POSTS) {
    const { error } = await supabase.from('blogs').insert(item);
    if (error) console.error('Error inserting blog:', error.message);
  }
  console.log('Seeding careers...');
  for (const item of CAREER_ROLES) {
    const { error } = await supabase.from('careers').insert(item);
    if (error) console.error('Error inserting career:', error.message);
  }
  console.log('Done!');
}

seed();
