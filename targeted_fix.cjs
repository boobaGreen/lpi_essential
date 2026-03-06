const fs = require('fs');
const path = require('path');

const zhPath = path.join(process.cwd(), 'src/data/lpic1-102/extendedContent/lpic1_102_extendedContent_zh.js');
const esPath = path.join(process.cwd(), 'src/data/lpic1-102/extendedContent/lpic1_102_extendedContent_es.js');

if (fs.existsSync(zhPath)) {
    let zhContent = fs.readFileSync(zhPath, 'utf8');
    // Remove the dangling block between 105-2 and 108-1
    // It's exactly:
    //   },
    //
    //   
    //     ]
    //   },
    //
    //   'lpic1-102-108-1'
    
    zhContent = zhContent.replace(/\},\s*\n\s*\n\s*\]\s*\n\s*\}\s*,\s*\n\s*\n\s*'/g, '},\n\n  \'');
    // If that fails, try a simpler line-based approach
    if (zhContent.includes('    ]\n  },')) {
        const lines = zhContent.split('\n');
        const filtered = lines.filter((line, index) => {
            // Lines 51-54 (1-indexed) in the original view were problematic
            // But let's look for the specific strings.
            const t = line.trim();
            if (t === ']' && lines[index+1] && lines[index+1].trim() === '},' && lines[index+3] && lines[index+3].includes('lpic1-102-108-1')) {
                return false;
            }
            if (t === '},' && lines[index-1] && lines[index-1].trim() === ']' && lines[index+2] && lines[index+2].includes('lpic1-102-108-1')) {
                return false;
            }
            return true;
        });
        zhContent = filtered.join('\n');
    }

    fs.writeFileSync(zhPath, zhContent);
    console.log('Fixed zh.js');
}

if (fs.existsSync(esPath)) {
    let esContent = fs.readFileSync(esPath, 'utf8');
    esContent = esContent.replace(/\},,/g, '},');
    fs.writeFileSync(esPath, esContent);
    console.log('Fixed es.js');
}
