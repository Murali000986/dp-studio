import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import { Plus, Trash2, Edit2 } from 'lucide-react';
import { BLOG_POSTS } from '../../data/content';

export default function AdminBlog() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  
  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Marketing');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [readTime, setReadTime] = useState('5 min read');
  const [date, setDate] = useState(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    setLoading(true);
    try {
      const { data, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setItems(data || []);
    } catch (err) {
      console.error(err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  // Auto-generate slug from title
  useEffect(() => {
    if (title && !slug) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  }, [title]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId && !imageFile) return alert('Please select an image');
    
    setUploading(true);
    try {
      let finalImageUrl = '';
      
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `blog/${fileName}`;
        
        const { error: uploadError } = await supabase.storage.from('media').upload(filePath, imageFile);
        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage.from('media').getPublicUrl(filePath);
        finalImageUrl = publicUrlData.publicUrl;
      }
      
      if (editingId) {
        const updateData: any = { title, slug, excerpt, content, category, read_time: readTime, date };
        if (finalImageUrl) updateData.image_url = finalImageUrl;

        const { error: updateError } = await supabase.from('blogs').update(updateData).eq('id', editingId);
        if (updateError) throw updateError;
      } else {
        const { error: insertError } = await supabase.from('blogs').insert([
          { title, slug, excerpt, content, category, read_time: readTime, date, image_url: finalImageUrl }
        ]);
        if (insertError) throw insertError;
      }

      setIsAdding(false);
      setEditingId(null);
      setTitle(''); setSlug(''); setExcerpt(''); setContent(''); setImageFile(null);
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
    setSlug(item.slug);
    setCategory(item.category);
    setExcerpt(item.excerpt);
    setContent(item.content);
    setReadTime(item.read_time || '5 min read');
    setDate(item.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    setImageFile(null);
    setIsAdding(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    await supabase.from('blogs').delete().eq('id', id);
    fetchItems();
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', color: '#111827', margin: 0 }}>Blog Management</h2>
        <button 
          onClick={() => {
            if (isAdding) {
              setEditingId(null);
              setTitle(''); setSlug(''); setExcerpt(''); setContent(''); setImageFile(null);
            }
            setIsAdding(!isAdding);
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#111827', color: '#fff', padding: '0.75rem 1.25rem', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 500 }}
        >
          {isAdding ? 'Cancel' : <><Plus size={18} /> New Blog Post</>}
        </button>
      </div>

      {isAdding && (
        <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#374151' }}>{editingId ? 'Edit Blog Post' : 'Create New Blog Post'}</h3>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Title</label>
              <input required value={title} onChange={e => setTitle(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Slug (URL)</label>
              <input required value={slug} onChange={e => setSlug(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Category</label>
              <input required value={category} onChange={e => setCategory(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Read Time</label>
              <input required value={readTime} onChange={e => setReadTime(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: '1 / -1' }}>
              <label>Excerpt (Short Description)</label>
              <textarea required value={excerpt} onChange={e => setExcerpt(e.target.value)} rows={2} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px', resize: 'vertical' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: '1 / -1' }}>
              <label>Full Content (Markdown or plain text for now)</label>
              <textarea required value={content} onChange={e => setContent(e.target.value)} rows={8} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px', resize: 'vertical', fontFamily: 'monospace' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Date Label</label>
              <input required value={date} onChange={e => setDate(e.target.value)} style={{ padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '6px' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label>Cover Image {editingId && '(Optional - leave blank to keep current)'}</label>
              <input type="file" accept="image/*" required={!editingId} onChange={e => setImageFile(e.target.files?.[0] || null)} style={{ padding: '0.5rem' }} />
            </div>

            <div style={{ gridColumn: '1 / -1', marginTop: '1rem' }}>
              <button disabled={uploading} type="submit" style={{ background: '#B8972E', color: '#fff', padding: '0.75rem 2rem', borderRadius: '6px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
                {uploading ? 'Publishing...' : (editingId ? 'Update Blog Post' : 'Publish Blog Post')}
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
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600 }}>Category & Date</th>
              <th style={{ padding: '1rem 1.5rem', fontWeight: 600, textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={4} style={{ padding: '2rem', textAlign: 'center' }}>Loading...</td></tr>
            ) : items.length === 0 ? (
              <tr><td colSpan={4} style={{ padding: '2rem', textAlign: 'center', color: '#6B7280' }}>No blog posts found. Write one above.</td></tr>
            ) : items.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <td style={{ padding: '1rem 1.5rem' }}>
                  <img src={item.image_url} alt={item.title} style={{ width: 80, height: 50, objectFit: 'cover', borderRadius: '4px' }} />
                </td>
                <td style={{ padding: '1rem 1.5rem', fontWeight: 500, color: '#111827' }}>
                  {item.title}
                  <div style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '0.25rem', fontFamily: 'monospace' }}>/{item.slug}</div>
                </td>
                <td style={{ padding: '1rem 1.5rem', color: '#6B7280', fontSize: '0.9rem' }}>
                  <span style={{ background: '#FEF3C7', color: '#92400E', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', marginRight: '0.5rem' }}>{item.category}</span>
                  {item.date}
                </td>
                <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
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
