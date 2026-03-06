const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Pattern to fix:
    //    ]
    //  },
    //
    //  
    //      { type:
    //
    // We want to replace it with:
    //      },
    //      { type:
    //
    // Use a regex that matches the hanging tail and joins it.
    // The lookahead ensures we only match when followed by a raw { type:
    
    // This regex matches the end of an array and the end of its parent object, 
    // BUT only if they are immediately followed by what looks like more section objects.
    const regex = /\]\s*\},?\s*\n[\s\n]*\{ type:/g;
    
    content = content.replace(regex, (match) => {
       console.log(`Found syntax error in ${lang}, patching...`);
       return ',\n      { type:';
    });

    fs.writeFileSync(p, content);
  }
});
