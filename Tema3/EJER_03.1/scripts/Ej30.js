// 30. Primero, selecciona solo la sección con el id 'formulario-seccion'. Luego, usando un selector aplicado a esa sección, encuentra su 'textarea' y cambia su 'placeholder' a 'Escribe aquí tu consulta'.
(function() {

  const seccionFormulario = document.getElementById('formulario-seccion');

  if (seccionFormulario) {
    const textarea = seccionFormulario.querySelector('textarea');

    if (textarea) {
      textarea.placeholder = 'Escribe aquí tu consulta';
    }
    
  }
})();
