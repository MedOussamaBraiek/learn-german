import type { LearnLanguage } from '../types';
import { learnLangs } from '../data/questions';

interface LearnLangSelectorProps {
  value: LearnLanguage;
  onChange: (lang: LearnLanguage) => void;
}

export function LearnLangSelector({ value, onChange }: LearnLangSelectorProps) {
  return (
    <div className="learn-lang-selector">
      <label className="learn-lang-label">I'm learning</label>
      <div className="learn-lang-options">
        {learnLangs.map((l) => (
          <button
            key={l.code}
            className={`learn-lang-btn ${l.code === value ? 'active' : ''}`}
            onClick={() => onChange(l.code)}
          >
            <span className="learn-lang-flag">{l.flag}</span>
            <span className="learn-lang-name">{l.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
