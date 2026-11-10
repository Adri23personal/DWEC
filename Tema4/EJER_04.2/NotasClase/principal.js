const formulario = document.getElementById('formulario-notas');
const vistaPrevia = document.getElementById('vista-previa');
const tabla = document.getElementById('tabla');
const cuerpo = tabla.querySelector('tbody');
const cabecera = tabla.querySelector('thead');
const resumen = document.getElementById('resumen');

let alumnos = [];
let siguienteId = 1;
let columnaOrden = null;
let ascendente = true;

function ordenados() {
  if (!columnaOrden) return alumnos;

  const copia = [...alumnos];
  copia.sort((a, b) => {
    const resultado =
      columnaOrden === 'alumno'
        ? a.alumno.localeCompare(b.alumno)
        : a.nota - b.nota;
    return ascendente ? resultado : -resultado;
  });
  return copia;
}

function pintarResumen() {
  if (alumnos.length === 0) {
    resumen.textContent = 'Sin alumnos';
    return;
  }

  const media = alumnos.reduce((acc, a) => acc + a.nota, 0) / alumnos.length;
  const mejor = alumnos.reduce((m, a) => (a.nota > m.nota ? a : m));
  const aprobados = alumnos.filter((a) => a.nota >= 5).length;
  const todosAprueban = alumnos.every((a) => a.nota >= 5);

  resumen.textContent =
    `Nota media: ${media.toFixed(2)} | ` +
    `Mejor alumno: ${mejor.alumno} (${mejor.nota}) | ` +
    `Aprobados: ${aprobados} | ` +
    `¿Aprueban todos? ${todosAprueban ? 'Sí' : 'No'}`;
}

function pintar() {
  cuerpo.innerHTML = ordenados()
    .map(
      (a) => `
      <tr data-id="${a.id}">
        <td>${a.alumno}</td>
        <td class="${a.nota >= 5 ? 'aprobado' : 'suspenso'}">${a.nota}</td>
        <td><button data-accion="borrar">Borrar</button></td>
      </tr>`
    )
    .join('');

  pintarResumen();
}

formulario.addEventListener('input', (evento) => {
  if (evento.target.name !== 'nota') return;

  const nota = formulario.elements.nota.valueAsNumber;
  if (Number.isNaN(nota)) {
    vistaPrevia.textContent = '';
  } else {
    vistaPrevia.textContent = nota >= 5 ? 'Aprobado' : 'Suspenso';
  }
});

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const alumno = formulario.elements.alumno.value.trim();
  const nota = formulario.elements.nota.valueAsNumber;

  alumnos.push({ id: siguienteId++, alumno, nota });

  formulario.reset();
  vistaPrevia.textContent = '';
  formulario.elements.alumno.focus();
  pintar();
});

cuerpo.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-accion="borrar"]');
  if (!boton) return;

  const id = Number(boton.closest('tr').dataset.id);
  alumnos = alumnos.filter((a) => a.id !== id);
  pintar();
});

cabecera.addEventListener('click', (evento) => {
  const th = evento.target.closest('th[data-orden]');
  if (!th) return;

  const columna = th.dataset.orden;
  if (columnaOrden === columna) {
    ascendente = !ascendente;
  } else {
    columnaOrden = columna;
    ascendente = true;
  }
  pintar();
});

pintar();