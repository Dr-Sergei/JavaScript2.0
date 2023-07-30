// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read
// method: GET

// Результат - объект со списком сотрудников. Выведите в out-1 возраст сотрудников через пробел.
// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f1() {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  let res = await fetch(URL + "/api/26/employee/read", {
    method: "GET",
    headers: requestHeaders,
  });

  console.log(res);

  const result = await res.json();

  console.log(result);

  let out1 = "";
  for (let key in result.result) {
    out1 += result.result[key].age + " ";
  }
  document.querySelector(".out-1").innerHTML = out1;
}

document.querySelector(".b-1").addEventListener("click", f1);

// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read?id=3
// method: GET
// в качестве query параметра задайте id равный числу из input .i-2

// Результат - объект с описанием сотрудника. Выведите в out-2 email полученного сотрудника.

async function f2() {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  let i2 = document.querySelector(".i-2");

  const data = new URLSearchParams();
  data.append("id", i2.value);

  const res = await fetch(URL + "/api/26/employee/read?" + data, {
    method: "GET",
    headers: requestHeaders,
  });

  console.log(res);

  const result = await res.json();

  console.log(result);

  document.querySelector(".out-2").innerHTML = result.result.email;
}

document.querySelector(".b-2").onclick = f2;

// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// /api/26/employee/read/5
// method: POST
// число 5 получите из input .i-3

// Результат - объект с описанием сотрудника. Выведите в out-3 name полученного сотрудника.

async function f3() {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  let i3 = document.querySelector(".i-3");

  const res = await fetch(URL + "/api/26/employee/read/" + i3.value, {
    method: "POST",
    headers: requestHeaders,
  });

  const result = await res.json();

  console.log(result);

  document.querySelector(".out-3").innerHTML = result.result.name;
}

document.querySelector(".b-3").onclick = f3;

// Task 4.
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read
// method: POST

// Результат - объект с описанием рас игры КР. Выведите в out-4 название рас (title) через пробел.

async function f4() {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  const res = await fetch(URL + "/api/26/sr/read", {
    method: "POST",
    headers: requestHeaders,
  });

  const result = await res.json();
  console.log(result);

  let out4 = "";
  for (let key in result.result) {
    out4 += result.result[key].race + " ";
  }
  document.querySelector(".out-4").innerHTML = out4;
}

document.querySelector(".b-4").onclick = f4;

// Task 5.
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read?race=gaal
// method: GET
// где gaal - название расы полученное из select .s-5

// Результат - объект с описанием указанной расы. Выведите в out-5 описание расы (description). Вывод осуществляйте через innerHTML.

async function f5() {
  let racesArr = document.querySelectorAll(".s-5>option");
  let race = "";

  for (let key in racesArr) {
    // console.log(racesArr[key].value);
    if (racesArr[key].selected) {
      race = racesArr[key].value;
    }
  }
  const data = new URLSearchParams();
  data.append("race", race);

  const res = await fetch(URL + "/api/26/sr/read?" + data, {
    method: "GET",
    headers: requestHeaders,
  });

  const result = await res.json();
  console.log(result);

  document.querySelector(".out-5").innerHTML = result.result.description;
}

document.querySelector(".b-5").onclick = f5;

// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/run
// method: GET
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status

async function f6() {
  const res = await fetch(URL + "/api/26/run", {
    method: "GET",
    headers: requestHeaders,
  });
  console.log(res);
  document.querySelector(".out-6-status").innerHTML = res.status;
}

document.querySelector(".b-6").onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read/human
// method: POST
// human - название расы из select .s-7

// Результат - объект с описанием указанной расы. Выведите в out-7 изображение расы. Картинку формируйте через createElement.
// В начале функции делайте очистку .out-7.

async function f7() {
  let racesArr = document.querySelectorAll(".s-7>option");
  let race = "";

  for (let key in racesArr) {
    if (racesArr[key].selected) {
      race = racesArr[key].value;
    }
  }

  const res = await fetch(URL + "/api/26/sr/read/" + race, {
    method: "POST",
    headers: requestHeaders,
  });

  const result = await res.json();
  console.log(result);

  let out7 = document.querySelector(".out-7");
  out7.innerHTML = "";
  let img = document.createElement("img");
  img.src = URL + result.result.image;
  out7.appendChild(img);
}

document.querySelector(".b-7").onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: GET
// если запрос отправлен верно, то будет получен объект со случайным числом
// выведите в .out-8 данное число.

async function f8() {
  const res = await fetch(URL + "/api/26/random/random-number", {
    method: "GET",
    headers: requestHeaders,
  });

  const result = await res.json();
  console.log(result);

  let rn = "random-number";
  document.querySelector(".out-8").innerHTML = result[rn];
}

document.querySelector(".b-8").onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number?min=100&max=110
// method: GET
// где min - число из переменной min. Max - число из переменной max.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-9

let min = 400;
let max = 500;

async function f9() {
  const data = new URLSearchParams();
  data.append("min", min);
  data.append("max", max);

  const res = await fetch(URL + "/api/26/random/random-number?" + data, {
    method: "GET",
    headers: requestHeaders,
  });

  const result = await res.json();
  console.log(result);

  let rn = "random-number";
  document.querySelector(".out-9").innerHTML = result[rn];
}

document.querySelector(".b-9").onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: POST
// в теле POST запроса передайте параметры min равные переменной min и max равное переменной max. Формат - formdata.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-10

async function f10() {
  const formData = new FormData();
  formData.append("min", min);
  formData.append("max", max);

  const res = await fetch(URL + "/api/26/random/random-number?", {
    method: "POST",
    headers: requestHeaders,
    body: formData,
  });

  const result = await res.json();
  console.log(result);

  let rn = "random-number";
  document.querySelector(".out-10").innerHTML = result[rn];
}

document.querySelector(".b-10").onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-string?length=16
// method: GET
// Значение длины строки получаем из input .i-11

// Если запрос сделан правильно, то сервер возвратит объект с строкой случайных символов длиной 16.
// Выведите строку в .out-11

async function f11() {
  let i11 = document.querySelector(".i-11");

  const data = new URLSearchParams();
  data.append("length", i11.value);

  const res = await fetch(URL + "/api/26/random/random-string?" + data, {
    method: "GET",
    headers: requestHeaders,
  });

  const result = await res.json();
  console.log(result);

  let rs = "random-string";
  document.querySelector(".out-11").innerHTML = result[rs];
}

document.querySelector(".b-11").onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data)
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.

async function f12() {
  let i12 = document.querySelector(".i-12");
  let ch12 = document.querySelector(".ch-12");

  const formData = new FormData();
  formData.append("length", i12.value);

  if (ch12.checked) {
    // console.log(true);
    formData.append("symbols", 1);
  }

  const res = await fetch(URL + "/api/26/random/generate-password", {
    method: "POST",
    headers: requestHeaders,
    body: formData,
  });

  const result = await res.json();
  console.log(result);

  document.querySelector(".out-12").innerHTML = result.password;
}

document.querySelector(".b-12").onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data)
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.

// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f13() {
  let i13 = document.querySelector(".i-13");
  let ch13 = document.querySelector(".ch-131");
  let up13 = document.querySelector(".ch-132");

  const formData = new FormData();
  formData.append("length", i13.value);

  if (ch13.checked) {
    // console.log(true);
    formData.append("symbols", 1);
  }
  if (up13.checked) {
    // console.log(true);
    formData.append("uppercase", 1);
  }

  const res = await fetch(URL + "/api/26/random/generate-password", {
    method: "POST",
    headers: requestHeaders,
    body: formData,
  });

  const result = await res.json();
  console.log(result);

  document.querySelector(".out-13").innerHTML = result.password;
}

document.querySelector(".b-13").onclick = f13;

// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world
// method: GET
// если все сделано верно, то получите объект с описанием миров игры GoW
// выведите в .out-14 title миров через пробел.

async function f14() {
  const res = await fetch(URL + "/api/26/gow/world", {
    method: "GET",
    headers: requestHeaders,
  });

  const result = await res.json();
  console.log(result);

  let out14 = "";
  for (let key in result.worlds) {
    out14 += result.worlds[key].title + " ";
  }
  document.querySelector(".out-14").innerHTML = out14;
}

document.querySelector(".b-14").onclick = f14;

// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-15
// выведите описание мира (description) в out-15

async function f15() {
  const worldsArr = document.querySelectorAll(".s-15>option");
  let world = "";
  for (let key in worldsArr) {
    if (worldsArr[key].selected) {
      world = worldsArr[key].value;
    }
  }

  const res = await fetch(URL + "/api/26/gow/world/" + world, {
    method: "GET",
    headers: requestHeaders,
  });

  const result = await res.json();

  console.log(result);

  document.querySelector(".out-15").innerHTML = result.world.description;
}

document.querySelector(".b-15").onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/governor/сурт
// method: GET
// имя правителя - получите из select .s-16
// если все сделано верно, то получите объект с описанием мира где правитель Сурт игры GoW.
// выведите в .out-16 руну данного мира. Как изображение (createElement). Очищайте out-16 в начале функции.

async function f16() {
  const rulersArr = document.querySelectorAll(".s-16>option");
  let ruler = "";

  for (let key in rulersArr) {
    if (rulersArr[key].selected) {
      ruler = rulersArr[key].value;
    }
  }

  const res = await fetch(URL + "/api/26/gow/governor/" + ruler, {
    method: "GET",
    headers: requestHeaders,
  });

  const result = await res.json();

  console.log(result);

  let out16 = document.querySelector(".out-16");
  out16.innerHTML = "";
  let img = document.createElement("img");
  img.src = URL + result.world.rune;
  out16.appendChild(img);
}

document.querySelector(".b-16").onclick = f16;

// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/get-time
// method: POST
// если все сделано верно, то получите объект с текущим временем сервера.
// выведите в .out-17 время в формате час:минуты

async function f17() {
  const res = await fetch(URL + "/api/26/get-time", {
    method: "POST",
    headers: requestHeaders,
  });

  const result = await res.json();

  console.log(result);

  document.querySelector(".out-17").innerHTML =
    result.time.h + ":" + result.time.m;
}

document.querySelector(".b-17").onclick = f17;

// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/rune
// method: POST
// если все сделано верно, то получите объект с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира.
// выполните очистку .out-18 в начале функции

async function f18() {
  const res = await fetch(URL + "/api/26/gow/rune", {
    method: "POST",
    headers: requestHeaders,
  });

  const result = await res.json();

  console.log(result);

  let out18 = document.querySelector(".out-18");
  out18.innerHTML = "";
  for (let key in result.rune) {
    console.log(key);
    let img = document.createElement("img");
    img.src = URL + result.rune[key];
    img.alt = key;
    console.log(img);
    out18.appendChild(img);
  }
}

document.querySelector(".b-18").onclick = f18;
