import { motion } from 'framer-motion';
import { careers } from '../../data/content';

export default function CareersSection() {
  return (
    <section id="careers" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#080808',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Left — Content */}
          <div>
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
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#D4AF37', display: 'inline-block' }} />
              <span style={{ color: '#D4AF37', fontSize: '0.75rem', fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Join Our Team
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
                lineHeight: 1.15,
                marginBottom: '1.25rem',
              }}
            >
              Join Our{' '}
              <span style={{
                background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Creative Team
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                color: '#888',
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              We're always looking for photographers, videographers, editors, designers, and marketers who love creating amazing content. If you're passionate about visual storytelling, we'd love to hear from you.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="mailto:careers@dpstudios.in"
              id="careers-cta"
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
            >
              View Open Roles →
            </motion.a>
          </div>

          {/* Right — Role cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {careers.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
                whileHover={{ x: 6, borderColor: 'rgba(212,175,55,0.4)' } as object}
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
              >
                <div>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    marginBottom: '0.35rem',
                  }}>
                    {role.title}
                  </div>
                  <div style={{
                    display: 'flex',
                    gap: '0.75rem',
                    flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#D4AF37',
                      fontFamily: "'Inter', sans-serif",
                      background: 'rgba(212,175,55,0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '50px',
                    }}>{role.type}</span>
                    <span style={{
                      fontSize: '0.75rem',
                      color: '#777',
                      fontFamily: "'Inter', sans-serif",
                      background: 'rgba(255,255,255,0.05)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '50px',
                    }}>📍 {role.location}</span>
                  </div>
                </div>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(212,175,55,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#D4AF37',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  flexShrink: 0,
                }}>
                  →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
