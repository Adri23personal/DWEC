// 9. Cambia el texto del h1 seleccionado en el punto 1 por 'Nueva Guía del DOM'.
(function() {

  const titulo = document.getElementById('titulo-principal');

  if (titulo) {
    titulo.textContent = 'Nueva Guía del DOM';
  }
  
})();