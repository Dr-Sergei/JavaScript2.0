// SPLIT рзбивает стрниг на массив
let a = "hello, hi, mahai";
console.log(a.split(", "));
let b = a.split(", ");

// Join соединяет стрниг на массив

console.log(b.join(" - "));

// forEach переберает массив не создавая нового массива_ также не изменяет оригинального массива

let c = [1, 2, 3, 4];

c.forEach(function (elem, index) {
  console.log(elem, index);
});
