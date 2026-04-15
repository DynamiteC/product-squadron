/**
 * utils/token_advisor.cjs
 * Analyzes the last user message and suggests a more token-efficient version.
 * Tokens = Money. Spend wisely to earn gains.
 */

const fs = require('fs');

const userMessage = process.argv.slice(2).join(' ');
if (!userMessage) {
  console.log("Usage: node token_advisor.cjs <your-message-here>");
  process.exit(1);
}

const originalTokenEstimate = userMessage.split(/\s+/).length;

// Simple compression algorithm for suggestion
const suggestEfficient = (msg) => {
  return msg
    .replace(/\b(please|kindly|could you|would you mind|if possible)\b/gi, '')
    .replace(/\b(I want to|I would like to|can you help me with)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
};

const efficientMessage = suggestEfficient(userMessage);
const efficientTokenEstimate = efficientMessage.split(/\s+/).length;
const savings = 1 - (efficientTokenEstimate / originalTokenEstimate);

console.log(`--- TOKEN FINANCIAL ADVISOR ---`);
console.log(`Original: "${userMessage}"`);
console.log(`Suggested: "${efficientMessage}"`);
console.log(`Savings: ${(savings * 100).toFixed(0)}% Token Capital preserved.`);
console.log(`Remember: Token is currency. Direct commands = Profit.`);
console.log(`--------------------------------`);
