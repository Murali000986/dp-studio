import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        {/* Left — Studio Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '4/5',
            boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
          }}>
            <img
              src="/studio_about.png"
              alt="DP Studios interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Gold overlay accent */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, transparent 60%)',
            }} />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '-1.5rem',
              right: '-1.5rem',
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              borderRadius: '16px',
              padding: '1.25rem 1.5rem',
              boxShadow: '0 20px 50px rgba(212,175,55,0.4)',
              textAlign: 'center',
            }}
          >
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: '2rem',
              color: '#080808',
              lineHeight: 1,
            }}>5+</div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: '#333',
              fontWeight: 600,
              marginTop: '0.25rem',
            }}>Years of<br />Excellence</div>
          </motion.div>

          {/* Gold border frame */}
          <div style={{
            position: 'absolute',
            top: -12,
            left: -12,
            right: 12,
            bottom: 12,
            border: '1.5px solid rgba(212,175,55,0.25)',
            borderRadius: '24px',
            pointerEvents: 'none',
            zIndex: -1,
          }} />
        </motion.div>

        {/* Right — Content */}
        <div>
          <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.25)',
              borderRadius: '50px',
              padding: '0.35rem 1rem',
              marginBottom: '1.25rem',
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
              <span style={{ color: '#D4AF37', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Who We Are
              </span>
            </div>
          </motion.div>

          <motion.h2 custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
            }}
          >
            More Than a Studio.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              We're Your Creative Partner.
            </span>
          </motion.h2>

          <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ width: 60, height: 3, background: 'linear-gradient(90deg, #D4AF37, #F0D060)', borderRadius: 2, marginBottom: '1.5rem' }}
          />

          <motion.p custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              color: '#AAAAAA',
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
            }}
          >
            From capturing unforgettable moments to building powerful brands online, we help businesses and individuals stand out through creative visual storytelling.
          </motion.p>

          <motion.p custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{
              color: '#777',
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.9rem, 1.4vw, 0.98rem)',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}
          >
            We're not just another production studio — we're storytellers, strategists, and creative partners who invest in your success. Every frame we shoot and every word we post is crafted with purpose.
          </motion.p>

          {/* Mini stats row */}
          <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}
          >
            {[['500+', 'Projects'], ['100+', 'Clients'], ['5M+', 'Views']].map(([num, label]) => (
              <div key={label}>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.75rem',
                  background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                }}>{num}</div>
                <div style={{ color: '#666', fontSize: '0.8rem', fontFamily: "'Inter', sans-serif", marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </motion.div>

          <motion.a
            custom={6}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            href="#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              color: '#080808',
              borderRadius: '10px',
              textDecoration: 'none',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '1rem',
              transition: 'all 0.3s',
              boxShadow: '0 4px 20px rgba(212,175,55,0.25)',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 12px 35px rgba(212,175,55,0.45)' } as object}
            whileTap={{ scale: 0.97 } as object}
          >
            Explore Our Services →
          </motion.a>
        </div>
      </div>
    </section>
  );
}
