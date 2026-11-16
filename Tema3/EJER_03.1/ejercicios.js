
// ================================================================
// RETO · MANIPULACIÓN DEL DOM
// ================================================================


// 1. Seleccionar el h1 por su ID y mostrar su texto.
(function() {
  const titulo = document.getElementById('titulo-principal');

  if (titulo) {
    console.log('Ejercicio 1:', titulo.textContent);
  }
})();


// 2. Seleccionar todos los enlaces de navegación y contar cuántos hay.
(function() {
  const enlaces = document.querySelectorAll('.navegacion a');

  // length indica el número de elementos.
  console.log(`Ejercicio 2: Hay ${enlaces.length} enlaces.`);
})();


// 3. Seleccionar el elemento premium y mostrar su HTML.
(function() {
  const premiumCard = document.querySelector('.premium');

  if (premiumCard) {
    console.log('Ejercicio 3:', premiumCard.outerHTML);
  }
})();


// 4. Seleccionar todas las tarjetas.
(function() {
  const tarjetas = document.querySelectorAll('.card');

  console.log('Ejercicio 4:', tarjetas);
})();


// 5. Seleccionar el formulario mediante su ID.
(function() {
  const formulario = document.getElementById('formulario-contacto');

  console.log('Ejercicio 5:', formulario);
})();


// 6. Seleccionar un elemento mediante su atributo data-precio.
(function() {
  const parrafoPrecio = document.querySelector('[data-precio]');

  if (parrafoPrecio) {
    console.log('Ejercicio 6:', parrafoPrecio.textContent);
  }
})();


// 7. Seleccionar el input email que está dentro del formulario.
(function() {
  const inputEmail = document.querySelector('#formulario-contacto input[type="email"]');

  console.log('Ejercicio 7:', inputEmail);
})();


// 8. Seleccionar directamente el segundo enlace.
(function() {
  const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');

  if (segundoEnlace) {
    console.log('Ejercicio 8:', segundoEnlace.textContent);
  }
})();


// 9. Cambiar el texto del h1.
(function() {
  const titulo = document.getElementById('titulo-principal');

  if (titulo) {
    titulo.textContent = 'Nueva Guía del DOM';
  }
})();


// 10. Cambiar el destino del primer enlace.
(function() {
  const primerEnlace = document.querySelector('.navegacion a');

  if (primerEnlace) {
    primerEnlace.href = 'https://www.google.com';
  }
})();


// 11. Añadir una clase al h1.
(function() {
  const titulo = document.getElementById('titulo-principal');

  if (titulo) {
    titulo.classList.add('titulo-grande');
  }
})();


// 12. Mostrar el número de cursos en el enlace de contacto.
(function() {
  const numCursos = document.querySelectorAll('.card').length;
  const enlaceContacto = document.querySelector('.navegacion a:last-child');

  if (enlaceContacto) {
    enlaceContacto.textContent = `Contacto (${numCursos} Cursos)`;
  }
})();


// 13. Cambiar la imagen del primer curso.
(function() {
  const primeraImagen = document.querySelector('.card img');

  if (primeraImagen) {
    primeraImagen.src = 'img/hacer4.jpg';
  }
})();


// 14. Cambiar el texto del botón premium.
(function() {
  const botonPremium = document.getElementById('btn-info-premium');

  if (botonPremium) {
    botonPremium.textContent = 'Ver Más';
  }
})();


// 15. Seleccionar el siguiente hermano de la primera tarjeta.
(function() {
  const primerCard = document.querySelector('.card');

  if (primerCard) {
    console.log('Ejercicio 15:', primerCard.nextElementSibling);
  }
})();


// 16. Desde el botón premium, seleccionar su elemento padre.
(function() {
  const botonPremium = document.getElementById('btn-info-premium');

  if (botonPremium) {
    console.log('Ejercicio 16:', botonPremium.parentElement);
  }
})();


// 17. Seleccionar el h2 que está dentro de la tarjeta premium.
(function() {
  const premiumCard = document.querySelector('.premium');

  if (premiumCard) {
    const h2 = premiumCard.querySelector('h2');

    console.log('Ejercicio 17:', h2);
  }
})();


// 18. Desde el footer, seleccionar el hermano anterior y ponerle un borde.
(function() {
  const footer = document.getElementById('footer-principal');

  if (footer && footer.previousElementSibling) {
    footer.previousElementSibling.style.border = '2px solid red';
  }
})();


// 19. Desde .info, subir al padre y seleccionar su primer hijo.
(function() {
  const primerInfo = document.querySelector('.info');

  if (primerInfo && primerInfo.parentElement) {
    const imagen = primerInfo.parentElement.firstElementChild;

    console.log('Ejercicio 19:', imagen);
  }
})();


// 20. Desde el segundo enlace, subir al padre y seleccionar su hermano anterior.
(function() {
  const segundoEnlace = document.querySelector('.navegacion a:nth-child(2)');

  if (segundoEnlace && segundoEnlace.parentElement && segundoEnlace.parentElement.previousElementSibling) {
    segundoEnlace.parentElement.previousElementSibling.style.color = 'orange';
  }
})();


// 21. Mostrar una alerta al pulsar el botón premium.
(function() {
  const botonPremium = document.getElementById('btn-info-premium');

  if (botonPremium) {
    botonPremium.addEventListener('click', function() {
      alert('Información exclusiva para miembros premium');
    });
  }
})();


// 22. Evitar que el formulario se recargue y mostrar sus valores.
(function() {
  const formulario = document.getElementById('formulario-contacto');

  if (formulario) {
    formulario.addEventListener('submit', function(event) {

      // preventDefault() evita el comportamiento predeterminado.
      event.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const mensaje = document.getElementById('mensaje').value;

      console.log('Ejercicio 22: Nombre:', nombre, 'Mensaje:', mensaje);
    });
  }
})();


// 23. Mostrar el párrafo oculto al pulsar el h2 de la tercera tarjeta.
(function() {
  const cards = document.querySelectorAll('.card');
  const tercerCard = cards[2];

  if (tercerCard) {
    const h2React = tercerCard.querySelector('h2');
    const parrafoOculto = tercerCard.querySelector('.oculto');

    if (h2React && parrafoOculto) {
      h2React.addEventListener('click', function() {
        parrafoOculto.classList.remove('oculto');
      });
    }
  }
})();


// 24. Añadir el prefijo [CURSO] a todos los h2.
(function() {
  const titulosCursos = document.querySelectorAll('.card h2');

  titulosCursos.forEach(function(titulo) {
    titulo.textContent = `[CURSO] ${titulo.textContent}`;
  });
})();


// 25. Poner fondo gris a las tarjetas de Desarrollo Web.
(function() {
  const tarjetas = document.querySelectorAll('.card');

  tarjetas.forEach(function(tarjeta) {
    const categoria = tarjeta.querySelector('.categoria');

    if (categoria && categoria.textContent === 'Desarrollo Web') {
      tarjeta.style.backgroundColor = '#f0f0f0';
    }
  });
})();


// 26. Crear un párrafo de duración y añadirlo a cada tarjeta.
(function() {
  const infos = document.querySelectorAll('.card .info');

  infos.forEach(function(info) {
    const pDuracion = document.createElement('p');

    pDuracion.textContent = 'Duración: 20 horas';
    pDuracion.classList.add('duracion');

    info.appendChild(pDuracion);
  });
})();


// 27. Filtrar las tarjetas que NO sean premium y ponerles un borde.
(function() {
  const todasLasTarjetas = document.querySelectorAll('.card');

  // filter() crea una lista nueva con los elementos que cumplen.
  // ! significa NEGACIÓN.
  const tarjetasNoPremium = Array.prototype.filter.call(todasLasTarjetas, function(tarjeta) {
    return !tarjeta.classList.contains('premium');
  });

  tarjetasNoPremium.forEach(function(tarjeta) {
    tarjeta.style.border = '2px dotted black';
  });
})();


// 28. Crear un array con los nombres de las categorías.
(function() {
  const categorias = document.querySelectorAll('.categoria');

  // map() transforma la colección en un array con sus textos.
  const nombresCategorias = Array.prototype.map.call(categorias, function(categoria) {
    return categoria.textContent;
  });

  console.log('Ejercicio 28:', nombresCategorias);
})();


// 29. Añadir un atributo data-tipo a todos los enlaces.
(function() {
  const enlacesNav = document.querySelectorAll('.navegacion a');

  Array.prototype.forEach.call(enlacesNav, function(enlace) {
    enlace.setAttribute('data-tipo', 'enlace-nav');
  });
})();


// 30. Cambiar el placeholder del textarea del formulario.
(function() {
  const seccionFormulario = document.getElementById('formulario-seccion');

  if (seccionFormulario) {
    const textarea = seccionFormulario.querySelector('textarea');

    if (textarea) {
      textarea.placeholder = 'Escribe aquí tu consulta';
    }
  }
})();


// 31. Buscar la tarjeta de React y añadir texto a su párrafo oculto.
(function() {
  const tarjetas = document.querySelectorAll('.card');

  tarjetas.forEach(function(tarjeta) {
    const h2 = tarjeta.querySelector('h2');

    if (h2 && h2.textContent.includes('React')) {
      const parrafoOculto = tarjeta.querySelector('.oculto');

      if (parrafoOculto) {
        parrafoOculto.textContent += ' (¡Oferta especial!)';
      }
    }
  });
})();


// 32. Añadir una clase a las imágenes de todas las tarjetas.
(function() {
  const tarjetas = document.querySelectorAll('.card');

  tarjetas.forEach(function(tarjeta) {
    const img = tarjeta.querySelector('img');

    if (img) {
      img.classList.add('imagen-curso');
    }
  });
})();
