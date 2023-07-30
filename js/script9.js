const one = document.querySelector(".one");

one.style.width = "150px";
one.style.paddingBottom = "40px";

// console.log(one.style);

one.classList.add("two", "three");

one.classList.remove("three");
const toggle = document.querySelector(".toggle");

toggle.onclick = function () {
  this.classList.toggle("three");
};

//атрибуты требует приставки data
console.log(one.getAttribute("data"));
//fals mehrere element link mit dem Atribut href gibt, dann behandeln wie ein Array
// console.log(document.querySelectorAll("link")[1].getAttribute("href"));
console.log(document.querySelector("link").getAttribute("href"));
//            Atributsname , Value
//     (mit data am Anfang)
one.setAttribute("data-num", 6);

let gas = document.querySelectorAll(".gas");
console.log(gas);
for (let i = 0; i < gas.length; i++) {
  gas[i].onclick = function () {
    let gallons = document.querySelector(".gallons").value;
    //         this-> Knopf welches wird gedrückt
    let amount = this.getAttribute("data");
    console.log(gallons * amount);
  };
}

let a = document.createElement("div");
a.innerHTML = "Hello";
a.classList.add("one");
a.onclick = function () {
  alert("Hello");
};

document.querySelector(".test").appendChild(a);
