// let a = "Иван";
// let b = "37";
// let z7 = "Овен";

// let c = ["Иван", 37, "Овен"];
// let d = [];
// console.log(c[0]);
// console.log(c[1]);
// console.log(c[5]);
// console.log(c);
// console.log(c.length);

// a = "Ivan";
// let b67 = 43;
// let iinNumber = 2324;

// let zodiak = ["Kozerog", 1, 1, 19];
// let man = ["ivan", "male", 176, 93, "Ivanov"];
// console.log(zodiak.length);
// console.log(man.length);
// console.log(man[1]);
// man[0] = "Sergei";
// console.log(man);

let a = [1, 2, 3, 4];
console.log(a);

// let t = a[0];
// a[0] = a[3];
// a[3] = t;
// console.log(a);

let t = a[0];
a[0] = a[a.length - 1];
a[a.length - 1] = t;
console.log(a);
console.log[888]; //undefined

//Ausgabe Arrays
//1. Variante

let out = "";
for (i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) out += a[i] + "_ _";
}

document.querySelector(".out-1").innerHTML += out;

//нахождение максимума
let b = [0, 0, 8, 2, 10, -5];
let max = b[0];
for (i = 0; i < b.length; i++) {
  if (b[i] > max) {
    max = b[i];
  }
}
console.log("max:" + max);

// сумма массива
let sum = 0;
let k = 0;
while (k < b.length) {
  sum += b[k];
  k++;
}
console.log("sum:" + sum);
