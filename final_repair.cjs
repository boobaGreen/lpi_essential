const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // 1. Fix missing closures in tables/lists (6 spaces indentation)
    // Pattern: 
    //       ,
    //       { type:
    // Should be:
    //       ]},
    //       { type:
    content = content.replace(/\n\s{6},\n\s{6}\{ type:/g, '\n      ]},\n      { type:');

    // 2. Fix missing closures in sections (4 spaces indentation)
    // Pattern: 
    //     ,
    //       { type:
    // Should be:
    //     ,
    //       { type: (Actually this usually means the ], was removed and replaced with ,)
    // Wait, if it was at 4 spaces, it was finishing the sections array.
    // Let's check the code again.
    // sections: [
    //   { ... }
    // ]
    // If it was ], }, and I replaced with ,
    // I end up with , { type:
    
    // Actually, looking at the previous damage:
    // it.js line 51: "      ," (6 spaces)
    // it.js line 106: "      ," (6 spaces)
    // it.js line 114: "      ," (6 spaces)
    
    // Let's also handle the double comma issue
    content = content.replace(/\},,/g, '},');
    content = content.replace(/\],,/g, '],');
    
    // 3. More general cleanup for the hanging commas
    // Any line that is just "      ," or "    ," followed by "      { type:"
    // should probably be "      ]}," or just ",".
    
    // Let's be very specific:
    // If we are at 6 spaces, we are inside a section (rows or items).
    content = content.replace(/(\s{6}),(\s+)\{ type:/g, '$1]},$2{ type:');
    
    // If we are at 4 spaces, we are at the sections array level.
    // If we have "    ," followed by "      { type:", it means the original matched ]}, and was replaced with ,
    // This is actually CORRECTly merged now, just need to make sure the syntax is valid.
    // "{ ... }, { type: ... }" is valid in an array.
    
    // Wait, if I have:
    //   sections: [
    //     { ... },
    //     { type: ... }
    //   ]
    // That's fine.
    
    // But if I have:
    //   sections: [
    //     { ... }
    //     ,
    //     { type: ... }
    //   ]
    // That's also fine in JS.
    
    // The REAL error is a missing ]} for tables/lists.
    
    fs.writeFileSync(p, content);
    console.log(`Repaired ${lang}`);
  }
});
