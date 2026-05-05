import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Target, Scale, TrendingUp, CheckCircle } from 'lucide-react';

const features = [
  {
    icon: Target,
    color: 'var(--accent)',
    label: 'Estimasi Akurat',
    desc: 'Model deep learning dilatih dari data pasar freelance Indonesia yang terus diperbarui secara berkala.',
  },
  {
    icon: TrendingUp,
    color: 'var(--green)',
    label: 'Insight Pasar',
    desc: 'Tren harga per kategori jasa dan skill paling dicari di ekosistem freelance lokal.',
  },
  {
    icon: Scale,
    color: 'var(--amber)',
    label: 'Posisi Tawar',
    desc: 'Data-driven pricing — bukan tebak-tebakan saat negosiasi dengan klien.',
  },
];

const stats = [
  { val: '59.4%', label: 'pekerja sektor informal', src: 'BPS 2025' },
  { val: '36.3%', label: 'proporsi freelancer aktif', src: 'Agustus 2025' },
  { val: 'SDG 8',  label: 'decent work & growth', src: 'target kami' },
];

const steps = [
  { n: '1', title: 'Pilih Kategori', desc: 'Tentukan kategori jasa yang sesuai dengan pekerjaan kamu.' },
  { n: '2', title: 'Tambah Skill', desc: 'Input skill yang dikuasai agar estimasi lebih presisi dan akurat.' },
  { n: '3', title: 'Dapatkan Estimasi', desc: 'Lihat range harga min, median, dan maksimum secara instan.' },
];

const Home = () => (
  <div style={{ fontFamily: 'var(--font)' }}>

    {/* ── HERO ── */}
    <section className="hero-grid" style={{
      borderBottom: '1px solid var(--border)',
      padding: 'clamp(64px, 10vw, 112px) 20px clamp(64px, 8vw, 96px)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(94,106,210,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '4px 12px 4px 4px',
          background: 'var(--bg-2)',
          border: '1px solid var(--border-1)',
          borderRadius: 100,
          marginBottom: 28,
        }}>
          <span style={{
            fontSize: 10, fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            background: 'var(--accent)',
            color: '#fff',
            padding: '2px 8px',
            borderRadius: 99,
          }}>New</span>
          <span style={{ fontSize: 11.5, color: 'var(--fg-2)', letterSpacing: '-0.01em' }}>
            CC26-PSU164 · Future-Ready Work & Economy
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(34px, 5.5vw, 62px)',
          fontWeight: 700,
          lineHeight: 1.06,
          letterSpacing: '-0.04em',
          color: 'var(--fg)',
          marginBottom: 20,
          maxWidth: 640,
        }}>
          Harga jasa yang adil<br />
          <span style={{
            background: 'linear-gradient(135deg, #5e6ad2 0%, #8b97f5 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>berbasis data nyata</span>
        </h1>

        <p style={{
          fontSize: 15, color: 'var(--fg-1)',
          lineHeight: 1.7,
          maxWidth: 440,
          marginBottom: 36,
          letterSpacing: '-0.01em',
        }}>
          Platform AI untuk freelancer dan klien Indonesia menemukan standar harga yang objektif — bukan spekulasi.
        </p>

        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Link to="/estimator" className="btn-primary" style={{ fontSize: 13.5, padding: '9px 18px' }}>
            Mulai Estimasi <ArrowRight size={14} />
          </Link>
          <Link to="/dashboard" className="btn-secondary" style={{ fontSize: 13.5, padding: '9px 18px' }}>
            <BarChart2 size={14} /> Lihat Tren Pasar
          </Link>
        </div>

        {/* Trusted by / social proof */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 40 }}>
          <div style={{ display: 'flex', gap: 1 }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} style={{
                width: 22, height: 22,
                borderRadius: '50%',
                background: `hsl(${220 + i * 30}, 60%, 40%)`,
                border: '2px solid var(--bg)',
                marginLeft: i > 0 ? -7 : 0,
              }} />
            ))}
          </div>
          <span style={{ fontSize: 12, color: 'var(--fg-2)', letterSpacing: '-0.01em' }}>
            Dirancang untuk freelancer Indonesia
          </span>
        </div>
      </div>
    </section>

    {/* ── STATS BAR ── */}
    <section style={{ background: 'var(--bg-1)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', gap: 0, overflowX: 'auto' }}>
          {stats.map(({ val, label, src }, i) => (
            <div key={val} style={{
              padding: '18px 0',
              paddingRight: i < stats.length - 1 ? 40 : 0,
              paddingLeft: i > 0 ? 40 : 0,
              borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              flexShrink: 0,
            }}>
              <p style={{
                fontSize: 18, fontWeight: 700,
                letterSpacing: '-0.03em', color: 'var(--fg)',
                marginBottom: 1,
              }}>{val}</p>
              <p style={{ fontSize: 11.5, color: 'var(--fg-2)', lineHeight: 1.4, letterSpacing: '-0.005em' }}>
                {label}
                <span style={{ color: 'var(--fg-3)', marginLeft: 4 }}>· {src}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── FEATURES ── */}
    <section style={{ padding: 'clamp(56px,8vw,88px) 20px', maxWidth: 1100, margin: '0 auto' }}>
      <p className="label-mono" style={{ marginBottom: 10 }}>Platform</p>
      <h2 style={{
        fontSize: 'clamp(22px,3vw,30px)', fontWeight: 700,
        letterSpacing: '-0.03em', color: 'var(--fg)',
        marginBottom: 40, maxWidth: 420, lineHeight: 1.2,
      }}>
        Dirancang untuk ekosistem freelance yang lebih sehat
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 1,
        background: 'var(--border)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-xl)',
        overflow: 'hidden',
      }}>
        {features.map(({ icon: Icon, color, label, desc }) => (
          <div key={label} style={{
            background: 'var(--bg-1)',
            padding: '28px 26px',
            transition: 'background 0.15s',
            cursor: 'default',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-1)'}
          >
            <div style={{
              width: 32, height: 32,
              border: '1px solid var(--border-1)',
              borderRadius: 'var(--r-sm)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 16,
              background: 'var(--bg-2)',
            }}>
              <Icon size={14} color={color} strokeWidth={1.8} />
            </div>
            <h3 style={{
              fontSize: 13.5, fontWeight: 600,
              letterSpacing: '-0.02em', color: 'var(--fg)',
              marginBottom: 8,
            }}>{label}</h3>
            <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.65, letterSpacing: '-0.005em' }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── HOW IT WORKS ── */}
    <section style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(48px,7vw,80px) 20px',
      maxWidth: 1100, margin: '0 auto',
    }}>
      <p className="label-mono" style={{ marginBottom: 10 }}>Cara Kerja</p>
      <h2 style={{
        fontSize: 'clamp(20px,2.8vw,28px)', fontWeight: 700,
        letterSpacing: '-0.03em', color: 'var(--fg)',
        marginBottom: 40, lineHeight: 1.2,
      }}>
        Tiga langkah, estimasi instan
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 32,
      }}>
        {steps.map(({ n, title, desc }) => (
          <div key={n}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 26, height: 26,
              border: '1px solid var(--border-2)',
              borderRadius: 'var(--r-xs)',
              fontSize: 11, fontWeight: 600, color: 'var(--fg-2)',
              letterSpacing: '0.02em',
              marginBottom: 14,
            }}>{n}</div>
            <h3 style={{ fontSize: 13.5, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--fg)', marginBottom: 7 }}>
              {title}
            </h3>
            <p style={{ fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.65 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ── CTA BOTTOM ── */}
    <section style={{
      borderTop: '1px solid var(--border)',
      padding: 'clamp(48px,7vw,80px) 20px',
    }}>
      <div style={{ maxWidth: 440, margin: '0 auto', textAlign: 'center' }}>
        <p className="label-accent" style={{ marginBottom: 14 }}>Mulai sekarang — gratis</p>
        <h2 style={{
          fontSize: 'clamp(20px,3vw,28px)', fontWeight: 700,
          letterSpacing: '-0.035em', color: 'var(--fg)',
          marginBottom: 10, lineHeight: 1.2,
        }}>
          Sudah tahu skill-mu,<br />sekarang ketahui nilainya.
        </h2>
        <p style={{ fontSize: 13, color: 'var(--fg-2)', marginBottom: 28, lineHeight: 1.65 }}>
          Isi kategori, skill, dan durasi — estimasi harga dalam hitungan detik.
        </p>
        <Link to="/estimator" className="btn-primary" style={{ fontSize: 14, padding: '9px 22px' }}>
          Coba Estimator <ArrowRight size={14} />
        </Link>
      </div>
    </section>

  </div>
);

export default Home;
