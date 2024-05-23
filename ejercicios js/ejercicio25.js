function ejecutar() {
  // Objeto que contiene funciones de validación para diferentes tipos de datos
  const validator = {
    // Función de validación para números
    numeric(target, key, value) {
      if (typeof value !== 'number' || isNaN(value)) {
        console.error(`${key} debe ser un número`);
        return false;
      }
      return true;
    },
    // Función de validación para valores alfanuméricos
    alphanumeric(target, key, value) {
      if (!/^[a-zA-Z]+$/.test(value)) {
        console.error(`${key} debe contener solo letras`);
        return false;
      }
      return true;
    },
    // Función de validación para correos electrónicos
    email(target, key, value) {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        console.error(`${key} debe ser un correo válido`);
        return false;
      }
      return true;
    },
    // Función de validación para fechas en formato YYYY-MM-DD
    date(target, key, value) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
        console.error(`${key} debe ser una fecha en formato YYYY-MM-DD`);
        return false;
      }
      return true;
    }
  };

  // Función que crea un proxy para un objeto dado y aplica las validaciones
  function createValidator(obj, validations) {
    return new Proxy(obj, {
      set(target, key, value) {
        // Limpia los espacios en blanco al inicio y al final del valor si es una cadena
        if (typeof value === 'string') {
          value = value.trim();
        }

        // Verifica si la propiedad tiene una validación asociada
        if (validations[key]) {
          // Llama a la función de validación correspondiente
          if (!validations[key](target, key, value)) {
            return false; // Si la validación falla, no asigna el valor
          }
        }

        // Si no hay una validación específica, simplemente asigna el valor
        return Reflect.set(target, key, value);
      }
    });
  }

  // Crea un objeto vacío y define las validaciones para sus propiedades
  const obj = {};
  const validations = {
    numericValue: validator.numeric,
    alphanumericValue: validator.alphanumeric,
    emailValue: validator.email,
    dateValue: validator.date
  };

  // Crea un proxy para el objeto con las validaciones definidas
  const objProxy = createValidator(obj, validations);

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