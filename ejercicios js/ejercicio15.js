function ejecutar() {
  let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Error: promesa rechazada");
  }, 2000);
});
}