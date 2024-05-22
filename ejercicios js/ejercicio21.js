function ejecutar() {
  // Promise 1: Resuelta
const promise1 = new Promise((resolve, reject) => {
  // Esta Promise se resuelve después de 1 segundo
  setTimeout(() => {
    // La función resolve() se llama después del tiempo especificado, resolviendo la Promise con el mensaje "Promise 1 resuelta"
    resolve("Promise 1 resuelta");
  }, 1000);
});

// Promise 2: Rechazada
const promise2 = new Promise((resolve, reject) => {
  // Esta Promise se rechaza después de 2 segundos
  setTimeout(() => {
    // La función reject() se llama después del tiempo especificado, rechazando la Promise con el mensaje "Promise 2 rechazada"
    reject("Promise 2 rechazada");
  }, 2000);
});

// Promise 3: Resuelta
const promise3 = new Promise((resolve, reject) => {
  // Esta Promise se resuelve después de 1.5 segundos
  setTimeout(() => {
    // La función resolve() se llama después del tiempo especificado, resolviendo la Promise con el mensaje "Promise 3 resuelta"
    resolve("Promise 3 resuelta");
  }, 1500);
});

// Usando Promise.allSettled para obtener información sobre el estado de todas las Promises
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    // Se ejecuta cuando todas las Promises se han resuelto o rechazado
    results.forEach((result, index) => {
      // Itera sobre cada resultado de la Promise
      if (result.status === "fulfilled") {
        // Si la Promise se resolvió, muestra el resultado en la consola
        console.log(`Promise ${index + 1}: Resuelta con resultado:`, result.value);
      } else if (result.status === "rejected") {
        // Si la Promise se rechazó, muestra la razón del rechazo en la consola
        console.log(`Promise ${index + 1}: Rechazada con razón:`, result.reason);
      }
    });
  });
}