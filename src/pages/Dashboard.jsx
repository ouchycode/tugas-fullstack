import React from 'react';
import { TrendingUp, TrendingDown, Minus, AlertTriangle } from 'lucide-react';

const bars = [
  { name: 'Web Dev',      pct: 82,  val: 'Rp 1,5jt', color: 'var(--accent)' },
  { name: 'Mobile Dev',   pct: 95,  val: 'Rp 2,0jt', color: 'var(--green)' },
  { name: 'UI/UX',        pct: 65,  val: 'Rp 1,2jt', color: 'var(--accent)' },
  { name: 'Data Science', pct: 100, val: 'Rp 2,5jt', color: 'var(--green)' },
  { name: 'Copywriting',  pct: 38,  val: 'Rp 800rb',  color: 'var(--amber)' },
];

const skills = [
  { name: 'React.js', level: 'Sangat Tinggi', tier: 'hot' },
  { name: 'Figma',    level: 'Sangat Tinggi', tier: 'hot' },
  { name: 'Node.js',  level: 'Tinggi',        tier: 'med' },
  { name: 'Python',   level: 'Tinggi',        tier: 'med' },
  { name: 'Flutter',  level: 'Tinggi',        tier: 'med' },
];

const statCards = [
  { label: 'Web Development',  value: 'Rp 1,5jt', change: '+5%',  dir: 'up',      accent: 'var(--accent)' },
  { label: 'UI / UX Design',   value: 'Rp 1,2jt', change: '+3%',  dir: 'up',      accent: 'var(--green)' },
  { label: 'Top Skill',         value: 'React.js',  change: '#1',   dir: 'neutral', accent: 'var(--amber)' },
];

const tierColors = {
  hot: { bg: 'rgba(76,175,125,0.08)', color: 'var(--green)',  border: 'rgba(76,175,125,0.2)' },
  med: { bg: 'rgba(212,168,83,0.08)', color: 'var(--amber)', border: 'rgba(212,168,83,0.2)' },
};

const Panel = ({ children, style = {}, hover = true }) => {
  const ref = React.useRef(null);
  return (
    <div
      ref={ref}
      style={{
        background: 'var(--bg-1)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-lg)',
        padding: '18px 20px',
        transition: 'border-color 0.15s',
        ...style,
      }}
      onMouseEnter={hover ? (e => e.currentTarget.style.borderColor = 'var(--border-1)') : undefined}
      onMouseLeave={hover ? (e => e.currentTarget.style.borderColor = 'var(--border)') : undefined}
    >
      {children}
    </div>
  );
};

const Dashboard = () => (
  <div style={{
    fontFamily: 'var(--font)',
    maxWidth: 1100, margin: '0 auto',
    padding: 'clamp(40px, 6vw, 64px) 20px 80px',
  }}>

    {/* Header */}
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 36, gap: 16, flexWrap: 'wrap',
    }}>
      <div>
        <p className="label-accent" style={{ marginBottom: 10 }}>Market Intelligence</p>
        <h1 style={{
          fontSize: 'clamp(24px,4vw,34px)',
          fontWeight: 700, letterSpacing: '-0.035em',
          lineHeight: 1.1, color: 'var(--fg)',
        }}>
          Tren Pasar Freelance{' '}
          <span style={{ color: 'var(--fg-2)', fontWeight: 500 }}>Indonesia</span>
        </h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 4 }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: 'var(--green)',
          display: 'block',
          boxShadow: '0 0 6px rgba(76,175,125,0.5)',
          animation: 'pulse-dot 2s ease-in-out infinite',
        }} />
        <span style={{ fontSize: 11.5, color: 'var(--fg-2)', letterSpacing: '-0.01em' }}>
          Live soon · Apr – Jun 2025
        </span>
      </div>
    </div>

    {/* Stat cards */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 8, marginBottom: 10,
    }}>
      {statCards.map(({ label, value, change, dir, accent }) => (
        <Panel key={label} style={{ position: 'relative', overflow: 'hidden', paddingTop: 20 }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 1.5, background: accent, opacity: 0.6,
          }} />
          <p className="label-mono" style={{ marginBottom: 8, fontSize: 10 }}>{label}</p>
          <p style={{
            fontSize: 20, fontWeight: 700, letterSpacing: '-0.03em',
            color: 'var(--fg)', marginBottom: 5,
          }}>{value}</p>
          <p style={{
            fontSize: 11.5, color: accent,
            display: 'flex', alignItems: 'center', gap: 4,
          }}>
            {dir === 'up' && <TrendingUp size={11} />}
            {dir === 'down' && <TrendingDown size={11} />}
            {change} vs bulan lalu
          </p>
        </Panel>
      ))}
    </div>

    {/* Charts row */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 8, marginBottom: 10,
    }}>

      {/* Bar chart */}
      <Panel>
        <p className="label-mono" style={{ marginBottom: 18, fontSize: 10 }}>Rata-rata harga per kategori</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {bars.map(({ name, pct, val, color }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
              <span style={{
                fontSize: 11.5, color: 'var(--fg-2)',
                width: 86, flexShrink: 0,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                letterSpacing: '-0.005em',
              }}>{name}</span>
              <div style={{
                flex: 1, height: 3,
                background: 'var(--bg-3)',
                borderRadius: 99, overflow: 'hidden',
              }}>
                <div style={{
                  width: `${pct}%`, height: '100%',
                  background: color, borderRadius: 99,
                  opacity: 0.75,
                }} />
              </div>
              <span style={{
                fontSize: 11, color: 'var(--fg-2)',
                width: 50, textAlign: 'right', flexShrink: 0,
                letterSpacing: '-0.005em',
              }}>{val}</span>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 10.5, color: 'var(--fg-3)', marginTop: 16, letterSpacing: '-0.005em' }}>
          * placeholder — diperbarui setelah scraping
        </p>
      </Panel>

      {/* Skills */}
      <Panel>
        <p className="label-mono" style={{ marginBottom: 18, fontSize: 10 }}>Skill in-demand</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {skills.map(({ name, level, tier }) => {
            const t = tierColors[tier];
            return (
              <div key={name} style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '9px 11px',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-sm)',
                transition: 'border-color 0.12s, background 0.12s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.background = 'var(--bg-3)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-2)'; }}
              >
                <span style={{ fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', color: 'var(--fg)' }}>{name}</span>
                <span style={{
                  fontSize: 10.5, padding: '2px 7px',
                  borderRadius: 'var(--r-xs)',
                  background: t.bg, color: t.color,
                  border: `1px solid ${t.border}`,
                  fontWeight: 500, letterSpacing: '-0.005em',
                }}>{level}</span>
              </div>
            );
          })}
        </div>
      </Panel>
    </div>

    {/* Notice */}
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 10,
      background: 'rgba(212,168,83,0.05)',
      border: '1px solid rgba(212,168,83,0.15)',
      borderRadius: 'var(--r-sm)',
      padding: '11px 14px',
    }}>
      <AlertTriangle size={13} color="var(--amber)" style={{ marginTop: 1.5, flexShrink: 0 }} />
      <p style={{ fontSize: 12, color: 'var(--fg-2)', lineHeight: 1.65, letterSpacing: '-0.005em' }}>
        Data insight akan diperbarui secara otomatis setelah pipeline scraping & EDA selesai dijalankan.
      </p>
    </div>
  </div>
);

export default Dashboard;
