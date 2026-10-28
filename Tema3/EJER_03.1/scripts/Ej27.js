// 27. Selecciona todas las tarjetas. Usando el préstamo de métodos 'Array.prototype.filter.call', crea una nueva lista que contenga solo las tarjetas que NO tengan la clase 'premium'. Luego, recorre esa nueva lista y añade un borde de 2px punteado color negro a cada una.
(function() {

  const todasLasTarjetas = document.querySelectorAll('.card');

  const tarjetasNoPremium = Array.prototype.filter.call(todasLasTarjetas, function(tarjeta) {
    return !tarjeta.classList.contains('premium');
  });

  tarjetasNoPremium.forEach(function(tarjeta) {
    tarjeta.style.border = '2px dotted black';
  });
  
})();
