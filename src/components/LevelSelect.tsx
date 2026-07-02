import { levels } from '../data/questions';
import type { Level } from '../types';
import { useLang } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

interface LevelSelectProps {
  onSelect: (level: Level) => void;
}

const levelNameKey: Record<string, string> = {
  A1: 'level.beginner',
  A2: 'level.elementary',
  B1: 'level.intermediate',
  B2: 'level.upper-intermediate',
};

const levelDescKey: Record<string, string> = {
  A1: 'level.desc.a1',
  A2: 'level.desc.a2',
  B1: 'level.desc.b1',
  B2: 'level.desc.b2',
};

export function LevelSelect({ onSelect }: LevelSelectProps) {
  const { t } = useLang();

  return (
    <div className="level-screen">
      <LanguageSwitcher />
      <div className="level-header">
        <span className="owl-icon">🦉</span>
        <h1 className="app-title">{t('app.title')}</h1>
        <p className="app-subtitle">{t('app.subtitle')}</p>
      </div>
      <div className="level-cards">
        {levels.map((level) => (
          <button
            key={level.label}
            className="level-card"
            style={{ '--level-color': level.color } as React.CSSProperties}
            onClick={() => onSelect(level.label)}
          >
            <span className="level-badge">{level.label}</span>
            <span className="level-name">{t(levelNameKey[level.label] as any)}</span>
            <span className="level-desc">{t(levelDescKey[level.label] as any)}</span>
            <span className="level-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
