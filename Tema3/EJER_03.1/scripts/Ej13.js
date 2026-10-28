// 13. Selecciona la imagen del primer 'card' y cambia su 'src' por 'img/hacer4.jpg'.
(function() {
  const primeraImagen = document.querySelector('.card img');
  
  if (primeraImagen) {
    primeraImagen.src = 'img/hacer4.jpg';
  }
})();