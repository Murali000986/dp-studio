import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/ui/PageHero';
import { TEAM } from '../data/content';

const values = [
  { icon: '🎯', title: 'Client-First', desc: 'Every decision we make is driven by what delivers the best outcome for your business — not what is easiest for us.' },
  { icon: '💎', title: 'Quality Without Compromise', desc: 'We use cinema-grade equipment and rigorous quality checks on every project, regardless of budget.' },
  { icon: '🤝', title: 'Complete Transparency', desc: 'Clear contracts, honest timelines, and no surprise invoices. You always know exactly what to expect.' },
  { icon: '⚡', title: 'Speed & Reliability', desc: 'We meet deadlines because we build realistic timelines from the start and communicate proactively.' },
  { icon: '🌱', title: 'Continuous Growth', desc: 'Our team invests in training, new equipment, and industry knowledge every year — so our work stays current.' },
  { icon: '🏆', title: 'Results-Oriented', desc: 'Beautiful work is meaningless without results. We measure the impact of every project we deliver.' },
];

const milestones = [
  { year: '2019', title: 'Studio Founded', desc: 'Deepak Patel and Meera Iyer started DP Studios with two cameras and a single freelance client.' },
  { year: '2020', title: 'First Brand Film', desc: 'Produced our first corporate brand film for a Mumbai-based fintech company, earning our first testimonial.' },
  { year: '2021', title: 'Digital Marketing Division', desc: 'Launched our social media and digital marketing services, expanding from production to full-service creative.' },
  { year: '2022', title: '50 Clients Milestone', desc: 'Crossed 50 clients served across photography, video, and marketing — hired our first full-time team members.' },
  { year: '2023', title: 'Studio Expansion', desc: 'Moved into a dedicated 1,200 sq ft studio space in Andheri West with two fully equipped shooting bays.' },
  { year: '2024', title: '100+ Clients & Growing', desc: 'Now a team of 12, managing 500+ projects across India and handling brands in multiple industries.' },
];

export default function AboutPage() {
  useSEO({
    title: 'About Us — Our Story, Team & Values',
    description: 'Learn about DP Studios — a full-service creative studio founded in Mumbai in 2019. Meet our team, understand our values, and see how we\'ve grown to serve 100+ clients across India.',
    keywords: 'about dp studios, photography studio team, mumbai creative agency, studio story',
    canonical: 'https://dpstudios.in/about',
  });

  return (
    <main>
      <PageHero
        label="About the Studio"
        title="A Creative Studio Built on Results"
        subtitle="Founded in 2019, we've grown from a two-person photography team into a full-service creative agency trusted by 100+ brands across India."
        image="/studio_about.png"
        breadcrumb="About"
      />

      {/* ── Mission ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}>
            <div>
              <div className="section-label">Our Mission</div>
              <h2 className="heading-lg" style={{ marginTop: '0.625rem', marginBottom: '1.25rem' }}>
                We Make Great Brands Impossible to Ignore
              </h2>
              <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
                In a world of infinite content, attention is the scarcest resource. Our mission is to help businesses earn it — through photography, film, and digital strategy that is genuinely excellent.
              </p>
              <p style={{ lineHeight: 1.8, color: 'var(--c-gray)', fontSize: '0.95rem' }}>
                We are not a mass-production studio. We work with a carefully selected number of clients at any given time so that every project gets the senior-level attention it deserves.
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {[
                { n: '500+', l: 'Projects Delivered' },
                { n: '100+', l: 'Clients Served' },
                { n: '5M+', l: 'Content Views' },
                { n: '4.9★', l: 'Average Rating' },
              ].map(s => (
                <div key={s.l} style={{
                  background: 'var(--c-off-white)',
                  border: '1px solid var(--c-border)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '2rem', color: 'var(--c-charcoal)' }}>{s.n}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--c-gray)', marginTop: '0.25rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--c-off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Values</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>What We Stand For</h2>
          </div>
          <div className="grid-3">
            {values.map(v => (
              <div key={v.title} style={{
                background: 'var(--c-white)',
                border: '1px solid var(--c-border)',
                borderRadius: '12px',
                padding: '1.75rem',
              }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', color: 'var(--c-charcoal)', marginBottom: '0.625rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'var(--c-gray)', lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>The People</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Meet the Core Team</h2>
            <p style={{ maxWidth: 520, margin: '1rem auto 0', fontSize: '1rem' }}>
              A small, senior team — every client project is handled directly by experienced professionals, not passed down to juniors.
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}>
            {TEAM.map(member => (
              <div key={member.name} style={{
                background: 'var(--c-white)',
                border: '1px solid var(--c-border)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                  <img src={member.avatar} alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: 'var(--c-charcoal)', marginBottom: '0.2rem' }}>
                    {member.name}
                  </h3>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: 'var(--c-gold)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {member.role}
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--c-gray)', lineHeight: 1.65 }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--c-off-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Journey</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Five Years of Growth</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '5.25rem',
              top: 0, bottom: 0,
              width: 2,
              background: 'var(--c-border)',
            }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {milestones.map((m, i) => (
                <div key={m.year} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: '4.5rem',
                    textAlign: 'right',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--c-gold)',
                    paddingTop: '0.1rem',
                  }}>{m.year}</div>
                  {/* Dot */}
                  <div style={{
                    flexShrink: 0,
                    width: 14, height: 14,
                    borderRadius: '50%',
                    background: i === milestones.length - 1 ? 'var(--c-gold)' : 'var(--c-white)',
                    border: '2px solid var(--c-gold)',
                    marginTop: '0.15rem',
                    position: 'relative',
                    zIndex: 1,
                  }} />
                  <div style={{
                    background: 'var(--c-white)',
                    border: '1px solid var(--c-border)',
                    borderRadius: '10px',
                    padding: '1rem 1.25rem',
                    flex: 1,
                    boxShadow: 'var(--shadow-sm)',
                  }}>
                    <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: 'var(--c-charcoal)', marginBottom: '0.35rem' }}>
                      {m.title}
                    </h4>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--c-gray)', lineHeight: 1.65 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--c-charcoal)', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--c-gold)' }}>Work With Us</div>
          <h2 className="heading-lg" style={{ marginTop: '0.625rem', marginBottom: '1.25rem', color: '#fff' }}>
            Let's Build Something Great Together
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 2rem', fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}>
            Whether you need a single photoshoot or a full ongoing creative partnership, we'd love to hear about your project.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-gold">Get a Free Quote</Link>
            <Link to="/portfolio" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
