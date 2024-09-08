// ask-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWord(str){
    let words = str.split(" ") // split method string k array te convert kore
    // console.log(words)
    let longest = ""
    for (const word of words) {
        if(word.length > longest.length){
            longest = word
        }
    }
    return longest;
}
const str = "I am learning Programming to become a programmer"
const result = longestWord(str)
console.log(result)