let mark = 1001;
// condition
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

if(mark>= 90 && mark<=100){
    console.log("grade A")
}
else if(mark>= 80 && mark<=89){
    console.log("grade B")
}
else if(mark>= 70 && mark<=79){
    console.log("grade C")
}
else if(mark>= 60 && mark<=69){
    console.log("grade D")
}
else if(mark>= 0 && mark<=59){
    console.log("grade F")
}else{
    console.log("Invalid Mark")
}
