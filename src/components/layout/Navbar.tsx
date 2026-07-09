import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,1)',
        borderBottom: `1px solid ${scrolled ? 'rgba(229,231,235,0.8)' : '#f0f0f0'}`,
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.07)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: scrolled ? '62px' : '72px',
          transition: 'height 0.3s ease',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img
            src="/logo_.PNG"
            alt="DP Studio 2.0 Logo"
            style={{
              height: scrolled ? '42px' : '48px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'height 0.3s ease',
              flexShrink: 0,
            }}
          />
          <div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: '1.25rem',
              color: 'var(--c-charcoal)',
              lineHeight: 1.1,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}>
              DP Studio 2.0
            </div>
            <div style={{
              fontSize: '0.65rem',
              color: 'var(--c-gray)',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginTop: '0.1rem'
            }}>
              Photography & Film
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav ref={dropdownRef} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          className="hidden-mobile">
          {NAV_LINKS.map((link) => (
            <div key={link.label} style={{ position: 'relative' }}>
              {link.children ? (
                <>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.5rem 0.875rem',
                      borderRadius: '6px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      fontWeight: isActive(link.href) ? 600 : 500,
                      color: isActive(link.href) ? 'var(--c-charcoal)' : 'var(--c-mid)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.18s',
                    }}
                  >
                    {link.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                      style={{ transform: activeDropdown === link.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  {activeDropdown === link.label && (
                    <div
                      onMouseLeave={() => setActiveDropdown(null)}
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#fff',
                        border: '1px solid var(--c-border)',
                        borderRadius: '12px',
                        padding: '0.5rem',
                        minWidth: 220,
                        boxShadow: '0 8px 30px rgba(0,0,0,0.10)',
                        zIndex: 10,
                      }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.625rem',
                            padding: '0.6rem 0.875rem',
                            borderRadius: '8px',
                            fontSize: '0.875rem',
                            color: 'var(--c-mid)',
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'background 0.15s, color 0.15s',
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = 'var(--c-off-white)';
                            (e.currentTarget as HTMLElement).style.color = 'var(--c-charcoal)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                            (e.currentTarget as HTMLElement).style.color = 'var(--c-mid)';
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  style={{
                    display: 'block',
                    padding: '0.5rem 0.875rem',
                    borderRadius: '6px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: isActive(link.href) ? 600 : 500,
                    color: isActive(link.href) ? 'var(--c-gold)' : 'var(--c-mid)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    borderBottom: isActive(link.href) ? '2px solid var(--c-gold)' : '2px solid transparent',
                    paddingBottom: '0.4rem',
                  }}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          className="hidden-mobile">
          <a href={`tel:${SITE.phone}`} style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.85rem',
            fontWeight: 600,
            color: 'var(--c-mid)',
            textDecoration: 'none',
            letterSpacing: '0.01em',
          }}>
            {SITE.phone}
          </a>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get a Quote
          </Link>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="show-mobile"
          style={{
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: 22,
              height: 2,
              background: 'var(--c-charcoal)',
              borderRadius: 1,
              transition: 'all 0.3s',
              transform: mobileOpen
                ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translate(5px, -5px)'
                : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          background: '#fff',
          borderTop: '1px solid var(--c-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}
          className="show-mobile">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <Link to={link.href} style={{
                display: 'block',
                padding: '0.75rem 0.5rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                fontWeight: 500,
                color: isActive(link.href) ? 'var(--c-charcoal)' : 'var(--c-mid)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--c-border)',
              }}>
                {link.label}
              </Link>
              {link.children && (
                <div style={{ paddingLeft: '1rem' }}>
                  {link.children.map(c => (
                    <Link key={c.label} to={c.href} style={{
                      display: 'block',
                      padding: '0.5rem 0.5rem',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.875rem',
                      color: 'var(--c-gray)',
                      textDecoration: 'none',
                    }}>
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href={`tel:${SITE.phone}`} style={{
              textAlign: 'center',
              padding: '0.75rem',
              border: '1.5px solid var(--c-border)',
              borderRadius: '8px',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: 'var(--c-charcoal)',
              textDecoration: 'none',
            }}>
              📞 {SITE.phone}
            </a>
            <Link to="/contact" className="btn btn-primary" style={{ textAlign: 'center', justifyContent: 'center' }}>
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}

    </header>
  );
}
