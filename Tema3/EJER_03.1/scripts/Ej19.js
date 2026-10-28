// 19. Selecciona el primer 'div' con clase 'info'. A partir de ahí, navega hasta su elemento padre (la tarjeta) y luego selecciona el primer hijo de esa tarjeta (la imagen).
(function() {

  const primerInfo = document.querySelector('.info');
  
  if (primerInfo && primerInfo.parentElement) {
    const imagen = primerInfo.parentElement.firstElementChild;
    console.log('Ejercicio 19:', imagen);
  }
})();