function ejecutar(){
    function findIndex(array, callback) { // Funcion findIndex con argumentos de array
        for (let i = 0; i < array.length; i++) { //Bucle recorriendo el array
            if (callback(array[i])) {  // Llamada al callback con el elemento actual como argumento
                                        // Si el callback devuelve true para este elemento, se ejecuta el bloque de código siguiente
                return array.findIndex(operacion); // Si el callback es true retornara el valor del array en la posicion en la que se encuentre "i"
            }
        }
        //Si el callback es false retornara undefined
        return i;
    }
    
    // Ejemplo de uso:
    const array = [1, 20, 3, 4, 5];
    const array_fin = [];
    const operacion = x => x >= 10;
    
    const result = findIndex(array, operacion);  // Con finIndex hacemos el filtro para buscar desde cual item es false
    console.log(result);
    
    for(let a = result; a < array.length; a++){ //Bucle que recorre el array y agrega los datos del nuevo array
        array_fin.push(array[a]);
    }
    console.table(array_fin);
}


