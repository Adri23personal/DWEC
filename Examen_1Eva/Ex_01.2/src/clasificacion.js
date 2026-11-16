import { resultadoPartido } from './carga.js';


// ================================================================
// 3.1 · estadisticasGoles
// ================================================================

// CASO TÍPICO: UTILIZAR ... PARA RECIBIR VARIOS DATOS.
//
// Los tres puntos (...) se llaman REST.
// Sirven para recoger varios argumentos y guardarlos en un array.
//
// Por ejemplo:
// estadisticasGoles(2, 1, 3)
// goles será [2, 1, 3].
//
// reduce() permite recorrer un array y acumular sus valores.
// En este caso vamos a sumar todos los goles.

export const estadisticasGoles = (...goles) => {

  // CASO TÍPICO: SUMAR TODOS LOS ELEMENTOS DE UN ARRAY.
  //
  // reduce recibe dos valores:
  // - total: la suma que llevamos acumulada.
  // - gol: el número que estamos sumando en ese momento.
  //
  // El 0 es el valor inicial de la suma.

  const totalGoles = goles.reduce((total, gol) => total + gol, 0);

  // Devolvemos el resultado de la suma.
  return totalGoles;

};


// ================================================================
// 3.2 · calcularClasificacion
// ================================================================

// CASO TÍPICO: UTILIZAR MAP PARA RECORRER UN ARRAY.
//
// map() recorre todos los elementos de un array y crea
// un nuevo array con los resultados que devolvemos.
//
// equipos: array con los equipos.
// partidos: array con los partidos disputados.
//
// NOTA: esta es una estructura orientativa basada en los nombres
// de propiedades que aparecen en tu código original.

export const calcularClasificacion = (equipos, partidos) => {

  // Recorremos todos los equipos.
  // Por cada equipo devolvemos sus estadísticas.

  return equipos.map(equipo => {

    // Inicializamos las estadísticas a cero.
    // let se utiliza porque estos valores van a cambiar.

    let pj = 0; // Partidos jugados.
    let pg = 0; // Partidos ganados.
    let pe = 0; // Partidos empatados.
    let pp = 0; // Partidos perdidos.
    let gf = 0; // Goles a favor.
    let gc = 0; // Goles en contra.

    // CASO TÍPICO: UTILIZAR FOR PARA RECORRER UN ARRAY.
    //
    // i = 0: empezamos por el primer elemento.
    // i < partidos.length: seguimos mientras haya partidos.
    // i++: avanzamos una posición en cada vuelta.

    for (let i = 0; i < partidos.length; i++) {

      // Guardamos el partido actual en una variable.
      const partido = partidos[i];

      // IMPORTANTE:
      // Suponemos que cada partido tiene:
      // equipoLocal, equipoVisitante, golesLocal y golesVisitante.
      // Si tu archivo utiliza otros nombres, habrá que adaptarlos.

      // Comprobamos si el equipo participa como local
      // o como visitante.

      if (
        partido.equipoLocal === equipo.id ||
        partido.equipoVisitante === equipo.id
      ) {

        // Comprobamos que el partido tenga resultado.
        // La función importada se utiliza aquí como comprobación.
        // Esta línea supone que resultadoPartido devuelve un valor
        // que permite distinguir los partidos sin resultado.

        if (resultadoPartido(partido) !== "") {

          // Sumamos un partido jugado.
          pj++;

          // Si juega como local:
          if (partido.equipoLocal === equipo.id) {

            // Sumamos los goles marcados y recibidos.
            gf += partido.golesLocal;
            gc += partido.golesVisitante;

          } else {

            // Si juega como visitante, cambiamos el orden.
            gf += partido.golesVisitante;
            gc += partido.golesLocal;

          }

          // Comprobamos el resultado del partido.
          // Si los goles a favor son mayores, ha ganado.
          if (gf > gc) {
            pg++;
          }

          // Si los goles a favor son iguales, ha empatado.
          else if (gf === gc) {
            pe++;
          }

          // Si no se cumple ninguna de las anteriores, ha perdido.
          else {
            pp++;
          }

        }
      }
    }

    // Calculamos la diferencia de goles.
    // Es decir, goles a favor menos goles en contra.

    const dg = gf - gc;

    // Calculamos los puntos.
    // Victoria = 3 puntos.
    // Empate = 1 punto.
    // Derrota = 0 puntos.

    const puntos = (pg * 3) + pe;

    // Devolvemos un objeto con todas las estadísticas del equipo.
    return {
      id: equipo.id,
      nombre: equipo.nombre,
      pj: pj,
      pg: pg,
      pe: pe,
      pp: pp,
      gf: gf,
      gc: gc,
      dg: dg,
      pts: puntos
    };

  });

};


// ================================================================
// 3.3 · equipoMasGoleador
// ================================================================

// CASO TÍPICO: UTILIZAR REDUCE PARA ENCONTRAR EL VALOR MAYOR.
//
// reduce() permite recorrer un array y quedarnos con un elemento
// que cumpla una condición.
//
// En este caso queremos encontrar el equipo que haya marcado
// más goles en total.

export const equipoMasGoleador = (partidos) => {

  // Creamos un objeto para guardar los goles de cada equipo.
  //
  // Object es un objeto que nos permite guardar información
  // utilizando propiedades.

  const golesEquipos = {};

  // Recorremos todos los partidos.
  for (let i = 0; i < partidos.length; i++) {

    const partido = partidos[i];

    // Comprobamos que el partido tenga resultado.
    // Esta comprobación depende de cómo esté programada
    // la función resultadoPartido en carga.js.

    if (resultadoPartido(partido) !== "") {

      // Sumamos los goles del equipo local.
      // Si todavía no existe, empezamos desde cero.

      if (golesEquipos[partido.equipoLocal] === undefined) {
        golesEquipos[partido.equipoLocal] = 0;
      }

      golesEquipos[partido.equipoLocal] += partido.golesLocal;

      // Sumamos los goles del equipo visitante.

      if (golesEquipos[partido.equipoVisitante] === undefined) {
        golesEquipos[partido.equipoVisitante] = 0;
      }

      golesEquipos[partido.equipoVisitante] += partido.golesVisitante;

    }
  }

  // Convertimos el objeto en un array de equipos y goles.
  // Object.entries() transforma sus propiedades en parejas:
  // [nombreEquipo, cantidadGoles].

  const equipos = Object.entries(golesEquipos);

  // CASO TÍPICO: UTILIZAR REDUCE PARA BUSCAR EL MAYOR.
  //
  // Comparamos los goles de cada equipo.
  // Nos quedamos con el que tenga más goles.

  const masGoleador = equipos.reduce((mayor, actual) => {

    if (actual[1] > mayor[1]) {
      return actual;
    }

    return mayor;

  });

  // Devolvemos el equipo que más goles ha marcado.
  return masGoleador;

};
