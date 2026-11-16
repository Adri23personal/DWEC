
// ================================================================
// RETO 4 · PILA Y COLA CON ARRAYS
// ================================================================
//
// En este ejercicio vamos a trabajar con ARRAYS (listas de datos).
//
// Hay dos formas importantes de trabajar con ellos:
//
// COLA (QUEUE): el primero que entra es el primero que sale.
// PILA (STACK): el último que entra es el primero que sale.
//
// ================================================================
// 4.1 · atenderTurnos
// ================================================================

// CASO TÍPICO: UTILIZAR UNA COLA (QUEUE).
//
// Una cola funciona como una fila de personas esperando.
// La primera persona que llega es la primera que se atiende.
//
// Recibimos dos parámetros:
// - cola: array con las personas que esperan.
// - cantidad: número de personas que queremos atender.
//
// push() añade elementos al final del array.
// shift() elimina y devuelve el PRIMER elemento del array.
// while() repite instrucciones mientras se cumpla una condición.

export const atenderTurnos = (cola, cantidad) => {

  // Creamos un array vacío donde guardaremos
  // las personas que ya han sido atendidas.
  //
  // [] significa que el array empieza sin elementos.

  const atendidos = [];

  // CASO TÍPICO: UTILIZAR WHILE PARA REPETIR UNA ACCIÓN.
  //
  // while significa "mientras".
  //
  // Tenemos dos condiciones:
  //
  // 1. atendidos.length < cantidad
  //    Comprobamos que todavía no hemos atendido
  //    el número de personas que nos han pedido.
  //
  // 2. cola.length > 0
  //    Comprobamos que todavía quedan personas esperando.
  //
  // && significa Y: las dos condiciones deben cumplirse.
  //
  // Si ambas se cumplen, seguimos atendiendo personas.

  while (atendidos.length < cantidad && cola.length > 0) {

    // shift() elimina a la primera persona de la cola
    // y devuelve su valor.
    //
    // push() introduce esa persona en el array atendidos.
    //
    // Es decir:
    // - Sacamos a la primera persona de la cola.
    // - La guardamos en el array de atendidos.

    atendidos.push(cola.shift());

  }

  // Devolvemos el array con todas las personas atendidas.
  //
  // return sirve para entregar el resultado de la función.

  return atendidos;

};


// ================================================================
// 4.2 · deshacerUltimas
// ================================================================

// CASO TÍPICO: UTILIZAR UNA PILA (STACK).
//
// Una pila funciona como una torre de platos.
// El último plato que colocas es el primero que retiras.
//
// Recibimos dos parámetros:
// - historial: array con las acciones realizadas.
// - cantidad: número de acciones que queremos deshacer.
//
// pop() elimina y devuelve el ÚLTIMO elemento del array.
// push() añade un elemento al final del array.

export const deshacerUltimas = (historial, cantidad) => {

  // Creamos un array vacío para guardar
  // las acciones que vamos deshaciendo.

  const deshechas = [];

  // CASO TÍPICO: UTILIZAR WHILE PARA REPETIR UNA ACCIÓN.
  //
  // Repetimos mientras:
  //
  // 1. deshechas.length < cantidad
  //    No hayamos deshecho todavía todas las acciones solicitadas.
  //
  // 2. historial.length > 0
  //    Todavía queden acciones en el historial.
  //
  // && significa que ambas condiciones deben cumplirse.

  while (deshechas.length < cantidad && historial.length > 0) {

    // pop() elimina la última acción del historial
    // y devuelve el elemento eliminado.
    //
    // push() guarda esa acción dentro del array deshechas.
    //
    // Es decir:
    // - Cogemos la última acción realizada.
    // - La eliminamos del historial.
    // - La guardamos en el array de acciones deshechas.

    deshechas.push(historial.pop());

  }

  // Devolvemos el array con las acciones deshechas.

  return deshechas;

};


// ================================================================
// CHULETA · MÉTODOS IMPORTANTES DE LOS ARRAYS
// ================================================================

// push()   -> AÑADE un elemento al FINAL.
// pop()    -> ELIMINA el ÚLTIMO elemento y lo devuelve.
// shift()  -> ELIMINA el PRIMER elemento y lo devuelve.
// unshift()-> AÑADE un elemento al PRINCIPIO.
// length   -> INDICA cuántos elementos tiene el array.
//
// ================================================================
// CASOS TÍPICOS
// ================================================================
//
// COLA:
// Utilizar shift() cuando queremos atender elementos
// en el mismo orden en el que han llegado.
//
// Ejemplo: turnos de un médico, clientes, pedidos...
//
// PILA:
// Utilizar pop() cuando queremos recuperar primero
// el último elemento que hemos guardado.
//
// Ejemplo: deshacer acciones, historial, volver atrás...
//
// WHILE:
// Utilizarlo cuando queremos repetir una operación
// mientras se cumplan una o varias condiciones.
//
// &&:
// Significa Y. Todas las condiciones deben cumplirse.
//
// return:
// Devuelve el resultado de una función.
