import { motion } from 'framer-motion';
import { WHY_US } from '../../data/content';

export default function WhyUsSection() {
  return (
    <section id="why-us" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#080808',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Decorative corner */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '40vw',
        height: '40vw',
        background: 'radial-gradient(circle at top right, rgba(212,175,55,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
              Our Promise
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
            Why Clients{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Trust Us
            </span>
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {WHY_US.map((item: { icon: string; title: string; description: string }, i: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              whileHover={{
                y: -8,
                boxShadow: '0 30px 60px rgba(212,175,55,0.12)',
                borderColor: 'rgba(212,175,55,0.4)',
              } as never}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                padding: '2.25rem',
                cursor: 'default',
                transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle gold glow on hover via pseudo */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Icon ring */}
              <div style={{ position: 'relative', width: 72, height: 72, marginBottom: '1.5rem' }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(212,175,55,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  background: 'rgba(212,175,55,0.06)',
                }}>
                  {item.icon}
                </div>
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    border: '1.5px solid transparent',
                    borderTopColor: '#D4AF37',
                    borderRightColor: 'rgba(212,175,55,0.3)',
                  }}
                />
              </div>

              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '1.15rem',
                color: '#FFFFFF',
                marginBottom: '0.75rem',
              }}>
                {item.title}
              </h3>

              <p style={{
                color: '#777',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.92rem',
                lineHeight: 1.7,
              }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
