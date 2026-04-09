// string
// collection of char. in "", '',`
// let fullName = "Sipalaya info tech";
// console.log(fullName)
// console.log(fullName.length)
// console.log(fullName[0])
// console.log(fullName[1])
// console.log(fullName[2])
// for( let i =0;i<fullName.length;i++ ){
//     // console.log(i)
//     console.log(fullName[i])
// }
// for (let i = fullName.length - 1; i >= 0; i--) {
//   // console.log(i)
//   console.log(fullName[i]);
// }

// let fullName = "Sipalaya info tech";
// let address="Kathmandu"
// // to join the string
// // console.log(fullName+" "+address)
// let comp=fullName.concat(" "+address)
// console.log(comp)

// Q1 Write a arrow function that will identify the given word or sentence  is palindrome or not .
//eg. radar==radar
// let str = "radar";
// let rev = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   rev = rev + str[i];
// }
// // console.log(rev)
// if (str == rev) {
//   console.log("palindrome");
// } else {
//   console.log("Not palindrome");
// }
// let fullName = "Sipalaya info tech";
// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.charAt(0))
// console.log(fullName.charAt(1))
// console.log(fullName.charAt(2))
// console.log(fullName.indexOf("h"))
// console.log(fullName.indexOf("S"))
// console.log(fullName.indexOf("p"))
// console.log(fullName.indexOf("a"))
// console.log(fullName.startsWith("S"))
// console.log(fullName.startsWith("s"))
// console.log(fullName.startsWith("Sipalaya"))
// console.log(fullName.endsWith("h"))
// console.log(fullName.endsWith("tech"))
// console.log(fullName.slice(2,5))
// let fullName = "Sipalaya info tech";
// console.log(fullName.replace("S","Z"))
// console.log(fullName.replace("Sipalaya","a"))
// console.log(fullName.replace("a","q"))
// console.log(fullName.replaceAll("a","q"))

// String to array
// let fullName = "Sipalaya info tech";
// let arr=fullName.split()
// let arr=fullName.split("")
// let arr=fullName.split(" ")
// console.log(arr)
// let fullName = "           Sipalaya info tech                 ";
// console.log(fullName)
// console.log(fullName.trim())
// Q1.write a arrow function that will convert "hello"=="Hello"  (not replace)

// let fullName='hello'
// console.log(fullName[0].toUpperCase()+fullName.slice(1))
// console.log()
// Q2.write a arrow function that will take out only last part of given string .(not slice)
// let token="Berror ey2323kjhb3ehberhebhrebrhbrhrhejerjh"
// token=token.split(' ')[1]
// console.log(token[1])
// console.log(token)
// Q3.write a arrow function that will convert "hello i am ram"=="Hello I Am Ram "(not replace)(reduce)
// let str = "hello i am ram";
// const covert = () => {
//   str = str.split(" ");
//   let newStr = str.reduce((acc, item) => {
//     return acc + " " + item[0].toUpperCase() + item.slice(1);
//   }, "");
//   console.log(newStr);
// };
// covert();
// rest and spread (...)
// let arr=[1,2,3]
// let arr2=[5,6,7,...arr,12,3]
// console.log(arr2)
// let address = {
//   temp: "ktm",
//   par: "BKT",
// };
// console.log(address)
// let user = {
//   name: "Ram",
//   ...address
// };
// console.log(user)

// rest(...)
// function add(...arr){
//     console.log(arr)
// }
// add(100,200,12,45,565,5656,67)

