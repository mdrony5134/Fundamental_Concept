/*

3.. Checking Array Membership with ‘includes’
Instructions:

Create an array of books containing different book.

Use the includes method to check if the array contains a javascript book.

Print a message to the console indicating whether the element is present in the array or not.
*/

const book = ["pythonBook", "javascriptBook", "cssBook"];
if(book.includes("javascriptBooks")){
    console.log("present this book")
}else{
    console.log("no book")
}