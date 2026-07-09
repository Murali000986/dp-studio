import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function EmptyStageSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animate floating particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section style={{
      position: 'relative',
      padding: 'clamp(5rem, 12vw, 10rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#080808',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
    }}>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />

      {/* Camera lens SVG */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 0 }}>
        <motion.svg
          viewBox="0 0 400 400"
          style={{ width: '80vw', maxWidth: 600, opacity: 0.06 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 8 }, (_, i) => (
            <line
              key={i}
              x1="200" y1="200"
              x2="200" y2="20"
              stroke="#D4AF37"
              strokeWidth="1.5"
              transform={`rotate(${i * 45} 200 200)`}
            />
          ))}
          <circle cx="200" cy="200" r="180" fill="none" stroke="#D4AF37" strokeWidth="1" />
          <circle cx="200" cy="200" r="140" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="80" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="20" fill="#D4AF37" fillOpacity="0.4" />
        </motion.svg>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 700 }}>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 300,
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            color: '#888',
            letterSpacing: '0.02em',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.25em',
          }}
        >
          Scene One
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
          }}
        >
          Every great memory starts with{' '}
          <span style={{
            background: 'linear-gradient(135deg, #D4AF37 0%, #F0D060 60%, #D4AF37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            a moment.
          </span>
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            width: 80,
            height: 2,
            background: 'linear-gradient(90deg, #D4AF37, #F0D060)',
            margin: '0 auto 1.5rem',
            borderRadius: 2,
            transformOrigin: 'center',
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            color: '#555',
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
            lineHeight: 1.8,
            maxWidth: 500,
            margin: '0 auto',
          }}
        >
          We don't just capture images. We craft stories that stir emotion, build trust, and make your brand unforgettable.
        </motion.p>
      </div>
    </section>
  );
}
