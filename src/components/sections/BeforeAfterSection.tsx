import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

interface SliderItem {
  label: string;
  beforeLabel: string;
  afterLabel: string;
  beforeSrc: string;
  afterSrc: string;
  beforeColor: string;
  afterColor: string;
}

const sliderItems: SliderItem[] = [
  {
    label: 'Video Editing',
    beforeLabel: 'RAW Footage',
    afterLabel: 'Cinematic Edit',
    beforeSrc: '/bts_videographer.png',
    afterSrc: '/hero_bg.png',
    beforeColor: 'rgba(180,100,60,0.35)',
    afterColor: 'rgba(212,175,55,0.15)',
  },
  {
    label: 'Photo Retouching',
    beforeLabel: 'Original Photo',
    afterLabel: 'Professional Edit',
    beforeSrc: '/portfolio_product.png',
    afterSrc: '/portfolio_restaurant.png',
    beforeColor: 'rgba(80,80,80,0.3)',
    afterColor: 'rgba(212,175,55,0.12)',
  },
];

function BeforeAfterSlider({ item }: { item: SliderItem }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosition(e.clientX);
  };
  const onMouseUp = () => setIsDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) updatePosition(e.touches[0].clientX);
  };
  const onTouchEnd = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'ew-resize',
        userSelect: 'none',
        boxShadow: '0 30px 80px rgba(0,0,0,0.7)',
        border: '1px solid rgba(212,175,55,0.2)',
      }}
    >
      {/* After (right) — full */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={item.afterSrc} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: item.afterColor }} />
        {/* Cinematic color grade overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 50%)' }} />
      </div>

      {/* Before (left) — clipped */}
      <div style={{
        position: 'absolute',
        inset: 0,
        clipPath: `inset(0 ${100 - position}% 0 0)`,
      }}>
        <img src={item.beforeSrc} alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: item.beforeColor }} />
        {/* Desaturate effect via CSS */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.15)', filter: 'saturate(0.6)' }} />
      </div>

      {/* Divider line */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: `${position}%`,
        width: 3,
        background: 'linear-gradient(180deg, #D4AF37, #F0D060, #D4AF37)',
        transform: 'translateX(-50%)',
        boxShadow: '0 0 20px rgba(212,175,55,0.6)',
        zIndex: 10,
      }} />

      {/* Handle */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: `${position}%`,
        transform: 'translate(-50%, -50%)',
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
        boxShadow: '0 4px 20px rgba(212,175,55,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 11,
        fontSize: '1rem',
        fontWeight: 700,
        color: '#080808',
        gap: '3px',
      }}>
        <span>◀</span>
        <span>▶</span>
      </div>

      {/* Labels */}
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        left: '1rem',
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(10px)',
        borderRadius: '8px',
        padding: '0.35rem 0.875rem',
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.8rem',
        fontWeight: 600,
        color: '#FFFFFF',
        zIndex: 12,
        border: '1px solid rgba(255,255,255,0.1)',
      }}>
        ❌ {item.beforeLabel}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        background: 'rgba(212,175,55,0.85)',
        backdropFilter: 'blur(10px)',
        borderRadius: '8px',
        padding: '0.35rem 0.875rem',
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.8rem',
        fontWeight: 700,
        color: '#080808',
        zIndex: 12,
      }}>
        ✅ {item.afterLabel}
      </div>
    </div>
  );
}

export default function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="before-after" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#0a0a0a',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
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
              The Transformation
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
              marginBottom: '0.75rem',
            }}
          >
            Before & After —{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              See The Difference
            </span>
          </motion.h2>

          <p style={{ color: '#666', fontFamily: "'Inter', sans-serif", fontSize: '1rem' }}>
            Drag the slider to reveal our editing magic
          </p>
        </div>

        {/* Toggle tabs */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
          {sliderItems.map((item, i) => (
            <button
              key={item.label}
              id={`ba-toggle-${i}`}
              onClick={() => setActiveIndex(i)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '8px',
                border: `1.5px solid ${activeIndex === i ? '#D4AF37' : 'rgba(255,255,255,0.1)'}`,
                background: activeIndex === i ? 'rgba(212,175,55,0.15)' : 'transparent',
                color: activeIndex === i ? '#D4AF37' : '#888',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BeforeAfterSlider item={sliderItems[activeIndex]} />
        </motion.div>

        <p style={{
          textAlign: 'center',
          color: '#555',
          fontSize: '0.8rem',
          fontFamily: "'Inter', sans-serif",
          marginTop: '1rem',
        }}>
          ← Drag to compare → &nbsp;|&nbsp; Touch-friendly on mobile
        </p>
      </div>
    </section>
  );
}
