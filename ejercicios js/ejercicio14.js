function ejecutar(){
// Definición de una función asíncrona llamada asyncCall.
async function asyncCall() {
    //console.log('Llamando'); // Imprime un mensaje indicando que se está realizando una llamada.
    // Utiliza la palabra clave await para esperar a que la promesa retornada por resolveAfter2Seconds se resuelva.
    const result = await "Operacion completada";
    console.log(result); // Imprime el resultado de la promesa, que se espera que sea 'resolved'.
    // Salida esperada: "resolved"
}
setTimeout(asyncCall, 1000)
}