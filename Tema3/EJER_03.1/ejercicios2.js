
// ================================================================
// EJERCICIOS · MANIPULACIÓN DEL DOM
// ================================================================


// 1. Mostrar el texto del titular principal en consola.
console.log(document.querySelector('h1').textContent);


// 2. Contar los enlaces de la barra de navegación.
const enlaces = document.querySelectorAll('nav a');
console.log(enlaces.length);


// 3. Mostrar el contenido del curso premium.
const premium = document.querySelector('.premium');
console.log(premium.textContent);


// 4. Seleccionar todas las tarjetas de cursos.
const tarjetas = document.querySelectorAll('.curso');
console.log(tarjetas);


// 5. Seleccionar el formulario por su ID.
const formulario = document.getElementById('formulario-contacto');


// 6. Buscar el párrafo mediante su atributo de datos.
const precio = document.querySelector('[data-precio]');
console.log(precio.textContent);


// 7. Buscar el campo de correo dentro del formulario.
const correo = formulario.querySelector('input[type="email"]');


// 8. Seleccionar directamente el segundo enlace del menú.
const segundoEnlace = document.querySelector('nav a:nth-child(2)');
console.log(segundoEnlace.textContent);


// 9. Cambiar el texto del título principal.
document.querySelector('h1').textContent = 'Nueva Guía Interactiva del DOM';


// 10. Cambiar el destino del primer enlace.
document.querySelector('nav a').href = 'https://www.google.com';


// 11. Añadir una clase al título principal.
document.querySelector('h1').classList.add('titulo-grande');


// 12. Mostrar el número de cursos en el enlace de contacto.
const contacto = document.querySelector('nav a[href="#contacto"]');
contacto.textContent = `Contacto (${tarjetas.length} Cursos)`;


// 13. Cambiar la imagen del primer curso.
tarjetas[0].querySelector('img').src = 'img/hacer4.jpg';


// 14. Cambiar el texto del botón premium.
premium.querySelector('button').textContent = 'Ver Detalles Premium';


// 15. Seleccionar la tarjeta siguiente a la primera.
const siguienteTarjeta = tarjetas[0].nextElementSibling;


// 16. Desde el botón premium, subir hasta el div .info.
const botonPremium = premium.querySelector('button');
const infoPremium = botonPremium.closest('.info');


// 17. Encontrar el h2 dentro de la tarjeta premium.
const tituloPremium = premium.querySelector('h2');


// 18. Seleccionar el elemento anterior al footer y ponerle un borde.
const footer = document.querySelector('footer');
footer.previousElementSibling.style.border = '2px solid red';


// 19. Desde .info, subir a la tarjeta y seleccionar su primera imagen.
const info = document.querySelector('.info');
const tarjeta = info.parentElement;
const imagen = tarjeta.firstElementChild;


// 20. Desde el segundo enlace, buscar el h1 y cambiar su color.
segundoEnlace.closest('header').querySelector('h1').style.color = 'orange';


// 21. Mostrar una alerta al pulsar el botón premium.
botonPremium.addEventListener('click', () => {
  alert('Accediendo a información exclusiva para miembros premium');
});


// 22. Evitar que el formulario se recargue y mostrar sus datos.
formulario.addEventListener('submit', (evento) => {

  evento.preventDefault();

  const nombre = formulario.querySelector('[name="nombre"]').value;
  const mensaje = formulario.querySelector('[name="mensaje"]').value;

  console.log(nombre);
  console.log(mensaje);

});


// 23. Mostrar el párrafo oculto al pulsar el título del curso React.
const tarjetaReact = [...tarjetas].find(tarjeta =>
  tarjeta.querySelector('h2').textContent.includes('React')
);

const tituloReact = tarjetaReact.querySelector('h2');
const parrafoOculto = tarjetaReact.querySelector('p.oculto');

tituloReact.addEventListener('click', () => {
  parrafoOculto.hidden = false;
});


// 24. Añadir el prefijo [CURSO] a todos los títulos h2.
document.querySelectorAll('.curso h2').forEach(titulo => {
  titulo.textContent = '[CURSO] ' + titulo.textContent;
});


// 25. Poner fondo gris a los cursos de Desarrollo Web.
tarjetas.forEach(tarjeta => {

  const categoria = tarjeta.querySelector('.categoria');

  if (categoria.textContent === 'Desarrollo Web') {
    tarjeta.style.backgroundColor = '#f0f0f0';
  }

});


// 26. Crear un párrafo de duración para cada curso.
tarjetas.forEach(tarjeta => {

  const duracion = document.createElement('p');

  duracion.classList.add('duracion');
  duracion.textContent = 'Duración: 20 horas';

  tarjeta.querySelector('.info').appendChild(duracion);

});


// 27. Aplicar borde punteado a los cursos que no sean premium.
const cursosNormales = [...tarjetas].filter(tarjeta =>
  !tarjeta.classList.contains('premium')
);

cursosNormales.forEach(tarjeta => {
  tarjeta.style.border = '2px dotted black';
});


// 28. Crear un array con los nombres de las categorías.
const categorias = [...document.querySelectorAll('.curso .categoria')]
  .map(categoria => categoria.textContent);

console.log(categorias);


// 29. Añadir un atributo data-tipo a todos los enlaces de navegación.
document.querySelectorAll('nav a').forEach(enlace => {
  enlace.setAttribute('data-tipo', 'enlace-nav');
});


// 30. Cambiar el placeholder del textarea del formulario.
formulario.querySelector('textarea').placeholder = 'Escribe aquí tu consulta detallada';


// 31. Añadir texto al párrafo oculto del curso React.
const ofertaReact = tarjetaReact.querySelector('p.oculto');
ofertaReact.textContent += ' (¡Oferta especial!)';


// 32. Añadir una clase a todas las imágenes de los cursos.
tarjetas.forEach(tarjeta => {

  tarjeta.querySelector('img').classList.add('imagen-curso');

});
