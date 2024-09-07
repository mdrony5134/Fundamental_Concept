// Task-1:
// Count how many times a string has the letter a

const sentence = "Count how many times a string has the letter a"
 let res = 0
for(let i= 0; i <= sentence.length; i++){
    // console.log(sentence[i])
    if(sentence.charAt(i) == "a"){
        res++
    }
}
console.log(res)