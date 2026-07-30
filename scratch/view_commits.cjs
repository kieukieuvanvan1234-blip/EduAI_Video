const fs = require('fs');
const content = fs.readFileSync('C:/Users/admin/.gemini/antigravity/brain/3f4099af-2d79-4ee6-b57f-b1dc3c0e16e3/.system_generated/steps/597/content.md', 'utf8');
const lines = content.split('\n');
console.log('Total lines:', lines.length);
for (let i = 0; i < lines.length; i++) {
  console.log(`Line ${i}:`, lines[i].substring(0, 100));
}

// Find JSON
const line9 = lines[9];
if (line9) {
  try {
    const data = JSON.parse(line9.trim());
    console.log('Parsed JSON successfully!');
    console.log('Commit message:', data[0]?.commit?.message);
    console.log('Files changed:', data[0]?.files);
  } catch (e) {
    console.error('Failed to parse line 9:', e.message);
  }
}
