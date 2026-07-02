import type { Language } from '../types';
import { useLang } from '../i18n/LanguageContext';

const labels: Record<Language, string> = {
  en: 'EN',
  ar: 'AR',
  fr: 'FR',
  de: 'DE',
};

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-switcher">
      {(Object.keys(labels) as Language[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${l === lang ? 'active' : ''}`}
          onClick={() => setLang(l)}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
