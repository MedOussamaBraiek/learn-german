import { useState, useCallback } from 'react';
import type { Question, Answer, Level, LearnLanguage } from '../types';
import { getRandomQuestions } from '../data/questions';
import { useLang } from '../i18n/LanguageContext';

interface QuizProps {
  level: Level;
  learnLang: LearnLanguage;
  onComplete: (answers: Answer[], questions: Question[]) => void;
  onBack: () => void;
}

export function Quiz({ level, learnLang, onComplete, onBack }: QuizProps) {
  const { t } = useLang();
  const [quizQuestions] = useState(() => getRandomQuestions(learnLang, level, 10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const current = quizQuestions[currentIndex];
  const progress = ((currentIndex + (isAnswered ? 1 : 0)) / quizQuestions.length) * 100;

  const handleSelect = useCallback((answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
  }, [isAnswered]);

  const handleNext = useCallback(() => {
    if (!selectedAnswer) return;
    const isCorrect = selectedAnswer === current.correctAnswer;
    const newAnswers = [...answers, { questionId: current.id, userAnswer: selectedAnswer, isCorrect }];
    setAnswers(newAnswers);

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      onComplete(newAnswers, quizQuestions);
    }
  }, [selectedAnswer, current, currentIndex, answers, quizQuestions, onComplete]);

  return (
    <div className="quiz-screen" dir="auto">
      <div className="quiz-top-bar">
        <button className="back-btn" onClick={onBack}>{t('quiz.back')}</button>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <span className="question-counter">{currentIndex + 1}/{quizQuestions.length}</span>
      </div>

      <div className="quiz-card" key={current.id}>
        <div className="question-category">{current.category}</div>
        <p className="question-text">{current.question}</p>

        <div className="options-grid">
          {current.options?.map((opt) => {
            let btnClass = 'option-btn';
            if (isAnswered) {
              if (opt === current.correctAnswer) btnClass += ' correct';
              else if (opt === selectedAnswer) btnClass += ' wrong';
              else btnClass += ' dimmed';
            }
            return (
              <button
                key={opt}
                className={btnClass}
                onClick={() => handleSelect(opt)}
                disabled={isAnswered}
              >
                {opt}
                {isAnswered && opt === current.correctAnswer && <span className="check-mark">✓</span>}
                {isAnswered && opt === selectedAnswer && opt !== current.correctAnswer && <span className="x-mark">✗</span>}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className={`explanation-box ${selectedAnswer === current.correctAnswer ? 'correct-box' : 'wrong-box'}`}>
            <strong>{selectedAnswer === current.correctAnswer ? t('quiz.correct') : t('quiz.oops')}</strong>
            <p>{current.explanation}</p>
          </div>
        )}
      </div>

      <div className="quiz-bottom-bar">
        <button
          className={`next-btn ${isAnswered ? 'active' : ''}`}
          onClick={handleNext}
          disabled={!isAnswered}
        >
          {currentIndex < quizQuestions.length - 1 ? t('quiz.next') : t('quiz.results')}
        </button>
      </div>
    </div>
  );
}
