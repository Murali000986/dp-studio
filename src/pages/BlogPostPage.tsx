import { useParams, Navigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSEO } from '../hooks/useSEO';
import { BLOG_POSTS } from '../data/content';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useSEO({
    title: post.title,
    description: post.excerpt,
    ogImage: post.image,
    canonical: `https://dpstudios.in/blog/${post.slug}`,
  });

  return (
    <main style={{ paddingTop: '80px', background: 'var(--c-off-white)' }}>
      {/* Article Header */}
      <header style={{ padding: '4rem 0 3rem', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}>{post.category}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--c-gray)', fontFamily: "'Inter', sans-serif" }}>{post.date}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--c-light-gray)' }}>•</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--c-gray)', fontFamily: "'Inter', sans-serif" }}>{post.readTime}</span>
          </div>
          
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            color: 'var(--c-charcoal)',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}>{post.title}</h1>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container" style={{ maxWidth: 1000, marginBottom: '4rem' }}>
        <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/7', boxShadow: 'var(--shadow-md)' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* Article Content - placeholder text for demo */}
      <article className="container" style={{ maxWidth: 720, paddingBottom: '6rem' }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.1rem',
          lineHeight: 1.8,
          color: 'var(--c-dark)',
        }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--c-gray)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
          
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: 'var(--c-charcoal)', marginTop: '3rem', marginBottom: '1rem' }}>
            Understanding the Foundation
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p style={{ marginBottom: '2.5rem' }}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <blockquote style={{
            borderLeft: '4px solid var(--c-gold)',
            paddingLeft: '1.5rem',
            margin: '2.5rem 0',
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.5rem',
            fontStyle: 'italic',
            color: 'var(--c-charcoal)',
            lineHeight: 1.4,
          }}>
            "Quality is never an accident; it is always the result of high intention, sincere effort, intelligent direction and skillful execution."
          </blockquote>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: 'var(--c-charcoal)', marginTop: '3rem', marginBottom: '1rem' }}>
            Execution Strategy
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Planning:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</li>
            <li><strong>Production:</strong> Aut odit aut fugit, sed quia consequuntur magni dolores.</li>
            <li><strong>Post-Production:</strong> Neque porro quisquam est, qui dolorem ipsum quia dolor.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
        </div>

        {/* Share & Back */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--c-border)',
          marginTop: '4rem',
          paddingTop: '2rem',
        }}>
          <Link to="/blog" style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9rem',
            color: 'var(--c-mid)', textDecoration: 'none',
          }}>
            ← Back to Articles
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--c-gray)' }}>Share:</span>
            <button style={{ color: 'var(--c-mid)', cursor: 'pointer' }}>FB</button>
            <button style={{ color: 'var(--c-mid)', cursor: 'pointer' }}>TW</button>
            <button style={{ color: 'var(--c-mid)', cursor: 'pointer' }}>IN</button>
          </div>
        </div>
      </article>
    </main>
  );
}
