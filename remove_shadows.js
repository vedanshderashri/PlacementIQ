const fs = require('fs');
const path = require('path');

const directory = "C:\\Users\\Vedansh\\Desktop\\Kriyeta Interview Website\\src\\components";

// Regex patterns to catch tailwind shadow utilities
const patterns = [
    /shadow-\[.*?\]/g,
    /\bshadow-(sm|md|lg|xl|2xl|inner)\b/g,
    /\bdrop-shadow(-\w+)?(\[.*?\])?\b/g,
    /ring-1 ring-white\/\d+/g // also convert old white rings
];

fs.readdirSync(directory).forEach(filename => {
    if (filename.endsWith(".jsx")) {
        const filepath = path.join(directory, filename);
        let content = fs.readFileSync(filepath, 'utf-8');
        const originalContent = content;
        
        // Remove shadows
        patterns.forEach(pattern => {
            content = content.replace(pattern, '');
        });
        
        // Cleanup double spaces left by removal
        content = content.replace(/  +/g, ' ');
        content = content.replace(/ className=" "/g, ' className=""');
        
        if (content !== originalContent) {
            fs.writeFileSync(filepath, content, 'utf-8');
            console.log(`Removed heavy shadows from ${filename}`);
        }
    }
});

console.log("Shadow stripping complete.");
