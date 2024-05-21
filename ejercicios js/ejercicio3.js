function ejecutar(){
    // Se define la función 'ejecutar' que contiene todo el código a ejecutar cuando se llama a la función.
    
    let numeros = [1, 2, 3, 4, 5, 6];
    // Se declara el array 'numeros' con los valores del 1 al 6.
    
    let duplicar = x => x * 2;
    // Se define la función de flecha 'duplicar' que toma un argumento 'x' y devuelve el doble de 'x'.
    
    let resultado = numeros.map(duplicar);
    // Se usa el método 'map' del array 'numeros' para aplicar la función 'duplicar' a cada elemento del array.
    // Esto produce un nuevo array 'resultado' donde cada número es el doble del número correspondiente en el array original.
    
    // Callback
    setTimeout(() =>{
        console.table(resultado);
    }, 1000);
    // Se usa 'setTimeout' para programar la ejecución de una función de flecha después de un retraso de 1 segundo (1000 milisegundos).
    // La función de flecha imprime el array 'resultado' en la consola en formato de tabla utilizando 'console.table'.
}