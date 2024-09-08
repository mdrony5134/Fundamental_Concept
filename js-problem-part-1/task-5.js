// Task-5:
// Generate a random number between 10 to 20.


// two random valu number er range ber korar formula
//Math.random()*(heighestNumber - LowestNumber) + LowestNumber


function randomNumberGenerator(lowRange, highestRange) {
  const rnadomNum = Math.floor(
    Math.random() * (highestRange - lowRange) + lowRange 
  );
  return rnadomNum;
}
const result = randomNumberGenerator(10, 20);
console.log(result);
