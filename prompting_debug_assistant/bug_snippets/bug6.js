// Intended: Read a file and print its content
const fs = require('fs');

fs.readFile('test.txt', 'utf8', (data, err) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});
