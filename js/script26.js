fetch(URL)
  .then((data) => {
    console.log(data);
    // console.log(data.text());
    // data.text().then((data2) => {
    //   console.log(data2);
    // });
    return data.text();
  })
  .then((data) => {
    console.log(data);
  });

fetch(URL, {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    // "Content-Type": "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  redirect: "follow", // manual, *follow, error
  referrer: "no-referrer", // no-referrer, *client
  body: "auth=QBJ4PBhsGhZqvC2&action=1&name=alex", // body data type must match "Content-Type" header
})
  // return await response.json(); // parses JSON response into native JavaScript objects

  .then((response) => response.text())
  .then((response) => {
    console.log(response);
  });
