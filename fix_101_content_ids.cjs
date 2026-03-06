const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  // 1. lessonContent
  const p1 = path.join(process.cwd(), 'src', 'locales', lang, 'lpic1_101_lessonContent.js');
  if (fs.existsSync(p1)) {
    let content = fs.readFileSync(p1, 'utf8');
    content = content.replace(/lpic1-102-1-(\d+)/g, 'lpic1-101-2-$1');
    content = content.replace(/lpic1-103-(\d+)-(\d+)/g, 'lpic1-101-3-$1-$2');
    content = content.replace(/lpic1-104-(\d+)-(\d+)/g, 'lpic1-101-4-$1-$2');
    fs.writeFileSync(p1, content);
    console.log(`Updated 101 Lesson Content IDs: ${p1}`);
  }

  // 2. extendedContent
  const p2 = path.join(process.cwd(), 'src', 'data', 'lpic1-101', 'extendedContent', `lpic1_101_extendedContent_${lang}.js`);
  if (fs.existsSync(p2)) {
    let content = fs.readFileSync(p2, 'utf8');
    content = content.replace(/lpic1-102-1-(\d+)/g, 'lpic1-101-2-$1');
    content = content.replace(/lpic1-103-(\d+)-(\d+)/g, 'lpic1-101-3-$1-$2');
    content = content.replace(/lpic1-104-(\d+)-(\d+)/g, 'lpic1-101-4-$1-$2');
    fs.writeFileSync(p2, content);
    console.log(`Updated 101 Extended Content IDs: ${p2}`);
  }
});
