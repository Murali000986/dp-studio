import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Trash2, Edit2, Briefcase } from 'lucide-react';
import { CAREER_ROLES } from '../../data/content';

export default function AdminCareers() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Form state
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Full-time');
  const [location, setLocation] = useState('Mumbai, IN (On-site)');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('careers').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setItems(data || []);
    } catch (err) {
      console.error(err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    try {
      if (editingId) {
        const updateData = { title, type, location, description };
        const { error: updateError } = await supabase.from('careers').update(updateData).eq('id', editingId);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from('careers').insert([
          { title, type, location, description }
        ]);
        if (insertError) throw insertError;
      }

      setIsAdding(false);
      setEditingId(null);
      setTitle(''); setType('Full-time'); setLocation('Mumbai, IN (On-site)'); setDescription('');
      fetchItems();
    } catch (error: any) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setTitle(item.title);
    setType(item.type);
    setLocation(item.location);
    setDescription(item.description);
    setIsAdding(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this career posting?')) return;
    await supabase.from('careers').delete().eq('id', id);
    fetchItems();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#111827', margin: 0 }}>Careers Management</h2>
        <button 
          onClick={() => {
            if (isAdding) {
              setEditingId(null);
              setTitle(''); setType('Full-time'); setLocation('Mumbai, IN (On-site)'); setDescription('');
            }
            setIsAdding(!isAdding);
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#111827', color: '#fff', padding: '0.75rem 1.25rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 500 }}
        >
          {isAdding ? 'Cancel' : <><Plus size={18} /> New Job Posting</>}
        </button>
      </div>

      {isAdding && (
        <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#374151' }}>{editingId ? 'Edit Job Posting' : 'Create New Job Posting'}</h3>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Job Title</label>
              <input required value={title} onChange={e => setTitle(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Employment Type</label>
              <input required value={type} onChange={e => setType(e.target.value)} placeholder="e.g., Full-time, Part-time, Contract" style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Location</label>
              <input required value={location} onChange={e => setLocation(e.target.value)} placeholder="e.g., Mumbai, IN (On-site)" style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: '1 / -1' }}>
              <label>Description</label>
              <textarea required value={description} onChange={e => setDescription(e.target.value)} rows={4} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px', resize: 'vertical' }} />
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
              <button disabled={uploading} type="submit" style={{ background: '#B8972E', color: '#fff', padding: '0.75rem 2rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                {uploading ? 'Saving...' : (editingId ? 'Update Job Posting' : 'Publish Job Posting')}
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#F3F4F6', color: '#4B5563', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Role</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Type & Location</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={3} style={{ padding: '2rem', textAlign: 'center' }}>Loading...</td></tr>
            ) : items.length === 0 ? (
              <tr><td colSpan={3} style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>No job postings found. Create one above.</td></tr>
            ) : items.map((item, idx) => (
              <tr key={item.id || idx} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 500, color: '#111827' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Briefcase size={16} color="#6B7280" />
                    {item.title}
                  </div>
                </td>
                <td style={{ padding: '1rem 1.5rem', color: '#6B7280', fontSize: '0.9rem' }}>
                  <span style={{ background: '#E0E7FF', color: '#4338CA', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', marginRight: '0.5rem' }}>{item.type}</span>
                  {item.location}
                </td>
                <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    <button onClick={() => handleEdit(item)} style={{ background: '#EFF6FF', color: '#3B82F6', border: 'none', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                      <Edit2 size={18} />
                    </button>
                    <button onClick={() => handleDelete(item.id)} style={{ background: '#FEE2E2', color: '#DC2626', border: 'none', padding: '0.5rem', borderRadius: '6px', cursor: 'pointer' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
