// Nombre y apellidos: ______________________________

import { peliculas } from './datos.js';

// ============================================================
// Elementos de la página (ya seleccionados: no los cambies)
// ============================================================
const formularioFiltros = document.querySelector('#formulario-filtros');
const cartelera = document.querySelector('#cartelera');
const contador = document.querySelector('#contador');
const listaReservas = document.querySelector('#lista-reservas');
const totalReservas = document.querySelector('#total-reservas');
const mensajeReservas = document.querySelector('#mensaje-reservas');
const formularioReserva = document.querySelector('#formulario-reserva');
const resultado = document.querySelector('#resultado');

// Se desactiva la validación del navegador: los mensajes los muestras tú (apartado 4)
formularioReserva.noValidate = true;

// Entradas reservadas (apartado 3)
let reservas = [];


// ============================================================
// APARTADO 1 · La cartelera
// ============================================================

// 1.1
const crearTarjeta = (pelicula) => {
  const tarjeta = document.createElement('li');

  tarjeta.classList.add(
    'tarjeta',
    `prioridad-${pelicula.prioridad}`
  )

  tarjeta.dataset.id = pelicula.id;

  const titulo = document.createElement('strong');

  titulo.classList.add('titulo');

  titulo.textContent = tareasIniciales.titulo;

  const estaDisponible = document.createElement('span');
  //const meta = document.createElement('span');

  estaDisponible.classList.add('agotada');
  estaDisponible.classList.add('disponible');

  estaDisponible.textContent = `${pelicula.genero.duracion} · ${pelicula.duracion} min · ${pelicula.precio} · ${pelicula.disponible}`;

  const reservar = document.createElement('button');

  reservar.type = 'button';

  reservar.dataset.accion = 'reservar';

  reservar.textContent = '←';

  const posicion = estados.indexOf(pelicula.estado);

  reservar.disabled = posicion == estados.length - 1;

  tarjeta.append(
    titulo,
    estaDisponible,
    reservar
  );

  return tarjeta;


};

// 1.2
const pintarCartelera = (lista) => {
  estados.forEach(estado => {

      columnas[estado].textContent = '';

  })

  const grupos = agruparPorEstado(lista);

  estados.forEach(estado => {

        grupos[estado].forEach(tarea => {

            const tarjeta = crearTarjeta(tarea);

            columnas[estado].append(tarjeta);

        });

        
        contadores[estado].textContent = grupos[estado].length;

    });

};


// ============================================================
// APARTADO 2 · Filtros y orden
// ============================================================

// 2.1
const filtrarPeliculas = (lista, genero, soloDisponibles) => {
  // TU CÓDIGO AQUÍ
};

// 2.2
const ordenarPeliculas = (lista, criterio) => {
  // TU CÓDIGO AQUÍ
};

// 2.3
const actualizarCartelera = () => {
  // TU CÓDIGO AQUÍ
};

// 2.4 · Eventos de los filtros
// TU CÓDIGO AQUÍ


// ============================================================
// APARTADO 3 · Entradas reservadas
// ============================================================

// 3.1
const anadirReserva = (pelicula) => {
  const mayorId = pelicula.reduce((mayor, movie) => {

    return Math.max(mayor, movie.id);
  }, 0);

  const nuevaReserva =  {

    id: pelicula.id,
    titulo: pelicula.titulo,
    precio: pelicula.precio,
    cantidad: pelicula.cantidad

  }

  reservas.find((reserva) => reserva.id === pelicula.id)
/*
  if(reserva.isEmpty) {
        pelicula.cantidad = 1
      } else {
        pelicula.cantidad + 1;
      }
*/
  reservas.push(nuevaReserva);

  return nuevaReserva;
};

// 3.2
const eliminarReserva = (id) => {
  const reservas = peliculas.filter(function(pelicula) {
        return pelicula.id === id;
    });

    return reservas;
};

// 3.3
const calcularTotal = (lista) => {
  // TU CÓDIGO AQUÍ
};

// 3.4
const pintarReservas = () => {
  const reser = reservas.elements.reser.value;

  reser = reservas.reduce(
        (precio, cantidad) => precio * cantidad,
        0
    );

    return reservas;
};

// 3.5 · Eventos de la cartelera y de la lista de entradas
// TU CÓDIGO AQUÍ


// ============================================================
// APARTADO 4 · Formulario de reserva y validación
// ============================================================

// 4.1
const mostrarError = (campo) => {
  // TU CÓDIGO AQUÍ
};

// 4.2
const comprobarReglas = () => {

  let fechaActual = new Date().toISOString().slice(0,10);

  if (campo.fecha < fechaActual) {
  fecha.setCustomValidity("La fecha no puede ser anterior a hoy");
  } else {
  fecha.setCustomValidity('');
}

};

// 4.3 · Eventos focusout e input del formulario


const errores = campos.filter(campo =>
        !validarCampo(campo)
    );

// 4.4 · Evento submit del formulario
formularioReserva.addEventListener('submit', (event) => {

    event.preventDefault();
    
    comprobarReglas();

    const campos = Array.from(
        formularioTarea.elements).filter(campo =>
        campo.matches('input, select, textarea')
    );

    const errores = campos.filter(campo =>
        !validarCampo(campo)
    );

    if (errores.length > 0) {
        errores[0].focus();
        return;

    }

    const formData = new FormData(formularioReserva);

    const datos = {

        titulo: formData.get('titulo').trim(),

        genero: formData.get('genero'),

        duracion: Number(formData.get('duracion')),

        precio: formData.get('precio'),

        disponible: formData.get('disponible')

    };

    anadirPelicula(datos);

    limpiarFormulario();

    mensajeFormulario.textContent =
        `Pelicula añadida: ${pelicula.titulo}`;

    repintar();

});


// ============================================================
// ARRANQUE · al cargar la página (apartados 2.4 y 3.5)
// ============================================================
// TU CÓDIGO AQUÍ
