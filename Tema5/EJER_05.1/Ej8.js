// Función que comprueba las unidades disponibles.
function comprobarStock(unidades) {

  // Devolvemos una promesa.
  return new Promise((resolver, rechazar) => {

    // Esperamos un segundo antes de comprobar el stock.
    setTimeout(() => {

      if (unidades > 0) {
        // Si hay unidades, cumplimos la promesa.
        resolver(`Quedan ${unidades} unidades`);

      } else {
        // Si no hay unidades, rechazamos la promesa.
        rechazar(new Error('Producto agotado'));
      }

    }, 1000);
  });
}

// Primera consulta.
console.log('Consulta enviada: 5 unidades');

comprobarStock(5)
  .then(resultado => {
    // Se ejecuta si la promesa se cumple.
    console.log(`✔ ${resultado}`);
  })
  .catch(error => {
    // Se ejecuta si la promesa falla.
    console.log(`✘ ${error.message}`);
  })
  .finally(() => {
    // Se ejecuta siempre.
    console.log('Consulta terminada');
  });

// Segunda consulta.
console.log('Consulta enviada: 0 unidades');

comprobarStock(0)
  .then(resultado => {
    console.log(`✔ ${resultado}`);
  })
  .catch(error => {
    console.log(`✘ ${error.message}`);
  })
  .finally(() => {
    console.log('Consulta terminada');
  });