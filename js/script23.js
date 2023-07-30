//отслеживание событий ADDEVENTLISTENER
window.addEventListener("storage", function (e) {
  console.log("change");
  document.querySelector(".out").innerHTML = localStorage.getItem("b1");
});

// отчистка локал сторадж

localStorage.setItem("data", 5); //закинуть в локал сторадж
console.log(localStorage.getItem("data")); // извлечь из локал сторадж

//работа с массивом
const a = [3, 4, 5];
localStorage.setItem("a", JSON.stringify(a));
let b = localStorage.getItem("a");
b = JSON.parse(b);
console.log(b);
console.log(b[1]);
console.log(typeof b);

//работа с ассоциативным массивом
const c = { name: "sergei", sex: "male", age: 25 };
localStorage.setItem("c", JSON.stringify(c));
let d = localStorage.getItem("c");
d = JSON.parse(d);

console.log(d);
console.log(d.age);
console.log(typeof d);
