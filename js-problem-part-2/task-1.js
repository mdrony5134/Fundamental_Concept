// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function findLowestNumber(arr) {
  let lowest = arr[0];
  for (const number of arr) {
    if (lowest > number) {
      lowest = number;
    }
  }
  return lowest;
}
const numbers = [167, 190, 120, 165, 137];
const result = findLowestNumber(numbers);
console.log(result);
