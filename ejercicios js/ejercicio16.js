function ejecutar() {
  let numero1 = parseInt(prompt("Ingresa el numero de la primera promesa"));
  let numero2 = parseInt(prompt("Ingresa el numero de la segunda promesa"));
  let numero3 = parseInt(prompt("Ingresa el numero de la tercera promesa"));

  let promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(numero1);
      console.log(`Numero 1: ${numero1}`);
    }, 1000);
  });
  let promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(numero2);
      console.log(`Numero 2: ${numero2}`);
    }, 1000);
  });
  let promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(numero3);
      console.log(`Numero 3: ${numero3}`);
    }, 1000);
  });

  Promise.all([promise1, promise2, promise3])
    .then((results) => {
      const suma = results.reduce((total, numero) => total + numero, 0)
      console.log(`Resultado final: ${suma}`)
  })
  
}


