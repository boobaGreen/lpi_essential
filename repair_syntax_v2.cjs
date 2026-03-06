const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // 1. Restore internal closures (tables/lists)
    // These were correctly indented with 6 spaces.
    content = content.replace(/\n\s{6},\n\s{6}\{ type:/g, '\n      ]},\n      { type:');

    // 2. Fix the lesson merge properly.
    // The lesson closure was at 4 spaces.
    content = content.replace(/\n\s{4},\n\s{6}\{ type:/g, ',\n      { type:');

    // 3. One more case: sometimes it's ], instead of just ]
    // or different space combinations.
    // Let's just catch the ", { type:" at the wrong level.
    
    fs.writeFileSync(p, content);
    console.log(`Repaired ${lang}`);
  }
});
