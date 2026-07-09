import { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../data/content';
import { Video, Scissors, Smartphone, Palette } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  videoshoot: Video,
  videoediting: Scissors,
  socialmedia: Smartphone,
  graphicdesign: Palette,
};

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="services" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#080808',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background gold orb */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        maxWidth: 800,
        background: 'radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              Our Services
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              color: '#FFFFFF',
              lineHeight: 1.2,
            }}
          >
            We Bring Your{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Vision To Life
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              color: '#777',
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              maxWidth: 600,
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}
          >
            We don't just create content, we build connections. Let's create something trending together!
          </motion.p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {SERVICES.map((service: { id: string; title: string; description: string }, i: number) => {
            const IconComponent = iconMap[service.id];
            return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onHoverStart={() => setHoveredId(service.id)}
              onHoverEnd={() => setHoveredId(null)}
              style={{
                background: hoveredId === service.id
                  ? 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.04) 100%)'
                  : 'rgba(255,255,255,0.02)',
                border: `1px solid ${hoveredId === service.id ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.06)'}`,
                borderRadius: '20px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                transform: hoveredId === service.id ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hoveredId === service.id ? '0 20px 50px rgba(212,175,55,0.12)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top gold line on hover */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: 'linear-gradient(90deg, #D4AF37, #F0D060)',
                transform: hoveredId === service.id ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.4s ease',
                borderRadius: '2px 2px 0 0',
              }} />

              {/* Icon */}
              <div style={{
                width: 60,
                height: 60,
                borderRadius: '14px',
                background: hoveredId === service.id ? 'rgba(212,175,55,0.2)' : 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D4AF37',
                marginBottom: '1.25rem',
                transition: 'all 0.3s',
                transform: hoveredId === service.id ? 'scale(1.1) rotate(-3deg)' : 'scale(1) rotate(0)',
              }}>
                {IconComponent && <IconComponent size={28} strokeWidth={1.5} />}
              </div>

              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '1.2rem',
                color: hoveredId === service.id ? '#D4AF37' : '#FFFFFF',
                marginBottom: '0.75rem',
                transition: 'color 0.3s',
              }}>
                {service.title}
              </h3>

              <p style={{
                color: '#777',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.92rem',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
              }}>
                {service.description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#D4AF37',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.85rem',
                opacity: hoveredId === service.id ? 1 : 0.6,
                transition: 'opacity 0.3s',
              }}>
                Learn more
                <motion.span
                  animate={{ x: hoveredId === service.id ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >→</motion.span>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
