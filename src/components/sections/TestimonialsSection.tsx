import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/content';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    resetInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  const goTo = (i: number) => {
    setActive(i);
    resetInterval();
  };

  const t = testimonials[active];

  return (
    <section id="testimonials" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#060606',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Large background text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 'clamp(8rem, 20vw, 18rem)',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
        color: 'rgba(212,175,55,0.025)',
        pointerEvents: 'none',
        userSelect: 'none',
        lineHeight: 1,
      }}>
        "
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
              Client Stories
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
            }}
          >
            What Our{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Clients Say
            </span>
          </motion.h2>
        </div>

        {/* Testimonial card */}
        <div style={{ position: 'relative', minHeight: 280 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -60, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(212,175,55,0.18)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 5vw, 3.5rem)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Gold top accent */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: '20%',
                right: '20%',
                height: 2,
                background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
              }} />

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
                {Array.from({ length: t.stars }, (_, i) => (
                  <span key={i} style={{ color: '#D4AF37', fontSize: '1.2rem' }}>⭐</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                color: '#DDDDDD',
                lineHeight: 1.8,
                fontStyle: 'italic',
                marginBottom: '2rem',
                maxWidth: 700,
                margin: '0 auto 2rem',
              }}>
                "{t.quote}"
              </blockquote>

              {/* Client info */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid rgba(212,175,55,0.5)',
                  }}
                />
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    color: '#FFFFFF',
                    fontSize: '1rem',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    color: '#D4AF37',
                    fontSize: '0.8rem',
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              id={`testimonial-dot-${i}`}
              onClick={() => goTo(i)}
              style={{
                width: active === i ? 28 : 8,
                height: 8,
                borderRadius: '4px',
                background: active === i ? '#D4AF37' : 'rgba(212,175,55,0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                padding: 0,
              }}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
          {[
            { label: '←', fn: () => goTo((active - 1 + testimonials.length) % testimonials.length), id: 'prev' },
            { label: '→', fn: () => goTo((active + 1) % testimonials.length), id: 'next' },
          ].map(btn => (
            <button
              key={btn.id}
              id={`testimonial-${btn.id}`}
              onClick={btn.fn}
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1.5px solid rgba(212,175,55,0.3)',
                background: 'transparent',
                color: '#D4AF37',
                fontSize: '1.2rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(212,175,55,0.15)';
                e.currentTarget.style.borderColor = '#D4AF37';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
