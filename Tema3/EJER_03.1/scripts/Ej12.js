// 12. Modifica el texto del último enlace de la navegación (Contacto) para que muestre dinámicamente el número de cursos (tarjetas) disponibles. El texto final debería ser, por ejemplo: "Contacto (3 Cursos)"
(function() {
  const numCursos = document.querySelectorAll('.card').length;

  const enlaceContacto = document.querySelector('.navegacion a:last-child');
  
  if (enlaceContacto) {
    enlaceContacto.textContent = `Contacto (${numCursos} Cursos)`;
  }
})();