import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/ui/PageHero';
import { SITE } from '../data/content';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useSEO({
    title: 'Contact Us — Get a Free Quote',
    description: 'Ready to start your project? Contact DP Studios in Mumbai for a free consultation and customized quote.',
    keywords: 'contact dp studios, photography quote, videography pricing',
    canonical: 'https://dpstudios.in/contact',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <main>
      <PageHero
        label="Get in touch"
        title="Let's Discuss Your Project"
        subtitle="Fill out the form below or reach out directly. We aim to respond to all inquiries within 24 hours."
        breadcrumb="Contact"
      />

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
          }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: 'var(--c-charcoal)', marginBottom: '1.5rem' }}>
                Contact Information
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { l: 'Phone / WhatsApp', v: SITE.phone, icon: '📞' },
                  { l: 'Email Address', v: SITE.email, icon: '✉️' },
                  { l: 'Studio Location', v: SITE.address, icon: '📍' },
                ].map(info => (
                  <div key={info.l} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 44, height: 44,
                      background: 'var(--c-off-white)',
                      border: '1px solid var(--c-border)',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.1rem',
                    }}>{info.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--c-gray)', marginBottom: '0.2rem' }}>{info.l}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: 'var(--c-charcoal)' }}>{info.v}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div style={{
                background: 'var(--c-off-white)',
                border: '1px solid var(--c-border)',
                borderRadius: '12px',
                aspectRatio: '16/9',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--c-gray)', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem',
              }}>
                [ Google Maps Integration ]
              </div>
            </div>

            {/* Form */}
            <div style={{
              background: 'var(--c-white)',
              border: '1px solid var(--c-border)',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-md)',
            }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: 'var(--c-charcoal)', marginBottom: '1.5rem' }}>
                Send us a message
              </h3>

              {status === 'success' ? (
                <div style={{
                  padding: '2rem', background: 'var(--c-gold-bg)', border: '1px solid #F0D060', borderRadius: '12px', textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: 'var(--c-charcoal)', marginBottom: '0.5rem' }}>Message Sent!</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--c-gray)' }}>
                    Thank you for reaching out. We will get back to you within 24 hours.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn btn-outline btn-sm" style={{ marginTop: '1.5rem' }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="grid-4" style={{ gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input type="text" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-input" />
                    </div>
                  </div>
                  
                  <div className="grid-4" style={{ gap: '1.25rem' }}>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-input" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Service Interested In *</label>
                    <select className="form-input" required>
                      <option value="">Select a service...</option>
                      <option value="photography">Photography</option>
                      <option value="videography">Videography</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="other">Multiple / Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Details *</label>
                    <textarea className="form-input" placeholder="Tell us about your brand, goals, and timeline..." required></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem' }} disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                  <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--c-gray)', marginTop: '0.5rem' }}>
                    Your information is secure and will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
