import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/ui/PageHero';
import { SERVICES } from '../data/content';
import { Video, Scissors, Smartphone, Palette } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  videoshoot: Video,
  videoediting: Scissors,
  socialmedia: Smartphone,
  graphicdesign: Palette,
};

export default function ServicesPage() {
  const { hash } = useLocation();

  useSEO({
    title: 'Our Services — Photography, Videography & Marketing',
    description: 'Explore DP Studios full suite of services: Commercial photography, cinematic videography, professional editing, social media management, and digital marketing.',
    keywords: 'photography services, videography services, digital marketing agency, social media management mumbai',
    canonical: 'https://dpstudios.in/services',
  });

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <main>
      <PageHero
        label="Our Expertise"
        title="Comprehensive Creative Solutions"
        subtitle="We provide end-to-end creative production and digital marketing services to help your brand grow."
        breadcrumb="Services"
      />

      {/* ── Services Detail ─────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {SERVICES.map((s, index) => {
            const IconComponent = iconMap[s.id];
            return (
            <div key={s.id} id={s.id} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
              paddingTop: '2rem',
              borderTop: index !== 0 ? '1px solid var(--c-border)' : 'none',
              scrollMarginTop: '100px', 
            }}>
              {/* Order swapped on even rows for desktop */}
              <div style={{ order: index % 2 === 1 ? 2 : 1 }} className={`service-text order-${index % 2}`}>
                <div style={{
                  width: 56, height: 56,
                  background: 'var(--c-gold-bg)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.5rem', color: 'var(--c-gold)'
                }}>{IconComponent && <IconComponent size={28} strokeWidth={1.5} />}</div>
                
                <h2 className="heading-md" style={{ marginBottom: '1rem' }}>{s.title}</h2>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem', color: 'var(--c-gray)' }}>
                  {s.description}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--c-charcoal)', marginBottom: '0.875rem' }}>
                    What We Do
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {s.features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--c-gray)' }}>
                        <span style={{ color: 'var(--c-gold)' }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={`/services/${s.id}`} className="btn btn-primary">
                  Learn More
                </Link>
              </div>

              <div style={{ order: index % 2 === 1 ? 1 : 2 }} className={`service-img order-${(index + 1) % 2}`}>
                <div style={{ borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: 'var(--c-charcoal)', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--c-gold)' }}>Ready to start?</div>
          <h2 className="heading-lg" style={{ marginTop: '0.625rem', marginBottom: '1.25rem', color: '#fff' }}>
            Get a Customized Proposal
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 2rem', fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}>
            Tell us about your project requirements and we'll get back to you with a detailed scope and pricing within 24 hours.
          </p>
          <Link to="/contact" className="btn btn-gold">Contact Us Today</Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-text { order: 2 !important; }
          .service-img { order: 1 !important; }
        }
      `}</style>
    </main>
  );
}
