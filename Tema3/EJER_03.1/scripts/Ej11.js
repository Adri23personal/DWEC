// 11. Añade la clase 'titulo-grande' al h1. (Puedes añadir estilos para esta clase en el CSS para ver el efecto).
(function() {
  const titulo = document.getElementById('titulo-principal');

  if (titulo) {
    
    titulo.classList.add('titulo-grande');
  }
})();