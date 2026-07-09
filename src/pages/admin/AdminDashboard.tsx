import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Image as ImageIcon, FileText, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_ITEMS, BLOG_POSTS } from '../../data/content';

const LOCAL_PORTFOLIO = PORTFOLIO_ITEMS.length;
const LOCAL_BLOG      = BLOG_POSTS.length;

export default function AdminDashboard() {
  const [portfolioCount, setPortfolioCount] = useState(LOCAL_PORTFOLIO);
  const [blogCount,      setBlogCount]      = useState(LOCAL_BLOG);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCounts() {
      try {
        const { count: pCount } = await supabase.from('portfolio').select('*', { count: 'exact', head: true });
        const { count: bCount } = await supabase.from('blogs').select('*', { count: 'exact', head: true });
        setPortfolioCount((pCount ?? 0) + LOCAL_PORTFOLIO);
        setBlogCount((bCount ?? 0) + LOCAL_BLOG);
      } catch {
        // Keep local counts if Supabase fails
      } finally {
        setLoading(false);
      }
    }
    fetchCounts();
  }, []);

  const stats = [
    { icon: ImageIcon, label: 'Portfolio Items', value: portfolioCount, link: '/admin/portfolio', linkLabel: 'Manage Portfolio', color: '#B8972E', bg: '#FFFBEB', border: '#F0D060' },
    { icon: FileText,  label: 'Blog Posts',      value: blogCount,      link: '/admin/blog',      linkLabel: 'Manage Blogs',     color: '#4338CA', bg: '#EEF2FF', border: '#C7D2FE' },
    { icon: TrendingUp, label: 'Content Views',  value: '5M+',          link: '/portfolio',       linkLabel: 'View Portfolio',   color: '#059669', bg: '#ECFDF5', border: '#A7F3D0' },
    { icon: Users,      label: 'Happy Clients',  value: '100+',         link: '/contact',         linkLabel: 'Contact Page',     color: '#DC2626', bg: '#FEF2F2', border: '#FECACA' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', color: '#111827', margin: 0 }}>
          Dashboard Overview
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#6B7280', marginTop: '0.25rem' }}>
          Welcome back! Here's what's happening with your studio.
        </p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {stats.map(stat => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} style={{
              background: '#fff',
              borderRadius: '14px',
              padding: '1.75rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              border: '1px solid #E5E7EB',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.06)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '12px',
                  background: stat.bg,
                  border: `1px solid ${stat.border}`,
                  color: stat.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={22} />
                </div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.7rem', fontWeight: 600, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {loading && (stat.label === 'Portfolio Items' || stat.label === 'Blog Posts') ? '...' : ''}
                </span>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.25rem', fontWeight: 700, color: '#111827', lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: '#6B7280', marginTop: '0.35rem', marginBottom: '1rem' }}>
                {stat.label}
              </div>
              <Link to={stat.link} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem', fontWeight: 600,
                color: stat.color, textDecoration: 'none',
              }}>
                {stat.linkLabel} →
              </Link>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div style={{ background: '#fff', borderRadius: '14px', padding: '1.75rem', border: '1px solid #E5E7EB', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', color: '#111827', marginBottom: '1.25rem' }}>
          Quick Actions
        </h3>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { label: '+ Add Portfolio Item', href: '/admin/portfolio', primary: true },
            { label: '+ New Blog Post',      href: '/admin/blog',      primary: false },
            { label: 'View Live Site',       href: '/',                primary: false, external: true },
          ].map(action => (
            <Link key={action.label} to={action.href}
              target={action.external ? '_blank' : undefined}
              style={{
                padding: '0.65rem 1.25rem',
                borderRadius: '8px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
                background: action.primary ? 'linear-gradient(135deg, #B8972E, #a0821f)' : 'transparent',
                color: action.primary ? '#fff' : '#374151',
                border: action.primary ? 'none' : '1.5px solid #D1D5DB',
                boxShadow: action.primary ? '0 4px 14px rgba(184,151,46,0.3)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
