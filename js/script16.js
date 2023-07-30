let arr = [4, 7, 9];
let allP = document.getElementsByTagName("p");
let qP = document.querySelectorAll("p");
console.log(arr);
console.log(allP);
console.log(qP);
// console.log(allP[1]);
// console.log(allP.length);

// СПОСОБО НОМЕР 1==========================================
// for (let i = 0; i < qP.length; i++) {
//   console.log(qP[i]);
// }

// СПОСОБО НОМЕР 2==========================================
// for (let key in qP) {
//   console.log(qP[key]); //ЗДЕСЬ КЛЮЧАМИ ПАДАЮТ ИНДЕКСЫ 0,1,2 KEY
// }

// // СПОСОБО НОМЕР 3==========================================
for (let item of qP) {
  console.log(item); //А ЗДЕСЬ КЛЮЧАМИ ПАДАЮТ ЗНАЧЕНИЯ!!!! 4,7,9 ITEM
}

// СПОСОБО НОМЕР 4==========================================
