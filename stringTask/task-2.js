// Task-2:
// Count how many times a string has the letter a or A

const str = "Count how many times a string has the letter a or A"
let res = 0;
let ress = 0;
for(let i = 0; i <= str.length; i++){
    if(str.charAt(i) == "a"){
        // console.log()
        res++
    }
    if( str.charAt(i) == "A"){
        ress++
    }
}
console.log(res)
console.log(ress)