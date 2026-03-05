const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '..', 'src', 'locales');
const langs = ['en', 'es', 'it', 'de', 'ru', 'pt', 'fr', 'zh'];

// New keys to add
const newTranslations = {
  // IT
  it: {
    levelBeginner: 'Principiante',
    levelIntermediate: 'Intermedio',
    levelExpert: 'Esperto',
    difficultyEasy: 'Facile',
    difficultyMedium: 'Medio',
    difficultyHard: 'Difficile',
    quizTitle: 'Quiz Rapidi',
    memoryTitle: 'Memory Game',
    terminalTitle: 'Terminal Challenge',
    dragdropTitle: 'Drag & Drop',
    fillgapTitle: 'Completa il Comando',
    truefalseTitle: 'Vero o Falso'
  },
  // EN
  en: {
    levelBeginner: 'Beginner',
    levelIntermediate: 'Intermediate',
    levelExpert: 'Expert',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    quizTitle: 'Quick Quizzes',
    memoryTitle: 'Memory Game',
    terminalTitle: 'Terminal Challenge',
    dragdropTitle: 'Drag & Drop',
    fillgapTitle: 'Fill the Blank',
    truefalseTitle: 'True or False'
  },
  // ES
  es: {
    levelBeginner: 'Principiante',
    levelIntermediate: 'Intermedio',
    levelExpert: 'Experto',
    difficultyEasy: 'Fácil',
    difficultyMedium: 'Medio',
    difficultyHard: 'Difícil',
    quizTitle: 'Cuestionarios Rápidos',
    memoryTitle: 'Juego de Memoria',
    terminalTitle: 'Desafío de Terminal',
    dragdropTitle: 'Arrastrar y Soltar',
    fillgapTitle: 'Completa el Comando',
    truefalseTitle: 'Verdadero o Falso'
  },
  // the rest fallback to English for these structural translation labels
  de: {
    levelBeginner: 'Beginner',
    levelIntermediate: 'Intermediate',
    levelExpert: 'Expert',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    quizTitle: 'Quick Quizzes',
    memoryTitle: 'Memory Game',
    terminalTitle: 'Terminal Challenge',
    dragdropTitle: 'Drag & Drop',
    fillgapTitle: 'Fill the Blank',
    truefalseTitle: 'True or False'
  },
  ru: {
    levelBeginner: 'Beginner',
    levelIntermediate: 'Intermediate',
    levelExpert: 'Expert',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    quizTitle: 'Quick Quizzes',
    memoryTitle: 'Memory Game',
    terminalTitle: 'Terminal Challenge',
    dragdropTitle: 'Drag & Drop',
    fillgapTitle: 'Fill the Blank',
    truefalseTitle: 'True or False'
  },
  pt: {
    levelBeginner: 'Beginner',
    levelIntermediate: 'Intermediate',
    levelExpert: 'Expert',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    quizTitle: 'Quick Quizzes',
    memoryTitle: 'Memory Game',
    terminalTitle: 'Terminal Challenge',
    dragdropTitle: 'Drag & Drop',
    fillgapTitle: 'Fill the Blank',
    truefalseTitle: 'True or False'
  },
  fr: {
    levelBeginner: 'Beginner',
    levelIntermediate: 'Intermediate',
    levelExpert: 'Expert',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    quizTitle: 'Quick Quizzes',
    memoryTitle: 'Memory Game',
    terminalTitle: 'Terminal Challenge',
    dragdropTitle: 'Drag & Drop',
    fillgapTitle: 'Fill the Blank',
    truefalseTitle: 'True or False'
  },
  zh: {
    levelBeginner: 'Beginner',
    levelIntermediate: 'Intermediate',
    levelExpert: 'Expert',
    difficultyEasy: 'Easy',
    difficultyMedium: 'Medium',
    difficultyHard: 'Hard',
    quizTitle: 'Quick Quizzes',
    memoryTitle: 'Memory Game',
    terminalTitle: 'Terminal Challenge',
    dragdropTitle: 'Drag & Drop',
    fillgapTitle: 'Fill the Blank',
    truefalseTitle: 'True or False'
  }
};

langs.forEach(lang => {
  const dictPath = path.join(localesDir, lang, 'ui.js');
  if (fs.existsSync(dictPath)) {
    let content = fs.readFileSync(dictPath, 'utf8');
    
    // Find where the object ends -> the last closing brace
    const lastBraceIndex = content.lastIndexOf('}');
    if (lastBraceIndex !== -1) {
      // Build the string to inject
      let injectStr = `  // Traduzioni Titoli Giochi\n`;
      const trans = newTranslations[lang];
      for (const [k, v] of Object.entries(trans)) {
        injectStr += `  ${k}: "${v}",\n`;
      }
      
      // Inject before the last brace
      const updatedContent = content.slice(0, lastBraceIndex) + injectStr + content.slice(lastBraceIndex);
      fs.writeFileSync(dictPath, updatedContent, 'utf8');
      console.log(`Updated dictionary for \${lang}`);
    }
  }
});
