const fs = require('fs');
const path = require('path');

const dirs = ['app', 'components'];

function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  // Perform replacements
  newContent = newContent.replace(/bg-\[var\(--bg-primary\)\]/g, 'glass-panel');
  newContent = newContent.replace(/bg-\[var\(--bg-secondary\)\]/g, 'glass-panel-secondary');
  newContent = newContent.replace(/bg-\[var\(--bg-tertiary\)\]/g, 'glass-panel-tertiary');
  
  // Clean up any double spaces that might occur if multiple bg classes were next to each other
  // though regex replace doesn't add spaces, just standardizing.

  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

dirs.forEach(walk);
console.log('Replacement complete.');
