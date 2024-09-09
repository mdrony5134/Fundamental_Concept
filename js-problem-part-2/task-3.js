// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop, tablet, mobile) {
  let totalLaptopPrice = laptop * 35000;
  let totalTabletPrice = tablet * 15000;
  let totalMobilePrice = mobile * 20000;

  const totalBill = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
  return totalBill;
}
const result = calculateElectronicsBudget(1, 1, 1);
console.log(result);
