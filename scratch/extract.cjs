const fs = require('fs');
const text = fs.readFileSync('terms_text.txt', 'utf8');

// Find all fetch calls to Google Script
const regex = /fetch\(['"`](https:\/\/script\.google\.com\/macros\/s\/[^'"`]+)['"`][^]*?body:\s*`([^`]+)`/g;

let match;
while ((match = regex.exec(text)) !== null) {
  console.log('URL:', match[1]);
  console.log('BODY:', match[2]);
  console.log('---');
}
