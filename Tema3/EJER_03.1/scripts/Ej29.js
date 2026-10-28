// 29. Selecciona todos los enlaces de la navegación. Usa 'Array.prototype.forEach.call' para recorrerlos y añade a cada uno un atributo 'data-tipo' con el valor 'enlace-nav'.
(function() {

  const enlacesNav = document.querySelectorAll('.navegacion a');

  Array.prototype.forEach.call(enlacesNav, function(enlace) {
    enlace.setAttribute('data-tipo', 'enlace-nav');
  });
  
})();
