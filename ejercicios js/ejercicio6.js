function ejecutar2(){
    let array = [20, 5, 8, 0, 4];
    function funcion(elemento) {
        return elemento >= 10;
    }
    setTimeout(funcion, 2000);
    console.log(array.some(funcion)) // true
}

// Definición de la función ejecutar que toma un callback como argumento
function ejecutar() {
    function call(callback){
        // Definición de un array
        let array = [20, 5, 8, 0, 4];

        // Utilización del callback proporcionado para realizar alguna operación en el array
        // Por ejemplo, se utiliza el método some del array para verificar si al menos un elemento cumple con cierta condición
        const resultado = callback(array);

        // Impresión del resultado en la consola
        console.log(resultado);
    }

    // Definición de una función de callback que verifica si al menos un elemento del array es mayor o igual a 10
    function comprobar(array) {
        return array.some(elemento => elemento >= 10);
    }

    // Llamada a la función ejecutar pasando la función de callback como argumento
    call(comprobar);
}

