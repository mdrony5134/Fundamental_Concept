// here is the condition

// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

let age = 80;
if(age < 10){
    console.log("Free")
}else if(age > 10 && age <= 25){
    console.log("student get 50% dicount")
}else if(age >= 60){
    console.log("get 15% discount")
}else{
    console.log("regular price 800 tk")
}