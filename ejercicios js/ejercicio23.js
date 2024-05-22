async function ejecutar() {
  try {
    // Realiza una solicitud para obtener el contenido del archivo JSON
    const response = await fetch('../json/ejercicio17.json');

    // Verifica si la solicitud fue exitosa (código de respuesta 200)
    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON');
    }

    // Lee el contenido de la respuesta como texto
    const jsonData = await response.text();

    // Parsea el contenido JSON a un objeto JavaScript
    const parsedData = JSON.parse(jsonData);

    // Haces algo con los datos, por ejemplo, imprimirlos en la consola
    console.log(parsedData);
  } catch (error) {
    // Captura cualquier error que pueda ocurrir durante la solicitud, lectura o parseo del archivo JSON y muestra un mensaje de error
    console.error('Ocurrió un error:', error.message);
  }
}