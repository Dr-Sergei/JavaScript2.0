const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "c342a95280084b1f2dc45fad0f14b2ed",
  cityId: 703448,
};

async function getWeather() {
  let a = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=703448&appid=c342a95280084b1f2dc45fad0f14b2ed`
  );
  console.log(a);
  const result = await a.json();
  console.log(result);
}

// getWeather();

async function f1() {
  //создаем объект заголовков
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  const res = await fetch(URL + "api/26/employee/read", {
    method: "GET",
    headers: requestHeaders,
  });

  // if (!res.ok) {
  //   const message = "Error: " + res.status;
  //   throw new Error(message);
  // }
  const result = await res.json();
  console.log(result);
}
// f1();

async function f2() {
  //создаем объект заголовков
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  const formData = new FormData();
  formData.append("length", 16);
  formData.append("symbols", 1);

  const res = await fetch(URL + "api/26/random/generate-password", {
    method: "POST",
    headers: requestHeaders,
    body: formData,
  });

  const result = await res.json();
  console.log(result);
}

f2();
