function ejecutar() {
  // Objeto que contiene funciones de validación para diferentes tipos de datos
const validator = {
  // Función de validación para números
  numeric(target, key, value) {
    // Verifica si el valor no es un número o si es NaN
    if (typeof value !== 'number' || isNaN(value)) {
      // Si no es un número válido, muestra un mensaje de error en la consola
      console.error(`${key} debe ser un número`);
      // Retorna falso para indicar que la validación falló
      return false;
    }
    // Si el valor es válido, retorna verdadero
    return true;
  },
  // Función de validación para valores alfanuméricos
  alphanumeric(target, key, value) {
    // Verifica si el valor contiene solo letras (mayúsculas o minúsculas)
    if (!/^[a-zA-Z]+$/.test(value)) {
      // Si no contiene solo letras, muestra un mensaje de error en la consola
      console.error(`${key} debe contener solo letras`);
      // Retorna falso para indicar que la validación falló
      return false;
    }
    // Si el valor es válido, retorna verdadero
    return true;
  },
  // Función de validación para correos electrónicos
  email(target, key, value) {
    // Verifica si el valor tiene el formato de correo electrónico válido
    if (!/^\S+@\S+\.\S+$/.test(value)) {
      // Si no tiene un formato de correo electrónico válido, muestra un mensaje de error en la consola
      console.error(`${key} debe ser un correo válido`);
      // Retorna falso para indicar que la validación falló
      return false;
    }
    // Si el valor es válido, retorna verdadero
    return true;
  },
  // Función de validación para fechas en formato YYYY-MM-DD
  date(target, key, value) {
    // Verifica si el valor tiene el formato de fecha YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      // Si no tiene el formato de fecha válido, muestra un mensaje de error en la consola
      console.error(`${key} debe ser una fecha en formato YYYY-MM-DD`);
      // Retorna falso para indicar que la validación falló
      return false;
    }
    // Si el valor es válido, retorna verdadero
    return true;
  }
};

// Función que crea un proxy para un objeto dado y aplica las validaciones
function createValidator(obj) {
  // Crea y devuelve un nuevo Proxy
  return new Proxy(obj, {
    // Define el handler para interceptar las asignaciones de propiedades
    set(target, key, value) {
      // Verifica si la propiedad tiene una función de validación asociada en el objeto 'validator'
      if (typeof target[key] === 'function') {
        // Si la propiedad tiene una función de validación, llama a esa función
        // Pasando el objeto, la clave y el valor, y verifica si la validación es exitosa
        return target[key](target, key, value) ? Reflect.set(...arguments) : false;
      } else {
        // Si la propiedad no tiene una función de validación asociada
        // Verifica si el valor es una cadena de texto y la limpia de espacios en blanco al inicio y al final
        if (typeof value === 'string') {
          value = value.trim(); // eliminar espacios en blanco al inicio y al final
        }
        // Si la propiedad no tiene una función de validación, simplemente asigna el valor
        return Reflect.set(...arguments);
      }
    }
  });
}

// Crea un objeto vacío
const obj = {};
// Crea un proxy para el objeto vacío con las validaciones definidas
const objProxy = createValidator(obj);

// Ejemplo de uso del objeto proxy con validaciones
objProxy.numericValue = 123; // válido
objProxy.numericValue = 'abc'; // inválido, se muestra un error en la consola
objProxy.alphanumericValue = 'abc'; // válido
objProxy.alphanumericValue = '123'; // inválido, se muestra un error en la consola
objProxy.emailValue = 'test@example.com'; // válido
objProxy.emailValue = 'invalidemail'; // inválido, se muestra un error en la consola
objProxy.dateValue = '2024-05-22'; // válido
objProxy.dateValue = '22-05-2024'; // inválido, se muestra un error en la consola

}