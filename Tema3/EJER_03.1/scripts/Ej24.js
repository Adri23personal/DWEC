// 24. Selecciona todos los elementos 'h2' dentro de las tarjetas. Recórrelos y añade el texto "[CURSO]" al principio del contenido de cada uno.
(function() {

  const titulosCursos = document.querySelectorAll('.card h2');

  titulosCursos.forEach(function(titulo) {

    titulo.textContent = `[CURSO] ${titulo.textContent}`;
  });
  
})();