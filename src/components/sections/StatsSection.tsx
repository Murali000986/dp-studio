import { motion } from 'framer-motion';
import useCounter from '../../hooks/useCounter';
import { STATS } from '../../data/content';

function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { count, ref } = useCounter(value, 2200);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay, duration: 0.7 }}
      style={{
        textAlign: 'center',
        padding: '2rem 1rem',
        position: 'relative',
      }}
    >
      <div style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 900,
        fontSize: 'clamp(3rem, 7vw, 5.5rem)',
        background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        lineHeight: 1,
        letterSpacing: '-0.02em',
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
        color: '#777',
        marginTop: '0.5rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
      }}>
        {label}
      </div>

      {/* Decorative dot */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: 'rgba(212,175,55,0.4)',
      }} />
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" style={{
      padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
      background: 'linear-gradient(180deg, #0a0a0a 0%, #080808 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Horizontal gold line top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
              color: '#FFFFFF',
              lineHeight: 1.2,
            }}
          >
            Numbers That{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Speak For Us
            </span>
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          position: 'relative',
        }}>
          {/* Vertical dividers */}
          {STATS.map((stat: { value: number; suffix: string; label: string }, i: number) => (
            <div key={stat.label} style={{ position: 'relative' }}>
              {i > 0 && (
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: '20%',
                  bottom: '20%',
                  width: 1,
                  background: 'rgba(212,175,55,0.15)',
                }} />
              )}
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={i * 0.1}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal gold line bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '10%',
        right: '10%',
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)',
      }} />
    </section>
  );
}
