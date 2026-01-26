function findWordOccurrences(paragraph: string, targetWord: string): void {
  // Use a regular expression with the global (g) and case-insensitive (i) flags
  const regex = new RegExp(targetWord, 'gi');
  const matches = paragraph.match(regex);

  if (!matches || matches.length === 0) {
    console.log(`"${targetWord}" not found in the paragraph.`);
    return;
  }

  const totalOccurrences = matches.length;
  const indexes: number[] = [];
  let currentIndex = 0;

  // Manually find indexes as match() with /g does not return index in its result
  matches.forEach(match => {
    // Find the next occurrence starting from the current index
    const index = paragraph.indexOf(match, currentIndex);
    indexes.push(index);
    // Update the starting index for the next search to be after the current match
    currentIndex = index + match.length;
  });

  console.log(`Target word: "${targetWord}"`);
  console.log(`1. Total number of occurrences: ${totalOccurrences}`);
  console.log(`2. Indexes of the word: ${indexes.join(', ')}`);
}

// --- Example Usage ---
const text = "Java is a popular programming language. I use Java for backend development. Java is also fun to learn.";
const wordToFind = "Java";

findWordOccurrences(text, wordToFind);