document.querySelector(".one").onclick = function (s) {
  console.log(s);
  console.log("click1");
};

// document.querySelector(".two").onclick = function () {
//   console.log("click2");
// };

// DOBLE CLICK
document.querySelector(".two").ondblclick = () => {
  console.log("double click");
};

// ON CONTEXT MENU
document.querySelector(".two").oncontextmenu = () => {
  console.log("right button"); // ВЫВОДИТ КОНСОЛЬ ЛОГ И ОПЦИИ ПРАВОЙ КНОПКИ МЫШИ
  return false; // предотвращает вызов меню правой кнопки мыши
};

// ON MOUSE MOVE
// let w = 75;
// document.querySelector(".three").onmousemove = (e) => {
//   document.querySelector(".three").innerHTML =
//     e.srcElement.firstChild.data + "<br>" + e.clientX;
//   console.log(e.clientX);
//   document.querySelector(".three").style.width = w + "px";
//   w++;
// };

// ON MOUSE ENTER
document.querySelector(".three").onmouseenter = () => {
  document.querySelector(".three").style.backgroundColor = "green";
};

// ON MOUSE LEAVE
document.querySelector(".three").onmouseleave = () => {
  document.querySelector(".three").style.backgroundColor = "white";
};

// ON MOUSE DOWN
document.querySelector(".three").onmousedown = () => {
  document.querySelector(".three").style.backgroundColor = "orange";
};

// ON MOUSE up
document.querySelector(".three").onmouseup = () => {
  document.querySelector(".three").style.backgroundColor = "blue";
};

// PROGRESSBAR
let p = 10;
document.querySelector("button").onclick = () => {
  p = p + 10;
  document.querySelector("progress").value = p;
};

// STRELOCHNAJA FUNKTIOJA
// let count = 0;

// const increment = () => {
//   debugger;
//   count++;
//   console.log(count);
// };
// const timeFucnction = () => {
//   setTimeout(increment, 1000);
// };

// document.querySelector("#test").addEventListener("click", timeFucnction);

const a = [1, 2, 3, 4];

let b = a.map((elem) => elem * 3);

console.log(b);

function z(n) {
  if (n >= 0) {
    return n;
  } else {
    return 0;
  }
}
console.log(z(-3));
console.log(z(4));

const z2 = (n) => (n >= 0 ? n : 0);
console.log(z2(-3));
console.log(z2(4));

// OBJECT I STRELOCHNAJA
const c = [2, 3, 4, 5];
let d = c.map((item) => ({ num: item }));
console.log(d);

// LAST TRAI

document.querySelector("#test").addEventListener("click", () => {
  fetch("file.json")
    .then((res) => res.json())
    .then((file) => {
      file.forrEach((iten) => {
        console.log(item.name);
      });
    });
});
