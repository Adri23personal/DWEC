// 32. Selecciona todas las tarjetas. Recorre la lista con un bucle. En cada iteración, selecciona **solo dentro de la tarjeta actual** el elemento 'img' y añádele la clase 'imagen-curso'.
(function() {

  const tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(function(tarjeta) {
    const img = tarjeta.querySelector('img');

    if (img) {
      img.classList.add('imagen-curso');
    }
    
  });
})();