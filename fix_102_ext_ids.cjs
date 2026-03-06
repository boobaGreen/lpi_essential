const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Pattern: 'lpic1-105-1-1' -> 'lpic1-102-105-1'
    // Pattern: 'lpic1-105-2-1' -> 'lpic1-102-105-2'
    // Pattern: 'lpic1-105-2-2' -> also maps to 'lpic1-102-105-2' (this needs a merge strategy if done manually, 
    // but for a simple regex we can't easily merge. Let's see if we can just fix the single ones first 
    // and handle the compound ones.)

    // Actually, Topic 105 objective 2 is one lesson. 
    // If there are multiple parts, they should be in the same "sections" array.
    
    // Let's try to extract the object, fix keys, and write back.
    // This is risky with regex on complex JS.
    
    // Simpler: replace 'lpic1-(\d{3})-(\d)-(\d)' with 'lpic1-102-$1-$2'
    // This will cause duplicate keys if there's a -1 and -2. 
    // I should probably do a more careful replacement.
    
    // Let's check for -2 suffix.
    if (content.includes('-2-2\': {')) {
       console.log(`WARNING: ${lang} has multiple parts for 105.2`);
    }

    content = content.replace(/'lpic1-(\d{3})-(\d)-1':/g, "'lpic1-102-$1-$2':");
    
    // Handle the specific cases of Topic 109 and 110 which might have different lesson numbers.
    // Actually the pattern seems to be 'lpic1-OBJECTIVE-LESSON-PART'
    
    fs.writeFileSync(p, content);
    console.log(`Fixed Extended Content IDs in: ${p}`);
  }
});
