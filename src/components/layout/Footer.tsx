import { Link } from 'react-router-dom';
import { SITE } from '../../data/content';
import { Phone, MessageCircle, Mail, MapPin, Camera } from 'lucide-react';

const serviceLinks = [
  { label: 'Video Shoot',          href: '/services/videoshoot' },
  { label: 'Video Editing',        href: '/services/videoediting' },
  { label: 'Social Media',         href: '/services/socialmedia' },
  { label: 'Graphic Design',       href: '/services/graphicdesign' },
];

const quickLinks = [
  { label: 'Home',       href: '/' },
  { label: 'About Us',   href: '/about' },
  { label: 'Portfolio',  href: '/portfolio' },
  { label: 'Blog',       href: '/blog' },
  { label: 'Careers',    href: '/careers' },
  { label: 'Contact',    href: '/contact' },
];

const socials = [
  { label: 'Instagram', href: SITE.instagram, icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )},
  { label: 'YouTube', href: SITE.youtube, icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  )},
  { label: 'LinkedIn', href: SITE.linkedin, icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )},
  { label: 'Facebook', href: SITE.facebook, icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )},
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: 'var(--c-charcoal)', color: '#e5e7eb' }}>

      {/* CTA Strip */}
      <div style={{
        background: 'var(--c-gold)',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
      }}>
        <div className="container" style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
        }}>
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: '1.5rem',
              color: '#fff',
              marginBottom: '0.25rem',
            }}>
              Ready to start your next project?
            </div>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif", fontSize: '0.95rem' }}>
              Talk to our team — zero obligation, full transparency.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{
              padding: '0.75rem 1.75rem',
              background: '#fff',
              color: 'var(--c-gold)',
              borderRadius: '8px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}>
              Get a Free Quote
            </Link>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" style={{
              padding: '0.75rem 1.75rem',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.4)',
              borderRadius: '8px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', textDecoration: 'none' }}>
              <div style={{
                width: 36,
                height: 36,
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
              }}>
                <Camera size={18} strokeWidth={2} />
              </div>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: '1.2rem',
                color: '#fff',
              }}>DP Studios</span>
            </Link>
            <p style={{
              color: '#9ca3af',
              fontSize: '0.875rem',
              lineHeight: 1.75,
              fontFamily: "'Inter', sans-serif",
              marginBottom: '1.5rem',
              maxWidth: 260,
            }}>
              A full-service creative studio in Mumbai, helping brands tell their story through photography, film, and digital marketing.
            </p>
            {/* Socials */}
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'var(--c-gold)';
                    (e.currentTarget as HTMLElement).style.color = '#fff';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--c-gold)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.color = '#9ca3af';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#fff',
              marginBottom: '1.25rem',
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#fff',
              marginBottom: '1.25rem',
            }}>Services</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {serviceLinks.map(l => (
                <li key={l.label}>
                  <Link to={l.href} style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#fff',
              marginBottom: '1.25rem',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { icon: <Phone size={16} />, text: SITE.phone, href: `tel:${SITE.phone}` },
                { icon: <MessageCircle size={16} />, text: 'WhatsApp Us', href: `https://wa.me/${SITE.whatsapp}` },
                { icon: <Mail size={16} />, text: SITE.email, href: `mailto:${SITE.email}` },
                { icon: <MapPin size={16} />, text: SITE.address, href: '#' },
              ].map(item => (
                <a key={item.text} href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.625rem',
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    lineHeight: 1.55,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9ca3af')}
                >
                  <span style={{ marginTop: '1px', flexShrink: 0 }}>{item.icon}</span>
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            color: '#6b7280',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.82rem',
          }}>
            © {year} DP Studios. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" style={{
                color: '#6b7280',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#9ca3af')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
