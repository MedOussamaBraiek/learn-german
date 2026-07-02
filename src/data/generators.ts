import type { Question, LearnLanguage, Level } from '../types';
import { vocab, randomItem, shuffle } from './vocabulary';

let genIdCounter = 1000;
function nextId() {
  return genIdCounter++;
}

function articleQuestion(lang: LearnLanguage, _level: string): Question | null {
  const v = vocab[lang];
  if (v.articles.length < 2) return null;
  const noun = randomItem(v.nouns);
  if (lang === 'en') return null; // English doesn't have gendered articles

  const fakeArticles =
    lang === 'de'
      ? shuffle(['Der', 'Die', 'Das']).slice(0, 3)
      : lang === 'fr'
        ? shuffle(['le', 'la', "l'", 'les']).slice(0, 3)
        : lang === 'es'
          ? shuffle(['el', 'la', 'los', 'las']).slice(0, 3)
          : shuffle(v.articles).slice(0, 3);

  const options = shuffle([noun.article, ...fakeArticles.filter((a) => a !== noun.article)]).slice(0, 4);

  if (options.length < 2 || !options.includes(noun.article)) return null;

  return {
    id: nextId(),
    type: 'multiple-choice',
    question:
      lang === 'de'
        ? `Was ist der richtige Artikel? ___ ${noun.word}`
        : lang === 'fr'
          ? `Quel est l'article correct? ___ ${noun.word}`
          : lang === 'es'
            ? `¿Cuál es el artículo correcto? ___ ${noun.word}`
            : `What is the correct article? ___ ${noun.word}`,
    options,
    correctAnswer: noun.article,
    explanation:
      lang === 'de'
        ? `"${noun.word}" is ${noun.gender}, so the correct article is "${noun.article}".`
        : lang === 'fr'
          ? `"${noun.word}" is ${noun.gender}, so the correct article is "${noun.article}".`
          : lang === 'es'
            ? `"${noun.word}" is ${noun.gender}, so the correct article is "${noun.article}".`
            : `The correct article for "${noun.word}" is "${noun.article}".`,
    category: 'Articles',
  };
}

function conjugationQuestion(lang: LearnLanguage, _level: string): Question | null {
  const v = vocab[lang];
  const verb = randomItem(v.verbs);
  const pronounKeys = Object.keys(verb.conjugations);
  const pronoun = randomItem(pronounKeys);
  const correct = verb.conjugations[pronoun];

  const wrongOptions = shuffle(
    pronounKeys.filter((k) => k !== pronoun).map((k) => verb.conjugations[k])
  ).slice(0, 3);

  if (wrongOptions.length < 2) return null;

  const options = shuffle([correct, ...wrongOptions]);

  return {
    id: nextId(),
    type: 'fill-blank',
    question:
      lang === 'de'
        ? `${pronoun} ___ (${verb.infinitive})`
        : lang === 'fr'
          ? `${pronoun} ___ (${verb.infinitive})`
          : lang === 'es'
            ? `${pronoun} ___ (${verb.infinitive})`
            : lang === 'ar'
              ? `${pronoun} ___ (${verb.infinitive})`
              : `${pronoun} ___ (${verb.infinitive})`,
    options,
    correctAnswer: correct,
    explanation: `"${pronoun}" takes "${correct}" (${verb.infinitive}: ${pronoun} ${correct}).`,
    category: 'Verbs',
  };
}

function vocabularyQuestion(lang: LearnLanguage, _level: string): Question | null {
  const v = vocab[lang];
  const type = Math.random() > 0.5 ? 'noun' : 'adj';

  if (type === 'noun') {
    const noun = randomItem(v.nouns);
    const wrongs = shuffle(
      v.nouns.filter((n) => n.word !== noun.word).map((n) => n.translationEn)
    ).slice(0, 3);
    const options = shuffle([noun.translationEn, ...wrongs]);
    return {
      id: nextId(),
      type: 'multiple-choice',
      question: `What does "${noun.word}" mean?`,
      options,
      correctAnswer: noun.translationEn,
      explanation: `"${noun.word}" means "${noun.translationEn}".`,
      category: 'Vocabulary',
    };
  } else {
    const adj = randomItem(v.adjectives);
    const wrongs = shuffle(
      v.adjectives.filter((a) => a.word !== adj.word).map((a) => a.translationEn)
    ).slice(0, 3);
    const options = shuffle([adj.translationEn, ...wrongs]);
    return {
      id: nextId(),
      type: 'multiple-choice',
      question: `What does "${adj.word}" mean?`,
      options,
      correctAnswer: adj.translationEn,
      explanation: `"${adj.word}" means "${adj.translationEn}".`,
      category: 'Vocabulary',
    };
  }
}

const generators: Record<string, (lang: LearnLanguage, level: Level) => Question | null> = {
  article: articleQuestion,
  conjugation: conjugationQuestion,
  vocabulary: vocabularyQuestion,
};

export function generateQuestions(lang: LearnLanguage, _level: Level, count: number): Question[] {
  const generated: Question[] = [];
  const genKeys = shuffle(Object.keys(generators));

  for (let attempt = 0; attempt < count * 10 && generated.length < count; attempt++) {
    for (const key of genKeys) {
      if (generated.length >= count) break;
      const q = generators[key](lang, _level);
      if (q && !generated.some((g) => g.question === q.question)) {
        generated.push(q);
      }
    }
  }

  return shuffle(generated).slice(0, count);
}
