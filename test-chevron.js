// Quick test file to verify lucide-react import
const { ChevronDown } = require('lucide-react');

console.log('ChevronDown component:', ChevronDown);
console.log('Type:', typeof ChevronDown);

if (ChevronDown) {
  console.log('✅ ChevronDown is available and can be imported');
} else {
  console.log('❌ ChevronDown is NOT available');
}
