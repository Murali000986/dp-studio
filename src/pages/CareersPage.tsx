import { useSEO } from '../hooks/useSEO';
import PageHero from '../components/ui/PageHero';
import { CAREER_ROLES } from '../data/content';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function CareersPage() {
  const [roles, setRoles] = useState<any[]>(CAREER_ROLES);

  useEffect(() => {
    async function fetchRoles() {
      try {
        const { data, error } = await supabase.from('careers').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        if (data && data.length > 0) {
          setRoles(data);
        }
      } catch (error) {
        console.error('Error fetching careers:', error);
        // Fallback to CAREER_ROLES is already handled by initial state
      }
    }
    fetchRoles();
  }, []);
  useSEO({
    title: 'Careers — Join Our Creative Team in Mumbai',
    description: 'We are always looking for talented photographers, filmmakers, editors, and marketers to join DP Studios. View our open roles.',
    keywords: 'creative jobs mumbai, photography jobs, video editing jobs, digital marketing careers',
    canonical: 'https://dpstudios.in/careers',
  });

  return (
    <main>
      <PageHero
        label="Join The Team"
        title="Do Your Best Work Here"
        subtitle="We're building a culture where creative professionals can thrive, learn, and produce industry-leading work."
        image="/bts_videographer.png"
        breadcrumb="Careers"
      />



      {/* Open Roles */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ marginBottom: '3rem' }}>
            <div className="section-label">Open Positions</div>
            <h2 className="heading-lg" style={{ marginTop: '0.5rem' }}>Current Opportunities</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {roles.map((role, idx) => (
              <div key={role.id || idx} style={{
                background: 'var(--c-white)',
                border: '1px solid var(--c-border)',
                borderRadius: '12px',
                padding: '1.75rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              className="role-card">
                <div style={{ flex: 1, minWidth: 280 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: 'var(--c-charcoal)', marginBottom: '0.5rem' }}>
                    {role.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-gray">{role.type}</span>
                    <span className="badge badge-gray">{role.location}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--c-gray)', lineHeight: 1.6 }}>
                    {role.description}
                  </p>
                </div>
                <button className="btn btn-outline">Apply Now</button>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--c-gold-bg)', borderRadius: '12px', border: '1px solid #F0D060', textAlign: 'center' }}>
            <h4 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '1.05rem', color: 'var(--c-gold)', marginBottom: '0.5rem' }}>
              Don't see your role?
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--c-charcoal)', marginBottom: '1rem' }}>
              We are always on the lookout for exceptional talent. Send your portfolio to us anyway.
            </p>
            <a href="mailto:careers@dpstudios.in" className="btn btn-gold btn-sm">Email Portfolio</a>
          </div>
        </div>
      </section>

      <style>{`
        .role-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-sm); }
      `}</style>
    </main>
  );
}
