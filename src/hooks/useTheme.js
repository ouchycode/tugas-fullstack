import { useEffect, useState } from 'react';

const STORAGE_KEY = 'fpf-theme';
const DEFAULT = 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) || DEFAULT; }
    catch { return DEFAULT; }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(STORAGE_KEY, theme); }
    catch { /* ignore */ }
  }, [theme]);

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return { theme, toggle };
};
