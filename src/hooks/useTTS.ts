import { useCallback, useRef } from 'react';

const langMap: Record<string, string> = {
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  en: 'en-US',
  ar: 'ar-SA',
};

export function useTTS() {
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback((text: string, lang: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langMap[lang] || lang;
    utterance.rate = 0.85;
    utterance.pitch = 1;
    const voices = window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith(langMap[lang]?.split('-')[0] || lang));
    if (voices.length > 0) {
      utterance.voice = voices[0];
    }
    utterRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, []);

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
  }, []);

  return { speak, stop };
}
