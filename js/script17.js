let a = [4, 5, 12, 2000, 1, 0, -2];

//Мтод МЭП ПЕРЕБИРАЕТ ВСЕ ЭЛЕМЕНТЫ МАССИВА И ВОЗВРАЩАЕТ ИХ

// #1
let b = a.map(function (item, index) {
  // console.log(item);
  return item;
});
// console.log(b);

// #2
// let b = a.map(function (item, index) {
//   console.log(index);
//   return index;
// });
// console.log(b);

// #3 Strelochnaja Funktija
// let b = a.map((item) => item * 5);
// console.log(b);

//МЕТОД ФИЛТЕР ПЕРЕБИРАЕТ ЭЛЕМЕНТЫ МАССИВА И ВЫБИРАЕТ ПОДХОДЯЩИЕ ПОД ПОСТАВЛЕННОЕ УСЛОВИЕ

// #1
// let c = a.filter(function (item, index) {
//   // return false; пустой массив// true - идентичный массив
//   if (item % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(c);

// #2
let c = a.filter(function (item, index) {
  // return false; пустой массив// true - идентичный массив
  if (item > 0) {
    return true;
  } else {
    return false;
  }
});
console.log(c);
