import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shutterOpen, setShutterOpen] = useState(false);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: 'relative',
        padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 5rem)',
        overflow: 'hidden',
      }}
    >
      {/* Parallax background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          backgroundImage: 'url(/hero_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY,
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(8,8,8,0.93) 0%, rgba(8,8,8,0.80) 50%, rgba(8,8,8,0.95) 100%)',
        zIndex: 1,
      }} />

      {/* Gold particle dots (decorative) */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            borderRadius: '50%',
            background: '#D4AF37',
            left: `${(i * 8.5) % 100}%`,
            top: `${(i * 13) % 100}%`,
            opacity: 0.2,
            zIndex: 1,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}

      {/* Camera shutter SVG animation */}
      {!shutterOpen && (
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <motion.div
            initial={{ opacity: 0.6 }}
            whileInView={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            onAnimationComplete={() => setShutterOpen(true)}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, #080808 0%, transparent 70%)',
            }}
          />
        </motion.div>
      )}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
        
        {/* Camera icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'rgba(212,175,55,0.12)',
            border: '2px solid rgba(212,175,55,0.4)',
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
            boxShadow: '0 0 40px rgba(212,175,55,0.2)',
          }}
        >
          📸
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: '#FFFFFF',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}
        >
          Ready to Create Something{' '}
          <span style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Unforgettable?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{
            color: '#888',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            lineHeight: 1.7,
            maxWidth: 580,
            margin: '0 auto 2.5rem',
          }}
        >
          Let's collaborate to bring your vision to life. From the first frame to the final cut, we're your creative partner every step of the way.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {[
            { icon: '📷', label: 'Book a Shoot', href: 'mailto:hello@dpstudios.in', primary: true, id: 'cta-book' },
            { icon: '💬', label: 'WhatsApp Us', href: 'https://wa.me/919876543210', primary: false, id: 'cta-whatsapp' },
            { icon: '📧', label: 'Send Email', href: 'mailto:hello@dpstudios.in', primary: false, id: 'cta-email' },
          ].map(btn => (
            <motion.a
              key={btn.id}
              id={btn.id}
              href={btn.href}
              target={btn.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.9rem 1.75rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: '0.95rem',
                ...(btn.primary ? {
                  background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
                  color: '#080808',
                  boxShadow: '0 4px 20px rgba(212,175,55,0.35)',
                } : {
                  background: 'rgba(255,255,255,0.06)',
                  color: '#FFFFFF',
                  border: '1.5px solid rgba(255,255,255,0.2)',
                }),
                transition: 'all 0.3s',
              }}
              whileHover={{
                scale: 1.05,
                y: -3,
                ...(btn.primary ? { boxShadow: '0 15px 40px rgba(212,175,55,0.5)' } : { borderColor: 'rgba(212,175,55,0.5)' }),
              } as object}
              whileTap={{ scale: 0.97 } as object}
            >
              <span>{btn.icon}</span>
              {btn.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {[
            { icon: '📞', text: '+91 98765 43210' },
            { icon: '📧', text: 'hello@dpstudios.in' },
            { icon: '📍', text: 'Mumbai, India' },
          ].map(item => (
            <div key={item.text} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#777',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
            }}>
              <span style={{ fontSize: '1rem' }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
