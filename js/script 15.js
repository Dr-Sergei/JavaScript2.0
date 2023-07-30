let a = new Set();
a.add(2);
a.add(3);
a.add("Sergei");
a.add(2);
a.add("2");
// a.clear(); очищает массив полностью
// a.delete("Sergei"); удаляет один элемент

console.log(a);
console.log(a[0]); //!!! Besonderheiten von Set!!!---> a[0] ->>undefined
console.log(a.length); ///!!!!!!!no--> undefined
console.log(a.size); // кол.во эеленетов 4

//проверяем наличие
console.log(a.has(2)); //true
console.log(a.has("2")); //true
console.log(a.has("фиы")); //false

//как перебирать такой массив?? -->> новый цикл
for (let item of a) {
  console.log(item);
}

let arr = [1, 2, 3, 1, 4, 5, "hello", 5, 3, 1];

let b = new Set(arr); //!!!
console.log(b);
console.log(b.size);

//Приобразоание Set in Array
let bArr = Array.from(b);
console.log(bArr);
