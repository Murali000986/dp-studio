import { motion } from 'framer-motion';

const btsImages = [
  { src: '/bts_videographer.png', label: 'Videography Setup', span: 'large' },
  { src: '/portfolio_wedding.png', label: 'Wedding Shoot', span: 'small' },
  { src: '/portfolio_product.png', label: 'Product Shoot', span: 'small' },
  { src: '/studio_about.png', label: 'Studio Life', span: 'medium' },
  { src: '/portfolio_restaurant.png', label: 'Commercial Shoot', span: 'medium' },
  { src: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80', label: 'Camera Work', span: 'small' },
];

export default function BTSSection() {
  return (
    <section id="bts" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#0a0a0a',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

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
              Behind The Scenes
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
            Inside the{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Studio
            </span>
          </motion.h2>

          <p style={{ color: '#666', fontFamily: "'Inter', sans-serif", fontSize: '1rem', maxWidth: 500, margin: '0 auto' }}>
            See how we bring your vision to life — from the first light setup to the final frame.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1rem',
        }}>
          {btsImages.map((img, i) => {
            let gridColumn = '1 / 3';
            let aspectRatio = '4/3';

            if (i === 0) { gridColumn = '1 / 4'; aspectRatio = '16/10'; }
            else if (i === 1) { gridColumn = '4 / 6'; }
            else if (i === 2) { gridColumn = '6 / 7'; aspectRatio = '3/4'; }
            else if (i === 3) { gridColumn = '1 / 3'; }
            else if (i === 4) { gridColumn = '3 / 5'; }
            else if (i === 5) { gridColumn = '5 / 7'; }

            return (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.7 }}
                style={{
                  gridColumn,
                  position: 'relative',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  aspectRatio,
                  cursor: 'pointer',
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.07)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                />

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(8,8,8,0.85) 100%)',
                  transition: 'opacity 0.3s',
                }} />

                <div style={{
                  position: 'absolute',
                  bottom: '0.875rem',
                  left: '0.875rem',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  background: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}>
                  {img.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
