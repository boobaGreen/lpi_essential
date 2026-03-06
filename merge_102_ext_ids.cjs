const fs = require('fs');
const path = require('path');

const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];

langs.forEach(lang => {
  const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    
    // Pattern: 'lpic1-105-1-1' -> 'lpic1-102-105-1'
    // Pattern: 'lpic1-105-2-1' -> 'lpic1-102-105-2'
    // Pattern: 'lpic1-105-2-2' -> 'lpic1-102-105-2' (MERGE)

    // Manual merge for the identified multi-part ones to avoid complex regex logic
    // This script will specifically look for the headers of the parts and combine them.
    
    // Let's use a mapping for the known multi-parts
    const merges = [
      { topic: '105', obj: '2', parts: 2 },
      { topic: '106', obj: '1', parts: 2 },
      { topic: '109', obj: '2', parts: 2 }
    ];

    merges.forEach(m => {
      const targetId = `lpic1-102-${m.topic}-${m.obj}`;
      const part1Id = `lpic1-${m.topic}-${m.obj}-1`;
      const part2Id = `lpic1-${m.topic}-${m.obj}-2`;
      
      // If part 2 exists, we merge it into part 1 and delete part 2 entry
      const part2Regex = new RegExp(`'${part2Id}': \\{\\s*title: '.*?',\\s*sections: \\[([\\s\\S]*?)\\]\\s*\\},?`, 'g');
      const match = part2Regex.exec(content);
      if (match) {
        const sectionsToAppend = match[1].trim();
        // Remove part 2 from content
        content = content.replace(match[0], '');
        
        // Find part 1 and append sections
        const part1Regex = new RegExp(`'${part1Id}': \\{\\s*(title: '.*?'),\\s*sections: \\[([\\s\\S]*?)\\]`, 'g');
        content = content.replace(part1Regex, (m, title, sections) => {
           return `'${targetId}': {\n    ${title},\n    sections: [\n${sections.trim()},\n${sectionsToAppend}\n    ]`;
        });
      }
    });

    // Final pass to fix all other single IDs
    content = content.replace(/'lpic1-(\d{3})-(\d)-1':/g, "'lpic1-102-$1-$2':");
    
    // Also handle any remaining -2, -3 if any (though we tried to merge the main ones)
    content = content.replace(/'lpic1-(\d{3})-(\d)-(\d)':/g, "'lpic1-102-$1-$2-$3':");

    fs.writeFileSync(p, content);
    console.log(`Merged and Fixed Extended Content IDs in: ${p}`);
  }
});
