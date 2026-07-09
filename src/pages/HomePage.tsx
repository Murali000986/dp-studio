import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSEO } from '../hooks/useSEO';
import useCounter from '../hooks/useCounter';
import { SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS, STATS } from '../data/content';
import { Video, Scissors, Smartphone, Palette, Star } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  videoshoot: Video,
  videoediting: Scissors,
  socialmedia: Smartphone,
  graphicdesign: Palette,
};

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ value, suffix, label, delay, light }: { value: number; suffix: string; label: string; delay: number; light?: boolean }) {
  const { count, ref } = useCounter(value, 2000);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}
      style={{ textAlign: 'center', animation: `fadeUp 0.6s ease ${delay}s both` }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700,
        fontSize: 'clamp(3rem, 6vw, 4rem)',
        color: light ? '#FFFFFF' : 'var(--c-charcoal)',
        lineHeight: 1,
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.85rem',
        color: light ? 'var(--c-light-gray)' : 'var(--c-gray)',
        marginTop: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}>{label}</div>
    </div>
  );
}

// ── Testimonial Slider ────────────────────────────────────────────────────────
function TestimonialSlider() {
  const [active, setActive] = React.useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const reset = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive(p => (p + 1) % TESTIMONIALS.length), 4500);
  };

  useEffect(() => { reset(); return () => clearInterval(timerRef.current); }, []);

  const t = TESTIMONIALS[active];
  return (
    <div>
      <div style={{
        background: 'var(--c-white)',
        border: '1px solid var(--c-border)',
        borderRadius: '16px',
        padding: 'clamp(1.75rem, 4vw, 2.75rem)',
        boxShadow: 'var(--shadow-sm)',
        position: 'relative',
        minHeight: 240,
      }}>
        {/* Quote mark */}
        <div style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.75rem',
          fontFamily: "'Playfair Display', serif",
          fontSize: '5rem',
          color: 'var(--c-gold-light)',
          lineHeight: 1,
        }}>"</div>

        {/* Stars */}
        <div style={{ display: 'flex', gap: '2px', marginBottom: '1rem' }}>
          {Array.from({ length: t.stars }).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#B8972E">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>

        <blockquote style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
          color: 'var(--c-mid)',
          lineHeight: 1.8,
          fontStyle: 'italic',
          marginBottom: '1.5rem',
        }}>"{t.quote}"</blockquote>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <img src={t.avatar} alt={t.name} style={{
            width: 48, height: 48, borderRadius: '50%', objectFit: 'cover',
            border: '2px solid var(--c-border)',
          }} />
          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'var(--c-charcoal)' }}>{t.name}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--c-gray)' }}>{t.title}</div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '1.25rem' }}>
        {TESTIMONIALS.map((_, i) => (
          <button key={i} id={`testimonial-dot-${i}`} onClick={() => { setActive(i); reset(); }}
            style={{
              width: active === i ? 24 : 8, height: 8,
              borderRadius: 4,
              background: active === i ? 'var(--c-gold)' : 'var(--c-border)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.35s ease',
              padding: 0,
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import React from 'react';

// ── Main Home Page ────────────────────────────────────────────────────────────
export default function HomePage() {
  useSEO({
    title: 'Premium Photography, Videography & Digital Marketing Studio',
    description: 'DP Studios is Mumbai\'s leading creative studio offering photography, videography, video editing, social media management, and digital marketing. Get a free quote today.',
    keywords: 'photography studio mumbai, videography, wedding photography, product photography, digital marketing, social media management',
    ogImage: '/hero_bg.png',
    canonical: 'https://dpstudios.in/',
  });

  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section id="hero" style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        paddingTop: '5rem',
        background: 'var(--c-white)',
        overflow: 'hidden',
      }}
        className="hero-grid">
        {/* Left */}
        <div className="container hero-left" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: 560 }}>


            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 'clamp(2.4rem, 5.5vw, 4rem)',
              color: 'var(--c-charcoal)',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}>
              We Create Visuals That
              <span style={{ color: 'var(--c-gold)', display: 'block' }}>
                Build Brands.
              </span>
            </h1>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1rem, 1.8vw, 1.1rem)',
              color: 'var(--c-gray)',
              lineHeight: 1.8,
              marginBottom: '2rem',
              maxWidth: 480,
            }}>
              A full-service creative studio specialising in photography, cinematic videography, and digital marketing for businesses that want to stand out.
            </p>

            {/* Services inline tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {['Photography', 'Videography', 'Video Editing', 'Social Media', 'Marketing'].map(s => (
                <span key={s} className="badge badge-gray" style={{ fontSize: '0.75rem' }}>{s}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <Link to="/contact" id="hero-cta-primary" className="btn btn-primary">
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link to="/portfolio" id="hero-cta-portfolio" className="btn btn-outline">
                View Our Work
              </Link>
            </div>

            {/* Trust signals */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingTop: '1.75rem',
              borderTop: '1px solid var(--c-border)',
            }}>
              {[
                { n: '500+', l: 'Projects Done' },
                { n: '100+', l: 'Happy Clients' },
                { n: '5 yrs', l: 'In Business' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: 'var(--c-charcoal)' }}>{s.n}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--c-gray)', fontFamily: "'Inter', sans-serif" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — image mosaic */}
        <div style={{ position: 'relative', height: '100%', minHeight: '100vh', overflow: 'hidden' }}
          className="hero-right">
          <img src="/hero_bg.png" alt="DP Studios photography session"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(270deg, transparent 60%, rgba(255,255,255,0.95) 100%)',
          }} />

          {/* Floating card */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            background: '#fff',
            borderRadius: '12px',
            padding: '1rem 1.25rem',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            maxWidth: 260,
          }}>
            <div style={{
              width: 44, height: 44,
              background: 'var(--c-gold-bg)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0, color: '#B8972E'
            }}><Star fill="currentColor" size={20} /></div>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.9rem', color: 'var(--c-charcoal)' }}>
                4.9 / 5 Rating
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'var(--c-gray)' }}>
                Across 100+ client reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Preview ──────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--c-off-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div className="section-label">What We Offer</div>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Our Services</h2>
            </div>
            <Link to="/services" className="btn btn-outline btn-sm">
              All Services →
            </Link>
          </div>

          <div className="grid-3">
            {SERVICES.map((s) => {
              const IconComponent = iconMap[s.id];
              return (
              <Link to={`/services/${s.id}`} key={s.id}
                style={{ textDecoration: 'none' }}>
                <article className="card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    width: 52, height: 52,
                    background: 'var(--c-gold-bg)',
                    borderRadius: '12px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.25rem', color: 'var(--c-gold)'
                  }}>{IconComponent && <IconComponent size={24} strokeWidth={1.5} />}</div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700, fontSize: '1.15rem',
                    color: 'var(--c-charcoal)',
                    marginBottom: '0.625rem',
                  }}>{s.title}</h3>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem', color: 'var(--c-gray)',
                    lineHeight: 1.7, flex: 1,
                  }}>{s.shortDesc}</p>
                  <div style={{
                    marginTop: '1.25rem',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--c-gold)',
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                  }}>Learn more →</div>
                </article>
              </Link>
            );
            })}
          </div>
        </div>
      </section>

      {/* ── About Strip ───────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3' }}>
                <img src="/studio_about.png" alt="Inside DP Studios" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-1rem',
                right: '-1rem',
                background: 'var(--c-gold)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                color: '#fff',
                boxShadow: 'var(--shadow-md)',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '2rem', lineHeight: 1 }}>5+</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, marginTop: '0.2rem' }}>Years of<br />Excellence</div>
              </div>
            </div>

            <div>
              <div className="section-label">About the Studio</div>
              <h2 className="heading-lg" style={{ marginTop: '0.625rem', marginBottom: '1.25rem' }}>
                More Than a Studio —<br />Your Creative Partner
              </h2>
              <p style={{ marginBottom: '1rem', fontSize: '1rem', lineHeight: 1.8 }}>
                Founded in 2019 in Mumbai, DP Studios has grown from a two-person photography team into a full-service creative agency serving 100+ clients across India.
              </p>
              <p style={{ marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--c-gray)' }}>
                We combine technical excellence with strategic thinking — every image, film, and campaign we produce is designed to achieve real business outcomes for our clients.
              </p>
              <Link to="/about" className="btn btn-primary">
                Our Story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ─────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--c-off-white)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <div className="section-label">Our Work</div>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Recent Projects</h2>
            </div>
            <Link to="/portfolio" className="btn btn-outline btn-sm">View All →</Link>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1rem',
          }}>
            {PORTFOLIO_ITEMS.slice(0, 4).map(item => (
              <Link to="/portfolio" key={item.id} style={{ textDecoration: 'none' }}>
                <article style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  position: 'relative',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'block',
                }}>
                  <div className="img-overlay" style={{ width: '100%', height: '100%' }}>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '1rem 1.25rem',
                    background: 'linear-gradient(0deg, rgba(17,24,39,0.85) 0%, transparent 100%)',
                  }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#B8972E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
                      {item.tag}
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.9rem', color: '#fff' }}>
                      {item.title}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: 'var(--c-charcoal)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem 2rem',
          }}>
            {STATS.map((s, i) => (
              <div key={s.label}>
                <StatCard value={s.value} suffix={s.suffix} label={s.label} delay={i * 0.1} light={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--c-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Client Reviews</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>What Our Clients Say</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* ── Process strip ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--c-off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Simple, Transparent Process</h2>
          </div>
          <div className="grid-4">
            {[
              { n: '01', title: 'Brief & Discovery', desc: 'We understand your goals, audience, and vision through a detailed discovery call.' },
              { n: '02', title: 'Planning & Proposal', desc: 'We send a clear scope, timeline, and transparent pricing within 24 hours.' },
              { n: '03', title: 'Production', desc: 'Our team executes with precision — on schedule, on brand, on budget.' },
              { n: '04', title: 'Delivery & Support', desc: 'You receive final files with a 14-day revision window and ongoing support.' },
            ].map(step => (
              <div key={step.n} style={{
                background: 'var(--c-white)',
                border: '1px solid var(--c-border)',
                borderRadius: '12px',
                padding: '1.75rem',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--c-gold-light)',
                  lineHeight: 1,
                  marginBottom: '1rem',
                }}>{step.n}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'var(--c-charcoal)', marginBottom: '0.625rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'var(--c-gray)', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Tease ────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <div className="section-label">Latest Insights</div>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>From the Blog</h2>
            </div>
            <Link to="/blog" className="btn btn-outline btn-sm">All Articles →</Link>
          </div>

          <div className="grid-3">
            {[
              { slug: 'how-to-plan-a-perfect-wedding-film', title: 'How to Plan the Perfect Wedding Film in 2024', cat: 'Weddings', img: '/portfolio_wedding.png', date: 'June 18, 2024' },
              { slug: 'product-photography-tips-for-ecommerce', title: '10 Product Photography Tips That Boost Sales', cat: 'Photography', img: '/portfolio_product.png', date: 'May 30, 2024' },
              { slug: 'social-media-content-strategy-for-restaurants', title: 'Social Media Strategy for Restaurants in 2024', cat: 'Marketing', img: '/portfolio_restaurant.png', date: 'May 12, 2024' },
            ].map(post => (
              <Link to={`/blog/${post.slug}`} key={post.slug} style={{ textDecoration: 'none' }}>
                <article className="card">
                  <div className="img-overlay" style={{ aspectRatio: '16/9' }}>
                    <img src={post.img} alt={post.title} />
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span className="badge badge-gold" style={{ fontSize: '0.7rem' }}>{post.cat}</span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--c-light-gray)', fontFamily: "'Inter', sans-serif" }}>{post.date}</span>
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: '1.1rem',
                      color: 'var(--c-charcoal)',
                      lineHeight: 1.4,
                    }}>{post.title}</h3>
                    <div style={{ marginTop: '1rem', fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--c-gold)', fontWeight: 600 }}>
                      Read article →
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-right { min-height: 50vw !important; }
          .hero-left { padding-top: 6rem !important; }
        }
        [data-stats] .StatCard div:first-child { color: white !important; }
      `}</style>
    </main>
  );
}
