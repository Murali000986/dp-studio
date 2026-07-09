import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/ui/PageHero';
import { BLOG_POSTS } from '../data/content';
import { Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function BlogPage() {
  useSEO({
    title: 'Blog — Insights on Photography, Video & Marketing',
    description: 'Read the latest insights, tips, and behind-the-scenes stories from the DP Studios creative team.',
    keywords: 'photography blog, videography tips, digital marketing insights',
    canonical: 'https://dpstudios.in/blog',
  });

  const [blogs, setBlogs] = useState<any[]>(BLOG_POSTS);

  useEffect(() => { 
    window.scrollTo(0, 0); 
    
    async function fetchBlogs() {
      try {
        const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        if (data && data.length > 0) {
          setBlogs(data);
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    }
    fetchBlogs();
  }, []);

  const [featured, ...rest] = blogs;

  // Make sure we have at least one featured post to display
  if (!featured) return <main><div style={{ padding: '5rem', textAlign: 'center' }}>Loading blogs...</div></main>;

  return (
    <main>
      <PageHero
        label="Our Journal"
        title="Insights & Stories"
        subtitle="Thoughts, tips, and behind-the-scenes looks from our team of photographers, filmmakers, and strategists."
        breadcrumb="Blog"
      />

      <section style={{ padding: '5rem 0', background: '#F8F9FA' }}>
        <div className="container">

          {/* Featured post */}
          <Link to={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: '3rem' }}>
            <article style={{
              background: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #E5E7EB',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.10)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
            >
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src={featured.image_url || featured.image}
                  alt={featured.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
                />
              </div>
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span style={{ background: '#FFFBEB', color: '#B8972E', border: '1px solid #F0D060', padding: '0.2rem 0.75rem', borderRadius: '50px', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Inter', sans-serif" }}>
                    Featured
                  </span>
                  <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{featured.category}</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', color: '#111827', lineHeight: 1.25, marginBottom: '1rem' }}>
                  {featured.title}
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                  {featured.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: '#9CA3AF' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Clock size={14} /> {featured.read_time || featured.readTime}
                  </span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span style={{ marginLeft: 'auto', color: '#B8972E', fontWeight: 600 }}>Read More →</span>
                </div>
              </div>
            </article>
          </Link>

          {/* Grid of remaining posts */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1.75rem',
          }}>
            {rest.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id} style={{ textDecoration: 'none' }}>
                <article style={{
                  background: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E5E7EB',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(0,0,0,0.09)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; }}
                >
                  <div style={{ aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={post.image_url || post.image}
                      alt={post.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', top: '0.875rem', left: '0.875rem' }}>
                      <span className="badge badge-gold" style={{ fontSize: '0.68rem' }}>{post.category}</span>
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.15rem',
                      color: '#111827',
                      lineHeight: 1.35,
                      marginBottom: '0.6rem',
                    }}>{post.title}</h3>

                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      color: '#6B7280',
                      lineHeight: 1.65,
                      marginBottom: '1.25rem',
                      flex: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    } as React.CSSProperties}>{post.excerpt}</p>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid #E5E7EB',
                      paddingTop: '0.875rem',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.8rem',
                      color: '#9CA3AF',
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={13} /> {post.read_time || post.readTime}
                      </span>
                      <span style={{ color: '#B8972E', fontWeight: 600 }}>Read More →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
