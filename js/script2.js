let inputIN = document.querySelector(".input-in");
let button = document.querySelector("button");
let div = document.querySelector(".out");

button.onclick = function () {
  console.log("rabotaet");
  //   console.log(inputIN.value); // value das ist was als input eingegeben
  let b = +inputIN.value; //plusik delaet stroku chislom
  console.log(b + 22);
  div.innerHTML = b;
  inputIN.value = ""; //otcheschaet stroku
};
