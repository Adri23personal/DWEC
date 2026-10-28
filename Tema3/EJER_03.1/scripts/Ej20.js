// 20. Selecciona el segundo enlace de la navegación. Navega hasta su padre (`<nav>`) y luego selecciona el elemento hermano anterior del padre (el `<h1>`). Cambia su color a naranja.
(function() {

  const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');
  if (segundoEnlace && segundoEnlace.parentElement && segundoEnlace.parentElement.previousElementSibling) {
    
    segundoEnlace.parentElement.previousElementSibling.style.color = 'orange';
  }
})();