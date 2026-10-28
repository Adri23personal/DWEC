// 3. Selecciona el elemento con la clase 'premium' y muestra su contenido.
(function() {

  const premiumCard = document.querySelector('.premium');
  
  if (premiumCard) {
    console.log('Ejercicio 3:', premiumCard.outerHTML);
  }
})();