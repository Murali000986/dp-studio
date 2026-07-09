import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);
  const [session, setSession] = useState<boolean>(false);

  // Rate limiting state
  const [lockoutTime, setLockoutTime] = useState<number | null>(null);
  const [attempts, setAttempts]       = useState(0);
  const [timeLeft, setTimeLeft]       = useState(0);

  useEffect(() => {
    if (localStorage.getItem('admin_session') === 'true') {
      setSession(true);
    }

    const savedLockout  = localStorage.getItem('admin_lockout_time');
    const savedAttempts = localStorage.getItem('admin_login_attempts');

    if (savedLockout) {
      const lockTime = parseInt(savedLockout, 10);
      if (Date.now() < lockTime) {
        setLockoutTime(lockTime);
      } else {
        localStorage.removeItem('admin_lockout_time');
        localStorage.setItem('admin_login_attempts', '0');
      }
    }

    if (savedAttempts) setAttempts(parseInt(savedAttempts, 10));
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!lockoutTime) return;
    const interval = setInterval(() => {
      const remaining = Math.ceil((lockoutTime - Date.now()) / 1000);
      if (remaining <= 0) {
        setLockoutTime(null);
        setAttempts(0);
        localStorage.removeItem('admin_lockout_time');
        localStorage.setItem('admin_login_attempts', '0');
        clearInterval(interval);
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutTime]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (lockoutTime) return;

    setLoading(true);
    setError(null);

    await new Promise(r => setTimeout(r, 700));

    if (email === 'murali@admin' && password === 'murali@123') {
      setAttempts(0);
      localStorage.removeItem('admin_login_attempts');
      localStorage.setItem('admin_session', 'true');
      setSession(true);
    } else {
      setError('Invalid username or password.');
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      localStorage.setItem('admin_login_attempts', newAttempts.toString());

      if (newAttempts >= 3) {
        const lockUntil = Date.now() + 60 * 1000;
        setLockoutTime(lockUntil);
        localStorage.setItem('admin_lockout_time', lockUntil.toString());
        setError('Too many failed attempts. Please wait 1 minute.');
      }
    }
    setLoading(false);
  };

  if (session) return <Navigate to="/admin" replace />;

  const isLocked = lockoutTime !== null;

  const inputStyle: React.CSSProperties = {
    padding: '0.85rem 1rem 0.85rem 3rem',
    borderRadius: '10px',
    border: '1.5px solid rgba(255,255,255,0.12)',
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    opacity: isLocked ? 0.5 : 1,
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0f11 0%, #1c1c1e 50%, #111827 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,151,46,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-100px', left: '-80px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184,151,46,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        pointerEvents: 'none',
      }} />

      {/* Card */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '3rem 2.5rem',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
        animation: 'fadeUp 0.5s ease forwards',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            width: 60, height: 60, borderRadius: '16px',
            background: 'linear-gradient(135deg, var(--c-gold), #a0821f)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1rem',
            boxShadow: '0 8px 24px rgba(184,151,46,0.4)',
            fontSize: '1.75rem',
          }}>
            📸
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.6rem',
            color: '#fff',
            marginBottom: '0.25rem',
          }}>DP Studios</h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>Admin Panel</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

          {isLocked && (
            <div style={{
              background: 'rgba(239,68,68,0.12)',
              border: '1px solid rgba(239,68,68,0.3)',
              color: '#FCA5A5',
              padding: '0.875rem 1rem',
              borderRadius: '10px',
              fontSize: '0.875rem',
              textAlign: 'center',
              fontFamily: "'Inter', sans-serif",
            }}>
              🔒 Account locked. Try again in <strong>{timeLeft}s</strong>
            </div>
          )}

          {!isLocked && error && (
            <div style={{
              background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.25)',
              color: '#FCA5A5',
              padding: '0.75rem 1rem',
              borderRadius: '10px',
              fontSize: '0.875rem',
              fontFamily: "'Inter', sans-serif",
            }}>
              {error}
            </div>
          )}

          {/* Email */}
          <div style={{ position: 'relative' }}>
            <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.45rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Username
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' }} />
              <input
                type="text"
                required
                disabled={isLocked || loading}
                value={email}
                placeholder="murali@admin"
                onChange={e => setEmail(e.target.value)}
                style={inputStyle}
                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(184,151,46,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184,151,46,0.1)'; }}
                onBlur={e  => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label style={{ display: 'block', fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '0.45rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)', pointerEvents: 'none' }} />
              <input
                type="password"
                required
                disabled={isLocked || loading}
                value={password}
                placeholder="••••••••"
                onChange={e => setPassword(e.target.value)}
                style={inputStyle}
                onFocus={e => { e.currentTarget.style.borderColor = 'rgba(184,151,46,0.6)'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(184,151,46,0.1)'; }}
                onBlur={e  => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.boxShadow = 'none'; }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || isLocked}
            style={{
              marginTop: '0.5rem',
              padding: '0.9rem',
              borderRadius: '10px',
              background: isLocked
                ? 'rgba(255,255,255,0.08)'
                : 'linear-gradient(135deg, #B8972E 0%, #a0821f 100%)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.95rem',
              fontFamily: "'Inter', sans-serif",
              border: 'none',
              cursor: (loading || isLocked) ? 'not-allowed' : 'pointer',
              opacity: (loading || isLocked) ? 0.7 : 1,
              transition: 'all 0.25s',
              boxShadow: isLocked ? 'none' : '0 6px 20px rgba(184,151,46,0.35)',
              letterSpacing: '0.03em',
            }}
          >
            {loading ? '⏳ Verifying...' : isLocked ? '🔒 Locked' : 'Sign In to Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}
