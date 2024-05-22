function ejecutar() {


  let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(console.log(`1 promesa`));
    }, 8000);
  });
  let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(console.log(`2 promesa`));
    }, 2000);
  });
  let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(console.log(`3 promesa`));
    }, 1000);
  });

  Promise.all([promise1, promise2, promise3])
    .then(() => {
      console.log("Promesas completadas satisfactoriamente");
    })
    .catch(error => {
      console.error('Al menos una promesa fue rechazada:', error);
    });
  
}