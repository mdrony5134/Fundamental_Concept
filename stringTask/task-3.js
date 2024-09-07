// Check whether a string contains all the vowels a, e, i, o, u

let str = "Count how many times a string has the letter a or A";

// for(let i=0; i < str.length; i++){
//     if(str[i].includes("a" && "e" && "i" && "o" && "u")){
//         console.log("sentence accpted by all vowel")
//     }else{
//         console.log("not accept")
//     }
//     // console.log(str[i].includes("a"))
// }

function checkVowel (str){
    const vowel = ["a", "e", "i", "o", "u"];
    str = str.toLowerCase()
    for(let i = 0; i<vowel.length; i++){
        if(!str.includes(vowel[i])){
            return "Not accept"
        }
        return "accept sentence"
    }
    
}

console.log(checkVowel("Count"))
// console.log(str)
