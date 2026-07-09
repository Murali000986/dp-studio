import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS, PORTFOLIO_CATS } from '../../data/content';

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((p: { category: string }) => p.category === activeCategory);

  return (
    <section id="portfolio" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#060606',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.25)',
              borderRadius: '50px',
              padding: '0.35rem 1rem',
              marginBottom: '1rem',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
            <span style={{ color: '#D4AF37', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Our Portfolio
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#FFFFFF',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Recent{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Projects
            </span>
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            gap: '0.625rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '2.5rem',
          }}
        >
          {PORTFOLIO_CATS.map((cat: string) => (
            <button
              key={cat}
              id={`filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '50px',
                border: `1.5px solid ${activeCategory === cat ? '#D4AF37' : 'rgba(255,255,255,0.1)'}`,
                background: activeCategory === cat ? 'rgba(212,175,55,0.15)' : 'transparent',
                color: activeCategory === cat ? '#D4AF37' : '#888',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.85rem',
                fontWeight: activeCategory === cat ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onHoverStart={() => setHoveredId(item.id)}
                onHoverEnd={() => setHoveredId(null)}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  cursor: 'pointer',
                  boxShadow: hoveredId === item.id ? '0 25px 60px rgba(0,0,0,0.7)' : '0 8px 25px rgba(0,0,0,0.4)',
                  transition: 'box-shadow 0.4s',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transform: hoveredId === item.id ? 'scale(1.08)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                  }}
                />

                {/* Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: hoveredId === item.id
                    ? 'linear-gradient(180deg, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.9) 100%)'
                    : 'linear-gradient(180deg, transparent 40%, rgba(8,8,8,0.85) 100%)',
                  transition: 'background 0.4s',
                }} />

                {/* Play icon */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) scale(${hoveredId === item.id ? 1 : 0})`,
                  transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(212,175,55,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                  boxShadow: '0 8px 30px rgba(212,175,55,0.5)',
                }}>
                  ▶
                </div>

                {/* Info */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem',
                  transform: hoveredId === item.id ? 'translateY(0)' : 'translateY(4px)',
                  transition: 'transform 0.4s',
                }}>
                  {/* Category badge */}
                  <div style={{
                    display: 'inline-block',
                    padding: '0.2rem 0.75rem',
                    background: 'rgba(212,175,55,0.85)',
                    borderRadius: '50px',
                    fontSize: '0.7rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    color: '#080808',
                    marginBottom: '0.5rem',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    {item.category}
                  </div>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: '#FFFFFF',
                  }}>
                    {item.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              border: '1.5px solid rgba(212,175,55,0.5)',
              color: '#D4AF37',
              borderRadius: '10px',
              textDecoration: 'none',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.3s',
            }}
            whileHover={{ background: 'rgba(212,175,55,0.1)', scale: 1.03 } as never}
          >
            View Full Portfolio →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
