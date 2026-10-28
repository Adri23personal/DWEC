// 17. Desde el segundo 'card' (el 'premium'), selecciona el 'h2' que contiene.
(function() {
  const premiumCard = document.querySelector('.premium');

  if (premiumCard) {
    
    const h2 = premiumCard.querySelector('h2');
    console.log('Ejercicio 17:', h2);
  }
})();