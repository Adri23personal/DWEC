// Simulamos una base de datos de libros.
const titulos = {
  1: 'El nombre de la rosa',
  2: 'Cien años de soledad',
  3: 'Fahrenheit 451',
};

// Función que simula una búsqueda de un libro.
const buscarLibro = (id) =>
  new Promise((resolver, rechazar) => {

    setTimeout(() => {

      if (titulos[id]) {
        // Si existe, devolvemos el libro.
        resolver({ id, titulo: titulos[id] });

      } else {
        // Si no existe, rechazamos la promesa.
        rechazar(new Error(`No existe ningún libro con id ${id}`));
      }

    }, 500);
  });

// Función asíncrona para mostrar varios títulos.
async function mostrarTitulos(ids) {

  // Recorremos los identificadores.
  for (const id of ids) {

    try {
      // Esperamos a que termine la búsqueda.
      const libro = await buscarLibro(id);

      // Mostramos el identificador y el título.
      console.log(`${libro.id}: ${libro.titulo}`);

    } catch (error) {
      // Capturamos el error sin detener el resto de búsquedas.
      console.log(`${id}: ✘ ${error.message}`);
    }
  }

  // Mensaje final.
  console.log('Fin de la búsqueda');
}

// Ejecutamos la función.
await mostrarTitulos([1, 99, 2, 3]);