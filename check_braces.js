const fs = require('fs');
const content = fs.readFileSync('c:/Users/Jakob/Youth-Work-Reporting/code.gs.txt', 'utf8');
const lines = content.split('\n');

let stack = [];
let braceCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '{') {
      stack.push({ line: i + 1, char: j + 1 });
      braceCount++;
    } else if (line[j] === '}') {
      if (stack.length === 0) {
        console.log(`Unmatched } at line ${i + 1}, char ${j + 1}`);
      } else {
        stack.pop();
        braceCount--;
      }
    }
  }
}

if (stack.length > 0) {
  console.log('Unclosed braces:');
  stack.forEach(b => console.log(`  { at line ${b.line}, char ${b.char}`));
} else {
  console.log('All braces matched!');
}
console.log(`Total { : ${braceCount + stack.length}`);
console.log(`Total } : ${braceCount}`);
