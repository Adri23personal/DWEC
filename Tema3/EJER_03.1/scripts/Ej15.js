// 15. Desde el primer 'card', selecciona el siguiente elemento hermano.
(function() {
  
  const primerCard = document.querySelector('.card');
  if (primerCard) {
    console.log('Ejercicio 15:', primerCard.nextElementSibling);
  }
})();
