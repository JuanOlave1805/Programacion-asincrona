function ejecutar() {
// Función asincrónica que simula una llamada asíncrona
async function procesarElemento(elemento) {
  // Simulando un retraso aleatorio
  const tiempoDeEspera = Math.random() * 1000; // Genera un número aleatorio entre 0 y 1000
  await new Promise(resolve => setTimeout(resolve, tiempoDeEspera)); // Espera el tiempo aleatorio antes de continuar
  console.log(`Procesado elemento: ${elemento}`); // Imprime un mensaje indicando que el elemento ha sido procesado
}

// Función principal asincrónica que procesa una lista de elementos
async function procesarLista(lista) {
  for (const elemento of lista) { // Itera sobre cada elemento de la lista
    await procesarElemento(elemento); // Llama a la función procesarElemento con el elemento actual y espera a que se complete
  }
  console.log("Procesamiento completo"); // Imprime un mensaje cuando se completa el procesamiento de toda la lista
}

// Lista de elementos a procesar
const lista = [1, 2, 3, 4, 5];

// Llamar a la función principal para procesar la lista
procesarLista(lista) // Inicia el proceso de procesamiento de la lista
  .then(() => console.log("Todos los elementos han sido procesados")) // Se ejecuta cuando se completa el procesamiento de la lista
  .catch(error => console.error("Error durante el procesamiento:", error)); // Maneja cualquier error durante el procesamiento
}