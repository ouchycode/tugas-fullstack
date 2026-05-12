import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Menu, X, Zap } from 'lucide-react';

const NAV_LINKS = [
  { to: '/',          label: 'Home' },
  { to: '/estimator', label: 'Estimator' },
  { to: '/dashboard', label: 'Dashboard' },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 52,
        background: scrolled ? 'var(--bg-nav)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.25s, border-color 0.25s',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          padding: '0 20px', height: '100%',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 24, height: 24,
              background: 'var(--indigo)',
              borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Zap size={12} color="#ffffff" strokeWidth={2.5} />
            </div>
            <span style={{ fontFamily: 'var(--font)', fontWeight: 600, fontSize: 13.5, letterSpacing: '-0.02em', color: 'var(--fg)' }}>
              FairPriceFinder
            </span>
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu.Root
            className="hide-mobile"
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            <NavigationMenu.List style={{ display: 'flex', alignItems: 'center', gap: 2, listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_LINKS.map(({ to, label }) => (
                <NavigationMenu.Item key={to}>
                  <NavigationMenu.Link asChild>
                    <Link
                      to={to}
                      className={`nav-link${pathname === to ? ' nav-link--active' : ''}`}
                    >
                      {label}
                    </Link>
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Desktop CTA */}
          <div className="hide-mobile" style={{ flexShrink: 0 }}>
            <Link to="/estimator" className="btn-primary" style={{ fontSize: 12, padding: '6px 14px' }}>
              Cek Harga
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="hide-desktop"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, background: 'transparent',
              border: '1px solid var(--border-1)', borderRadius: 'var(--r-sm)',
              color: 'var(--fg-2)', cursor: 'pointer',
              transition: 'all 0.12s', flexShrink: 0,
            }}
          >
            {mobileOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="hide-desktop"
          style={{
            position: 'fixed', inset: 0, zIndex: 99,
            background: 'var(--bg)', paddingTop: 52,
            display: 'flex', flexDirection: 'column',
          }}
          onClick={e => { if (e.target === e.currentTarget) setMobileOpen(false); }}
        >
          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`mobile-nav-link${pathname === to ? ' mobile-nav-link--active' : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>
          <div style={{ height: 1, background: 'var(--border)', margin: '0 20px' }} />
          <div style={{ padding: '16px 20px' }}>
            <Link
              to="/estimator"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: 14 }}
            >
              Estimasi Harga
            </Link>
          </div>
        </div>
      )}

      <div style={{ height: 52 }} />
    </>
  );
};

export default Navbar;
