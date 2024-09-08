// Write a function to count the number of vowels in a string.

function findVowel(strs) {
  const vowels = ["a", "e", "i", "o", "u"];
  str = strs.toLowerCase();
  let count = 0;
  for (let i = 0; i < strs.length; i++) {
    if (vowels.includes(strs[i])) {
      count++;
    }
  }
  return count;
}
let str = "I am learning programming";

const result = findVowel(str);
console.log(result);
