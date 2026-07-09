import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/ui/PageHero';
import { SERVICES } from '../data/content';
import { Camera, Video, Scissors, Smartphone, TrendingUp, Palette, ChevronDown, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  videoshoot: Video,
  videoediting: Scissors,
  socialmedia: Smartphone,
  graphicdesign: Palette,
};

function FAQAccordion({ faqs }: { faqs: { question: string, answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} style={{
            background: '#fff',
            borderRadius: '12px',
            border: '1px solid var(--c-border)',
            overflow: 'hidden',
          }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', fontWeight: 600, color: 'var(--c-charcoal)', margin: 0 }}>
                {faq.question}
              </h4>
              <ChevronDown 
                size={20} 
                style={{ 
                  color: 'var(--c-gold)', 
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }} 
              />
            </button>
            <div style={{
              height: isOpen ? 'auto' : 0,
              overflow: 'hidden',
              padding: isOpen ? '0 1.5rem 1.5rem' : '0 1.5rem',
              color: 'var(--c-gray)',
              fontFamily: "'Inter', sans-serif",
              lineHeight: 1.6,
            }}>
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ServiceDetailPage() {
  const { id } = useParams();
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  useSEO({
    title: `${service.title} Services — TN DP Studio 2.0`,
    description: service.shortDesc,
    keywords: `${service.title.toLowerCase()}, creative services, tn dp studio 2.0`,
    canonical: `https://dpstudios.in/services/${service.id}`,
    ogImage: service.image,
  });

  const IconComponent = iconMap[service.id];

  return (
    <main>
      <PageHero
        label="Service Detail"
        title={service.title}
        subtitle={service.shortDesc}
        breadcrumb={service.title}
      />

      {/* Overview & Benefits Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
            
            {/* Left Col: Overview */}
            <div>
              <div style={{
                width: 64, height: 64,
                background: 'var(--c-gold-bg)',
                borderRadius: '16px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '2rem', color: 'var(--c-gold)'
              }}>
                {IconComponent && <IconComponent size={32} strokeWidth={1.5} />}
              </div>
              <h2 className="heading-lg" style={{ marginBottom: '1.5rem' }}>Service Overview</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--c-gray)', marginBottom: '2rem' }}>
                {service.longDescription || service.description}
              </p>
              
              <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                Request This Service
              </Link>
            </div>

            {/* Right Col: Benefits & Features */}
            <div>
              <div style={{ background: 'var(--c-light)', padding: '2.5rem', borderRadius: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '1.5rem' }}>
                  Key Benefits
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  {service.benefits.map(b => (
                    <div key={b.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={24} style={{ color: 'var(--c-gold)', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '0.25rem' }}>{b.title}</h4>
                        <p style={{ color: 'var(--c-gray)', fontSize: '0.95rem', lineHeight: 1.5 }}>{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ height: '1px', background: 'var(--c-border)', margin: '2rem 0' }}></div>

                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '1rem' }}>
                  What's Included
                </h3>
                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', padding: 0 }}>
                  {service.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--c-gray)' }}>
                      <span style={{ color: 'var(--c-gold)', fontWeight: 'bold' }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Image / Gallery (Optional visual break) */}
      <section style={{ padding: '0 1rem', marginBottom: '6rem' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ borderRadius: '24px', overflow: 'hidden', aspectRatio: '21/9', boxShadow: 'var(--shadow-lg)' }}>
            <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: '6rem 0', background: 'var(--c-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>How It Works</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Our Process</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {service.process.map((p, idx) => (
              <div key={p.step} style={{ position: 'relative', background: '#fff', padding: '2.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: '3.5rem', 
                  fontWeight: 800, 
                  color: 'rgba(184, 151, 46, 0.1)', // Light gold transparent
                  position: 'absolute',
                  top: '1rem',
                  right: '1.5rem',
                  lineHeight: 1
                }}>
                  {p.step}
                </div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--c-charcoal)', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                  {p.title}
                </h3>
                <p style={{ color: 'var(--c-gray)', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Got Questions?</div>
              <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Frequently Asked Questions</h2>
            </div>
            
            <FAQAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--c-charcoal)', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--c-gold)' }}>Ready to start?</div>
          <h2 className="heading-lg" style={{ marginTop: '0.625rem', marginBottom: '1.25rem', color: '#fff' }}>
            Let's Discuss Your {service.title} Needs
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 2rem', fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}>
            Tell us about your project requirements and we'll get back to you with a detailed scope and pricing within 24 hours.
          </p>
          <Link to="/contact" className="btn btn-gold">Contact Us Today</Link>
        </div>
      </section>
    </main>
  );
}
