-- Run this in your Supabase SQL Editor to instantly populate your database with all the dummy items!
-- Since this runs directly in your database, it bypasses the security rules that blocked the automated script.

-- Insert Portfolio Items
INSERT INTO portfolio (title, category, tag, image_url, client, year) VALUES
('Event Coverage', 'Events', 'Photography', '/pic/C0CCD7E0-330B-4A2C-A2DC-C4568220F8DB.JPG', 'TN DP Studio 2.0', '2024'),
('Portrait Session', 'Portraits', 'Photography', '/pic/C859950A-63A7-4B4D-BF96-98E090B0B2CB.jpeg', 'TN DP Studio 2.0', '2024'),
('Candid Moments', 'Events', 'Photography', '/pic/IMG_0858.JPG', 'TN DP Studio 2.0', '2024'),
('Golden Hour Shoot', 'Portraits', 'Photography', '/pic/IMG_5857.JPG', 'TN DP Studio 2.0', '2024'),
('Creative Frames', 'Creative', 'Photography', '/pic/IMG_5858.JPG', 'TN DP Studio 2.0', '2024'),
('Lifestyle Photography', 'Creative', 'Photography', '/pic/IMG_5859.JPG', 'TN DP Studio 2.0', '2024'),
('Dynamic Capture', 'Events', 'Photography', '/pic/IMG_5867.JPG', 'TN DP Studio 2.0', '2024'),
('Outdoor Session', 'Portraits', 'Photography', '/pic/IMG_5870.JPG', 'TN DP Studio 2.0', '2024'),
('Vibrant Moments', 'Creative', 'Photography', '/pic/IMG_5873.JPG', 'TN DP Studio 2.0', '2024'),
('Studio Shoot', 'Portraits', 'Photography', '/pic/_DSC0773.JPG', 'TN DP Studio 2.0', '2024'),
('Professional Portrait', 'Portraits', 'Photography', '/pic/_DSC0790.JPG', 'TN DP Studio 2.0', '2024'),
('Artistic Vision', 'Creative', 'Photography', '/pic/_DSC0848.JPG', 'TN DP Studio 2.0', '2024'),
('Close-Up Details', 'Creative', 'Photography', '/pic/_DSC0852.JPG', 'TN DP Studio 2.0', '2024'),
('Cinematic Shot', 'Cinematic', 'Photography', '/pic/_DSC1065.JPG', 'TN DP Studio 2.0', '2024'),
('Premium Cinematic', 'Cinematic', 'Photography', '/pic/_DSC1131.JPG', 'TN DP Studio 2.0', '2024'),
('Story Frame', 'Cinematic', 'Photography', '/pic/_DSC1135.JPG', 'TN DP Studio 2.0', '2024'),
('Epic Composition', 'Cinematic', 'Photography', '/pic/_DSC1349.JPG', 'TN DP Studio 2.0', '2024'),
('Expressive Portrait', 'Portraits', 'Photography', '/pic/_DSC2243.JPG', 'TN DP Studio 2.0', '2024'),
('Natural Light Session', 'Portraits', 'Photography', '/pic/_DSC2247.JPG', 'TN DP Studio 2.0', '2024'),
('The Perfect Frame', 'Cinematic', 'Photography', '/pic/_DSC8542.JPG', 'TN DP Studio 2.0', '2024');

-- Insert Blog Posts
INSERT INTO blogs (slug, title, excerpt, content, category, read_time, date, image_url) VALUES
('how-to-plan-a-perfect-wedding-film', 'How to Plan the Perfect Wedding Film in 2024', 'From the first inquiry to the final delivery, we break down exactly what goes into creating a cinematic wedding film that you will cherish forever.', 'Full content goes here...', 'Weddings', '6 min read', 'June 18, 2024', '/portfolio_wedding.png'),
('product-photography-tips-for-ecommerce', '10 Product Photography Tips That Boost E-commerce Sales', 'Great product photos can increase conversion rates by up to 30%. Here are the techniques our studio uses to make every product look its absolute best.', 'Full content goes here...', 'Photography', '8 min read', 'May 30, 2024', '/portfolio_product.png'),
('social-media-content-strategy-for-restaurants', 'A Complete Social Media Strategy for Restaurants in 2024', 'Restaurants that post consistently and with high-quality visuals see 3x more foot traffic from social media. Here is our proven approach.', 'Full content goes here...', 'Digital Marketing', '10 min read', 'May 12, 2024', '/portfolio_restaurant.png'),
('behind-the-scenes-corporate-brand-film', 'Behind the Scenes: Creating a Corporate Brand Film', 'We take you through the full production process of a corporate documentary — from pre-production planning to the colour-graded final cut.', 'Full content goes here...', 'Videography', '7 min read', 'April 25, 2024', '/bts_videographer.png'),
('branding-vs-marketing-whats-the-difference', 'Branding vs. Marketing: What Every Business Owner Needs to Know', 'Many businesses confuse branding with marketing. Understanding the difference — and how they work together — is the foundation of long-term growth.', 'Full content goes here...', 'Branding', '5 min read', 'April 10, 2024', '/studio_about.png'),
('why-drone-footage-sells-real-estate', 'Why Drone Footage Is Now Essential for Real Estate Marketing', 'Properties listed with professional aerial footage sell 68% faster and at higher prices. Here is why — and what you need to know before your next shoot.', 'Full content goes here...', 'Real Estate', '5 min read', 'March 28, 2024', '/hero_bg.png');

-- Insert Careers
INSERT INTO careers (title, type, location, description) VALUES
('Photographer / Videographer', 'Full-Time', 'Mumbai (On-site)', 'We are looking for a versatile shooter who can seamlessly switch between capturing high-end stills and cinematic video content. You will be responsible for shooting on location and in-studio across various projects including weddings, corporate, and commercial work.'),
('Senior Video Editor', 'Full-Time', 'Mumbai / Remote', 'Join our post-production team to craft compelling stories. You must have advanced proficiency in Premiere Pro and DaVinci Resolve. The ideal candidate has a strong sense of pacing, color grading, and audio mixing.'),
('Social Media Manager', 'Full-Time', 'Mumbai (Hybrid)', 'We need a creative strategist who understands how to build community and drive engagement. You will manage content calendars, write copy, and develop social-first campaigns for our studio and our clients.'),
('Brand Designer (Graphic)', 'Full-Time / Freelance', 'Remote', 'We are seeking a talented graphic designer with a strong portfolio in brand identity and digital design. You will work on client branding projects as well as internal marketing materials for DP Studios.');
