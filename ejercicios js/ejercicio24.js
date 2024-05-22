function ejecutar() {
// Objeto de destino
let targetObject = {
  name: "Alice", // Propiedad "name" con el valor "Alice"
  age: 30 // Propiedad "age" con el valor 30
};

// Crear un objeto proxy
let proxy = new Proxy(targetObject, {
  // Intercepta la lectura de una propiedad
  get: function(target, property, receiver) {
    console.log(`Leyendo la propiedad '${property}'`); // Imprime un mensaje indicando la propiedad que se está leyendo
    return target[property]; // Devuelve el valor de la propiedad del objeto de destino
  },

  // Intercepta la escritura de una propiedad
  set: function(target, property, value, receiver) {
    console.log(`Estableciendo la propiedad '${property}' a '${value}'`); // Imprime un mensaje indicando la propiedad y el valor que se está estableciendo
    target[property] = value; // Establece el valor de la propiedad en el objeto de destino
    // Si quieres bloquear la escritura, puedes lanzar un error aquí
    // throw new Error("No se puede modificar esta propiedad.");
    return true; // Devuelve true para indicar que la operación de escritura ha sido exitosa
  }
});

// Usando el objeto proxy
console.log(proxy.name); // Accede a la propiedad 'name' del objeto proxy (se activará el método 'get' del proxy)
proxy.age = 35; // Establece la propiedad 'age' en el objeto proxy a 35 (se activará el método 'set' del proxy)

}