// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

let numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// console.log(numbers.join(''))
let str = " "
for (const number of numbers) {
    str+=number
}
console.log(str)
