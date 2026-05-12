import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Mail, ExternalLink, Sun, Moon } from 'lucide-react';
import * as Separator from '@radix-ui/react-separator';
import { useTheme } from '../../hooks/useTheme';

const footerLinks = [
  {
    title: 'Platform',
    links: [
      { label: 'Estimator', to: '/estimator' },
      { label: 'Dashboard', to: '/dashboard' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Dokumentasi', href: '#' },
      { label: 'API Reference', href: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'GitHub', href: '#', icon: Github },
      { label: 'Kontak', href: '#', icon: Mail },
    ],
  },
];

const Footer = () => {
  const { theme, toggle } = useTheme();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-1)' }}>
      <div className="container" style={{ paddingTop: 48, paddingBottom: 20 }}>

        {/* Top section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 32,
          marginBottom: 40,
        }}>
          {/* Brand */}
          <div>
            <Link to="/" onClick={handleLinkClick} style={{ display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none', marginBottom: 12 }}>
              <div style={{
                width: 22, height: 22, background: 'var(--indigo)',
                borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Zap size={11} color="#ffffff" strokeWidth={2.5} />
              </div>
              <span style={{ fontWeight: 600, fontSize: 13, letterSpacing: '-0.02em', color: 'var(--fg)' }}>
                FairPriceFinder
              </span>
            </Link>
            <p style={{ fontSize: 12, color: 'var(--fg-2)', lineHeight: 1.6, maxWidth: 220, letterSpacing: '-0.005em' }}>
              Estimasi harga jasa freelance Indonesia yang adil dan berbasis data.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <p className="label-mono" style={{ marginBottom: 14, fontSize: 10 }}>{title}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {links.map(({ label, to, href, icon: Icon }) =>
                  to ? (
                    <Link key={label} to={to} onClick={handleLinkClick} className="footer-link">
                      {Icon && <Icon size={12} />} {label}
                    </Link>
                  ) : (
                    <a key={label} href={href} className="footer-link" target="_blank" rel="noopener noreferrer">
                      {Icon && <Icon size={12} />} {label}
                      {!Icon && <ExternalLink size={10} style={{ opacity: 0.4 }} />}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <Separator.Root style={{ height: 1, background: 'var(--border)' }} />

        {/* Bottom bar — copyright + theme toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0 4px',
          gap: 16,
          flexWrap: 'wrap',
        }}>
          <p className="footer-copyright">© 2025 FairPrice Finder · CC26-PSU164</p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <p className="footer-copyright">Capstone Project · Dicoding × Dbs Foundation</p>

            {/* Theme toggle — Linear style */}
            <button
              className="theme-toggle"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark'
                ? <><Sun size={13} className="theme-toggle__icon" /> Light</>
                : <><Moon size={13} className="theme-toggle__icon" /> Dark</>
              }
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
