import React, { useState } from 'react';
import { Info } from 'lucide-react';
import PriceEstimatorForm from '../components/features/PriceEstimatorForm';
import PriceResult from '../components/features/PriceResult';

const Estimator = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="page-wrap--narrow">
      <p className="label-mono" style={{ marginBottom: 10 }}>Price Estimator</p>
      <h1 className="page-subtitle">Berapa nilai jasa kamu?</h1>
      <p className="page-desc">
        Isi kategori jasa, skill yang dikuasai, dan estimasi durasi pengerjaan.
      </p>

      <div className="alert alert--info">
        <Info size={13} color="var(--indigo)" style={{ marginTop: 1, flexShrink: 0 }} />
        <p className="alert__text">
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
