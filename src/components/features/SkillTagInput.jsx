import React, { useState, useRef } from 'react';
import { X } from 'lucide-react';

const SkillTagInput = ({ value, onChange }) => {
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const add = (e) => {
    if ((e.key === 'Enter' || e.key === ',') && input.trim()) {
      e.preventDefault();
      const s = input.trim();
      if (!value.includes(s)) onChange([...value, s]);
      setInput('');
    }
    if (e.key === 'Backspace' && !input && value.length > 0) {
      onChange(value.slice(0, -1));
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        background: 'var(--bg-1)',
        border: `1px solid ${focused ? 'var(--accent)' : 'var(--border-1)'}`,
        borderRadius: 'var(--r-sm)',
        padding: '7px 10px',
        minHeight: 40,
        cursor: 'text',
        transition: 'border-color 0.12s, box-shadow 0.12s',
        boxShadow: focused ? '0 0 0 3px rgba(94,106,210,0.12)' : 'none',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center' }}>
        {value.map(s => (
          <span key={s} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4,
            fontSize: 11.5, fontWeight: 500,
            padding: '2px 7px', borderRadius: 'var(--r-xs)',
            background: 'rgba(94,106,210,0.1)',
            color: 'var(--accent)',
            border: '1px solid rgba(94,106,210,0.22)',
            letterSpacing: '-0.005em',
          }}>
            {s}
            <button
              type="button"
              onClick={() => onChange(value.filter(x => x !== s))}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'rgba(94,106,210,0.5)', lineHeight: 1, padding: 0,
                display: 'flex', alignItems: 'center',
                transition: 'color 0.1s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(94,106,210,0.5)'}
            >
              <X size={10} />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={add}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={value.length === 0 ? 'React, Figma, Node.js...' : '+ tambah'}
          style={{
            background: 'none', border: 'none', outline: 'none',
            fontFamily: 'var(--font)', fontSize: 13,
            color: 'var(--fg)', minWidth: 100, flex: 1,
            padding: '1px 0',
            letterSpacing: '-0.005em',
          }}
        />
      </div>
    </div>
  );
};

export default SkillTagInput;
