// Función que comprueba si un alumno tiene datos válidos.
function esAlumnoValido(texto) {

  let alumno;

  try {
    // Intentamos convertir el texto JSON.
    alumno = JSON.parse(texto);

  } catch (error) {
    // Si el JSON está mal escrito, devolvemos false.
    return false;
  }

  // Comprobamos que sea un objeto y que no sea null.
  if (typeof alumno !== 'object' || alumno === null) {
    return false;
  }

  // Comprobamos que nombre sea un texto no vacío.
  if (typeof alumno.nombre !== 'string' || alumno.nombre.trim() === '') {
    return false;
  }

  // Comprobamos que nota sea un número entre 0 y 10.
  if (typeof alumno.nota !== 'number' || alumno.nota < 0 || alumno.nota > 10) {
    return false;
  }

  // Si supera todas las comprobaciones, es válido.
  return true;
}

// Datos que vamos a comprobar.
const entradas = [
  '{"nombre":"Ana","nota":8.5}',
  '{"nombre":"Luis","nota":"9"}',
  '{"nombre":"","nota":7}',
  '{"nombre":"Marta","nota":11}',
  '{"nombre":"Pablo","nota":6',
  'null',
];

// Comprobamos todas las entradas.
for (const texto of entradas) {

  if (esAlumnoValido(texto)) {
    console.log(`✔ aceptado  ${texto}`);

  } else {
    console.log(`✘ rechazado ${texto}`);
  }
}