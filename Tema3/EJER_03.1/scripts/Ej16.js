// 16. Desde el botón 'btn-info-premium', selecciona su elemento padre (el div con clase 'info').
(function() {

  const botonPremium = document.getElementById('btn-info-premium');

  if (botonPremium) {
    console.log('Ejercicio 16:', botonPremium.parentElement);
  }
  
})();