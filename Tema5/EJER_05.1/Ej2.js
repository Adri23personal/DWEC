// Función que divide dos números.
function dividir(a, b) {

  // Comprobamos que el divisor no sea cero.
  if (b === 0) {
    throw new RangeError('No se puede dividir entre cero');
  }

  // Si todo está correcto, devolvemos la división.
  return a / b;
}

// Array con las operaciones que queremos realizar.
const operaciones = [[10, 2], [5, 0], [7, 4]];

// Recorremos todas las operaciones.
for (const [a, b] of operaciones) {

  try {
    // Intentamos realizar la división.
    console.log(`${a} / ${b} = ${dividir(a, b)}`);

  } catch (error) {
    // Si ocurre un error, mostramos su nombre y mensaje.
    console.log(`${error.name}: ${error.message}`);

  } finally {
    // Esta línea siempre se ejecuta.
    console.log('Operación terminada');
  }
}