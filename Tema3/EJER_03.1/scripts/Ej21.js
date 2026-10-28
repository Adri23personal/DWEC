// 21. Añade un 'event listener' al botón 'btn-info-premium'. Cuando se haga clic, debe mostrar una alerta que diga 'Información exclusiva para miembros premium'.
(function() {

  const botonPremium = document.getElementById('btn-info-premium');

  if (botonPremium) {
    botonPremium.addEventListener('click', function() {
      alert('Información exclusiva para miembros premium');
    });
    
  }
})();