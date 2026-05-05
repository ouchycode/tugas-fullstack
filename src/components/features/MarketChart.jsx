import React from 'react';
import { BarChart2 } from 'lucide-react';

const MarketChart = ({ data }) => (
  !data || data.length === 0 ? (
    <div style={{ height: 160, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#111', borderRadius: 10, border: '1px dashed rgba(255,255,255,0.1)' }}>
      <BarChart2 size={28} color="#374151" />
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: '#4B5563' }}>Belum ada data</span>
    </div>
  ) : null
);

export default MarketChart;
