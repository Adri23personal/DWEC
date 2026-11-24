// Base de datos simulada.
const titulos = {
  1: 'El nombre de la rosa',
  2: 'Cien años de soledad',
  3: 'Fahrenheit 451',
};

// Función que simula la búsqueda.
const buscarLibro = (id) =>
  new Promise((resolver, rechazar) => {

    setTimeout(() => {

      if (titulos[id]) {
        resolver({ id, titulo: titulos[id] });

      } else {
        rechazar(new Error(`No existe ningún libro con id ${id}`));
      }

    }, 500);
  });

// Texto JSON con los identificadores.
const textoIds = '[3, 1, 99, 2]';

// Variable para guardar los identificadores.
let ids;

try {
  // Convertimos el texto JSON en un array.
  ids = JSON.parse(textoIds);

  // Comprobamos que realmente sea un array.
  if (!Array.isArray(ids)) {
    throw new Error('El contenido JSON no es un array');
  }

} catch (error) {
  // Si hay un error, mostramos el mensaje.
  console.log('Error al leer los identificadores:', error.message);

  // Terminamos la ejecución.
  process.exitCode = 1;
}

// Continuamos si los identificadores son válidos.
if (Array.isArray(ids)) {

  // Creamos todas las promesas simultáneamente.
  const resultados = await Promise.allSettled(
    ids.map((id) => buscarLibro(id))
  );

  // Contadores para el resumen.
  let encontrados = 0;
  let noEncontrados = 0;

  // Recorremos los resultados.
  for (let i = 0; i < resultados.length; i++) {

    const resultado = resultados[i];

    if (resultado.status === 'fulfilled') {

      // Si el libro existe, mostramos su título.
      console.log(`✔ ${ids[i]} · ${resultado.value.titulo}`);

      encontrados++;

    } else {

      // Si no existe, mostramos el error.
      console.log(`✘ ${ids[i]} · ${resultado.reason.message}`);

      noEncontrados++;
    }
  }

  // Mostramos el resumen final.
  console.log(
    `${encontrados} encontrados y ${noEncontrados} no existen`
  );
}