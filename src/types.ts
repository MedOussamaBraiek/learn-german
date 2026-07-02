export type Level = 'A1' | 'A2' | 'B1' | 'B2';
export type QuestionType = 'multiple-choice' | 'fill-blank';
export type Language = 'en' | 'ar' | 'fr' | 'de';

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  category: string;
}

export interface Answer {
  questionId: number;
  userAnswer: string;
  isCorrect: boolean;
}

export interface LevelInfo {
  label: Level;
  name: string;
  description: string;
  color: string;
}
