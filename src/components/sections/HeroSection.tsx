import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = ['Photography', 'Videography', 'Video Editing', 'Digital Marketing', 'Social Media'];

const floatingStats = [
  { value: '500+', label: 'Projects Completed', icon: '🎬' },
  { value: '100+', label: 'Happy Clients', icon: '🤝' },
  { value: '5M+', label: 'Content Views', icon: '👁️' },
  { value: '24/7', label: 'Support', icon: '⚡' },
];

export default function HeroSection() {
  const [currentService, setCurrentService] = useState(0);
  const [irisOpen, setIrisOpen] = useState(false);
  const irisRef = useRef<SVGSVGElement>(null);

  // Cycle services
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService(prev => (prev + 1) % services.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // Iris animation on load
  useEffect(() => {
    const timer = setTimeout(() => setIrisOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden' }}>

      {/* Video / Image Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="/hero_bg.png"
          alt="Studio background"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.65) 50%, rgba(8,8,8,0.95) 100%)',
        }} />
        {/* Gold vignette bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(0deg, rgba(8,8,8,1) 0%, transparent 100%)',
        }} />
      </div>

      {/* Camera Iris SVG Overlay */}
      <svg
        ref={irisRef}
        viewBox="0 0 800 800"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: irisOpen ? 0 : 1,
          transition: 'opacity 1.5s ease-in-out',
        }}
      >
        <rect width="800" height="800" fill="#080808" />
        {/* Iris blades */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * 360;
          return (
            <motion.path
              key={i}
              d="M400,400 L450,200 L480,400 Z"
              fill="#080808"
              style={{ transformOrigin: '400px 400px' }}
              initial={{ rotate: angle, scale: 1 }}
              animate={{ rotate: angle + (irisOpen ? 30 : 0), scale: irisOpen ? 0 : 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          );
        })}
      </svg>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 1.5rem',
        paddingTop: '6rem',
      }}>

        {/* Pre-heading badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(212,175,55,0.12)',
            border: '1px solid rgba(212,175,55,0.35)',
            borderRadius: '50px',
            padding: '0.4rem 1.2rem',
            marginBottom: '1.5rem',
          }}
        >
          <span style={{ fontSize: '0.7rem', color: '#D4AF37', fontFamily: "'Inter', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
            📸 Premium Creative Studio
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            lineHeight: 1.1,
            color: '#FFFFFF',
            maxWidth: 900,
            marginBottom: '1rem',
          }}
        >
          Every Brand Has A Story.{' '}
          <span style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 50%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            We Capture It.
          </span>
        </motion.h1>

        {/* Animated service word */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.6 }}
          style={{
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '0.5rem',
            overflow: 'hidden',
          }}
        >
          <span style={{
            color: '#888',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          }}>
            Specializing in
          </span>
          <div style={{ overflow: 'hidden', height: 40, display: 'flex', alignItems: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentService}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  color: '#D4AF37',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                  display: 'inline-block',
                }}
              >
                {services[currentService]}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          style={{
            color: '#888',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
            maxWidth: 600,
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Photography • Videography • Video Editing • Digital Marketing • Social Media Management
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '4rem' }}
        >
          <a
            href="#contact"
            id="hero-cta-quote"
            style={{
              display: 'flex',
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
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              boxShadow: '0 4px 20px rgba(212,175,55,0.3)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(212,175,55,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(212,175,55,0.3)';
            }}
          >
            📞 Get a Free Quote
          </a>
          <a
            href="#portfolio"
            id="hero-cta-work"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              background: 'transparent',
              color: '#FFFFFF',
              borderRadius: '10px',
              textDecoration: 'none',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: '1rem',
              border: '1.5px solid rgba(255,255,255,0.25)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#D4AF37';
              e.currentTarget.style.color = '#D4AF37';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              e.currentTarget.style.color = '#FFFFFF';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            🎬 View Our Work
          </a>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {floatingStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.8 + i * 0.1, duration: 0.5 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(212,175,55,0.2)',
                borderRadius: '12px',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'default',
                transition: 'all 0.3s',
              }}
              whileHover={{ scale: 1.05, borderColor: 'rgba(212,175,55,0.5)' } as object}
            >
              <span style={{ fontSize: '1.2rem' }}>{stat.icon}</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.2,
                }}>{stat.value}</div>
                <div style={{
                  color: '#888',
                  fontSize: '0.7rem',
                  fontFamily: "'Inter', sans-serif",
                  whiteSpace: 'nowrap',
                }}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span style={{ color: '#555', fontSize: '0.7rem', fontFamily: "'Inter', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: 28,
            height: 44,
            border: '2px solid rgba(212,175,55,0.4)',
            borderRadius: '14px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div style={{
            width: 4,
            height: 8,
            background: '#D4AF37',
            borderRadius: 2,
          }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
