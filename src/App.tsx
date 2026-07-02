import { useState } from 'react';
import type { Level, Question, Answer } from './types';
import { LanguageProvider, useLang } from './i18n/LanguageContext';
import { LevelSelect } from './components/LevelSelect';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import './App.css';

type Screen = 'levels' | 'quiz' | 'results';

const rtlLangs = new Set(['ar']);

function AppContent() {
  const { lang } = useLang();
  const [screen, setScreen] = useState<Screen>('levels');
  const [level, setLevel] = useState<Level>('A1');
  const [completedQuestions, setCompletedQuestions] = useState<Question[]>([]);
  const [completedAnswers, setCompletedAnswers] = useState<Answer[]>([]);

  const handleLevelSelect = (l: Level) => {
    setLevel(l);
    setScreen('quiz');
  };

  const handleQuizComplete = (answers: Answer[], questions: Question[]) => {
    setCompletedAnswers(answers);
    setCompletedQuestions(questions);
    setScreen('results');
  };

  const handleRestart = () => {
    setScreen('quiz');
  };

  const handleBackToLevels = () => {
    setScreen('levels');
  };

  return (
    <div className="app-container" dir={rtlLangs.has(lang) ? 'rtl' : 'ltr'}>
      {screen === 'levels' && <LevelSelect onSelect={handleLevelSelect} />}
      {screen === 'quiz' && (
        <Quiz level={level} onComplete={handleQuizComplete} onBack={handleBackToLevels} />
      )}
      {screen === 'results' && (
        <Results
          questions={completedQuestions}
          answers={completedAnswers}
          level={level}
          onRestart={handleRestart}
          onBackToLevels={handleBackToLevels}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
