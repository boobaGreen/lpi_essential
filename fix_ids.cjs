const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];
const lessons = [
  '105.1', '105.2', '106.1', '106.2', '106.3', 
  '107.1', '107.2', '107.3', '108.1', '108.2', 
  '108.3', '108.4', '109.1', '109.2', '109.3', 
  '109.4', '110.1', '110.2', '110.3'
];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'locales', lang, 'lpic1_102_topics.js');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    lessons.forEach(id => {
      const newId = 'lpic1-102-' + id.replace('.', '-');
      // Replace '105.1' with 'lpic1-102-105-1'
      const regex = new RegExp("'" + id + "'", 'g');
      content = content.replace(regex, "'" + newId + "'");
    });
    fs.writeFileSync(p, content);
    console.log(`Updated IDs in: ${p}`);
  } else {
    console.log(`File not found: ${p}`);
  }
});
