//Создание секции с 4 городами и добавление его к элементу DIV и создание переменной для вызова ID города
let section = document.createElement("select");
const opt1 = document.createElement("option");
opt1.append("London");
opt1.value = 6058560;
const opt2 = document.createElement("option");
opt2.append("Minsk");
opt2.setAttribute("value", 625144);
const opt3 = document.createElement("option");
opt3.text = "Gdansk";
opt3.value = 3099434;
const opt4 = document.createElement("option");
opt4.append("Kyiv");
opt4.setAttribute("value", 703448);

section.append("", opt1, opt2, opt3, opt4);
console.log(section.value);
let div = document.querySelector(".weather");
div.prepend(section);

//создание функии getWeather()
let button = document.querySelector(".primary");

function getWeather() {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${section.value}&appid=c342a95280084b1f2dc45fad0f14b2ed`
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      console.log(data);
      document.querySelector(".name").innerText = data.name;
      document.querySelector(".temperature").innerText =
        Math.round(data.main.temp - 273.15) + "°C";
      document.querySelector(".disclaimer").innerHTML =
        data.weather[0].description;
      document.querySelector(".wind").innerHTML = "wind deg: " + data.wind.deg;
      document.querySelector(".speed").innerHTML =
        "wind speed: " + data.wind.speed + " m/s";
      document.querySelector(".pressure").innerHTML =
        "pressure: " + data.main.pressure + " mmHg";
      document.querySelector(
        ".features"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    });
}
button.onclick = () => {
  getWeather(section.value);
};

window.onload = function showWeather() {
  getWeather();
};
