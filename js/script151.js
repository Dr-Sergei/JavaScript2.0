let a = new Set();
a.add(1);
a.add(2);
a.add("Hello");
a.add("1"); //=== Proverka strogaja

// a.clear(); //Removes everething from array
// a.delete("Hello"); //Removes an element

console.log(a);
console.log(a[0]); //!!!! NO Besonderheit von SET das funktioniert nicht
console.log(a.length); //!!! auch nicht
console.log(a.size);
console.log(a.has("gello")); //false  Proverka nalichia Elementa wnutri Nabora
console.log(a.has("Hello")); //true

//for(let=0;i<a.size;i++){ a[i]} //Ne rabotaet

// for (let i in a) { console.log(i)}// Ne rabotaet

for (let item of a) {
  console.log("hier ist elemnet: " + item);
}

// Praktika

let arr = [1, 2, 3, 1, 4, 5, "hello", 5, 1, 3];

let b = new Set(arr);
console.log(b);
console.log(b.size);

//Preobrazovanie w Arr

let bArr = Array.from(b);
console.log(bArr);
