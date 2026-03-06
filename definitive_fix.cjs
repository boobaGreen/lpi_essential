const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // 1. Fix double commas at end of lines
    content = content.replace(/\},,\s*\n/g, '},\n');
    content = content.replace(/\],,\s*\n/g, '],\n');
    content = content.replace(/,\s*,\s*\n/g, ',\n');

    // 2. Fix the "ghost entries" (dangling closures between keys)
    // These look like: 
    //   },
    //
    //   ]
    //  },
    //
    //  'key': {
    
    // Regex to find: \n\s*]\n\s*}\s*,\s*\n\s*\n\s*'
    // We want to remove the redundant block.
    
    // More robust version: remove any lines that just have ] and } between a } and a 'key'
    const lines = content.split('\n');
    const newLines = [];
    let insideObject = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // If we see a dangling ] or } or ]} that isn't part of a valid close, skip it.
        // Actually, let's just use regex for the specific ghost pattern I saw.
        newLines.push(line);
    }
    
    let result = newLines.join('\n');
    
    // This regex catches the ghost closure:
    //   },
    //   
    //     ]
    //   },
    //   
    //   'lpic1...
    result = result.replace(/\},\s*\n\s*\n\s*\]\s*\n\s*\}\s*,\s*\n\s*\n\s*'/g, '},\n\n  \'');
    
    // And if it's at the end of a sections array:
    //   ]
    //  },
    //  
    //  'lpic1...
    // becomes just 
    //  
    //  'lpic1...
    
    // Let's also fix the it.js double comma I might have missed
    result = result.replace(/,(\s*),/g, ',');

    fs.writeFileSync(p, result);
    console.log(`Fixed ${lang}`);
  }
});
