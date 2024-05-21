function forma_1() {
  // Solicita al usuario el número de inicio y lo convierte a un entero
  let inicio = parseInt(prompt("Ingresa el número inicio"));
  
  // Solicita al usuario el número final y lo convierte a un entero
  let fin = parseInt(prompt("Ingresa el número final"));
  
  // Define la función que imprimirá los números desde "desde" hasta "hasta" con un intervalo de 1 segundo
  function imprimirNumeros(desde, hasta) {
    let contador = desde; // Inicializa el contador con el valor de "desde"
  
    // Crea un intervalo que se ejecuta cada 1000 ms (1 segundo)
    let intervalo = setInterval(function() {
      console.log(contador); // Imprime el valor actual del contador
      
      // Si el contador alcanza o supera el valor de "hasta", detiene el intervalo
      if (contador >= hasta) {
        clearInterval(intervalo);
      }
      contador++; // Incrementa el contador
    }, 1000);
  }
  
  // Llama a la función imprimirNumeros con los valores ingresados por el usuario
  imprimirNumeros(inicio, fin);
}






function forma_2() {
  // Solicita al usuario el número de inicio y lo convierte a un entero
  let inicio = parseInt(prompt("Ingresa el número inicio"));
  
  // Solicita al usuario el número final y lo convierte a un entero
  let fin = parseInt(prompt("Ingresa el número final"));
  
  // Define la función que imprimirá los números desde "desde" hasta "hasta" con un intervalo de 1 segundo
  function imprimirNumeros(desde, hasta) {
    let contador = desde; // Inicializa el contador con el valor de "desde"
    
    // Define una función interna llamada "imprimir"
    function imprimir(){
      console.log(contador); // Imprime el valor actual del contador
      contador++; // Incrementa el contador
      
      // Si el contador no ha alcanzado el valor de "hasta", programa el siguiente setTimeout
      if (contador <= hasta) {
        setTimeout(imprimir, 1000); // Llama recursivamente a la función imprimir después de 1000 ms (1 segundo)
      }
    }
    
    // Llama a la función imprimir por primera vez para iniciar el proceso
    imprimir();
  }
  
  // Llama a la función imprimirNumeros con los valores ingresados por el usuario
  imprimirNumeros(inicio, fin);
}