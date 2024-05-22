function ejecutar(){
    function find(array, callback) { // Funcion find con argumentos de array
        for (let i = 0; i < array.length; i++) { //Bucle recorriendo el array
            if (callback(array[i])) {  // Llamada al callback con el elemento actual como argumento
                                        // Si el callback devuelve true para este elemento, se ejecuta el bloque de código siguiente
                return array[i]; // Si el callback es true retornara el valor del array en la posicion en la que se encuentre "i"
            }
        }
        //Si el callback es false retornara undefined
        return undefined;
    }
    
    // Ejemplo de uso:
    const array = [1, 2, 30, 4, 5];
    const operacion = x => x >= 10;
    
    const result = find(array, operacion);
    console.log(result); 
}