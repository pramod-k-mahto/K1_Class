// const btn = document.getElementById("btn");
// const text = document.getElementById("text");
// let isTrue = true;
// btn.addEventListener("click", () => {
//   if (isTrue) {
//     text.style.backgroundColor = "black";
//     text.style.color = "white";
//     btn.textContent = "Change Color  to white";
//     isTrue = false;
//   } else {
//     text.style.backgroundColor = "white";
//     text.style.color = "black";
//     btn.textContent = "Change Color  to black";
//     isTrue = true;
//   }
// });

const btn = document.getElementById("btn");
const extra = document.getElementById("extra");
let isTrue = true;
btn.addEventListener("click", () => {
  if (isTrue) {
    extra.style.display = "inline";
    btn.textContent = "Show Less";
    isTrue = false;
  } else {
    extra.style.display = "none";
    btn.textContent = "Show More";
    isTrue = true;
  }
});
