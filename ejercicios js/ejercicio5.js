function ejecutar1(){
    let array = [2, 15, 18, 130, 44];
    function funcion(elemento) {
        return elemento >= 10;
    }
    setTimeout(funcion, 2000);
    console.log(array.every(funcion)) // true
}

// Definición de la función ejecutar que toma un callback como argumento
function ejecutar() {
    function call(){
        // Definición de un array
        let array = [20, 15, 18, 130, 44];

        // Utilización del callback proporcionado para realizar alguna operación en el array
        // Por ejemplo, se utiliza el método filter del array para verificar si existen elementos que cumplen con cierta condición
        const resultado = array.every(comprobar);

        // Impresión del resultado en la consola
        console.log(resultado)
    }

    // Definición de una función de callback que verifica si al menos un elemento del array es mayor o igual a 10
    function comprobar(elemento) {
        return elemento >= 10;
    }

    // Llamada a la función ejecutar pasando la función de callback como argumento
    call(comprobar);
}