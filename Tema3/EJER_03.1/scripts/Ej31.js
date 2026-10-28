// 31. Selecciona la tarjeta que contiene el curso de 'React'. Después, busca **solo dentro de esa tarjeta** el párrafo con la clase 'oculto' y añádele el texto ' (¡Oferta especial!)'.
(function() {

  const tarjetas = document.querySelectorAll('.card');
  tarjetas.forEach(function(tarjeta){

      const h2 = tarjeta.querySelector('h2');
      if(h2 && h2.textContent.includes('React')){
          const parrafoOculto = tarjeta.querySelector('.oculto');

          if(parrafoOculto){
              parrafoOculto.textContent += ' (¡Oferta especial!)';
          }
          
      }
  });
})();