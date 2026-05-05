import React from 'react';
import { CheckCircle2, TrendingDown, Minus, TrendingUp, Info } from 'lucide-react';

const fmt = n => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0,
}).format(n);

const ranges = (r) => [
  { label: 'Minimum',  val: r.min_price,    icon: TrendingDown, color: 'var(--amber)',  bg: 'rgba(212,168,83,0.07)',  border: 'rgba(212,168,83,0.18)' },
  { label: 'Median',   val: r.median_price,  icon: Minus,        color: 'var(--accent)', bg: 'rgba(94,106,210,0.07)', border: 'rgba(94,106,210,0.2)' },
  { label: 'Maksimum', val: r.max_price,     icon: TrendingUp,   color: 'var(--green)',  bg: 'rgba(76,175,125,0.07)', border: 'rgba(76,175,125,0.18)' },
];

const PriceResult = ({ result }) => {
  if (!result) return null;
  return (
    <div style={{
      background: 'var(--bg-1)',
      border: '1px solid rgba(94,106,210,0.25)',
      borderRadius: 'var(--r-xl)',
      padding: 22,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 18 }}>
        <CheckCircle2 size={14} color="var(--green)" />
        <span style={{ fontSize: 13.5, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--fg)' }}>
          Estimasi Harga Adil
        </span>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
        gap: 7, marginBottom: 14,
      }}>
        {ranges(result).map(({ label, val, icon: Icon, color, bg, border }) => (
          <div key={label} style={{
            background: bg, border: `1px solid ${border}`,
            borderRadius: 'var(--r-sm)', padding: '14px 10px', textAlign: 'center',
          }}>
            <Icon size={13} color={color} style={{ margin: '0 auto 7px', display: 'block' }} />
            <p className="label-mono" style={{ fontSize: 9.5, marginBottom: 4, color: 'var(--fg-2)' }}>{label}</p>
            <p style={{ fontSize: 12.5, fontWeight: 700, color, letterSpacing: '-0.01em' }}>{fmt(val)}</p>
          </div>
        ))}
      </div>

      {result.note && (
        <div style={{
          display: 'flex', gap: 8, alignItems: 'flex-start',
          background: 'var(--bg-2)', border: '1px solid var(--border)',
          borderRadius: 'var(--r-sm)', padding: '9px 12px',
        }}>
          <Info size={12} color="var(--fg-3)" style={{ marginTop: 1.5, flexShrink: 0 }} />
          <p style={{ fontSize: 11.5, color: 'var(--fg-2)', lineHeight: 1.6, letterSpacing: '-0.005em' }}>
            {result.note}
          </p>
        </div>
      )}
    </div>
  );
};

export default PriceResult;
