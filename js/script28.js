function myAlert(a, c, d) {
  let b = `<p class="${c}">${a}</p>`;
  document.querySelector(d).innerHTML = b;
}
myAlert("ebanij koras", "red", ".test");
myAlert("banana", "orange", ".test2");

//Klass Prototyp

class Alert {
  constructor(a, c, d) {
    this.message = a;
    this.cssClass = c;
    this.out = d;
  }
  showAlert() {
    document.querySelector(
      this.out
    ).innerHTML = `<p class="${this.cssClass}">${this.message}</p>`;
  }
  myAlert() {
    alert(this.message);
  }
}

let m = new Alert("My message", "red", ".test");
console.log(m);

m.showAlert();

//NASLEDOWANIJE

class Alert2 extends Alert {
  constructor(a, c, d, icon) {
    super(a, c, d);
    this.icon = icon;
  }
  showIconAlert() {
    document.querySelector(
      this.out
    ).innerHTML = `<p class="${this.cssClass}"><img src="js/icon${this.icon}.svg"/>${this.message}</p>`;
  }
}

let m2 = new Alert2("Luschenko", "orange", ".test2", "4");
m2.showIconAlert();
m2.myAlert();
