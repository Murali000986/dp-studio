import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../data/content';

export default function AdminPortfolio() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Form state
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Events');
  const [tag, setTag] = useState('Photography');
  const [client, setClient] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('portfolio').select('*').order('created_at', { ascending: false });
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
    if (!editingId && !imageFile) return alert('Please select an image');
    
    setUploading(true);
    try {
      let finalImageUrl = '';

      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `portfolio/${fileName}`;
        
        const { error: uploadError } = await supabase.storage.from('media').upload(filePath, imageFile);
        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage.from('media').getPublicUrl(filePath);
        finalImageUrl = publicUrlData.publicUrl;
      }
      
      if (editingId) {
        const updateData: any = { title, category, tag, client, year };
        if (finalImageUrl) updateData.image_url = finalImageUrl;
        
        const { error: updateError } = await supabase.from('portfolio').update(updateData).eq('id', editingId);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from('portfolio').insert([
          { title, category, tag, client, year, image_url: finalImageUrl }
        ]);
        if (insertError) throw insertError;
      }

      // Success
      setIsAdding(false);
      setEditingId(null);
      setTitle(''); setClient(''); setImageFile(null);
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
    setCategory(item.category);
    setTag(item.tag);
    setClient(item.client || '');
    setYear(item.year || '');
    setImageFile(null);
    setIsAdding(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this item?')) return;
    await supabase.from('portfolio').delete().eq('id', id);
    fetchItems();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#111827', margin: 0 }}>Portfolio Management</h2>
        <button 
          onClick={() => {
            if (isAdding) {
              setEditingId(null);
              setTitle(''); setClient(''); setYear(new Date().getFullYear().toString()); setImageFile(null);
            }
            setIsAdding(!isAdding);
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#111827', color: '#fff', padding: '0.75rem 1.25rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 500 }}
        >
          {isAdding ? 'Cancel' : <><Plus size={18} /> Add New Project</>}
        </button>
      </div>

      {isAdding && (
        <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#374151' }}>{editingId ? 'Edit Portfolio Item' : 'Add New Portfolio Item'}</h3>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Title</label>
              <input required value={title} onChange={e => setTitle(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Client</label>
              <input required value={client} onChange={e => setClient(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }}>
                <option value="Events">Events</option>
                <option value="Portraits">Portraits</option>
                <option value="Creative">Creative</option>
                <option value="Cinematic">Cinematic</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Tag</label>
              <select value={tag} onChange={e => setTag(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }}>
                <option value="Photography">Photography</option>
                <option value="Videography">Videography</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Year</label>
              <input required value={year} onChange={e => setYear(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Image Upload {editingId && '(Optional - leave blank to keep current)'}</label>
              <input type="file" accept="image/*" required={!editingId} onChange={e => setImageFile(e.target.files?.[0] || null)} style={{ padding: '0.5rem' }} />
            </div>
            <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
              <button disabled={uploading} type="submit" style={{ background: '#B8972E', color: '#fff', padding: '0.75rem 2rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                {uploading ? 'Saving...' : (editingId ? 'Update Portfolio Item' : 'Save Portfolio Item')}
              </button>
            </div>
          </form>
        </div>
      )}

      <div style={{ background: '#fff', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#F3F4F6', color: '#4B5563', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Image</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Title</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Category</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Client & Year</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} style={{ padding: '2rem', textAlign: 'center' }}>Loading...</td></tr>
            ) : items.length === 0 ? (
              <tr><td colSpan={5} style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>No portfolio items found. Add one above.</td></tr>
            ) : items.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <img src={item.image_url} alt={item.title} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: '6px' }} />
                </td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 500, color: '#111827' }}>{item.title}</td>
                <td style={{ padding: '1rem 1.5rem' }}><span style={{ background: '#E0E7FF', color: '#4338CA', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 500 }}>{item.category}</span></td>
                <td style={{ padding: '1rem 1.5rem', color: '#6B7280', fontSize: '0.9rem' }}>{item.client}, {item.year}</td>
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
