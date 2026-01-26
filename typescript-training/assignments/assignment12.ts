function isPalindrome(s: string): boolean {
  // 1. Convert to lowercase and remove non-alphanumeric characters using a regular expression
  // [^a-z0-9] matches any character that is NOT a lowercase letter or a number.
  // The 'g' flag ensures all occurrences are replaced.
  const cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // 2. Reverse the cleaned string
  const reversedString = cleanedString.split('').reverse().join('');

  // 3. Compare the cleaned string with its reversed version
  return cleanedString === reversedString;
}

// Example Usage:
const s1 = "A man, a plan, a canal: Panama";
console.log(`${s1}: ${isPalindrome(s1)}`); // Output: true

const s2 = "race a car";
console.log(`${s2}: ${isPalindrome(s2)}`); // Output: false

const s3 = " ";
console.log(`${s3}: ${isPalindrome(s3)}`); // Output