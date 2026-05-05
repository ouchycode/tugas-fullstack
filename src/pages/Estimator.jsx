import React, { useState } from 'react';
import { Info } from 'lucide-react';
import PriceEstimatorForm from '../components/features/PriceEstimatorForm';
import PriceResult from '../components/features/PriceResult';

const Estimator = () => {
  const [result, setResult] = useState(null);

  return (
    <div style={{
      fontFamily: 'var(--font)',
      maxWidth: 560,
      margin: '0 auto',
      padding: 'clamp(40px, 7vw, 64px) 20px 80px',
    }}>

      {/* Header */}
      <p className="label-accent" style={{ marginBottom: 10 }}>Price Estimator</p>
      <h1 style={{
        fontSize: 'clamp(26px,4vw,34px)',
        fontWeight: 700,
        letterSpacing: '-0.035em',
        lineHeight: 1.1,
        color: 'var(--fg)',
        marginBottom: 10,
      }}>
        Berapa nilai jasa kamu?
      </h1>
      <p style={{
        fontSize: 13.5, color: 'var(--fg-2)',
        lineHeight: 1.7, marginBottom: 28,
        letterSpacing: '-0.005em',
      }}>
        Isi kategori jasa, skill yang dikuasai, dan estimasi durasi pengerjaan.
      </p>

      {/* Tip */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 9,
        background: 'rgba(94,106,210,0.07)',
        border: '1px solid rgba(94,106,210,0.18)',
        borderRadius: 'var(--r-sm)',
        padding: '10px 13px',
        marginBottom: 22,
      }}>
        <Info size={13} color="var(--accent)" style={{ marginTop: 1, flexShrink: 0 }} />
        <p style={{ fontSize: 12, color: 'rgba(139,151,245,0.9)', lineHeight: 1.6, letterSpacing: '-0.005em' }}>
          Semakin spesifik skill yang kamu isi, semakin akurat estimasi harganya.
        </p>
      </div>

      <PriceEstimatorForm onResult={setResult} />

      {result && (
        <div style={{ marginTop: 20 }}>
          <PriceResult result={result} />
        </div>
      )}
    </div>
  );
};

export default Estimator;
