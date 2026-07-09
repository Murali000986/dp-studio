import { useState, useEffect, useRef, useCallback } from 'react';
import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/ui/PageHero';
import { PORTFOLIO_CATS, PORTFOLIO_ITEMS } from '../data/content';
import { X, ZoomIn } from 'lucide-react';
import { supabase } from '../lib/supabase';

// ── Lightbox (keyboard-accessible, CSS-animated) ──────────────────────────────
function Lightbox({ item, onClose }: { item: any; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lb-backdrop" onClick={onClose}>
      <button className="lb-close" onClick={onClose} aria-label="Close">
        <X size={20} />
      </button>
      <div className="lb-content" onClick={e => e.stopPropagation()}>
        <img src={item.image_url} alt={item.title} className="lb-img" />
        <div className="lb-meta">
          <span className="lb-cat">{item.category} · {item.year}</span>
          <h3 className="lb-title">{item.title}</h3>
        </div>
      </div>
    </div>
  );
}

// ── Portfolio Page ─────────────────────────────────────────────────────────────
export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<any | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);

  useSEO({
    title: 'Portfolio — Our Work | TN DP Studio 2.0',
    description: 'Browse our portfolio of professional photography, portraits, events, and cinematic shoots by TN DP Studio 2.0, Salem.',
    keywords: 'photography portfolio, portrait photography, event photography, cinematic photography, TN DP Studio 2.0',
    canonical: 'https://dpstudios.in/portfolio',
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  useEffect(() => {
    async function fetchItems() {
      try {
        const { data, error } = await supabase.from('portfolio').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        setItems(data || []);
      } catch (err) {
        console.error('Error fetching portfolio from Supabase:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  const filteredItems = filter === 'All'
    ? items
    : items.filter(item => item.category === filter);

  // Single IntersectionObserver for all cards — re-runs after filter/data change
  useEffect(() => {
    if (loading) return;
    const grid = gridRef.current;
    if (!grid) return;

    // Small timeout lets React flush the DOM before we observe
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('port-visible');
              observer.unobserve(entry.target); // unobserve after visible — perf
            }
          });
        },
        { threshold: 0.06, rootMargin: '0px 0px -30px 0px' }
      );

      const cards = grid.querySelectorAll('.port-card');
      cards.forEach(card => {
        card.classList.remove('port-visible'); // reset for re-filter animation
        observer.observe(card);
      });

      return () => observer.disconnect();
    }, 40);

    return () => clearTimeout(timeout);
  }, [filter, loading, filteredItems.length]);

  const handleFilterChange = useCallback((cat: string) => {
    if (cat === filter) return;
    setTransitioning(true);
    setTimeout(() => {
      setFilter(cat);
      setTransitioning(false);
    }, 250);
  }, [filter]);

  return (
    <main>
      <PageHero
        label="Our Portfolio"
        title="Work That Speaks"
        subtitle="Every shot tells a story. Browse our real photography work by TN DP Studio 2.0."
        breadcrumb="Portfolio"
      />

      <section style={{ padding: '4rem 0 6rem' }}>
        <div className="container">

          {/* Filter Pills */}
          <div className="port-filters">
            {PORTFOLIO_CATS.map(cat => {
              const count = cat === 'All'
                ? items.length
                : items.filter(i => i.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`port-filter-btn${filter === cat ? ' active' : ''}`}
                >
                  {cat}
                  <span className="port-filter-count">{count}</span>
                </button>
              );
            })}
          </div>

          {loading ? (
             <div style={{ textAlign: 'center', padding: '5rem 0' }}>Loading portfolio...</div>
          ) : (
            <>
              {/* Masonry Grid */}
              <div
                ref={gridRef}
                className={`port-grid${transitioning ? ' transitioning' : ''}`}
              >
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="port-card"
                    style={{ '--delay': `${(index % 8) * 55}ms` } as React.CSSProperties}
                    onClick={() => setLightboxItem(item)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open ${item.title}`}
                    onKeyDown={e => { if (e.key === 'Enter') setLightboxItem(item); }}
                  >
                    <img
                      src={item.image_url}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="port-card-img"
                    />
                    {/* Bottom label (always visible) */}
                    <div className="port-card-label">
                      <span className="port-card-cat">{item.category}</span>
                      <span className="port-card-title">{item.title}</span>
                    </div>
                    {/* Hover overlay */}
                    <div className="port-card-overlay">
                      <div className="port-card-zoom"><ZoomIn size={22} /></div>
                      <div className="port-card-overlay-text">
                        <span className="port-card-overlay-sub">{item.client} · {item.year}</span>
                        <span className="port-card-overlay-title">{item.title}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <p style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--c-gray)' }}>
                  No photos found for this category.
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'var(--c-charcoal)', textAlign: 'center' }}>
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center', color: 'var(--c-gold)' }}>Liked What You Saw?</div>
          <h2 className="heading-lg" style={{ marginTop: '0.625rem', marginBottom: '1.25rem', color: '#fff' }}>
            Let's Create Something Remarkable
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: 480, margin: '0 auto 2rem', fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}>
            Book a shoot with TN DP Studio 2.0. Available for events, portraits, brand shoots &amp; more.
          </p>
          <a href="/contact" className="btn btn-gold">Book a Session</a>
        </div>
      </section>

      {lightboxItem && <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />}
    </main>
  );
}
