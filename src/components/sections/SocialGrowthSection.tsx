import { motion } from 'framer-motion';

const socialStats = [
  { icon: '👁️', value: '5M+', label: 'Total Views' },
  { icon: '❤️', value: '85%', label: 'Avg Engagement' },
  { icon: '📈', value: '3x', label: 'Avg Growth Rate' },
  { icon: '🎯', value: '92%', label: 'Target Hit Rate' },
];

export default function SocialGrowthSection() {
  return (
    <section id="social" style={{
      padding: 'clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 5rem)',
      background: '#060606',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Gold glow orb */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '-10%',
        transform: 'translateY(-50%)',
        width: 500,
        height: 500,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        {/* Left — Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {/* Phone frame */}
          <div style={{
            width: 240,
            background: '#111',
            borderRadius: '36px',
            border: '2px solid rgba(212,175,55,0.3)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.1)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Camera notch */}
            <div style={{
              height: 28,
              background: '#0a0a0a',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div style={{ width: 60, height: 6, borderRadius: 3, background: '#1a1a1a' }} />
            </div>

            {/* Screen content — Instagram-style */}
            <div style={{ background: '#f8f8f8', minHeight: 420 }}>

              {/* Stories row */}
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                padding: '0.625rem 0.625rem 0',
                overflowX: 'hidden',
                background: '#fff',
              }}>
                {['📸', '🎥', '✨', '🎬'].map((icon, i) => (
                  <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, #D4AF37, #F0D060)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      flexShrink: 0,
                      padding: 2,
                    }}>
                      <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem' }}>
                        {icon}
                      </div>
                    </div>
                    <span style={{ fontSize: '0.45rem', color: '#333', fontFamily: 'sans-serif' }}>DP Studio</span>
                  </div>
                ))}
              </div>

              {/* Post */}
              <div style={{ background: '#fff', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.5rem 0.625rem' }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #F0D060)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>📸</div>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, fontFamily: 'sans-serif', color: '#111' }}>dp.studios</span>
                </div>

                {/* Post image */}
                <div style={{ width: '100%', aspectRatio: '1', overflow: 'hidden' }}>
                  <img src="/portfolio_wedding.png" alt="Instagram post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* Engagement */}
                <div style={{ padding: '0.5rem 0.625rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                    ❤️ 💬 📤
                  </div>
                  <div style={{ fontSize: '0.6rem', fontWeight: 700, fontFamily: 'sans-serif', color: '#111', marginBottom: '2px' }}>12,840 likes</div>
                  <div style={{ fontSize: '0.55rem', color: '#666', fontFamily: 'sans-serif' }}>Cinematic wedding reel 🎬✨ #WeddingFilm</div>
                  <div style={{ fontSize: '0.55rem', color: '#D4AF37', fontFamily: 'sans-serif', marginTop: '2px', fontWeight: 600 }}>🔥 127K views in 24h</div>
                </div>
              </div>

              {/* Stats overlay card */}
              <div style={{
                margin: '0.5rem',
                background: '#111',
                borderRadius: '10px',
                padding: '0.625rem',
              }}>
                <div style={{ fontSize: '0.55rem', color: '#D4AF37', fontFamily: 'sans-serif', fontWeight: 700, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  📊 Analytics
                </div>
                {[
                  { label: 'Reach', value: '127K', pct: 85 },
                  { label: 'Engagement', value: '8.2%', pct: 70 },
                  { label: 'Followers', value: '+1.2K', pct: 60 },
                ].map(s => (
                  <div key={s.label} style={{ marginBottom: '0.3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.5rem', color: '#888', fontFamily: 'sans-serif', marginBottom: '2px' }}>
                      <span>{s.label}</span><span style={{ color: '#D4AF37' }}>{s.value}</span>
                    </div>
                    <div style={{ height: 3, background: '#222', borderRadius: 2 }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        style={{ height: '100%', background: 'linear-gradient(90deg, #D4AF37, #F0D060)', borderRadius: 2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Home bar */}
            <div style={{ height: 20, background: '#0a0a0a', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: 60, height: 3, background: '#333', borderRadius: 2 }} />
            </div>
          </div>
        </motion.div>

        {/* Right — Content */}
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
              Social Media Growth
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
            We Don't Just Create Content.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              We Create Attention.
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
            From viral reels to strategic brand campaigns, we manage your entire social media presence — creating content that stops the scroll and drives real business results.
          </motion.p>

          {/* Stats mini grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {socialStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                style={{
                  background: 'rgba(212,175,55,0.05)',
                  border: '1px solid rgba(212,175,55,0.15)',
                  borderRadius: '12px',
                  padding: '1.25rem',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.5rem',
                  background: 'linear-gradient(135deg, #D4AF37, #F0D060)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: '#666', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
