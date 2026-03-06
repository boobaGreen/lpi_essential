const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Fix double commas
    content = content.replace(/,,/g, ',');
    
    // Fix ", ,"
    content = content.replace(/,\s*,/g, ',');
    
    // Ensure all internal tables/lists are properly closed if they were left hanging
    // This pattern identifies a closing bracket of a rows/items array followed by 
    // a comma and then the next object, which is valid.
    // The previous problem was missing ]} or ]
    
    // Let's check for "sections: [" then objects then closing.
    
    fs.writeFileSync(p, content);
    console.log(`Cleaned up ${lang}`);
  }
});
