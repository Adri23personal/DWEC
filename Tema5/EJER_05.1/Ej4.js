// Creamos un objeto con diferentes tipos de datos.
const mascota = {
  nombre: 'Luna',
  edad: 3,
  vacunada: true,
  vacunas: ['rabia', 'moquillo'],
  apodo: undefined,
  fechaAlta: new Date('2026-09-01T10:00:00Z'),
};

// 1. Convertimos el objeto en texto JSON.
const texto = JSON.stringify(mascota);

console.log('JSON normal:');
console.log(texto);

// 2. Convertimos el objeto en JSON con sangría de 2 espacios.
console.log('JSON con sangría:');
console.log(JSON.stringify(mascota, null, 2));

// 3. Mostramos solamente nombre y edad.
console.log('Solo nombre y edad:');
console.log(JSON.stringify(mascota, ['nombre', 'edad']));

// 4. Recuperamos el objeto a partir del texto JSON.
const recuperada = JSON.parse(texto);

// Mostramos la primera vacuna.
console.log('Primera vacuna:', recuperada.vacunas[0]);

// Comprobamos el tipo de fechaAlta.
console.log('Tipo de fechaAlta:', typeof recuperada.fechaAlta);