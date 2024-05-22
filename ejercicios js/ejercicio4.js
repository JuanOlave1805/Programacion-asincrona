function ejecutar1() {
    const array = ["Hola", "Chao", "masamorra", "kiriku", "lol", "lal"];
    let array_fin = [];
    
    // Definir una función callback para actualizar array_fin
    function callback() {
        array_fin = array.filter((element) => element.length === 3);
        console.table(array_fin);
    }
    setTimeout(callback, 1000);
}

// Definición de la función ejecutar que toma un callback como argumento
function ejecutar() {
    function call(callback){
        // Definición de un array
        const array = ["Hola", "Chao", "masamorra", "kiriku", "lol", "lal"];

        // Utilización del callback proporcionado para realizar alguna operación en el array
        // Por ejemplo, se utiliza el método filter del array para verificar si existen elementos que cumplen con cierta condición
        const resultado = callback(array);

        // Impresión del resultado en la consola
        console.table(resultado);
    }

    // Definición de una función de callback que verifica si al menos un elemento del array es mayor o igual a 10
    function comprobar(array) {
        return array_fin = array.filter((element) => element.length === 3);
    }

    // Llamada a la función ejecutar pasando la función de callback como argumento
    call(comprobar);
}