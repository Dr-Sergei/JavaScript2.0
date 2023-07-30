function f1() {
  //1. СОЗДАЕМ ОБЪЕКТ ЗАПРОСА
  const xhr = new XMLHttpRequest();

  //2. КУДА ПОСЫЛАЕМ И ПАРАМЕТРЫ
  xhr.open(
    "GET",
    "http://api.openweathermap.org/data/2.5/weather?id=6058560&appid=c342a95280084b1f2dc45fad0f14b2ed"
  );

  //3. КАК ОБРАБАТЫВАЕМ ОТВЕТ СЕРВЕРА
  xhr.onload = function () {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
  };

  //4. ПОСЫЛАЕМ ЗАПРОС
  xhr.send();
}

// f1();

//1. СОЗДАЕМ ОБЪЕКТ ЗАПРОСА
const xhr = new XMLHttpRequest();

function f2() {
  //2. ЗАДАЕМ МЕТОД, URL, КОНФИГУРИРУЕМ
  xhr.open("GET", URL + "api/25/employee/read");
  xhr.setRequestHeader("apikey", APIKEY);

  //3. КАК ОБРАБАТЫВАЕМ ОТВЕТ СЕРВЕРА
  xhr.onload = function () {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
  };

  //4. ПОСЫЛАЕМ ЗАПРОС
  xhr.send();
}

// f2();

function f3() {
  //2. ЗАДАЕМ МЕТОД, URL, КОНФИГУРИРУЕМ
  xhr.open("POST", URL + "api/25/random/generate-password");
  xhr.setRequestHeader("apikey", APIKEY);

  const data = new FormData();
  data.append("length", 16);

  //3. КАК ОБРАБАТЫВАЕМ ОТВЕТ СЕРВЕРА
  xhr.onload = function () {
    console.log(xhr.status);
    // console.log(xhr.response);
    const data = JSON.parse(xhr.response);
    console.log(data);
  };

  //4. ПОСЫЛАЕМ ЗАПРОС
  xhr.send(data); //!!!!!!!!!!!!!!!!!!!!!!
  console.log(xhr);
}
f3();
