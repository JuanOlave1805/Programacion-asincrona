function ejecutar() {
let promise = new Promise(function(resolve, reject) {
    // la función se ejecuta automáticamente cuando se construye la promesa
  
    // después de 3 segundo, indica que la tarea está hecha con el resultado "hecho"
    setTimeout(() => resolve("hecho"), 3000);
  });
// Para que funcione la promesa debo expresarla de la siguiente manera. Donde me dara el resultado esperado
promise.then(function (result){
  console.log(result)
})
}