import type { LearnLanguage } from '../types';

export interface Noun {
  word: string;
  article: string;
  gender: string;
  plural: string;
  translationEn: string;
}

export interface Verb {
  infinitive: string;
  conjugations: Record<string, string>;
  translationEn: string;
}

export interface Adjective {
  word: string;
  translationEn: string;
}

export interface LangVocab {
  nouns: Noun[];
  verbs: Verb[];
  adjectives: Adjective[];
  articles: string[];
}

const deNouns: Noun[] = [
  { word: 'Hund', article: 'Der', gender: 'masculine', plural: 'Hunde', translationEn: 'dog' },
  { word: 'Katze', article: 'Die', gender: 'feminine', plural: 'Katzen', translationEn: 'cat' },
  { word: 'Haus', article: 'Das', gender: 'neuter', plural: 'Häuser', translationEn: 'house' },
  { word: 'Buch', article: 'Das', gender: 'neuter', plural: 'Bücher', translationEn: 'book' },
  { word: 'Tisch', article: 'Der', gender: 'masculine', plural: 'Tische', translationEn: 'table' },
  { word: 'Blume', article: 'Die', gender: 'feminine', plural: 'Blumen', translationEn: 'flower' },
  { word: 'Auto', article: 'Das', gender: 'neuter', plural: 'Autos', translationEn: 'car' },
  { word: 'Baum', article: 'Der', gender: 'masculine', plural: 'Bäume', translationEn: 'tree' },
  { word: 'Kind', article: 'Das', gender: 'neuter', plural: 'Kinder', translationEn: 'child' },
  { word: 'Schule', article: 'Die', gender: 'feminine', plural: 'Schulen', translationEn: 'school' },
  { word: 'Stuhl', article: 'Der', gender: 'masculine', plural: 'Stühle', translationEn: 'chair' },
  { word: 'Tür', article: 'Die', gender: 'feminine', plural: 'Türen', translationEn: 'door' },
  { word: 'Fenster', article: 'Das', gender: 'neuter', plural: 'Fenster', translationEn: 'window' },
  { word: 'Apfel', article: 'Der', gender: 'masculine', plural: 'Äpfel', translationEn: 'apple' },
  { word: 'Milch', article: 'Die', gender: 'feminine', plural: '-', translationEn: 'milk' },
  { word: 'Brot', article: 'Das', gender: 'neuter', plural: 'Brote', translationEn: 'bread' },
  { word: 'Mann', article: 'Der', gender: 'masculine', plural: 'Männer', translationEn: 'man' },
  { word: 'Frau', article: 'Die', gender: 'feminine', plural: 'Frauen', translationEn: 'woman' },
  { word: 'Wasser', article: 'Das', gender: 'neuter', plural: '-', translationEn: 'water' },
  { word: 'Garten', article: 'Der', gender: 'masculine', plural: 'Gärten', translationEn: 'garden' },
  { word: 'Stadt', article: 'Die', gender: 'feminine', plural: 'Städte', translationEn: 'city' },
  { word: 'Zug', article: 'Der', gender: 'masculine', plural: 'Züge', translationEn: 'train' },
  { word: 'Lampe', article: 'Die', gender: 'feminine', plural: 'Lampen', translationEn: 'lamp' },
  { word: 'Bett', article: 'Das', gender: 'neuter', plural: 'Betten', translationEn: 'bed' },
  { word: 'Hemd', article: 'Das', gender: 'neuter', plural: 'Hemden', translationEn: 'shirt' },
];

const deVerbs: Verb[] = [
  { infinitive: 'sein', conjugations: { ich: 'bin', du: 'bist', 'er/sie/es': 'ist', wir: 'sind', ihr: 'seid', 'sie/Sie': 'sind' }, translationEn: 'to be' },
  { infinitive: 'haben', conjugations: { ich: 'habe', du: 'hast', 'er/sie/es': 'hat', wir: 'haben', ihr: 'habt', 'sie/Sie': 'haben' }, translationEn: 'to have' },
  { infinitive: 'werden', conjugations: { ich: 'werde', du: 'wirst', 'er/sie/es': 'wird', wir: 'werden', ihr: 'werdet', 'sie/Sie': 'werden' }, translationEn: 'to become' },
  { infinitive: 'gehen', conjugations: { ich: 'gehe', du: 'gehst', 'er/sie/es': 'geht', wir: 'gehen', ihr: 'geht', 'sie/Sie': 'gehen' }, translationEn: 'to go' },
  { infinitive: 'kommen', conjugations: { ich: 'komme', du: 'kommst', 'er/sie/es': 'kommt', wir: 'kommen', ihr: 'kommt', 'sie/Sie': 'kommen' }, translationEn: 'to come' },
  { infinitive: 'sagen', conjugations: { ich: 'sage', du: 'sagst', 'er/sie/es': 'sagt', wir: 'sagen', ihr: 'sagt', 'sie/Sie': 'sagen' }, translationEn: 'to say' },
  { infinitive: 'machen', conjugations: { ich: 'mache', du: 'machst', 'er/sie/es': 'macht', wir: 'machen', ihr: 'macht', 'sie/Sie': 'machen' }, translationEn: 'to make/do' },
  { infinitive: 'sehen', conjugations: { ich: 'sehe', du: 'siehst', 'er/sie/es': 'sieht', wir: 'sehen', ihr: 'seht', 'sie/Sie': 'sehen' }, translationEn: 'to see' },
  { infinitive: 'hören', conjugations: { ich: 'höre', du: 'hörst', 'er/sie/es': 'hört', wir: 'hören', ihr: 'hört', 'sie/Sie': 'hören' }, translationEn: 'to hear' },
  { infinitive: 'lernen', conjugations: { ich: 'lerne', du: 'lernst', 'er/sie/es': 'lernt', wir: 'lernen', ihr: 'lernt', 'sie/Sie': 'lernen' }, translationEn: 'to learn' },
];

const deAdjectives: Adjective[] = [
  { word: 'groß', translationEn: 'big' },
  { word: 'klein', translationEn: 'small' },
  { word: 'schnell', translationEn: 'fast' },
  { word: 'langsam', translationEn: 'slow' },
  { word: 'schön', translationEn: 'beautiful' },
  { word: 'hässlich', translationEn: 'ugly' },
  { word: 'alt', translationEn: 'old' },
  { word: 'jung', translationEn: 'young' },
  { word: 'neu', translationEn: 'new' },
  { word: 'teuer', translationEn: 'expensive' },
  { word: 'billig', translationEn: 'cheap' },
  { word: 'gut', translationEn: 'good' },
  { word: 'schlecht', translationEn: 'bad' },
  { word: 'heiß', translationEn: 'hot' },
  { word: 'kalt', translationEn: 'cold' },
];

const frNouns: Noun[] = [
  { word: 'chien', article: 'le', gender: 'masculine', plural: 'chiens', translationEn: 'dog' },
  { word: 'chat', article: 'le', gender: 'masculine', plural: 'chats', translationEn: 'cat' },
  { word: 'maison', article: 'la', gender: 'feminine', plural: 'maisons', translationEn: 'house' },
  { word: 'livre', article: 'le', gender: 'masculine', plural: 'livres', translationEn: 'book' },
  { word: 'table', article: 'la', gender: 'feminine', plural: 'tables', translationEn: 'table' },
  { word: 'fleur', article: 'la', gender: 'feminine', plural: 'fleurs', translationEn: 'flower' },
  { word: 'voiture', article: 'la', gender: 'feminine', plural: 'voitures', translationEn: 'car' },
  { word: 'arbre', article: 'le', gender: 'masculine', plural: 'arbres', translationEn: 'tree' },
  { word: 'enfant', article: 'le', gender: 'masculine', plural: 'enfants', translationEn: 'child' },
  { word: 'école', article: 'la', gender: 'feminine', plural: 'écoles', translationEn: 'school' },
  { word: 'porte', article: 'la', gender: 'feminine', plural: 'portes', translationEn: 'door' },
  { word: 'fenêtre', article: 'la', gender: 'feminine', plural: 'fenêtres', translationEn: 'window' },
  { word: 'pomme', article: 'la', gender: 'feminine', plural: 'pommes', translationEn: 'apple' },
  { word: 'pain', article: 'le', gender: 'masculine', plural: 'pains', translationEn: 'bread' },
  { word: 'homme', article: 'le', gender: 'masculine', plural: 'hommes', translationEn: 'man' },
  { word: 'femme', article: 'la', gender: 'feminine', plural: 'femmes', translationEn: 'woman' },
  { word: 'eau', article: 'l\'', gender: 'feminine', plural: 'eaux', translationEn: 'water' },
  { word: 'jardin', article: 'le', gender: 'masculine', plural: 'jardins', translationEn: 'garden' },
  { word: 'ville', article: 'la', gender: 'feminine', plural: 'villes', translationEn: 'city' },
  { word: 'train', article: 'le', gender: 'masculine', plural: 'trains', translationEn: 'train' },
  { word: 'lit', article: 'le', gender: 'masculine', plural: 'lits', translationEn: 'bed' },
  { word: 'chemise', article: 'la', gender: 'feminine', plural: 'chemises', translationEn: 'shirt' },
  { word: 'soleil', article: 'le', gender: 'masculine', plural: '-', translationEn: 'sun' },
  { word: 'lune', article: 'la', gender: 'feminine', plural: 'lunes', translationEn: 'moon' },
  { word: 'chaise', article: 'la', gender: 'feminine', plural: 'chaises', translationEn: 'chair' },
];

const frVerbs: Verb[] = [
  { infinitive: 'être', conjugations: { je: 'suis', tu: 'es', 'il/elle': 'est', nous: 'sommes', vous: 'êtes', 'ils/elles': 'sont' }, translationEn: 'to be' },
  { infinitive: 'avoir', conjugations: { je: 'ai', tu: 'as', 'il/elle': 'a', nous: 'avons', vous: 'avez', 'ils/elles': 'ont' }, translationEn: 'to have' },
  { infinitive: 'aller', conjugations: { je: 'vais', tu: 'vas', 'il/elle': 'va', nous: 'allons', vous: 'allez', 'ils/elles': 'vont' }, translationEn: 'to go' },
  { infinitive: 'parler', conjugations: { je: 'parle', tu: 'parles', 'il/elle': 'parle', nous: 'parlons', vous: 'parlez', 'ils/elles': 'parlent' }, translationEn: 'to speak' },
  { infinitive: 'manger', conjugations: { je: 'mange', tu: 'manges', 'il/elle': 'mange', nous: 'mangeons', vous: 'mangez', 'ils/elles': 'mangent' }, translationEn: 'to eat' },
  { infinitive: 'faire', conjugations: { je: 'fais', tu: 'fais', 'il/elle': 'fait', nous: 'faisons', vous: 'faites', 'ils/elles': 'font' }, translationEn: 'to make/do' },
  { infinitive: 'voir', conjugations: { je: 'vois', tu: 'vois', 'il/elle': 'voit', nous: 'voyons', vous: 'voyez', 'ils/elles': 'voient' }, translationEn: 'to see' },
  { infinitive: 'pouvoir', conjugations: { je: 'peux', tu: 'peux', 'il/elle': 'peut', nous: 'pouvons', vous: 'pouvez', 'ils/elles': 'peuvent' }, translationEn: 'to be able' },
  { infinitive: 'vouloir', conjugations: { je: 'veux', tu: 'veux', 'il/elle': 'veut', nous: 'voulons', vous: 'voulez', 'ils/elles': 'veulent' }, translationEn: 'to want' },
  { infinitive: 'savoir', conjugations: { je: 'sais', tu: 'sais', 'il/elle': 'sait', nous: 'savons', vous: 'savez', 'ils/elles': 'savent' }, translationEn: 'to know' },
];

const frAdjectives: Adjective[] = [
  { word: 'grand', translationEn: 'big/tall' },
  { word: 'petit', translationEn: 'small' },
  { word: 'rapide', translationEn: 'fast' },
  { word: 'lent', translationEn: 'slow' },
  { word: 'beau', translationEn: 'beautiful' },
  { word: 'laid', translationEn: 'ugly' },
  { word: 'vieux', translationEn: 'old' },
  { word: 'jeune', translationEn: 'young' },
  { word: 'nouveau', translationEn: 'new' },
  { word: 'cher', translationEn: 'expensive' },
  { word: 'bon', translationEn: 'good' },
  { word: 'mauvais', translationEn: 'bad' },
  { word: 'chaud', translationEn: 'hot' },
  { word: 'froid', translationEn: 'cold' },
  { word: 'facile', translationEn: 'easy' },
];

const esNouns: Noun[] = [
  { word: 'perro', article: 'el', gender: 'masculine', plural: 'perros', translationEn: 'dog' },
  { word: 'gato', article: 'el', gender: 'masculine', plural: 'gatos', translationEn: 'cat' },
  { word: 'casa', article: 'la', gender: 'feminine', plural: 'casas', translationEn: 'house' },
  { word: 'libro', article: 'el', gender: 'masculine', plural: 'libros', translationEn: 'book' },
  { word: 'mesa', article: 'la', gender: 'feminine', plural: 'mesas', translationEn: 'table' },
  { word: 'flor', article: 'la', gender: 'feminine', plural: 'flores', translationEn: 'flower' },
  { word: 'coche', article: 'el', gender: 'masculine', plural: 'coches', translationEn: 'car' },
  { word: 'árbol', article: 'el', gender: 'masculine', plural: 'árboles', translationEn: 'tree' },
  { word: 'niño', article: 'el', gender: 'masculine', plural: 'niños', translationEn: 'child' },
  { word: 'escuela', article: 'la', gender: 'feminine', plural: 'escuelas', translationEn: 'school' },
  { word: 'puerta', article: 'la', gender: 'feminine', plural: 'puertas', translationEn: 'door' },
  { word: 'ventana', article: 'la', gender: 'feminine', plural: 'ventanas', translationEn: 'window' },
  { word: 'manzana', article: 'la', gender: 'feminine', plural: 'manzanas', translationEn: 'apple' },
  { word: 'pan', article: 'el', gender: 'masculine', plural: 'panes', translationEn: 'bread' },
  { word: 'hombre', article: 'el', gender: 'masculine', plural: 'hombres', translationEn: 'man' },
  { word: 'mujer', article: 'la', gender: 'feminine', plural: 'mujeres', translationEn: 'woman' },
  { word: 'agua', article: 'el', gender: 'feminine', plural: '-', translationEn: 'water' },
  { word: 'jardín', article: 'el', gender: 'masculine', plural: 'jardines', translationEn: 'garden' },
  { word: 'ciudad', article: 'la', gender: 'feminine', plural: 'ciudades', translationEn: 'city' },
  { word: 'tren', article: 'el', gender: 'masculine', plural: 'trenes', translationEn: 'train' },
  { word: 'cama', article: 'la', gender: 'feminine', plural: 'camas', translationEn: 'bed' },
  { word: 'camisa', article: 'la', gender: 'feminine', plural: 'camisas', translationEn: 'shirt' },
  { word: 'sol', article: 'el', gender: 'masculine', plural: '-', translationEn: 'sun' },
  { word: 'luna', article: 'la', gender: 'feminine', plural: 'lunas', translationEn: 'moon' },
  { word: 'silla', article: 'la', gender: 'feminine', plural: 'sillas', translationEn: 'chair' },
];

const esVerbs: Verb[] = [
  { infinitive: 'ser', conjugations: { yo: 'soy', tú: 'eres', 'él/ella': 'es', nosotros: 'somos', vosotros: 'sois', 'ellos/ellas': 'son' }, translationEn: 'to be (permanent)' },
  { infinitive: 'estar', conjugations: { yo: 'estoy', tú: 'estás', 'él/ella': 'está', nosotros: 'estamos', vosotros: 'estáis', 'ellos/ellas': 'están' }, translationEn: 'to be (temporary)' },
  { infinitive: 'tener', conjugations: { yo: 'tengo', tú: 'tienes', 'él/ella': 'tiene', nosotros: 'tenemos', vosotros: 'tenéis', 'ellos/ellas': 'tienen' }, translationEn: 'to have' },
  { infinitive: 'hablar', conjugations: { yo: 'hablo', tú: 'hablas', 'él/ella': 'habla', nosotros: 'hablamos', vosotros: 'habláis', 'ellos/ellas': 'hablan' }, translationEn: 'to speak' },
  { infinitive: 'comer', conjugations: { yo: 'como', tú: 'comes', 'él/ella': 'come', nosotros: 'comemos', vosotros: 'coméis', 'ellos/ellas': 'comen' }, translationEn: 'to eat' },
  { infinitive: 'hacer', conjugations: { yo: 'hago', tú: 'haces', 'él/ella': 'hace', nosotros: 'hacemos', vosotros: 'hacéis', 'ellos/ellas': 'hacen' }, translationEn: 'to make/do' },
  { infinitive: 'ver', conjugations: { yo: 'veo', tú: 'ves', 'él/ella': 've', nosotros: 'vemos', vosotros: 'veis', 'ellos/ellas': 'ven' }, translationEn: 'to see' },
  { infinitive: 'poder', conjugations: { yo: 'puedo', tú: 'puedes', 'él/ella': 'puede', nosotros: 'podemos', vosotros: 'podéis', 'ellos/ellas': 'pueden' }, translationEn: 'to be able' },
  { infinitive: 'querer', conjugations: { yo: 'quiero', tú: 'quieres', 'él/ella': 'quiere', nosotros: 'queremos', vosotros: 'queréis', 'ellos/ellas': 'quieren' }, translationEn: 'to want' },
  { infinitive: 'ir', conjugations: { yo: 'voy', tú: 'vas', 'él/ella': 'va', nosotros: 'vamos', vosotros: 'vais', 'ellos/ellas': 'van' }, translationEn: 'to go' },
];

const esAdjectives: Adjective[] = [
  { word: 'grande', translationEn: 'big' },
  { word: 'pequeño', translationEn: 'small' },
  { word: 'rápido', translationEn: 'fast' },
  { word: 'lento', translationEn: 'slow' },
  { word: 'hermoso', translationEn: 'beautiful' },
  { word: 'feo', translationEn: 'ugly' },
  { word: 'viejo', translationEn: 'old' },
  { word: 'joven', translationEn: 'young' },
  { word: 'nuevo', translationEn: 'new' },
  { word: 'caro', translationEn: 'expensive' },
  { word: 'barato', translationEn: 'cheap' },
  { word: 'bueno', translationEn: 'good' },
  { word: 'malo', translationEn: 'bad' },
  { word: 'caliente', translationEn: 'hot' },
  { word: 'frío', translationEn: 'cold' },
];

const enNouns: Noun[] = [
  { word: 'dog', article: 'the', gender: '-', plural: 'dogs', translationEn: 'dog' },
  { word: 'house', article: 'the', gender: '-', plural: 'houses', translationEn: 'house' },
  { word: 'book', article: 'the', gender: '-', plural: 'books', translationEn: 'book' },
  { word: 'table', article: 'the', gender: '-', plural: 'tables', translationEn: 'table' },
  { word: 'car', article: 'the', gender: '-', plural: 'cars', translationEn: 'car' },
  { word: 'child', article: 'the', gender: '-', plural: 'children', translationEn: 'child' },
  { word: 'school', article: 'the', gender: '-', plural: 'schools', translationEn: 'school' },
  { word: 'door', article: 'the', gender: '-', plural: 'doors', translationEn: 'door' },
  { word: 'apple', article: 'the', gender: '-', plural: 'apples', translationEn: 'apple' },
  { word: 'bread', article: 'the', gender: '-', plural: '-', translationEn: 'bread' },
  { word: 'water', article: 'the', gender: '-', plural: '-', translationEn: 'water' },
  { word: 'garden', article: 'the', gender: '-', plural: 'gardens', translationEn: 'garden' },
  { word: 'city', article: 'the', gender: '-', plural: 'cities', translationEn: 'city' },
  { word: 'train', article: 'the', gender: '-', plural: 'trains', translationEn: 'train' },
  { word: 'sun', article: 'the', gender: '-', plural: '-', translationEn: 'sun' },
];

const enVerbs: Verb[] = [
  { infinitive: 'to be', conjugations: { I: 'am', you: 'are', 'he/she/it': 'is', we: 'are', they: 'are' }, translationEn: 'to be' },
  { infinitive: 'to have', conjugations: { I: 'have', you: 'have', 'he/she/it': 'has', we: 'have', they: 'have' }, translationEn: 'to have' },
  { infinitive: 'to go', conjugations: { I: 'go', you: 'go', 'he/she/it': 'goes', we: 'go', they: 'go' }, translationEn: 'to go' },
  { infinitive: 'to speak', conjugations: { I: 'speak', you: 'speak', 'he/she/it': 'speaks', we: 'speak', they: 'speak' }, translationEn: 'to speak' },
  { infinitive: 'to eat', conjugations: { I: 'eat', you: 'eat', 'he/she/it': 'eats', we: 'eat', they: 'eat' }, translationEn: 'to eat' },
  { infinitive: 'to make', conjugations: { I: 'make', you: 'make', 'he/she/it': 'makes', we: 'make', they: 'make' }, translationEn: 'to make' },
  { infinitive: 'to see', conjugations: { I: 'see', you: 'see', 'he/she/it': 'sees', we: 'see', they: 'see' }, translationEn: 'to see' },
  { infinitive: 'to learn', conjugations: { I: 'learn', you: 'learn', 'he/she/it': 'learns', we: 'learn', they: 'learn' }, translationEn: 'to learn' },
  { infinitive: 'to read', conjugations: { I: 'read', you: 'read', 'he/she/it': 'reads', we: 'read', they: 'read' }, translationEn: 'to read' },
  { infinitive: 'to write', conjugations: { I: 'write', you: 'write', 'he/she/it': 'writes', we: 'write', they: 'write' }, translationEn: 'to write' },
];

const enAdjectives: Adjective[] = [
  { word: 'big', translationEn: 'big' },
  { word: 'small', translationEn: 'small' },
  { word: 'fast', translationEn: 'fast' },
  { word: 'beautiful', translationEn: 'beautiful' },
  { word: 'old', translationEn: 'old' },
  { word: 'young', translationEn: 'young' },
  { word: 'new', translationEn: 'new' },
  { word: 'expensive', translationEn: 'expensive' },
  { word: 'good', translationEn: 'good' },
  { word: 'bad', translationEn: 'bad' },
  { word: 'hot', translationEn: 'hot' },
  { word: 'cold', translationEn: 'cold' },
  { word: 'easy', translationEn: 'easy' },
  { word: 'difficult', translationEn: 'difficult' },
  { word: 'interesting', translationEn: 'interesting' },
];

const arNouns: Noun[] = [
  { word: 'كلب', article: 'ال', gender: 'masculine', plural: 'كلاب', translationEn: 'dog' },
  { word: 'قط', article: 'ال', gender: 'masculine', plural: 'قطط', translationEn: 'cat' },
  { word: 'منزل', article: 'ال', gender: 'masculine', plural: 'منازل', translationEn: 'house' },
  { word: 'كتاب', article: 'ال', gender: 'masculine', plural: 'كتب', translationEn: 'book' },
  { word: 'طاولة', article: 'ال', gender: 'feminine', plural: 'طاولات', translationEn: 'table' },
  { word: 'زهرة', article: 'ال', gender: 'feminine', plural: 'زهور', translationEn: 'flower' },
  { word: 'سيارة', article: 'ال', gender: 'feminine', plural: 'سيارات', translationEn: 'car' },
  { word: 'شجرة', article: 'ال', gender: 'feminine', plural: 'أشجار', translationEn: 'tree' },
  { word: 'طفل', article: 'ال', gender: 'masculine', plural: 'أطفال', translationEn: 'child' },
  { word: 'مدرسة', article: 'ال', gender: 'feminine', plural: 'مدارس', translationEn: 'school' },
  { word: 'باب', article: 'ال', gender: 'masculine', plural: 'أبواب', translationEn: 'door' },
  { word: 'نافذة', article: 'ال', gender: 'feminine', plural: 'نوافذ', translationEn: 'window' },
  { word: 'تفاحة', article: 'ال', gender: 'feminine', plural: 'تفاح', translationEn: 'apple' },
  { word: 'خبز', article: 'ال', gender: 'masculine', plural: '-', translationEn: 'bread' },
  { word: 'رجل', article: 'ال', gender: 'masculine', plural: 'رجال', translationEn: 'man' },
  { word: 'امرأة', article: 'ال', gender: 'feminine', plural: 'نساء', translationEn: 'woman' },
  { word: 'ماء', article: 'ال', gender: 'masculine', plural: '-', translationEn: 'water' },
  { word: 'حديقة', article: 'ال', gender: 'feminine', plural: 'حدائق', translationEn: 'garden' },
  { word: 'مدينة', article: 'ال', gender: 'feminine', plural: 'مدن', translationEn: 'city' },
  { word: 'قطار', article: 'ال', gender: 'masculine', plural: 'قطارات', translationEn: 'train' },
];

const arVerbs: Verb[] = [
  { infinitive: 'يكون', conjugations: { أنا: 'أكون', أنت: 'تكون', هو: 'يكون', هي: 'تكون', نحن: 'نكون', هم: 'يكونون' }, translationEn: 'to be' },
  { infinitive: 'يملك', conjugations: { أنا: 'أملك', أنت: 'تملك', هو: 'يملك', هي: 'تملك', نحن: 'نملك', هم: 'يملكون' }, translationEn: 'to have' },
  { infinitive: 'يذهب', conjugations: { أنا: 'أذهب', أنت: 'تذهب', هو: 'يذهب', هي: 'تذهب', نحن: 'نذهب', هم: 'يذهبون' }, translationEn: 'to go' },
  { infinitive: 'يتكلم', conjugations: { أنا: 'أتكلم', أنت: 'تتكلم', هو: 'يتكلم', هي: 'تتكلم', نحن: 'نتكلم', هم: 'يتكلمون' }, translationEn: 'to speak' },
  { infinitive: 'يأكل', conjugations: { أنا: 'آكل', أنت: 'تأكل', هو: 'يأكل', هي: 'تأكل', نحن: 'نأكل', هم: 'يأكلون' }, translationEn: 'to eat' },
  { infinitive: 'يفعل', conjugations: { أنا: 'أفعل', أنت: 'تفعل', هو: 'يفعل', هي: 'تفعل', نحن: 'نفعل', هم: 'يفعلون' }, translationEn: 'to do' },
  { infinitive: 'يرى', conjugations: { أنا: 'أرى', أنت: 'ترى', هو: 'يرى', هي: 'ترى', نحن: 'نرى', هم: 'يرون' }, translationEn: 'to see' },
  { infinitive: 'يستطيع', conjugations: { أنا: 'أستطيع', أنت: 'تستطيع', هو: 'يستطيع', هي: 'تستطيع', نحن: 'نستطيع', هم: 'يستطيعون' }, translationEn: 'to be able' },
  { infinitive: 'يريد', conjugations: { أنا: 'أريد', أنت: 'تريد', هو: 'يريد', هي: 'تريد', نحن: 'نريد', هم: 'يريدون' }, translationEn: 'to want' },
  { infinitive: 'يعرف', conjugations: { أنا: 'أعرف', أنت: 'تعرف', هو: 'يعرف', هي: 'تعرف', نحن: 'نعرف', هم: 'يعرفون' }, translationEn: 'to know' },
];

const arAdjectives: Adjective[] = [
  { word: 'كبير', translationEn: 'big' },
  { word: 'صغير', translationEn: 'small' },
  { word: 'سريع', translationEn: 'fast' },
  { word: 'بطيء', translationEn: 'slow' },
  { word: 'جميل', translationEn: 'beautiful' },
  { word: 'قبيح', translationEn: 'ugly' },
  { word: 'قديم', translationEn: 'old' },
  { word: 'جديد', translationEn: 'new' },
  { word: 'غالي', translationEn: 'expensive' },
  { word: 'جيد', translationEn: 'good' },
  { word: 'سيء', translationEn: 'bad' },
  { word: 'حار', translationEn: 'hot' },
  { word: 'بارد', translationEn: 'cold' },
  { word: 'سهل', translationEn: 'easy' },
  { word: 'صعب', translationEn: 'difficult' },
];

export const vocab: Record<LearnLanguage, LangVocab> = {
  de: { nouns: deNouns, verbs: deVerbs, adjectives: deAdjectives, articles: ['Der', 'Die', 'Das'] },
  fr: { nouns: frNouns, verbs: frVerbs, adjectives: frAdjectives, articles: ['le', 'la', 'l\'', 'les'] },
  es: { nouns: esNouns, verbs: esVerbs, adjectives: esAdjectives, articles: ['el', 'la', 'los', 'las'] },
  en: { nouns: enNouns, verbs: enVerbs, adjectives: enAdjectives, articles: ['the', 'a', 'an'] },
  ar: { nouns: arNouns, verbs: arVerbs, adjectives: arAdjectives, articles: ['ال'] },
};

export const learnLangs = [
  { code: 'de' as LearnLanguage, name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr' as LearnLanguage, name: 'Français', flag: '🇫🇷' },
  { code: 'es' as LearnLanguage, name: 'Español', flag: '🇪🇸' },
  { code: 'en' as LearnLanguage, name: 'English', flag: '🇬🇧' },
  { code: 'ar' as LearnLanguage, name: 'العربية', flag: '🇸🇦' },
];

export function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
