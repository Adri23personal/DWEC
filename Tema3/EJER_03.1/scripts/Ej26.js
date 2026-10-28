// 26. Para cada tarjeta, crea un nuevo elemento 'p' con el texto 'Duración: 20 horas' y una clase 'duracion'. Añádelo dentro del div con clase 'info'.
(function() {

  const infos = document.querySelectorAll('.card .info');

  infos.forEach(function(info) {

    const pDuracion = document.createElement('p');
    pDuracion.textContent = 'Duración: 20 horas';
    pDuracion.classList.add('duracion');
    info.appendChild(pDuracion);
  });
  
})();