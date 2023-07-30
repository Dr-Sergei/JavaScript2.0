//Beispiel СОБЫТИЯ ИНПУТА ONCHANGE ONINPUT
// document.querySelector(".i-1").oninput = (event) => {
//   console.log(event);
// };

// CОБЫТИЯ КЛАВИАТУРЫ
document.querySelector(".i-1").onkeypress = (event) => {
  //   //sehr wichtige Erreignisse:
  console.log("========keypress========");
  console.log("charCode: " + event.charCode);
  console.log("code: " + event.code);
  console.log("keyCode: " + event.keyCode);
  console.log("key: " + event.key);
  console.log("=======================");

  // console.log(event);
};
// ОТ 48 ДО 57 ЭТО ЦИФРЫ

// СОБЫТИЕ НАЖАЛИ КЛАВИШУ
document.querySelector(".i-1").onkeydown = (event) => {
  //sehr wichtige Erreignisse:
  console.log("========keydown========");
  console.log("charCode: " + event.charCode);
  console.log("code: " + event.code);
  console.log("keyCode: " + event.keyCode);
  console.log("key: " + event.key);
  console.log("=======================");

  // console.log(event);
  if (event.key == "CapsLock") {
    document.querySelector(".ch-1").checked = true;
  } else {
    document.querySelector(".ch-1").checked = false;
  }
};

//СОБЫТИЕ ОТПУСТИЛИ КЛАВИШУ
document.querySelector(".i-1").onkeyup = (event) => {
  //sehr wichtige Erreignisse:
  console.log("========keyup========");
  console.log("charCode: " + event.charCode);
  console.log("code: " + event.code);
  console.log("keyCode: " + event.keyCode);
  console.log("key: " + event.key);
  console.log("=======================");
};

// CОБЫТИЯ КЛАВИАТУРЫ ДЛЯ ДОМАШКИ
document.querySelector(".i-2").onkeypress = (event) => {
  //   //sehr wichtige Erreignisse:
  console.log("========keypress i-2========");
  console.log("charCode: " + event.charCode);
  console.log("code: " + event.code);
  console.log("keyCode: " + event.keyCode);
  console.log("key: " + event.key);
  console.log("=======================");

  // console.log(event);
  const a = {
    q: "w",
    w: "e",
  };

  document.querySelector(".i-2").value = a[event.key];

  return false;
};

// ============================
// let out = "";

let word = "Hallo Timo, ich AI begrüße dich!";
let arr = word.split("");
let out = document.querySelector(".out h1");
console.log(out.innerHTML);

function b12() {
  out.innerHTML = "";
  arr.forEach((element, index) => {
    setTimeout(() => {
      out.innerHTML += element;
    }, index * 90);
  });
}
document.querySelector("button").onclick = b12;
