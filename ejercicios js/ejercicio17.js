function ejecutar() {
  fetch('../json/ejercicio17.json')
    .then(respuesta => respuesta.json())
    .then(respuesta => console.log(respuesta))
}
