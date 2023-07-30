let myVar = 13;

//<= >= !=

// if (myVar == 9) {
//   return console.log("yes");
// }
// console.log("else");

const button = document.querySelector("button");
const input = document.querySelector(".age");

button.onclick = () => {
  let num = +input.value;
  if (num >= 16 && num < 70) {
    console.log("Welcome");
  } else if (num > 70) {
    console.log("bit du sicher?");
  } else {
    console.log("Du schaffst es nicht");
  }

  switch (num) {
    case 15:
      console.log("еще год потерпи!");
      break;
    case 16:
      console.log("ура можно!!!!");
      break;
    default:
      console.log("oooook!");
  }
};
