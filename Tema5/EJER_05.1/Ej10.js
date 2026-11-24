// Base de datos simulada.
const titulos = {
  1: 'El nombre de la rosa',
  2: 'Cien años de soledad',
  3: 'Fahrenheit 451',
};

// Función para buscar libros.
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

// Función para calcular el tiempo transcurrido.
const segundosDesde = (inicio) =>
  ((Date.now() - inicio) / 1000).toFixed(1);


// 1. BÚSQUEDAS UNA DETRÁS DE OTRA.

let inicio = Date.now();

// Esperamos cada búsqueda antes de empezar la siguiente.
await buscarLibro(1);
await buscarLibro(2);
await buscarLibro(3);

console.log(`Una detrás de otra: ${segundosDesde(inicio)} s`);


// 2. BÚSQUEDAS CON PROMISE.ALL.

inicio = Date.now();

// Lanzamos las tres búsquedas al mismo tiempo.
await Promise.all([
  buscarLibro(1),
  buscarLibro(2),
  buscarLibro(3)
]);

console.log(`Con Promise.all: ${segundosDesde(inicio)} s`);


// 3. BÚSQUEDAS CON PROMISE.ALLSETTLED.

const resultados = await Promise.allSettled([
  buscarLibro(1),
  buscarLibro(99),
  buscarLibro(3)
]);

// Contamos las promesas cumplidas.
const cumplidas = resultados.filter(
  resultado => resultado.status === 'fulfilled'
).length;

// Contamos las promesas rechazadas.
const rechazadas = resultados.filter(
  resultado => resultado.status === 'rejected'
).length;

console.log(
  `allSettled: ${cumplidas} cumplidas y ${rechazadas} rechazada`
);