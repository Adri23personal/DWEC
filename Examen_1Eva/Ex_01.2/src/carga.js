
// ================================================================
// 1.1 · describirEquipo
// ================================================================

// CASO TÍPICO: UTILIZAR UNA FUNCIÓN PARA TRABAJAR CON UN OBJETO.
//
// equipo es el dato que recibe la función.
// Cuando recibimos un objeto podemos acceder a sus propiedades
// utilizando un punto: equipo.nombre, equipo.ciudad, etc.
//
// return sirve para devolver el resultado de la función.

export const describirEquipo = (equipo) => {

  // EJEMPLO: devolvemos el nombre del equipo.
  // IMPORTANTE: adaptar a lo que pida el enunciado.
  return equipo.nombre;

};


// ================================================================
// 1.2 · resultadoPartido
// ================================================================

// CASO TÍPICO: UTILIZAR IF PARA COMPROBAR UNA CONDICIÓN.
//
// if significa "si".
// Se utiliza para comprobar si se cumple una condición.
//
// === significa "es exactamente igual a".
// "" representa un texto vacío.
//
// return devuelve el resultado y termina la función.

export const resultadoPartido = (partido) => {

  // Comprobamos si el partido está vacío.
  if (partido === "") {

    // Si está vacío, devolvemos este mensaje.
    return "Sin resultado";

  }

  // Si no está vacío, devolvemos el contenido recibido.
  return partido;

};
