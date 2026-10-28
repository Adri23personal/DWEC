// 8. Selecciona el segundo enlace de la barra de navegación usando 'nth-child'. Muestra su texto en la consola.

(function() {

  const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');

  if (segundoEnlace) {  
    console.log('Ejercicio 8:', segundoEnlace.textContent);
  }
  
})();