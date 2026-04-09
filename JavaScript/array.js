// string
// array
// object
// array of object
// JSON


// array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr={
//     0:1,
//     1:2,
//     2:3,
//     3:4
// }
// console.log(arr[0])
// console.log(arr[3])
// console.log(arr[8])
// properties
// console.log(arr.length)
// last-index=8
// length=index+1
// last-index=length-1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// // 0-8
// // 0-last_index=length-1
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// calculate sum of all values
//  print only even number
//  count the even number
// also print only prime number
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// for (let i = 0; i < arr.length; i++) {
//   let isPrime = true;
//   if (arr[i] == 1) {
//     continue
//   }
//   for (let j = 2; j < arr[i]; j++) {
//     if (arr[i] % j == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(arr[i]);
//   }
// }

// let arr = [1, 2, 3, 4, 5];
// array methods
// arr.push(100,200)    to add values at last  index
// console.log(arr)
// pop
// console.log(arr.pop())
// console.log(arr.pop())   // remove  value from last index
// console.log(arr)
// arr.unshift(11,22,33)    //  to add values at start index
// console.log(arr)
// console.log(arr.shift())   //  remove  value from first index
// console.log(arr.shift())
// console.log(arr)
// delete arr[1]

// arr[0] = 1000;
// arr[3] = "ram";
// console.log(arr);
// create , access , delete , update
// crud = create , read/access,update , delete
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(start_index, end_index ))
// console.log(arr.slice(1, 3 ))
// console.log(arr.slice(1, 5 ))
// console.log(arr.slice(2, 4 ))
// console.log(arr.slice(2))
// console.log(arr.slice(3))
// arr.splice(start_index,count_to_delete,new_items)
// console.log(arr.splice(2,1))
// console.log(arr.splice(2,2))
// console.log(arr)
// arr.splice(2,1,"ram","Mohan")
// console.log(arr)
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [100, 222, 30];
// const arr3=arr.concat(arr2)
// console.log(arr3)

// Map , filter , reduce , foreach , find , includes

// forEach
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// // foreach
// arr.forEach((item, index) => {
//   console.log(item, index);
// });
// // write a code that will count the total even number and also found the sum of even number.(using for foreach)

// filter
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let filterArray=arr.filter((item) => {
//   return item % 2 !== 0;
// });
// console.log(filterArray)
// find
// let arr = [1, 2, 3, 4, 1, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let val = arr.find((item) => {
//   return item == 1;
// });
// console.log(val);

// map
// it is used when we want to create a array from old array , with updated values
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let updateArray = arr.map((item)=>{
//     return item*20
// })
// console.log(updateArray)
// reduce
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let totalSum = arr.reduce((acc, item) => {
//   return acc + item;
// }, 0);
// console.log(totalSum)

// includes
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// console.log(arr.includes(5))

// // write a code that will  found the sum of even number.(filter and reduce)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let totalSum = arr.filter(item=>item % 2 == 0).reduce((acc, item) =>acc + item, 0);
// console.log(totalSum);
