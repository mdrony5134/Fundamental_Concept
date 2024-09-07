// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = "I am a hard working person";
// traditional way using loop 
const spt = statement.split(" "); //split method string k array te convert kore
// console.log(spt)
let str = [];
for (let i = spt.length - 1; i >= 0; i--) {
  str.push(spt[i]);
}
let result = str.join(" "); // join method array k string a convert kore
console.log(typeof result);

console.log(spt.reverse().join(" ")) // short hand build in method use kore

