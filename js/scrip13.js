const a = {
  a: 5,
  b: "hello",
  z2: "hi",
  y43: 1999,
  "villa de": 3040,
};
a.yyy = 5555;
a.b = "uuu";
delete a.a;
console.log(a);
console.log(a.z2);
let k = "y43";
console.log(a[k]); //1999

// document.querySelector(".out").innerHTML = a; этот способ к сожалению не работает с объектами(ассоциативным массивами)

let out = "";
for (let key in a) {
  out += key + " --- " + a[key] + "<br>";
}
document.querySelector(".out-1").innerHTML = out;
