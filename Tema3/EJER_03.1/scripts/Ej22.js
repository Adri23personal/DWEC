// 22. Añade un 'event listener' al formulario 'formulario-contacto'. Al enviarse (evento 'submit'), debe prevenir el comportamiento por defecto y mostrar en la consola los valores de los campos de nombre y mensaje.
(function() {
  const formulario = document.getElementById('formulario-contacto');

  if (formulario) {

    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const mensaje = document.getElementById('mensaje').value;
      console.log('Ejercicio 22: Nombre:', nombre, 'Mensaje:', mensaje);
    });
    
  }
})();