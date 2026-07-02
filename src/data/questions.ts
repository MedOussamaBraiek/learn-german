import type { Question, LevelInfo, Level, LearnLanguage } from '../types';
import { generateQuestions } from './generators';
export { learnLangs } from './vocabulary';
export { generateQuestions } from './generators';

export const levels: LevelInfo[] = [
  { label: 'A1', name: 'Beginner', description: 'Basic greetings, articles, simple sentences', color: '#58cc02' },
  { label: 'A2', name: 'Elementary', description: 'Past tense, modal verbs, daily topics', color: '#1cb0f6' },
  { label: 'B1', name: 'Intermediate', description: 'Konjunktiv II, passive, relative clauses', color: '#ff9600' },
  { label: 'B2', name: 'Upper Intermediate', description: 'Complex tenses, nuanced expressions', color: '#ce82ff' },
];

const staticQuestions: Record<string, Question[]> = {
  de: [
    { id: 1, type: 'multiple-choice', question: 'Was ist der richtige Artikel? ___ Hund', options: ['Der', 'Die', 'Das', 'Den'], correctAnswer: 'Der', explanation: '"Hund" is masculine, so the correct article is "der".', category: 'Articles' },
    { id: 2, type: 'multiple-choice', question: 'How do you say "Good morning" in German?', options: ['Gute Nacht', 'Guten Morgen', 'Guten Abend', 'Hallo'], correctAnswer: 'Guten Morgen', explanation: '"Guten Morgen" is used in the morning until about noon.', category: 'Greetings' },
    { id: 3, type: 'fill-blank', question: 'Ich ___ (to be) ein Student.', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'bin', explanation: '"Ich" takes the verb form "bin" (sein conjugation: ich bin).', category: 'Verbs' },
    { id: 4, type: 'multiple-choice', question: 'What color is "rot"?', options: ['Blue', 'Red', 'Green', 'Yellow'], correctAnswer: 'Red', explanation: '"Rot" means red in German.', category: 'Vocabulary' },
    { id: 5, type: 'multiple-choice', question: 'Which is correct? "Das ist ___ Apfel."', options: ['ein', 'eine', 'einen', 'der'], correctAnswer: 'ein', explanation: '"Apfel" is masculine, so the indefinite article is "ein".', category: 'Articles' },
    { id: 6, type: 'multiple-choice', question: 'What does "bitte" mean?', options: ['Thank you', 'Please / You\'re welcome', 'Sorry', 'Hello'], correctAnswer: 'Please / You\'re welcome', explanation: '"Bitte" can mean please, you\'re welcome, or go ahead.', category: 'Vocabulary' },
    { id: 7, type: 'fill-blank', question: 'Wir ___ (to have) ein Auto.', options: ['habe', 'hast', 'hat', 'haben'], correctAnswer: 'haben', explanation: '"Wir" takes "haben" (haben conjugation: wir haben).', category: 'Verbs' },
    { id: 8, type: 'multiple-choice', question: 'What is the German word for "Tuesday"?', options: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag'], correctAnswer: 'Dienstag', explanation: 'Dienstag = Tuesday, Montag = Monday, Mittwoch = Wednesday.', category: 'Vocabulary' },
    { id: 9, type: 'multiple-choice', question: '___ heiße Anna.', options: ['Ich', 'Du', 'Er', 'Sie'], correctAnswer: 'Ich', explanation: '"Ich" is the first-person singular pronoun.', category: 'Pronouns' },
    { id: 10, type: 'multiple-choice', question: 'Which number is "sechs"?', options: ['five', 'six', 'seven', 'eight'], correctAnswer: 'six', explanation: 'Sechs = 6, fünf = 5, sieben = 7, acht = 8.', category: 'Numbers' },
    { id: 11, type: 'multiple-choice', question: 'Was ist der richtige Artikel? ___ Katze', options: ['Der', 'Die', 'Das', 'Den'], correctAnswer: 'Die', explanation: '"Katze" is feminine, so the correct article is "die".', category: 'Articles' },
    { id: 12, type: 'multiple-choice', question: 'How do you say "Goodbye" in German?', options: ['Hallo', 'Tschüss', 'Danke', 'Bitte'], correctAnswer: 'Tschüss', explanation: '"Tschüss" is a common way to say goodbye.', category: 'Greetings' },
    { id: 13, type: 'multiple-choice', question: 'Du ___ (to be) mein Freund.', options: ['bin', 'bist', 'ist', 'seid'], correctAnswer: 'bist', explanation: '"Du" takes "bist" (sein conjugation: du bist).', category: 'Verbs' },
    { id: 14, type: 'multiple-choice', question: 'What does "danke" mean?', options: ['Please', 'Sorry', 'Thank you', 'Hello'], correctAnswer: 'Thank you', explanation: '"Danke" means thank you.', category: 'Vocabulary' },
    { id: 15, type: 'multiple-choice', question: 'Was ist der richtige Artikel? ___ Kind', options: ['Der', 'Die', 'Das', 'Den'], correctAnswer: 'Das', explanation: '"Kind" is neuter, so the correct article is "das".', category: 'Articles' },
    { id: 16, type: 'multiple-choice', question: 'Which number is "drei"?', options: ['one', 'two', 'three', 'four'], correctAnswer: 'three', explanation: 'Drei = 3, eins = 1, zwei = 2, vier = 4.', category: 'Numbers' },
    { id: 17, type: 'fill-blank', question: 'Sie ___ (to be) eine Lehrerin.', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'ist', explanation: '"Sie" (she) takes "ist".', category: 'Verbs' },
    { id: 18, type: 'multiple-choice', question: 'How do you say "My name is..." in German?', options: ['Ich heiße...', 'Du heißt...', 'Er heißt...', 'Wir heißen...'], correctAnswer: 'Ich heiße...', explanation: '"Ich heiße..." means "My name is...".', category: 'Greetings' },
    { id: 19, type: 'multiple-choice', question: 'Was ist der richtige Artikel? ___ Haus', options: ['Der', 'Die', 'Das', 'Den'], correctAnswer: 'Das', explanation: '"Haus" is neuter, so the correct article is "das".', category: 'Articles' },
    { id: 20, type: 'multiple-choice', question: 'What is the German word for "Monday"?', options: ['Montag', 'Dienstag', 'Mittwoch', 'Freitag'], correctAnswer: 'Montag', explanation: 'Montag = Monday, Dienstag = Tuesday, Mittwoch = Wednesday.', category: 'Vocabulary' },
    { id: 21, type: 'multiple-choice', question: 'Which is correct? "Das ist ___ Blume."', options: ['ein', 'eine', 'einer', 'eines'], correctAnswer: 'eine', explanation: '"Blume" is feminine, so the indefinite article is "eine".', category: 'Articles' },
    { id: 22, type: 'multiple-choice', question: 'What does "nein" mean?', options: ['Yes', 'No', 'Maybe', 'Please'], correctAnswer: 'No', explanation: '"Nein" means no.', category: 'Vocabulary' },
    { id: 23, type: 'fill-blank', question: 'Er ___ (to be) mein Bruder.', options: ['bin', 'bist', 'ist', 'sind'], correctAnswer: 'ist', explanation: '"Er" takes "ist" (sein conjugation: er ist).', category: 'Verbs' },
    { id: 24, type: 'multiple-choice', question: 'Which number is "zehn"?', options: ['six', 'eight', 'ten', 'twelve'], correctAnswer: 'ten', explanation: 'Zehn = 10, sechs = 6, acht = 8, zwölf = 12.', category: 'Numbers' },
    { id: 25, type: 'multiple-choice', question: 'What is the German word for "today"?', options: ['morgen', 'gestern', 'heute', 'jetzt'], correctAnswer: 'heute', explanation: '"Heute" means today, "morgen" is tomorrow, "gestern" is yesterday.', category: 'Vocabulary' },
    { id: 26, type: 'multiple-choice', question: 'Which is the correct negation? "Ich ___ keinen Hund."', options: ['habe', 'hast', 'hat', 'haben'], correctAnswer: 'habe', explanation: '"Ich habe" (I have). Negation with "keinen" for masculine accusative.', category: 'Negation' },
    { id: 27, type: 'multiple-choice', question: 'What is "das Wetter"?', options: ['The weather', 'The water', 'The wind', 'The winter'], correctAnswer: 'The weather', explanation: '"Das Wetter" means the weather.', category: 'Vocabulary' },
    { id: 28, type: 'multiple-choice', question: 'Which preposition? "Ich bin ___ der Schule."', options: ['in', 'auf', 'bei', 'mit'], correctAnswer: 'in', explanation: '"In der Schule" means "at/in school".', category: 'Prepositions' },
    { id: 29, type: 'multiple-choice', question: 'What does "wie geht\'s?" mean?', options: ['Where are you?', 'How are you?', 'Who are you?', 'What is that?'], correctAnswer: 'How are you?', explanation: '"Wie geht\'s?" is short for "Wie geht es dir?" meaning "How are you?".', category: 'Greetings' },
    { id: 30, type: 'fill-blank', question: 'Wir ___ (to learn) Deutsch.', options: ['lerne', 'lernst', 'lernt', 'lernen'], correctAnswer: 'lernen', explanation: '"Wir" takes "lernen" (wir lernen).', category: 'Verbs' },
    { id: 31, type: 'multiple-choice', question: 'What color is "blau"?', options: ['Red', 'Blue', 'Black', 'Brown'], correctAnswer: 'Blue', explanation: '"Blau" means blue in German.', category: 'Vocabulary' },
    { id: 32, type: 'multiple-choice', question: 'Which is correct? "Die Kinder ___ klein."', options: ['ist', 'bist', 'sind', 'seid'], correctAnswer: 'sind', explanation: '"Die Kinder" (plural) takes "sind".', category: 'Verbs' },
    { id: 33, type: 'multiple-choice', question: 'What is the German word for "father"?', options: ['Mutter', 'Vater', 'Bruder', 'Schwester'], correctAnswer: 'Vater', explanation: 'Vater = father, Mutter = mother, Bruder = brother, Schwester = sister.', category: 'Vocabulary' },
    { id: 34, type: 'multiple-choice', question: 'Which is the German word for "please"?', options: ['Danke', 'Bitte', 'Tschüss', 'Hallo'], correctAnswer: 'Bitte', explanation: '"Bitte" means please.', category: 'Vocabulary' },
    { id: 35, type: 'multiple-choice', question: 'Was ist der richtige Artikel? ___ Buch', options: ['Der', 'Die', 'Das', 'Den'], correctAnswer: 'Das', explanation: '"Buch" is neuter, so the correct article is "das".', category: 'Articles' },
  ],
};

export function getRandomQuestions(lang: LearnLanguage, level: Level, count: number = 10): Question[] {
  const staticQ = staticQuestions[lang] || [];
  const shuffled = [...staticQ].sort(() => Math.random() - 0.5);
  const staticCount = Math.min(Math.floor(count * 0.6), shuffled.length);
  const chosen = shuffled.slice(0, staticCount);

  const genCount = count - chosen.length;
  if (genCount > 0) {
    const generated = generateQuestions(lang, level, genCount);
    chosen.push(...generated);
  }

  return chosen.sort(() => Math.random() - 0.5).slice(0, count);
}

export function getImprovementTips(categoryStats: Record<string, { correct: number; total: number }>): string[] {
  const tips: string[] = [];
  for (const [category, stats] of Object.entries(categoryStats)) {
    const score = stats.correct / stats.total;
    if (score < 0.5) {
      tips.push(`Focus on **${category}** — you got ${stats.correct}/${stats.total} correct. Review the basics of ${category.toLowerCase()}.`);
    } else if (score < 0.8) {
      tips.push(`Keep practicing **${category}** — you got ${stats.correct}/${stats.total}. You're on the right track!`);
    }
  }
  if (tips.length === 0) {
    tips.push('Great job! You\'re doing well across all categories. Try the next level!');
  }
  return tips;
}

export function getAiAnalysis(categoryStats: Record<string, { correct: number; total: number }>): string {
  const weak: string[] = [];
  const strong: string[] = [];

  for (const [cat, stats] of Object.entries(categoryStats)) {
    const pct = stats.correct / stats.total;
    if (pct < 0.5) weak.push(cat);
    else if (pct >= 0.8) strong.push(cat);
  }

  if (weak.length === 0 && strong.length === 0) return 'Keep practicing to build your skills.';

  const parts: string[] = [];
  if (weak.length > 0) {
    parts.push(`Weak areas: ${weak.join(', ')}. Focus on understanding the rules and practice more.`);
  }
  if (strong.length > 0) {
    parts.push(`Strong areas: ${strong.join(', ')}. You're doing great here!`);
  }
  if (weak.length > 0 && strong.length > 0) {
    parts.push('Try interleaving practice — mix weak and strong topics in one session.');
  }

  return parts.join(' ');
}
