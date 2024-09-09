// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(arr) {
  let smallest = arr[0];
  for (const friend of arr) {
    // console.log(friend);
    if (smallest.length > friend.length) {
      smallest = friend;
    }
    // console.log(smallest);
  }
  return smallest;
}
const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
const result = smallestName(friends);
console.log(result);
