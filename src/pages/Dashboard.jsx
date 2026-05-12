import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import * as Separator from '@radix-ui/react-separator';
import * as Tooltip from '@radix-ui/react-tooltip';

const bars = [
  { name: 'Web Dev',      pct: 82,  val: 'Rp 1,5jt', color: 'var(--indigo)' },
  { name: 'Mobile Dev',   pct: 95,  val: 'Rp 2,0jt', color: 'var(--green)' },
  { name: 'UI/UX',        pct: 65,  val: 'Rp 1,2jt', color: 'var(--indigo)' },
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
  { label: 'Web Development', value: 'Rp 1,5jt', change: '+5%', dir: 'up',      accent: 'var(--indigo)', tip: 'Rata-rata proyek web dev bulan ini.' },
  { label: 'UI / UX Design',  value: 'Rp 1,2jt', change: '+3%', dir: 'up',      accent: 'var(--green)',  tip: 'Naik 3% dibanding bulan lalu.' },
  { label: 'Top Skill',        value: 'React.js',  change: '#1',  dir: 'neutral', accent: 'var(--amber)',  tip: 'Skill paling banyak dicari klien saat ini.' },
];

const tierStyle = {
  hot: { background: 'rgba(76,175,125,0.08)',  color: 'var(--green)', border: '1px solid rgba(76,175,125,0.2)' },
  med: { background: 'rgba(212,168,83,0.08)', color: 'var(--amber)', border: '1px solid rgba(212,168,83,0.2)' },
};

const Dashboard = () => (
  <Tooltip.Provider delayDuration={200}>
    <div className="page-wrap">

      {/* Header */}
      <div data-aos="fade-down" className="page-header">
        <div>
          <p className="label-mono" style={{ marginBottom: 10 }}>Market Intelligence</p>
          <h1 className="page-title">
            Tren Pasar Freelance{' '}
            <span className="page-title__muted">Indonesia</span>
          </h1>
        </div>
        <div className="live-badge">
          <span className="live-badge__dot" />
          <span className="live-badge__text">Live soon · Apr – Jun 2025</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="stat-grid">
        {statCards.map(({ label, value, change, dir, accent, tip }, i) => (
          <Tooltip.Root key={label}>
            <Tooltip.Trigger asChild>
              <div data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="panel stat-card">
                  <div className="stat-card__bar" style={{ background: accent }} />
                  <p className="label-mono" style={{ marginBottom: 8, fontSize: 10 }}>{label}</p>
                  <p className="stat-card__value">{value}</p>
                  <p className="stat-card__change" style={{ color: accent }}>
                    {dir === 'up'   && <TrendingUp size={11} />}
                    {dir === 'down' && <TrendingDown size={11} />}
                    {change} vs bulan lalu
                  </p>
                </div>
              </div>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content sideOffset={6} className="tooltip-content">
                {tip}
                <Tooltip.Arrow style={{ fill: 'var(--bg-3)' }} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </div>

      {/* Charts row */}
      <div className="charts-row">

        {/* Bar chart */}
        <div data-aos="fade-right" data-aos-delay="80">
          <div className="panel">
            <p className="label-mono" style={{ marginBottom: 18, fontSize: 10 }}>Rata-rata harga per kategori</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {bars.map(({ name, pct, val, color }) => (
                <div key={name} className="bar-row">
                  <span className="bar-row__name">{name}</span>
                  <div className="bar-row__track">
                    <div className="bar-row__fill" style={{ width: `${pct}%`, background: color }} />
                  </div>
                  <span className="bar-row__val">{val}</span>
                </div>
              ))}
            </div>
            <p className="bar-chart__note">* placeholder — diperbarui setelah scraping</p>
          </div>
        </div>

        {/* Skills */}
        <div data-aos="fade-left" data-aos-delay="80">
          <div className="panel">
            <p className="label-mono" style={{ marginBottom: 18, fontSize: 10 }}>Skill in-demand</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {skills.map(({ name, level, tier }, i) => (
                <div key={name} data-aos="fade-up" data-aos-delay={i * 60} className="skill-item">
                  <span className="skill-item__name">{name}</span>
                  <span className="skill-item__badge" style={tierStyle[tier]}>{level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator.Root style={{ height: 1, background: 'var(--border)', margin: '10px 0' }} />

      {/* Notice */}
      <div data-aos="fade-up" className="alert--warning">
        <AlertTriangle size={13} color="var(--amber)" style={{ marginTop: 1.5, flexShrink: 0 }} />
        <p className="alert__text">
          Data insight akan diperbarui secara otomatis setelah pipeline scraping &amp; EDA selesai dijalankan.
        </p>
      </div>

    </div>
  </Tooltip.Provider>
);

export default Dashboard;
