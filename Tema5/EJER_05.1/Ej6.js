// Función que devuelve una lista nueva.
const nuevaLista = () => ({
  propietario: 'Ana',
  productos: ['pan', 'leche']
});

// A) IGUALAR

const lista1 = nuevaLista();

// Ambas variables apuntan al mismo objeto.
const igual = lista1;

// Añadimos un producto.
igual.productos.push('huevos');

console.log('A) Igualar:');
console.log('Productos:', lista1.productos);
console.log('¿Son el mismo objeto?', lista1 === igual);


// B) COPIA SUPERFICIAL

const lista2 = nuevaLista();

// Creamos una copia superficial mediante spread.
const superficial = { ...lista2 };

// Modificamos el propietario de la copia.
superficial.propietario = 'Luis';

// Añadimos un producto al array.
superficial.productos.push('queso');

console.log('B) Copia superficial:');
console.log('Propietario original:', lista2.propietario);
console.log('Productos originales:', lista2.productos);


// C) COPIA PROFUNDA

const lista3 = nuevaLista();

// structuredClone crea una copia independiente.
const profunda = structuredClone(lista3);

// Modificamos la copia.
profunda.propietario = 'Marta';
profunda.productos.push('fruta');

console.log('C) Copia profunda:');
console.log('Original:', lista3);
console.log('Copia:', profunda);