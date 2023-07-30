let f1 = document.querySelector(".f1");

function one() {
  console.log("work");
}

one(); // 1 method

f1.onclick = one; // 2. method

// document.querySelector("#out").innerHTML = "kukui ti kuda";

console.log(1 + one()); //NaN тк к числу 1 прибавляется стринг work
console.log(one()); //возращает work и undefind,тк функции one не возвращается никакое значение

function two() {
  console.log("work 2222");
  return 54;
}
two(); //work 2222

console.log(1 + two()); // work 2222 и 55
console.log(two()); //а здесь work 2222 и 54, тк это значение возвращается функии посредством return

//Использование функции в выражении

let a = 8;
let b = 9;

function multi() {
  return a * b;
}

let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

//многократное использование кода !!!!!!!!!!!!!!!!!!!
function multi2(x, y) {
  return x * y;
  //после return функция работать не будет
}

multi2(6, 6); //если вызывать так то ничего не будет выведенео в лог
console.log(multi2(4, 5));
console.log(multi2(20, 5));
console.log(multi2(20, a));

//anonyme Functionen

let f2 = document.querySelector(".f2");
f2.onclick = () => {
  console.log("amomym");
};

(a, b) => {};
(a) => {};

//with return
(a) => "hello";
