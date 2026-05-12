import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Estimator from './pages/Estimator';
import Dashboard from './pages/Dashboard';

// Apply saved theme before first render (avoids flash)
const saved = (() => { try { return localStorage.getItem('fpf-theme'); } catch { return null; } })();
document.documentElement.setAttribute('data-theme', saved || 'dark');

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/"          element={<Home />} />
          <Route path="/estimator" element={<Estimator />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
