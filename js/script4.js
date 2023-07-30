// document.querySelector("button").onclick = () => {
//   console.log(document.querySelector("#one").value);
//   //style
//   document.querySelector("button").style.backgroundColor =
//     document.querySelector("#one").value;
// };
// document.querySelector("#one").oninput = () => {
//   console.log(document.querySelector("#one").value);
//   document.querySelector("span").innerHTML =
//     document.querySelector("#one").value;
// };
document.querySelector("#btn-1").onclick = () => {
  let myChekBox = document.querySelector("#i2");
  console.log(myChekBox.value);
  console.log(myChekBox.checked);
  if (myChekBox.checked) {
    console.log("Нажат");
  } else {
    console.log("Не нажат");
  }
};

document.querySelector("#btn-2").onclick = (event) => {
  event.preventDefault();
  //   let text = document.querySelector("#two");
  //   console.log(text.value);
  //   text.value = "one";

  let form = document.querySelector("form");
  console.log(form);
  console.log(form.elements.two.value);
  console.log(form.elements.three.value);
};
