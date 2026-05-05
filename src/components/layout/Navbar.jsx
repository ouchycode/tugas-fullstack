import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/estimator', label: 'Estimator' },
  { to: '/dashboard', label: 'Dashboard' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 52,
        background: scrolled ? 'rgba(8,9,10,0.88)' : 'rgba(8,9,10,0.6)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'background 0.2s, border-color 0.2s',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 20px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}>

          {/* ── Logo ── */}
          <Link to="/" style={{
            display: 'flex', alignItems: 'center', gap: 7,
            textDecoration: 'none', flexShrink: 0,
          }}>
            <div style={{
              width: 24, height: 24,
              background: 'var(--accent)',
              borderRadius: 5,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Zap size={12} color="#fff" strokeWidth={2.5} />
            </div>
            <span style={{
              fontFamily: 'var(--font)',
              fontWeight: 600, fontSize: 13.5,
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
            }}>
              FairPrice<span style={{ color: 'var(--accent)' }}>Finder</span>
            </span>
          </Link>

          {/* ── Desktop Center Nav ── */}
          <div className="hide-mobile" style={{
            display: 'flex', alignItems: 'center', gap: 1,
            position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          }}>
            {NAV_LINKS.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <Link key={to} to={to} style={{
                  padding: '5px 10px',
                  borderRadius: 'var(--r-sm)',
                  textDecoration: 'none',
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: active ? 'var(--fg)' : 'var(--fg-2)',
                  background: active ? 'var(--bg-2)' : 'transparent',
                  border: active ? '1px solid var(--border-1)' : '1px solid transparent',
                  transition: 'color 0.12s, background 0.12s',
                }}
                onMouseEnter={e => {
                  if (!active) {
                    e.currentTarget.style.color = 'var(--fg-1)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    e.currentTarget.style.color = 'var(--fg-2)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* ── Desktop Right CTA ── */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            <Link to="/dashboard" className="btn-secondary" style={{ fontSize: 12, padding: '6px 12px' }}>
              Dashboard
            </Link>
            <Link to="/estimator" className="btn-primary" style={{ fontSize: 12, padding: '6px 12px' }}>
              Cek Harga
            </Link>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className="hide-desktop"
            onClick={() => setMobileOpen(o => !o)}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32,
              background: 'transparent',
              border: '1px solid var(--border-1)',
              borderRadius: 'var(--r-sm)',
              color: 'var(--fg-2)',
              cursor: 'pointer',
              transition: 'all 0.12s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-2)'; e.currentTarget.style.color = 'var(--fg-1)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-1)'; e.currentTarget.style.color = 'var(--fg-2)'; }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div
          className="hide-desktop"
          style={{
            position: 'fixed', inset: 0, zIndex: 99,
            background: 'rgba(8,9,10,0.96)',
            backdropFilter: 'blur(20px)',
            paddingTop: 52,
            display: 'flex', flexDirection: 'column',
          }}
          onClick={e => { if (e.target === e.currentTarget) setMobileOpen(false); }}
        >
          <div style={{ padding: '16px 20px 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV_LINKS.map(({ to, label }) => {
              const active = pathname === to;
              return (
                <Link key={to} to={to} style={{
                  display: 'flex', alignItems: 'center',
                  padding: '11px 14px',
                  borderRadius: 'var(--r)',
                  textDecoration: 'none',
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: active ? 'var(--fg)' : 'var(--fg-1)',
                  background: active ? 'var(--bg-2)' : 'transparent',
                  border: active ? '1px solid var(--border-1)' : '1px solid transparent',
                  transition: 'all 0.12s',
                }}>
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'var(--border)', margin: '0 20px' }} />

          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <Link to="/estimator" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: 14 }}>
              Estimasi Harga
            </Link>
            <Link to="/dashboard" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: 14 }}>
              Lihat Dashboard
            </Link>
          </div>
        </div>
      )}

      {/* Spacer for fixed navbar */}
      <div style={{ height: 52 }} />
    </>
  );
};

export default Navbar;
