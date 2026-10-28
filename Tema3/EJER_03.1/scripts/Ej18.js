// 18. Selecciona el footer. A partir de ahí, navega hasta su elemento hermano anterior (el 'main.container') y ponle un borde de 2px de color rojo.
(function() {

  const footer = document.getElementById('footer-principal');

  if (footer && footer.previousElementSibling) {
    
    footer.previousElementSibling.style.border = '2px solid red';
  }
})();
