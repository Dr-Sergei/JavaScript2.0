fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=Halle,DE&appid=c342a95280084b1f2dc45fad0f14b2ed"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".package-name").innerHTML = data.name;
    document.querySelector(".price").innerHTML =
      Math.round(data.main.temp - 273.15) + " &deg";

    document.querySelector(".disclaimer").innerHTML =
      data.weather[0]["description"];
    //https://openweathermap.org/img/wn/02d@2x.png
    document.querySelector(
      ".features li"
    ).innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png'>`;
  });
// .catch(function(){
//   //cath any errors
// })
