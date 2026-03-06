const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'locales', lang, 'lpic1_101_topics.js');
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Topic 2: lpic1-102-1-x -> lpic1-101-2-x
    content = content.replace(/lpic1-102-1-(\d+)/g, 'lpic1-101-2-$1');
    
    // Topic 3: lpic1-103-x-y -> lpic1-101-3-y (actually we need to be careful with sub-objectives)
    // Looking at the file, Topic 3 lessons were lpic1-103-1-1, lpic1-103-1-2, lpic1-103-2-1... 
    // We should probably map them sequentially or preserve the sub-objective.
    // Let's use a more robust replacement.
    content = content.replace(/lpic1-103-(\d+)-(\d+)/g, 'lpic1-101-3-$1-$2');
    
    // Topic 4: lpic1-104-x-y -> lpic1-101-4-x-y
    content = content.replace(/lpic1-104-(\d+)-(\d+)/g, 'lpic1-101-4-$1-$2');

    fs.writeFileSync(p, content);
    console.log(`Updated 101 IDs in: ${p}`);
  }
});
