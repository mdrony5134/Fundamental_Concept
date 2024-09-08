// ask-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function findRepetatedNums(numbers) {
  let count = 0;
  for (const number of numbers) {
    // console.log(number);
    if (number === 25) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const numbers2 = [5,6,11,12,98, 5]
console.log(findRepetatedNums(numbers));
console.log(findRepetatedNums(numbers2));
// const result = findRepetatedNums(numbers)
// console.log(result)
