const fs = require('fs');
const path = require('path');

const locales = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

// Basic UI keys for missing languages, and game keys for everyone
const keysToAdd = {
  it: {
    playAgain: "Gioca ancora", closeBtn: "Chiudi", movesAmt: "mosse!", completedIn: "Completato in",
    scoreLabel: "Punteggio:", hintLabel: "Suggerimento:", checkBtn: "Verifica", trueBtn: "Vero", falseBtn: "Falso",
    dragDropMatches: "Abbinamenti:", dragHere: "Trascina qui"
  },
  en: {
    playAgain: "Play again", closeBtn: "Close", movesAmt: "moves!", completedIn: "Completed in",
    scoreLabel: "Score:", hintLabel: "Hint:", checkBtn: "Check", trueBtn: "True", falseBtn: "False",
    dragDropMatches: "Matches:", dragHere: "Drag here"
  },
  es: {
    playAgain: "Jugar de nuevo", closeBtn: "Cerrar", movesAmt: "movimientos!", completedIn: "Completado en",
    scoreLabel: "Puntuación:", hintLabel: "Pista:", checkBtn: "Comprobar", trueBtn: "Verdadero", falseBtn: "Falso",
    dragDropMatches: "Aciertos:", dragHere: "Arrastra aquí"
  },
  fr: {
    playAgain: "Rejouer", closeBtn: "Fermer", movesAmt: "mouvements!", completedIn: "Complété en",
    scoreLabel: "Score:", hintLabel: "Indice:", checkBtn: "Vérifier", trueBtn: "Vrai", falseBtn: "Faux",
    dragDropMatches: "Correspondances:", dragHere: "Glisser ici"
  },
  de: {
    playAgain: "Nochmal spielen", closeBtn: "Schließen", movesAmt: "Züge!", completedIn: "Abgeschlossen in",
    scoreLabel: "Punktzahl:", hintLabel: "Tipp:", checkBtn: "Überprüfen", trueBtn: "Wahr", falseBtn: "Falsch",
    dragDropMatches: "Übereinstimmungen:", dragHere: "Hier ziehen"
  },
  pt: {
    playAgain: "Jogar novamente", closeBtn: "Fechar", movesAmt: "movimentos!", completedIn: "Concluído em",
    scoreLabel: "Pontuação:", hintLabel: "Dica:", checkBtn: "Verificar", trueBtn: "Verdadeiro", falseBtn: "Falso",
    dragDropMatches: "Correspondências:", dragHere: "Arraste aqui"
  },
  ru: {
    playAgain: "Играть снова", closeBtn: "Закрыть", movesAmt: "ходов!", completedIn: "Завершено за",
    scoreLabel: "Счет:", hintLabel: "Подсказка:", checkBtn: "Проверить", trueBtn: "Верно", falseBtn: "Неверно",
    dragDropMatches: "Совпадения:", dragHere: "Перетащите сюда"
  },
  zh: {
    playAgain: "再玩一次", closeBtn: "关闭", movesAmt: "步！", completedIn: "完成于",
    scoreLabel: "分数：", hintLabel: "提示：", checkBtn: "检查", trueBtn: "正确", falseBtn: "错误",
    dragDropMatches: "匹配：", dragHere: "拖到这里"
  }
};

locales.forEach(lang => {
  const filePath = path.join(__dirname, '..', 'src', 'locales', lang, 'ui.js');
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('playAgain:')) {
    const formattedKeys = Object.entries(keysToAdd[lang])
      .map(([k, v]) => `  ${k}: "${v}",`)
      .join('\n');
      
    content = content.replace(/};\s*$/, `\n  // Game UI\n${formattedKeys}\n};\n`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated UI keys for ${lang}`);
  }
});
