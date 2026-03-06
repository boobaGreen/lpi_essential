const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Check if it already has the correct export name
    const correctExport = `lpic1_102_extendedContent_${lang}`;
    if (!content.includes(`export const ${correctExport}`)) {
      // Replace generic 'export const extendedContent' or similar with the language-specific one
      content = content.replace(/export const \w+\s*=\s*{/, `export const ${correctExport} = {`);
      fs.writeFileSync(p, content);
      console.log(`Standardized export name in: ${p}`);
    }
  }
});
