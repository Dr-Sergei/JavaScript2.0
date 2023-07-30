// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-string
// method: GET
// Ответ сервера (строку случайных символов) - выводит в .out-1

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f1() {
  //1. создаем объект запроса

  const xhr = new XMLHttpRequest();

  //2. задаем метод, URL, конфигурируем

  xhr.open("GET", URL + "/api/25/random/random-string");
  xhr.setRequestHeader("apikey", APIKEY);

  //3.обрабатываем ответ от сервера

  xhr.onload = function () {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
    let key = "random-string";
    document.querySelector(".out-1").innerHTML = data[key];
  };

  //4. посылаем запрос

  xhr.send();
}

document.querySelector(".b-1").addEventListener("click", f1);

// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-string
// method: GET
// в качестве query параметра задайте length равный числу из input .i-2
// Ответ сервера (строку случайных символов длиной length) - выводите в .out-2

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f2() {
  // 1. создаем объект запроса

  const xhr = new XMLHttpRequest();

  //2. задаем метод, ЮРЛ, конфигурацию
  let i2 = document.querySelector(".i-2");

  const data = new URLSearchParams();
  data.append("length", i2.value);

  xhr.open("GET", URL + "/api/25/random/random-string" + "?" + data);
  xhr.setRequestHeader("apikey", APIKEY);

  //3. обрабатыываем ответ от сервера

  xhr.onload = function () {
    console.log(xhr.status);
    // console.log(xhr.response);
    let data = JSON.parse(xhr.response);
    let key = "random-string";
    document.querySelector(".out-2").innerHTML = data["random-string"];
  };

  //4. посылаем запрос

  xhr.send();
}

document.querySelector(".b-2").onclick = f2;

// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: POST
// если запрос отправлен верно, то будет получен массив с описаниями рас игры "Космические рейнджеры"
// выведите в .out-3 названия рас (race) через пробел.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f3() {
  //1. создаем объект запроса
  const xhr = new XMLHttpRequest();

  //2. задаем метод, ЮРЛ, конфигурацию
  xhr.open("POST", URL + "/api/25/sr/read");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. обрабатываем ответ от сервера
  xhr.onload = () => {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
    let out = "";
    for (let i = 0; i < data.result.length; i++) {
      out += data.result[i].race + " ";
    }
    document.querySelector(".out-3").innerHTML = out;
  };

  //4. отправляем запрос
  xhr.send();
}

document.querySelector(".b-3").onclick = f3;

// Task 4.
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-number
// method: GET
// укажите параметры запроса min = переменной min, max равное переменной max
// если запрос отправлен верно, то будет получен массив c случайным числом от min до max
// выведите в .out-4 полученное число.

// не забывайте для авторизации отправлять apikey с указанным ключом.

let min = 1000;
let max = 1150;

function f4() {
  //1. создаем объект запроса
  const xhr = new XMLHttpRequest();

  //2. задаем метод, ЮРЛ, конфигурацию
  const data = new URLSearchParams();
  data.append("min", min);
  data.append("max", max);

  xhr.open("GET", URL + "/api/25/random/random-number" + "?" + data);
  xhr.setRequestHeader("apikey", APIKEY);

  //3. обрабатываем ответ от сервера
  xhr.onload = () => {
    console.log(xhr.status);
    console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    let key = "random-number";
    document.querySelector(".out-4").innerHTML = data[key];
  };

  //4. отправляем запрос
  xhr.send();
}

document.querySelector(".b-4").onclick = f4;

// Task 5.
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/random-number
// method: POST
// укажите параметры в body POST запроса min = переменной min, max равное переменной max, формат - form-data.
// если запрос отправлен верно, то будет получен массив c случайным числом от min до max
// выведите в .out-5 полученное число.

function f5() {
  //1. objekt zaprosa
  const xhr = new XMLHttpRequest();

  //2. zadaem method, url i konfiguraziju
  const data = new FormData();
  data.append("min", min);
  data.append("max", max);

  xhr.open("POST", URL + "/api/25/random/random-number");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. obrabotka otweta s servera
  xhr.onload = () => {
    console.log(xhr.status);
    console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
    let key = "random-number";
    document.querySelector(".out-5").innerHTML = data[key];
  };

  //4. otprawka
  xhr.send(data);
}

document.querySelector(".b-5").onclick = f5;

// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/circle
// method: POST
// без аргументов
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status
// выведите сообщение ответа сервера в out-6-response

function f6() {
  //1. создаем объект запроса
  const xhr = new XMLHttpRequest();

  //2. создаем метод и конфигурируем
  xhr.open("POST", URL + "/api/25/random/circle");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. как обрабатываем ответ от сервера
  xhr.onreadystatechange = () => {
    console.log(xhr.status);
    console.log(xhr.response);
    document.querySelector(".out-6-status").innerHTML = xhr.status;
    document.querySelector(".out-6-response").innerHTML = xhr.response;
  };
  //4. послыаем запрос
  xhr.send();
}

document.querySelector(".b-6").onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: GET
// укажите параметр запроса race = переменной requestRace
// если запрос отправлен верно, то будет получен массив c описанием расы гаальцев из игры "Космические рейнджеры"
// выведите в .out-7 изображение image расы. Для этого создайте image и присвойте src ссылку на изображение.
// В начале функции делайте очистку .out-7

// не забывайте для авторизации отправлять apikey с указанным ключом.

let requestRace = "gaal";

function f7() {
  //1. создаем объект запроса
  const xhr = new XMLHttpRequest();

  //2. Задаем метод юрл и конфигурацию
  const data = new URLSearchParams();
  data.append("race", requestRace);

  xhr.open("GET", URL + "/api/25/sr/read" + "?" + data);
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Как будем обрабатывать ответ от сервера
  xhr.onload = () => {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);

    let out7 = document.querySelector(".out-7");
    out7.innerHTML = "";
    let srcImg = data.result.image;
    let img = out7.appendChild(document.createElement("img"));
    img.setAttribute("src", URL + srcImg);
  };

  //4. Посылаем запрос
  xhr.send();
}

document.querySelector(".b-7").onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read
// method: POST
// без параметров
// если запрос отправлен верно, то будет получен массив сотрудников компании.
// выведите в .out-8 число сотрудников компании itemCount.

function f8() {
  //1. создаем объект запроса
  const xhr = new XMLHttpRequest();

  //2. Задаем метод юрл и конфигурацию
  xhr.open("POST", URL + "/api/25/employee/read");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Как будем обрабатывать ответ от сервера
  xhr.onload = () => {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
    document.querySelector(".out-8").innerHTML = data.itemCount;
  };

  //4. Посылаем запрос
  xhr.send();
}

document.querySelector(".b-8").onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read/5
// method: POST
// где 5 - число считываемое из input .i-9. Понятно, что число может быть введено в input - любое.
// если запрос отправлен верно, то будет получен массив с описанием сотрудника компании с id = 5
// выведите обозначение (designation) сотрудника в .out-9

function f9() {
  //1. создаем объект запроса
  const xhr = new XMLHttpRequest();

  //2. Задаем метод юрл и конфигурацию
  let i9 = document.querySelector(".i-9");

  xhr.open("POST", URL + "/api/25/employee/read/");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Как будем обрабатывать ответ от сервера
  xhr.onload = () => {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    // console.log(data);
    document.querySelector(".out-9").innerHTML =
      data.result[i9.value].designation;
  };

  //4. Посылаем запрос
  xhr.send();
}

document.querySelector(".b-9").onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/employee/read/7
// method: GET
// если запрос отправлен верно, то будет получен массив данных сотрудника с id = 7
// число 7 получайте с input .i-10
// выведите в .out-10 возраст сотрудника, данные которого вы получили.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f10() {
  //1. создаем объект запроса
  const xhr = new XMLHttpRequest();

  //2. задаем метод, юрл и конфигурацию
  let i10 = document.querySelector(".i-10");
  const data = new URLSearchParams();
  data.append("id", i10.value);

  xhr.open("GET", URL + "/api/25/employee/read/" + "?" + data);
  xhr.setRequestHeader("apikey", APIKEY);

  //3. обрабатываем ответ от сервера

  xhr.onload = () => {
    console.log(xhr.status);
    console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
    document.querySelector(".out-10").innerHTML = data.result.age;
  };
  //4. посылаем запрос
  xhr.send();
}

document.querySelector(".b-10").onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-11 (form-data)
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине.
// выведите в .out-11 полученный пароль.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f11() {
  //1. sozdaem objekt zaprosa
  const xhr = new XMLHttpRequest();

  //2. Wibirajem Method, zademn URL i Konfiguraziju
  let i11 = document.querySelector(".i-11");
  const data = new FormData();
  data.append("length", i11.value);

  xhr.open("POST", URL + "/api/25/random/generate-password");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. obrabotka zaprosa s Serevera
  xhr.onload = () => {
    console.log(xhr.status);
    console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
    document.querySelector(".out-11").innerHTML = data.password;
  };

  //4. oprawlajem zapros
  xhr.send(data);
}

document.querySelector(".b-11").onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data)
// укажите в boyd POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f12() {
  //1. Objekt zaprosa
  const xhr = new XMLHttpRequest();

  //2. Method, URL Konfiguratija
  let i12 = document.querySelector(".i-12");
  const data = new FormData();
  data.append("length", i12.value);

  let ch12 = document.querySelector(".ch-12");

  if (ch12.checked) {
    data.append("symbols", true);
  }

  xhr.open("POST", URL + "/api/25/random/generate-password");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Obrabotka otweta servera
  xhr.onload = () => {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
    document.querySelector(".out-12").innerHTML = data.password;
  };

  //4. otprawka zaprosa
  xhr.send(data);
}

document.querySelector(".b-12").onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data)
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.

// не забывайте для авторизации отправлять apikey с указанным ключом.

function f13() {
  //1. zadaem Objekt zaprosa
  const xhr = new XMLHttpRequest();
  let i13 = document.querySelector(".i-13");
  let ch131 = document.querySelector(".ch-131");
  let ch132 = document.querySelector(".ch-132");

  //2. Method, URL Konfiguratija
  const data = new FormData();
  data.append("length", i13.value);

  if (ch131.checked) {
    data.append("symbols", ch131);
  }

  if (ch132.checked) {
    data.append("uppercase", ch132);
  }

  xhr.open("POST", URL + "/api/25/random/generate-password");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Obrabotka otweta s serwera
  xhr.onload = () => {
    console.log(xhr.status);
    const data = JSON.parse(xhr.response);
    console.log(data);
    document.querySelector(".out-13").innerHTML = data.password;
  };

  //4. Otprawka zaprosa
  xhr.send(data);
}

document.querySelector(".b-13").onclick = f13;

// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read/human
// method: GET
// human - аргумент (название расы), который получается из s-14.
// если все сделано верно, то получите массив с описанием расы из игры КР.
// выведите в .out-14 описание description расы (вывод через innerHTML)

function f14() {
  //1. zadaem Objekt zaprosa
  const xhr = new XMLHttpRequest();
  let s14 = document.querySelectorAll(".s-14>option");
  let race = "";
  for (let i = 0; i < s14.length; i++) {
    if (s14[i].selected) {
      console.log(s14[i].value);
      race = s14[i].value;
    }
  }

  //2. Method, URL Konfiguratija
  const data = new URLSearchParams();
  data.append("race", race);

  xhr.open("GET", URL + "/api/25/sr/read/" + "?" + data);
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Obrabotka otweta s serwera
  xhr.onload = () => {
    console.log(xhr.status);
    const data = JSON.parse(xhr.response);
    console.log(data);
    document.querySelector(".out-14").innerHTML = data.result.description;
  };

  //4. Otprawka zaprosa
  xhr.send();
}

document.querySelector(".b-14").onclick = f14;

// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/sr/read
// method: POST
//
// если все сделано верно, то получите массив с описанием всех рас из игры КР.
// выведите в .out-15 изображения всех рас.
// в начале функции очистите .out-15
// выведите изображения рас в .out-15

function f15() {
  //1. zadaem Objekt zaprosa
  const xhr = new XMLHttpRequest();
  let out15 = "";

  //2. Method, URL Konfiguratija
  xhr.open("POST", URL + "/api/25/sr/read");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Obrabotka otweta s serwera
  xhr.onload = () => {
    console.log(xhr.status);
    const data = JSON.parse(xhr.response);
    console.log(data);
    for (item of data.result) {
      // console.log(item.image);
      let img = document.createElement("img");
      img.src = URL + item.image;
      out15 = document.querySelector(".out-15").appendChild(img);
    }
  };

  //4. Otprawka zaprosa
  xhr.send();
}

document.querySelector(".b-15").onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/world
// method: GET
//
// если все сделано верно, то получите массив с описанием всех миров игры GoW.
// выведите в .out-16 названия (title) миров через пробел.

function f16() {
  //1. zadaem Objekt zaprosa
  const xhr = new XMLHttpRequest();
  let out16 = "";
  //2. Method, URL Konfiguratija
  xhr.open("GET", URL + "/api/25/gow/world");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Obrabotka otweta s serwera
  xhr.onload = () => {
    console.log(xhr.status);
    const data = JSON.parse(xhr.response);
    console.log(data);

    for (let i = 0; i < data.worlds.length; i++) {
      // console.log(data.worlds[i].title);
      out16 += data.worlds[i].title + " ";
    }
    document.querySelector(".out-16").innerHTML = out16;
  };

  //4. Otprawka zaprosa
  xhr.send();
}

document.querySelector(".b-16").onclick = f16;

// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-17.
// если все сделано верно, то получите описание выбранного в select .s-17
// выведите в .out-17 описание мира.

function f17() {
  //1. zadaem Objekt zaprosa
  const xhr = new XMLHttpRequest();
  let out17 = document.querySelector(".out-17");
  let s17 = document.querySelectorAll(".s-17>option");
  let world = "";

  for (item of s17) {
    // console.log(item.value);
    if (item.selected) {
      // console.log(item.value);
      world = item.value;
    }
  }

  //2. Method, URL Konfiguratija

  xhr.open("GET", URL + "/api/25/gow/world/" + world);
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Obrabotka otweta s serwera
  xhr.onload = () => {
    console.log(xhr.status);
    const data = JSON.parse(xhr.response);
    console.log(data);
    document.querySelector(".out-17").innerHTML = data.world.description;
  };

  //4. Otprawka zaprosa
  xhr.send();
}

document.querySelector(".b-17").onclick = f17;

// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос на api.itgid.info со следующими параметрами:
// url: /api/25/gow/rune
// method: POST
// если все сделано верно, то получите массив с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира.
// выполните очистку .out-18 в начале функции

function f18() {
  //1. zadaem Objekt zaprosa
  const xhr = new XMLHttpRequest();
  let out18 = "";

  //2. Method, URL Konfiguratija
  xhr.open("POST", URL + "/api/25/gow/rune");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. Obrabotka otweta s serwera
  xhr.onload = () => {
    console.log(xhr.status);
    const data = JSON.parse(xhr.response);
    console.log(data);
    for (key in data.rune) {
      // console.log(data.rune[key]);
      let image = document.createElement("img");
      image.src = URL + data.rune[key];
      image.alt = key;
      out18 = document.querySelector(".out-18").appendChild(image);
    }
  };

  //4. Otprawka zaprosa
  xhr.send();
}

document.querySelector(".b-18").onclick = f18;
