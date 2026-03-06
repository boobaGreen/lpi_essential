const fs = require('fs');
const path = require('path');

const zhPath = path.join(process.cwd(), 'src/data/lpic1-102/extendedContent/lpic1_102_extendedContent_zh.js');

if (fs.existsSync(zhPath)) {
    let content = fs.readFileSync(zhPath, 'utf8');
    const lines = content.split(/\r?\n/);
    
    // Look for the specific pattern around line 53
    // 50:   },
    // 51: 
    // 52:   
    // 53:     ]
    // 54:   },
    // 55: 
    // 56:   // Topic 4: Essential System Services
    
    const newLines = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        // If we find the specific problematic sequence, skip it
        if (i > 45 && i < 60) {
            const trim = line.trim();
            if (trim === ']' || trim === '},') {
                // If it's a dangling close between Topic 1 and 4
                if (lines.slice(i, i+10).some(l => l.includes('108-1'))) {
                   console.log(`Skipping dangling closure at line ${i+1}: ${line}`);
                   continue;
                }
            }
        }
        newLines.push(line);
    }
    
    fs.writeFileSync(zhPath, newLines.join('\n'));
    console.log('Processed zh.js');
}

// Systemic cleanup for ALL languages: remove double commas and triple commas
const langs = ['it', 'en', 'es', 'fr', 'de', 'pt', 'ru', 'zh'];
langs.forEach(lang => {
    const p = path.join(process.cwd(), 'src', 'data', 'lpic1-102', 'extendedContent', `lpic1_102_extendedContent_${lang}.js`);
    if (fs.existsSync(p)) {
        let cnt = fs.readFileSync(p, 'utf8');
        cnt = cnt.replace(/,(\s*),/g, ','); // Fix ", ," and ",,"
        cnt = cnt.replace(/,(\s*),/g, ','); // Run again for ",,,"
        fs.writeFileSync(p, cnt);
    }
});
