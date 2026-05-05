import React, { useState } from 'react';
import { Send, AlertCircle, ChevronDown } from 'lucide-react';
import SkillTagInput from './SkillTagInput';
import { predictPrice } from '../../services/api';

const CATEGORIES = [
  'Web Development','Mobile Development','UI/UX Design',
  'Data Science','Content Writing','Digital Marketing',
  'Video Editing','Graphic Design','SEO','Copywriting',
];

const FieldLabel = ({ children, hint }) => (
  <div style={{ marginBottom: 7 }}>
    <label className="label-mono" style={{ fontSize: 10.5 }}>{children}</label>
    {hint && <span style={{ fontSize: 11, color: 'var(--fg-3)', marginLeft: 6 }}>{hint}</span>}
  </div>
);

const PriceEstimatorForm = ({ onResult }) => {
  const [category, setCategory] = useState('');
  const [skills,   setSkills]   = useState([]);
  const [duration, setDuration] = useState('');
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category || skills.length === 0 || !duration) {
      setError('Semua field wajib diisi.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const { data } = await predictPrice({ category, skills, duration: Number(duration) });
      onResult(data);
    } catch {
      setError('Gagal mengambil estimasi. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      background: 'var(--bg-1)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--r-xl)',
      padding: 22,
      display: 'flex', flexDirection: 'column', gap: 18,
    }}>

      {/* Kategori */}
      <div>
        <FieldLabel>Kategori Jasa</FieldLabel>
        <div style={{ position: 'relative' }}>
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="input-field"
            style={{ paddingRight: 34, cursor: 'pointer' }}
          >
            <option value="">Pilih kategori...</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <ChevronDown size={12} color="var(--fg-3)" style={{
            position: 'absolute', right: 11, top: '50%',
            transform: 'translateY(-50%)', pointerEvents: 'none',
          }} />
        </div>
      </div>

      {/* Skills */}
      <div>
        <FieldLabel hint="ketik → Enter">Skills</FieldLabel>
        <SkillTagInput value={skills} onChange={setSkills} />
      </div>

      {/* Durasi */}
      <div>
        <FieldLabel>Durasi Pengerjaan</FieldLabel>
        <input
          type="number" min="1"
          value={duration}
          onChange={e => setDuration(e.target.value)}
          placeholder="jumlah hari, contoh: 14"
          className="input-field"
        />
      </div>

      {/* Error */}
      {error && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          background: 'rgba(232,93,74,0.08)',
          border: '1px solid rgba(232,93,74,0.2)',
          borderRadius: 'var(--r-sm)',
          padding: '9px 12px',
        }}>
          <AlertCircle size={13} color="var(--red)" />
          <span style={{ fontSize: 12, color: 'var(--red)', letterSpacing: '-0.005em' }}>{error}</span>
        </div>
      )}

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', margin: '0 -2px' }} />

      {/* Submit */}
      <button type="submit" disabled={loading} className="btn-primary" style={{
        width: '100%', padding: '9px 16px', fontSize: 13.5,
        justifyContent: 'center',
      }}>
        {loading
          ? <span style={{ opacity: 0.7 }}>Menghitung estimasi...</span>
          : <><Send size={13} /> Estimasi Harga</>
        }
      </button>
    </form>
  );
};

export default PriceEstimatorForm;
