// Reusable inner-page hero banner
interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumb?: string;
}

export default function PageHero({ label, title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <section style={{
      background: image ? 'var(--c-charcoal)' : 'var(--c-dark)',
      position: 'relative',
      paddingTop: '11rem',
      paddingBottom: '5.5rem',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      {image && (
        <>
          <img src={image} alt="" style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.18,
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(17,17,17,0.92) 0%, rgba(28,28,30,0.75) 100%)',
          }} />
        </>
      )}

      {/* Dark textured background with grid */}
      {!image && (
        <>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }} />
          {/* Gold gradient orb */}
          <div style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184,151,46,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(184,151,46,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />
        </>
      )}

      {/* Animated shimmer strip */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent 0%, var(--c-gold) 50%, transparent 100%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 2.5s linear infinite',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Breadcrumb */}
        {breadcrumb && (
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.45)',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span>Home</span>
            <span style={{ color: 'rgba(255,255,255,0.25)' }}>›</span>
            <span style={{ color: 'rgba(245,230,163,0.85)' }}>{breadcrumb}</span>
          </div>
        )}

        {/* Label pill */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.3rem 1rem',
          background: 'rgba(184,151,46,0.15)',
          border: '1px solid rgba(184,151,46,0.35)',
          borderRadius: '50px',
          marginBottom: '1.25rem',
        }}>
          <span style={{
            width: 6, height: 6,
            borderRadius: '50%',
            background: 'var(--c-gold)',
            display: 'inline-block',
            animation: 'pulse-gold 2s infinite',
          }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--c-gold)',
          }}>
            {label}
          </span>
        </div>

        {/* Title */}
        <h1 className="heading-xl" style={{
          color: '#fff',
          maxWidth: 720,
          marginBottom: subtitle ? '1.25rem' : 0,
          lineHeight: 1.08,
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: 580,
            lineHeight: 1.75,
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
