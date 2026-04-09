// object
// it store data in the key and value form .

// let object_Name={
//     [key]:value
// }

// 1.create
// let user = {
//   name: "Ram",
//   phone: 9800841208,
//   isAdmin: true,
// };
// 2.Access
// console.log(user)
// console.log(user.name)
// console.log(user.phone)
// console.log(user.idAdmin)
// ----------
// console.log(user["name"])
// console.log(user["phone"])
// console.log(user["isAdmin"])
// 3. update
// user.isAdmin=false
// console.log(user)
// 4.delete
// delete user.name
// delete user.phone
// console.log(user)
// 5.Add new key and values
// user.address="Ktm"
// console.log(user)
// Note: object do not stores duplicate key
// let user = {
//   name: "Ram",
//   phone: 9800841208,
//   isAdmin: true,
//   address:"ktm"
// };
// console.log(user)

// 6. Dynamic key
// let n="name"
// let user={
//     [n]:"ram"
// }
// console.log(user)
// console.log(user.name)
// console.log(user["name"])
// let u1 = 1
// let u2 = 2
// let u1 = {
//   name: "abc",
// };
// let u2 = {
//   name: "abc",
// };
// console.log(u1==u2)

// 7.Nested object
// let user = {
//   name: "ram",
//   address: {
//     temp: "ktm",
//     par: "Bkt",
//   },
//   mark: {
//     nepali: [56, 80, 60],
//   },
// };
// console.log(user.address.temp);
// find out avg. mark
// console.log(
//   user.mark.nepali.reduce((acc, item) => acc + item, 0) /
//     user.mark.nepali.length,
// );

// 8. Array of object

// let products = [
//   {
//     id: 1,
//     title: "Iphone 12 ",
//     price: 250000,
//   },
//   {
//     id: 2,
//     title: "Iphone 12 pro max ",
//     price: 270000,
//   },
//   {
//     id: 3,
//     title: "Iphone 13 ",
//     price: 350000,
//   },
//   {
//     id: 4,
//     title: "Iphone 13 pr max",
//     price: 380000,
//   },
// ];
// console.log(products[0].title)
// console.log(products[0].price)
// products.forEach((item)=>{
//     console.log(item.title)
//     console.log(item.price)
//     console.log(item.id)
// })
// Q1. write a arrow function that will calculate the total price of products
// Q2. write a arrow function  and Print the list of products whose price is greater than 280000
// Q3. write a arrow function  and Calculate the price of product whose id is odd.
// const calculatePrice = () => {
//   return products.reduce((acc, item) => {
//     return acc + item.price;
//   }, 0);
// };
// console.log(calculatePrice());

// json = javascript object notation
let user = {
  name: "Ram",
  phone: 9800841208,
  isAdmin: true,
};
console.log(user);
// convert object into json
let uJson = JSON.stringify(user);
console.log(uJson);
// convert json  into object
let uObject = JSON.parse(uJson);
console.log(uObject);
// let userJson={
//     "name":"Ram",
//     "phone":9800841208,
//     "isAdmin":true
// }
