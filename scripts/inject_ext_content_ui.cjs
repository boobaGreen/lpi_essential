const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, 'src', 'locales');
const langs = ['en', 'es', 'it', 'de', 'ru', 'pt', 'fr', 'zh'];

const newTranslations = {
  it: {
    extSuggestion: '💡 Suggerimento',
    extWarning: '⚠️ Attenzione',
    extNote: '📝 Nota',
    extExamTip: '🎯 Tip Esame LPI',
    extDeepDive: '📖 Approfondimento'
  },
  en: {
    extSuggestion: '💡 Suggestion',
    extWarning: '⚠️ Warning',
    extNote: '📝 Note',
    extExamTip: '🎯 LPI Exam Tip',
    extDeepDive: '📖 Deep Dive'
  },
  es: {
    extSuggestion: '💡 Sugerencia',
    extWarning: '⚠️ Advertencia',
    extNote: '📝 Nota',
    extExamTip: '🎯 Consejo Examen LPI',
    extDeepDive: '📖 Profundización'
  },
  // the rest fallback to English
  de: { extSuggestion: '💡 Suggestion', extWarning: '⚠️ Warning', extNote: '📝 Note', extExamTip: '🎯 LPI Exam Tip', extDeepDive: '📖 Deep Dive' },
  ru: { extSuggestion: '💡 Suggestion', extWarning: '⚠️ Warning', extNote: '📝 Note', extExamTip: '🎯 LPI Exam Tip', extDeepDive: '📖 Deep Dive' },
  pt: { extSuggestion: '💡 Suggestion', extWarning: '⚠️ Warning', extNote: '📝 Note', extExamTip: '🎯 LPI Exam Tip', extDeepDive: '📖 Deep Dive' },
  fr: { extSuggestion: '💡 Suggestion', extWarning: '⚠️ Warning', extNote: '📝 Note', extExamTip: '🎯 LPI Exam Tip', extDeepDive: '📖 Deep Dive' },
  zh: { extSuggestion: '💡 Suggestion', extWarning: '⚠️ Warning', extNote: '📝 Note', extExamTip: '🎯 LPI Exam Tip', extDeepDive: '📖 Deep Dive' }
};

langs.forEach(lang => {
  const dictPath = path.join(localesDir, lang, 'ui.js');
  if (fs.existsSync(dictPath)) {
    let content = fs.readFileSync(dictPath, 'utf8');
    
    // Find where the object ends -> the last closing brace
    const lastBraceIndex = content.lastIndexOf('}');
    if (lastBraceIndex !== -1) {
      // Build the string to inject
      let injectStr = `  // Traduzioni Extended Content\n`;
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
