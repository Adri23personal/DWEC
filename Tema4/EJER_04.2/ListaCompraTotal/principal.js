const formulario = document.getElementById('formulario-compra');
const buscador = document.getElementById('buscador');
const lista = document.getElementById('lista');
const total = document.getElementById('total');

let productos = [];
let siguienteId = 1;

function pintar() {
  const texto = buscador.value.trim().toLowerCase();
  const visibles = productos.filter((p) =>
    p.nombre.toLowerCase().includes(texto)
  );

  lista.innerHTML = visibles
    .map(
      (p) => `
      <li data-id="${p.id}">
        ${p.nombre} - ${p.precio.toFixed(2)} € x ${p.unidades}
        <button data-accion="restar">-</button>
        <button data-accion="sumar">+</button>
        <button data-accion="borrar">Borrar</button>
      </li>`
    )
    .join('');

  const suma = productos.reduce((acc, p) => acc + p.precio * p.unidades, 0);
  total.textContent = `Total: ${suma.toFixed(2)} €`;
}

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nombre = formulario.elements.producto.value.trim();
  const precio = formulario.elements.precio.valueAsNumber;
  const unidades = formulario.elements.unidades.valueAsNumber;

  const existente = productos.find(
    (p) => p.nombre.toLowerCase() === nombre.toLowerCase()
  );

  if (existente) {
    existente.unidades += unidades;
  } else {
    productos.push({ id: siguienteId++, nombre, precio, unidades });
  }

  formulario.reset();
  formulario.elements.producto.focus();
  pintar();
});

lista.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-accion]');
  if (!boton) return;

  const id = Number(boton.closest('li').dataset.id);
  const producto = productos.find((p) => p.id === id);

  const acciones = {
    sumar: () => { producto.unidades++; },
    restar: () => { if (producto.unidades > 1) producto.unidades--; },
    borrar: () => { productos = productos.filter((p) => p.id !== id); },
  };

  acciones[boton.dataset.accion]();
  pintar();
});

buscador.addEventListener('input', pintar);

formulario.addEventListener('focusin', (evento) => {
  evento.target.classList.add('activo');
});

formulario.addEventListener('focusout', (evento) => {
  evento.target.classList.remove('activo');
});

pintar();