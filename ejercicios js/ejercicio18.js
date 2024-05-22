function ejecutar() { // Declara una función llamada 'ejecutar'
  fetch('../json/ejercicio18.json') // Realiza una solicitud para obtener el archivo JSON
    .then(respuesta => respuesta.json()) // Convierte la respuesta a formato JSON
    .then(respuesta => { // Función de callback que se ejecuta después de convertir la respuesta a JSON
      const filtro = respuesta.filter(objeto => { // Filtra los elementos del JSON
        // Obtenemos la primera letra del nombre y la convertimos a minúscula
        const primeraLetra = objeto.name.charAt(0).toLowerCase();
        // Filtramos los objetos cuyo nombre empiece con 'a' o 'A'
        return primeraLetra === 'a';
      });
      console.log(filtro); // Imprime el resultado del filtro en la consola
    })
    .catch(error => console.error('Error al leer el archivo JSON:', error)); // Manejo de errores si la solicitud o conversión falla
}