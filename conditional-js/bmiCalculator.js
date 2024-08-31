let weight = 60;
let height = 65;
let bmi = (weight / height) ^ 2;
// BMI < 18.5, you are underweight.
// - BMI >= 18.5 and BMI <=24.9, you are normal.
// - BMI >=25 and BMI <= 29.9, you are overweight.
if (bmi < 18.5) {
  console.log("you are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("you are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("you are overweight");
}else{
    console.log('you are not perfect')
}
