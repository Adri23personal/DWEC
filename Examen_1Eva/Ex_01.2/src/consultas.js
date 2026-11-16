// Importamos resultadoPartido desde carga.js.
// import sirve para utilizar funciones que están en otro archivo.

import { resultadoPartido } from './carga.js';


// ================================================================
// 2.1 · contarPartidos
// ================================================================

// CASO TÍPICO: UTILIZAR FILTER PARA FILTRAR ELEMENTOS DE UN ARRAY.
//
// Esta función recibe:
// - partidos: un array con todos los partidos.
// - predicado: una función que indica qué partidos queremos contar.
//
// Un predicado es una función que devuelve true o false.
//
// filter() recorre el array y selecciona los elementos
// que cumplen la condición.
//
// length nos permite saber cuántos elementos hay en el array.

export const contarPartidos = (partidos, predicado) => {

  // Filtramos los partidos que cumplen la condición.
  const partidosFiltrados = partidos.filter(predicado);

  // Devolvemos la cantidad de partidos encontrados.
  return partidosFiltrados.length;

};


// ================================================================
// 2.2 · formaReciente
// ================================================================

// CASO TÍPICO: UTILIZAR FILTER + SLICE + MAP.
//
// Esta función recibe:
// - partidos: todos los partidos.
// - id: identificador del equipo que queremos consultar.
// - cantidad: número de partidos que queremos obtener.
//
// cantidad = 5 significa que si no indicamos otro número,
// la función utilizará automáticamente 5.
//
// filter() sirve para seleccionar partidos.
// slice() sirve para coger una parte de un array.
// map() sirve para transformar los elementos de un array.

export const formaReciente = (partidos, id, cantidad = 5) => {

  // PASO 1 · FILTRAR LOS PARTIDOS DEL EQUIPO.
  //
  // Recorremos los partidos y nos quedamos únicamente
  // con aquellos en los que participa el equipo indicado.
  //
  // Comprobamos que el equipo sea local o visitante.

  const partidosEquipo = partidos.filter(partido => {

    return (
      partido.equipoLocal === id ||
      partido.equipoVisitante === id
    );

  });


  // PASO 2 · QUEDARNOS CON LOS PARTIDOS QUE TIENEN RESULTADO.
  //
  // Utilizamos la función importada resultadoPartido.
  // Suponemos que devuelve un valor vacío cuando no hay resultado.
  //
  // filter() mantiene solamente los partidos que cumplen
  // la condición indicada.

  const partidosJugados = partidosEquipo.filter(partido => {

    return resultadoPartido(partido) !== "";

  });


  // PASO 3 · ORDENAR LOS PARTIDOS DEL MÁS RECIENTE AL MÁS ANTIGUO.
  //
  // Suponemos que cada partido tiene una propiedad fecha.
  // new Date() convierte una fecha en un formato que JavaScript
  // puede comparar.
  //
  // IMPORTANTE: esto supone que las fechas están correctamente
  // guardadas en los partidos.

  const partidosOrdenados = [...partidosJugados].sort((a, b) => {

    return new Date(b.fecha) - new Date(a.fecha);

  });


  // PASO 4 · SELECCIONAR LOS ÚLTIMOS PARTIDOS.
  //
  // slice(0, cantidad) coge desde la posición 0 hasta
  // el número indicado en cantidad.
  //
  // Por ejemplo:
  // slice(0, 5) devuelve los primeros 5 elementos.

  const ultimosPartidos = partidosOrdenados.slice(0, cantidad);


  // PASO 5 · TRANSFORMAR LOS PARTIDOS EN RESULTADOS.
  //
  // map() recorre los partidos y devuelve un nuevo array.
  //
  // Comprobamos los goles del equipo que estamos consultando.
  // Si marca más goles que su rival: G (ganado).
  // Si marca los mismos goles: E (empate).
  // Si marca menos goles: P (perdido).

  return ultimosPartidos.map(partido => {

    // Comprobamos si el equipo juega como local.
    if (partido.equipoLocal === id) {

      // Si los goles locales son mayores, ha ganado.
      if (partido.golesLocal > partido.golesVisitante) {
        return "G";
      }

      // Si los goles son iguales, ha empatado.
      else if (partido.golesLocal === partido.golesVisitante) {
        return "E";
      }

      // Si no, ha perdido.
      else {
        return "P";
      }

    }

    // Si no juega como local, juega como visitante.
    else {

      // Si los goles visitantes son mayores, ha ganado.
      if (partido.golesVisitante > partido.golesLocal) {
        return "G";
      }

      // Si los goles son iguales, ha empatado.
      else if (partido.golesVisitante === partido.golesLocal) {
        return "E";
      }

      // Si no, ha perdido.
      else {
        return "P";
      }

    }

  });

};
