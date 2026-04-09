// function
// function is block of code that perform specific task.
// function functionName(){
//     // logic
// }
// // call
// functionName()
// function add(a, b, c) {
//   //   console.log(a + b + c);
//   let sum = a + b + c;
//   return sum;
// }
// let x = add(5, 7, 8);
// console.log(x);

// write a function  that  will identify the given number is odd or even
// write a function to count total  even  number between 1-20.

// type of function
// 1. Arrow function
// function sum(){
//     console.log("Sum")
// }
// const sum = (a, b) => {
//   console.log(a);
//   console.log(b);
// };
// sum(1, 2);
// const sum = (a, b) => console.log(a + b);
// const sum = a => console.log(a);
// sum(1, 2);
// const sum = a => a + 100;
// console.log(sum(1));

// printInfo("Ram")
// function printInfo(fullName){
//     console.log(fullName)
// }
// sum(a)
// const sum = a => a + 100;
// ssh
// 3. function express or anonymous function
// const add=function(){
//     console.log("Hello this is add function !")
// }
// add()

// 4. Immediately Invoked Function Expression (IIFE)
// (function () {
//   console.log("IIFE");
// })();
// 6. Async Function
// 5.Callback Functions

// function a() {
//   console.log("a");
//   function b(m,n) {
//     console.log("b",m,n);
//   }
//   return b;
// }
// let x = a();
// x(100,200);

// let first =

// const outer = (fn, a) => {
//   fn(1, 2);
// };
// outer((x, y) => {
//   console.log("Hi i am First", x, y);
// }, 100);

// write a function that take a function and a number , and write  a code in such way that given
// function  that will say the passed number is odd or even.

// const findOddOrEven = (callback, number) => {
//   callback(number);
// };
// findOddOrEven((num) => {
//   if (num % 2 == 0) {
//     console.log("Given number is even");
//   } else {
//     console.log("Given number is Odd");
//   }
// }, 19);

// const add = (a, b=0, c=1) => {
//   console.log(a , b ,c);
// };
// add(1, 2);
// add(2);
// add(1, 3, 4);
