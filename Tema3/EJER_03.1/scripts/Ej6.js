// 6. Selecciona el párrafo que tiene el atributo 'data-precio'. Muestra su contenido en la consola.

(function() {

  const parrafoPrecio = document.querySelector('[data-precio]');

  if (parrafoPrecio) {

    console.log('Ejercicio 6:', parrafoPrecio.textContent);
    
  }
})();