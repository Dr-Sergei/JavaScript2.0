const p1 = new Promise(function () {});
//pending -ожидание
//fullfielled - выполнено
//rejected - выполнено с ошибкой

// console.log(p1);

// const p2 = new Promise((resolve, reject) => {
//   //   fetch("https://gipofiz.ua")
//   fetch(URL + "api/delay")
//     .then((response) => {
//       // console.log(response);
//       if (response.ok) resolve(response.json());
//       else reject(response);
//     })
//     .catch((error) => reject(error));
// });

// p2.then(f1, f2);

// function f1(data) {
//   console.log(p2);
//   console.log("success");
//   console.log(data);
// }

// function f2(data) {
//   console.log(p2);
//   console.log("trouble");
//   console.log(data);
// }

// console.log(p2);
// console.log("===================================");

//цепочка промисов

// const f = fetch(URL + "api/test");

// console.log(f);

// f.then((response) => {
//   console.log(f);
//   return response.json();
// }).then((data) => console.log(data));

// ==========================================================================
//SOKRASCHAJEM KOD
// ==========================================================================

// fetch(URL + "api/delay")
//   .then((promise) => {
//     return promise.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch(URL + "api/test");
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

//на практике цепочка проимисов
// const requestHeaders = new FormData();
// requestHeaders.append("apikey", APIKEY);

// fetch(URL + "api/27/random/random-number?min=1&max=10", {
//   method: "get",
//   headers: requestHeaders,
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     return fetch(URL + "api/27/employee/read/" + data["random-number"], {
//       method: "get",
//       headers: requestHeaders,
//     });
//   })
//   .then((response) => response.json())
//   .then((data) => console.log(data.result));

// ==========================================================================
// PROMISE ALL parallelnije zaprosi
// ==========================================================================
const promise3 = new Promise((resolve, reject) => {
  fetch(URL + "api/test").then((response) => resolve(response.json()));
});

const promise4 = new Promise((resolve, reject) => {
  fetch(URL + "api/delay").then((response) => resolve(response.json()));
});

Promise.all([promise3, promise4]).then((data) => {
  console.log(data);
});
