// 10. Cambia el 'href' del primer enlace de la navegación para que apunte a 'https://www.google.com'.
(function() {
  const primerEnlace = document.querySelector('.navegacion a');

  if (primerEnlace) {
    primerEnlace.href = 'https://www.google.com';
  }
  
})();