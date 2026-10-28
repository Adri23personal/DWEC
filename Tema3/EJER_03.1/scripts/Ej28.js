// 28. Selecciona todos los párrafos con la clase 'categoria'. Usando 'Array.prototype.map.call', crea un nuevo array que contenga solo el texto de cada categoría (ej: ['Desarrollo Web', 'Diseño', 'Desarrollo Web']). Muestra este nuevo array en la consola.
(function() {

  const categorias = document.querySelectorAll('.categoria');

  const nombresCategorias = Array.prototype.map.call(categorias, function(categoria) {
    return categoria.textContent;
  });
  
  console.log('Ejercicio 28:', nombresCategorias);
})();
