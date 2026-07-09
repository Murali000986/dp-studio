import { Outlet, Navigate, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { LayoutDashboard, Image as ImageIcon, FileText, LogOut, Camera, Briefcase } from 'lucide-react';

export default function AdminLayout() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check for hardcoded local admin session first
    if (localStorage.getItem('admin_session') === 'true') {
      setSession({ user: { email: 'murali@admin' } });
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (localStorage.getItem('admin_session') !== 'true') {
        setSession(session);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('admin_session');
    setSession(null);
    await supabase.auth.signOut();
  };

  if (loading) {
    return (
      <div style={{
        display: 'flex', height: '100vh',
        alignItems: 'center', justifyContent: 'center',
        background: '#0f0f11', flexDirection: 'column', gap: '1rem',
      }}>
        <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'linear-gradient(135deg, #B8972E, #a0821f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>📸</div>
        <p style={{ color: '#9ca3af', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}>Loading...</p>
      </div>
    );
  }

  if (!session) return <Navigate to="/admin/login" replace />;

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Portfolio',  path: '/admin/portfolio', icon: ImageIcon },
    { name: 'Blog',       path: '/admin/blog', icon: FileText },
    { name: 'Careers',    path: '/admin/careers', icon: Briefcase },
  ];

  const userEmail: string = session?.user?.email ?? 'Admin';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F8F9FA' }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        background: 'linear-gradient(180deg, #111827 0%, #1C1C1E 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        boxShadow: '4px 0 24px rgba(0,0,0,0.15)',
      }}>
        {/* Logo */}
        <div style={{ padding: '1.75rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 40, height: 40, borderRadius: '10px',
              background: 'linear-gradient(135deg, #B8972E, #a0821f)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(184,151,46,0.35)',
              flexShrink: 0,
            }}>
              <Camera size={18} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: '#F5E6A3', lineHeight: 1.1 }}>DP Studios</div>
              <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif", letterSpacing: '0.06em', textTransform: 'uppercase' }}>Admin Panel</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '1.25rem 0.875rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navItems.map(item => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.5)',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(184,151,46,0.25), rgba(184,151,46,0.1))'
                    : 'transparent',
                  border: isActive ? '1px solid rgba(184,151,46,0.3)' : '1px solid transparent',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 2px 12px rgba(184,151,46,0.15)' : 'none',
                }}
              >
                <Icon size={18} color={isActive ? '#B8972E' : 'rgba(255,255,255,0.4)'} />
                {item.name}
                {isActive && (
                  <div style={{
                    marginLeft: 'auto',
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#B8972E',
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* User + Logout */}
        <div style={{ padding: '1rem 0.875rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #B8972E, #a0821f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#fff', flexShrink: 0 }}>
              {userEmail[0].toUpperCase()}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{userEmail}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>Administrator</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.625rem',
              width: '100%', padding: '0.65rem 1rem',
              borderRadius: '8px', color: '#EF4444',
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.15)',
              fontWeight: 500, fontSize: '0.875rem',
              fontFamily: "'Inter', sans-serif",
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.15)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.08)'; }}
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'hidden' }}>
        {/* Header */}
        <header style={{
          background: '#fff',
          borderBottom: '1px solid #e5e7eb',
          padding: '0.875rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#111827', fontWeight: 700 }}>
            {navItems.find(n => n.path === location.pathname)?.name ?? 'Admin'}
          </div>
          <div style={{ fontSize: '0.85rem', color: '#6b7280', fontFamily: "'Inter', sans-serif" }}>
            Logged in as <span style={{ fontWeight: 600, color: '#111827' }}>{userEmail}</span>
          </div>
        </header>

        <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
