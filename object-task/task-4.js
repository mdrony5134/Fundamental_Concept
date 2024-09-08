// Task-4
// Count the number of properties.

// Input:

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };



let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count = 0;
for (const key in student) {
    // console.log(key)
    if(key){

        count++
    }
}
console.log(count)