// console.log("This is Dom ");
// dom =document object model
// V8-dom
// document = {
//   html: {
//     head: {
//       title: "Dom",
//     },
//     body: {
//       div: "        This is Dom class !",
//     },
//   },
// };
// document.html.head.title="Js"
// js  - it can modified html and css
// console.log(document)
//  selectors in js
//  class , Id , tag , query
// let tags=document.getElementsByTagName("h1")
// console.log(tags)
// console.log(tags[0].textContent)
// console.log(tags[1].textContent)
// let divs=document.getElementsByClassName("box")
// console.log(divs)
// let first=document.getElementById("first")
// console.log(first.innerText)

// let tags=document.querySelector('.box')
// let tags=document.querySelectorAll('.box')
// let tags=document.querySelector('#first')
// console.log(tags)

// let tags = document.querySelector("#first");
// innerHtml
// TextContent
// console.log(tags.innerHTML)
// console.log(tags.textContent)
// tags.textContent = "Hello this is html and  css  class ";
// tags.innerHTML = "  <h1>   Hello this is html and  css  class </h1> ";

// let empty = document.getElementById("empty");
// let h1 = document.createElement("h1");
// h1.textContent = "This is from js ";
// empty.appendChild(h1);
// console.log(empty);
// empty.style.border="2px solid black"
// empty.style.height="200px"
// empty.style.width="200px"
// empty.style.padding="10px"
// empty.style.backgroundColor="black"
// empty.style.color="white"
// empty.style.borderRadius="50%"
// empty.classList.add("Js_class")
// empty.classList.remove("Js_class")
// console.log(empty);
// Event
// event Handler  and event listener
// event Handler
// function myFunction(){
//     console.log("myFunction")
// }
//  event listener
// const btn = document.getElementById("btn");
// console.log(btn);
// btn.addEventListener("click", () => {
//   console.log("Hi  this  is EventListener  ! ");
// });
// btn.addEventListener("mouseover", () => {
//   console.log("Hi  this  is mouseover  ! ");
// });
// btn.addEventListener("mouseout", () => {
//   console.log("Hi  this  is mouseout  ! ");
// });
// btn.addEventListener("dblclick", () => {
//   console.log("Hi  this  is dblclick  ! ");
// });
// btn.addEventListener("click", () => {
//   console.log("Hi  this  is  second EventListener  ! ");
// });
// btn.removeEventListener("click",()=>{})