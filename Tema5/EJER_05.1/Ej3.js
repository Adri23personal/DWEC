// Array con diferentes textos JSON.
const textos = [
  '{"nombre":"Ana","edad":19}',
  "{'nombre':'Luis'}",
  '{"activo":true,}',
  '[1, 2, 3]',
  '{nombre:"Marta"}',
  '{"curso":"2DAW"',
];

// Recorremos cada texto.
for (const texto of textos) {

  try {
    // Intentamos convertir el texto en un objeto JavaScript.
    const resultado = JSON.parse(texto);

    // Si funciona, mostramos el tipo del resultado.
    console.log(`✔ ${texto} → ${typeof resultado}`);

  } catch (error) {
    // Si falla, mostramos el nombre del error.
    console.log(`✘ ${texto} → ${error.name}`);
  }
}

// Array con las versiones corregidas de los textos inválidos.
const corregidos = [
  '{"nombre":"Luis"}',
  '{"activo":true}',
  '{"nombre":"Marta"}',
  '{"curso":"2DAW"}',
];

// Comprobamos que todos los textos corregidos son válidos.
for (const texto of corregidos) {
  try {
    JSON.parse(texto);
    console.log(`JSON corregido correctamente: ${texto}`);

  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}