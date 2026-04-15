/**
 * utils/compress.cjs
 * Compresses text into Caveman-speak to preserve Hull Integrity (context window).
 */

const fs = require('fs');

const inputPath = process.argv[2];
if (!inputPath || !fs.existsSync(inputPath)) {
  console.log("Error: Please provide a valid input file path.");
  process.exit(1);
}

const text = fs.readFileSync(inputPath, 'utf8');

// Primitive compression: remove common filler words and shorten sentences
const compress = (str) => {
  return str
    .split(/\s+/)
    .filter(word => !['the', 'a', 'an', 'is', 'are', 'was', 'were', 'to', 'for', 'of', 'and', 'but', 'or'].includes(word.toLowerCase()))
    .join(' ')
    .replace(/\.\s+/g, '. ')
    .substring(0, 1000); // Limit to 1000 chars for brevity
};

const compressed = compress(text);
console.log(`✅ Compression complete.`);
console.log(`--- COMPRESSED OUTPUT ---`);
console.log(compressed);
console.log(`--- END ---`);
