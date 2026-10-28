// 25. Selecciona todas las tarjetas. Recórrelas y, si una tarjeta contiene un párrafo con la categoría 'Desarrollo Web', cambia el color de fondo de esa tarjeta a un tono grisáceo (#f0f0f0).
(function() {

  const tarjetas = document.querySelectorAll('.card');

  tarjetas.forEach(function(tarjeta) {
    const categoria = tarjeta.querySelector('.categoria');

    if (categoria && categoria.textContent === 'Desarrollo Web') {
      tarjeta.style.backgroundColor = '#f0f0f0';
    }
    
  });
})();