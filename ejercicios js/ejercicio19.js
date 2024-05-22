async function ejecutar() { // Declara una función asincrónica llamada 'obtenerYManipularDatos'
  try {
    // Realiza una solicitud para obtener el archivo JSON
    const respuesta = await fetch('../json/ejercicio18.json');

    // Verifica si la respuesta es exitosa
    if (!respuesta.ok) { // Verifica si la respuesta tiene un estado exitoso
      throw new Error('No se pudo obtener el archivo JSON: ' + respuesta.status); // Lanza un error si la respuesta no es exitosa
    }

    // Convierte la respuesta a formato JSON
    const datos = await respuesta.json(); // Convierte la respuesta a un objeto JavaScript

    // Manipula los datos recibidos para mostrar información específica
    datos.forEach(item => { // Itera sobre cada elemento del array 'datos'
      console.log(`Nombre: ${item.name}, Edad: ${item.age}`); // Imprime el nombre y la edad de cada elemento en la consola
    });
  } catch (error) { // Captura cualquier error que ocurra durante el proceso
    console.error('Error al obtener y manipular los datos:', error); // Imprime el error en la consola
  }
}