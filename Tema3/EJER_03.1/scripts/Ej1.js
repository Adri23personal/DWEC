// 1. Selecciona el h1 con id 'titulo-principal' y muestra su contenido en la consola.

(function() {

  const titulo = document.getElementById('titulo-principal');

  if (titulo) {
    console.log('Ejercicio 1:', titulo.textContent);
  }
})();