// Esta instrucción se ejecuta inmediatamente.
console.log('1. Salgo de casa');

// Se ejecutará después de 500 milisegundos.
setTimeout(() => {
  console.log('2. Llego al supermercado (500 ms)');
}, 500);

// Se ejecuta inmediatamente.
console.log('3. Cojo el carro');

// Se ejecutará después de 0 milisegundos.
setTimeout(() => {
  console.log('4. Pago en caja (0 ms)');
}, 0);

// Se ejecutará después de 1000 milisegundos.
setTimeout(() => {
  console.log('5. Vuelvo a casa (1000 ms)');
}, 1000);

// Se ejecuta inmediatamente.
console.log('6. Hago la lista');