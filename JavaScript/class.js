// class
// class is blueprint of object
// dry  do not repeat yourself
// const obj1={
//     name:"abc",
//     age:20
// }
// const obj2={
//     name:"xyz",
//     age:24
// }
// const obj3={
//     name:"pqr",
//     age:22
// }

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// {
//     name:""
//     age:""
// }
// const u1=new Person("Ram",40)
// console.log(u1)
// console.log(u1.name)
// console.log(u1.age)
// u1={
//      name:"Ram",
//      age:"40"
//  }''''''

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   printInfo() {
//     console.log(`Hello I am ${this.name} and my age is ${this.age} `);
//   }
// }
// const u1 = new Person("Ram", 40);
// const u2 = new Person("mohan", 50);
// u1.printInfo();
// u2.printInfo();

// class A {
//     constructor(name){
//         this.name=name
//     }
// }
// class B{
//     constructor(name,studyField){
//         this.name=name
//         this.studyField=studyField
//     }
// }

// class Company {
//   constructor(c_name, price) {
//     this.c_name = c_name;
//     this.price = price;
//   }
// }
// class Car extends Company {
//   constructor(c_name, car_name, price) {
//     super(c_name, price);
//     this.car_name = car_name;
//   }}
// class Truck extends Company {
//   constructor(c_name, Truck_name, price) {
//     super(c_name, price);
//     this.Truck_name = Truck_name;
//   }
// }
// const c1 = new Car("abc", "Mno", 4500000);
// const t1 = new Car("abc", "xyz", 5500000);
// console.log(t1);
// console.log(c1);




class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const u1=new Person("Ram",40)