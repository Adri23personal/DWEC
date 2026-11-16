
// Nombre y apellidos: ______________________________

import { tareasIniciales } from './datos.js';

// ============================================================
// CONSTANTES Y ELEMENTOS DE LA PÁGINA
// ============================================================

const ESTADOS = ['porhacer', 'encurso', 'hecha'];
const LIMITE_HORAS = 40;

const formularioTarea = document.querySelector('#formulario-tarea');
const campoHoras = formularioTarea.elements.horas;
const mensajeFormulario = document.querySelector('#mensaje-formulario');
const buscador = document.querySelector('#buscador');
const botonArchivar = document.querySelector('#boton-archivar');
const tablero = document.querySelector('#tablero');
const listaHoras = document.querySelector('#horas-asignatura');
const progreso = document.querySelector('#progreso');

const columnas = {
    porhacer: document.querySelector('#col-porhacer'),
    encurso: document.querySelector('#col-encurso'),
    hecha: document.querySelector('#col-hecha')
};

const contadores = {
    porhacer: document.querySelector('#num-porhacer'),
    encurso: document.querySelector('#num-encurso'),
    hecha: document.querySelector('#num-hecha')
};

// Desactivamos la validación automática del navegador.
formularioTarea.noValidate = true;

// Copia de las tareas originales.
let tareas = tareasIniciales.map(tarea => ({ ...tarea }));

// Función para repintar toda la página.
const repintar = () => {
    pintarTablero(buscarTareas(tareas, buscador.value));
    pintarResumen(tareas);
};


// ============================================================
// APARTADO 1 · FORMULARIO Y VALIDACIÓN
// ============================================================

// 1.1 · MENSAJE DE ERROR

const mensajeDeError = (campo) => {

    const validity = campo.validity;

    if (validity.valueMissing) {
        return 'Este campo es obligatorio';
    }

    if (validity.tooShort) {
        return `Escribe al menos ${campo.minLength} caracteres`;
    }

    if (validity.rangeUnderflow || validity.rangeOverflow) {
        return `Debe estar entre ${campo.min} y ${campo.max}`;
    }

    if (validity.customError) {
        return campo.validationMessage;
    }

    return '';
};


// 1.2 · VALIDAR CAMPO

const validarCampo = (campo) => {

    const mensaje = mensajeDeError(campo);

    // El mensaje se escribe en el elemento siguiente al campo.
    const zonaError = campo.nextElementSibling;

    if (zonaError && zonaError.classList.contains('error')) {
        zonaError.textContent = mensaje;
    }

    // Marcamos el campo si tiene errores.
    if (mensaje !== '') {
        campo.classList.add('invalido');
        return false;
    } else {
        campo.classList.remove('invalido');
        return true;
    }

};


// 1.3 · COMPROBAR HORAS

const comprobarHoras = () => {

    // Sumamos las horas de las tareas que no están hechas.
    const pendientes = tareas
        .filter(tarea => tarea.estado !== 'hecha')
        .reduce((suma, tarea) => suma + tarea.horas, 0);

    // Si el campo está vacío, contamos cero horas.
    const horasNuevas = campoHoras.value === ''
        ? 0
        : campoHoras.valueAsNumber;

    // Comprobamos que no se supere el límite.
    if (pendientes + horasNuevas > LIMITE_HORAS) {

        campoHoras.setCustomValidity(
            `Superas el límite de 40 h pendientes (ahora hay ${pendientes} h)`
        );

    } else {

        // Quitamos el error personalizado.
        campoHoras.setCustomValidity('');

    }

};


// 1.4 · LIMPIAR FORMULARIO

const limpiarFormulario = () => {

    // Recuperamos los valores iniciales del formulario.
    formularioTarea.reset();

    // Quitamos todos los errores.
    const campos = formularioTarea.querySelectorAll(
        'input, select, textarea'
    );

    campos.forEach(campo => {

        campo.classList.remove('invalido');

        campo.setCustomValidity('');

        const zonaError = campo.nextElementSibling;

        if (zonaError && zonaError.classList.contains('error')) {
            zonaError.textContent = '';
        }

    });

    // Limpiamos el mensaje.
    mensajeFormulario.textContent = '';

};


// 1.5 · EVENTOS DEL FORMULARIO

// Evento CHANGE.
formularioTarea.addEventListener('change', (event) => {

    const campo = event.target;

    if (campo.matches('input, select, textarea')) {

        comprobarHoras();

        validarCampo(campo);

    }

});


// Evento INPUT.
formularioTarea.addEventListener('input', (event) => {

    const campo = event.target;

    // Solo validamos si el campo ya tenía un error.
    if (
        campo.matches('input, select, textarea') &&
        campo.classList.contains('invalido')
    ) {

        comprobarHoras();

        validarCampo(campo);

    }

});


// Evento KEYDOWN.
formularioTarea.addEventListener('keydown', (event) => {

    if (event.key === 'Escape') {

        event.preventDefault();

        limpiarFormulario();

    }

});


// ============================================================
// APARTADO 2 · CÁLCULOS CON LOS DATOS
// ============================================================

// 2.1 · BUSCAR TAREAS

const buscarTareas = (lista, texto) => {

    const busqueda = texto.trim().toLowerCase();

    // Si no hay texto, devolvemos todas las tareas.
    if (busqueda === '') {
        return [...lista];
    }

    return lista.filter(tarea =>

        tarea.titulo.toLowerCase().includes(busqueda) ||
        tarea.asignatura.toLowerCase().includes(busqueda)

    );

};


// 2.2 · AGRUPAR POR ESTADO

const agruparPorEstado = (lista) => {

    return {
        porhacer: lista.filter(tarea => tarea.estado === 'porhacer'),

        encurso: lista.filter(tarea => tarea.estado === 'encurso'),

        hecha: lista.filter(tarea => tarea.estado === 'hecha')
    };

};


// 2.3 · HORAS POR ASIGNATURA

const horasPorAsignatura = (lista) => {

    // Sumamos las horas de cada asignatura.
    const agrupadas = lista.reduce((acumulador, tarea) => {

        if (!acumulador[tarea.asignatura]) {
            acumulador[tarea.asignatura] = 0;
        }

        acumulador[tarea.asignatura] += tarea.horas;

        return acumulador;

    }, {});

    // Convertimos el objeto en un array.
    return Object.entries(agrupadas)

        .map(([asignatura, horas]) => ({
            asignatura,
            horas
        }))

        // Ordenamos de más horas a menos.
        .sort((a, b) => {

            if (b.horas !== a.horas) {
                return b.horas - a.horas;
            }

            return a.asignatura.localeCompare(b.asignatura);

        });

};


// ============================================================
// APARTADO 3 · PINTAR LA PÁGINA
// ============================================================

// 3.1 · CREAR TARJETA

const crearTarjeta = (tarea) => {

    // Creamos el elemento li.
    const tarjeta = document.createElement('li');

    tarjeta.classList.add(
        'tarjeta',
        `prioridad-${tarea.prioridad}`
    );

    tarjeta.dataset.id = tarea.id;

    // Creamos el título.
    const titulo = document.createElement('strong');

    titulo.classList.add('titulo');

    titulo.textContent = tarea.titulo;

    // Creamos la información.
    const meta = document.createElement('span');

    meta.classList.add('meta');

    meta.textContent = `${tarea.asignatura} · ${tarea.horas} h`;

    // Creamos el botón para retroceder.
    const retroceder = document.createElement('button');

    retroceder.type = 'button';

    retroceder.dataset.accion = 'retroceder';

    retroceder.textContent = '←';

    // Creamos el botón para avanzar.
    const avanzar = document.createElement('button');

    avanzar.type = 'button';

    avanzar.dataset.accion = 'avanzar';

    avanzar.textContent = '→';

    // Buscamos la posición del estado.
    const posicion = ESTADOS.indexOf(tarea.estado);

    // Desactivamos los botones según la columna.
    retroceder.disabled = posicion === 0;

    avanzar.disabled = posicion === ESTADOS.length - 1;

    // Añadimos los elementos a la tarjeta.
    tarjeta.append(
        titulo,
        meta,
        retroceder,
        avanzar
    );

    return tarjeta;

};


// 3.2 · PINTAR TABLERO

const pintarTablero = (lista) => {

    // Vaciamos las columnas.
    ESTADOS.forEach(estado => {

        columnas[estado].textContent = '';

    });

    // Agrupamos las tareas por estado.
    const grupos = agruparPorEstado(lista);

    // Pintamos cada columna.
    ESTADOS.forEach(estado => {

        grupos[estado].forEach(tarea => {

            const tarjeta = crearTarjeta(tarea);

            columnas[estado].append(tarjeta);

        });

        // Actualizamos el contador.
        contadores[estado].textContent = grupos[estado].length;

    });

};


// 3.3 · PINTAR RESUMEN

const pintarResumen = (lista) => {

    // Limpiamos la lista de horas.
    listaHoras.textContent = '';

    // Obtenemos las horas por asignatura.
    const resumen = horasPorAsignatura(lista);

    resumen.forEach(elemento => {

        const li = document.createElement('li');

        li.textContent = `${elemento.asignatura} — ${elemento.horas} h`;

        listaHoras.append(li);

    });

    // Calculamos el progreso.
    const total = lista.length;

    const hechas = lista.filter(
        tarea => tarea.estado === 'hecha'
    ).length;

    // Evitamos dividir entre cero.
    const porcentaje = total === 0
        ? 0
        : Math.round((hechas / total) * 100);

    progreso.textContent =
        `Hechas: ${hechas} de ${total} (${porcentaje} %)`;

};


// ============================================================
// APARTADO 4 · INTERACCIÓN
// ============================================================

// 4.1 · MOVER TAREA

const moverTarea = (id, paso) => {

    // Buscamos la tarea.
    const tarea = tareas.find(tarea => tarea.id === id);

    // Si no existe, no hacemos nada.
    if (!tarea) {
        return;
    }

    // Obtenemos su posición actual.
    const posicion = ESTADOS.indexOf(tarea.estado);

    // Calculamos la nueva posición.
    const nuevaPosicion = posicion + paso;

    // Comprobamos que esté dentro de los estados permitidos.
    if (
        nuevaPosicion < 0 ||
        nuevaPosicion >= ESTADOS.length
    ) {
        return;
    }

    // Cambiamos el estado.
    tarea.estado = ESTADOS[nuevaPosicion];

};


// 4.2 · AÑADIR TAREA

const anadirTarea = (datos) => {

    // Calculamos el siguiente ID.
    const mayorId = tareas.reduce((mayor, tarea) => {

        return Math.max(mayor, tarea.id);

    }, 0);

    // Creamos la nueva tarea.
    const nuevaTarea = {

        id: mayorId + 1,

        titulo: datos.titulo,

        asignatura: datos.asignatura,

        horas: datos.horas,

        estado: 'porhacer',

        prioridad: datos.prioridad

    };

    // Añadimos la tarea al array.
    tareas.push(nuevaTarea);

    return nuevaTarea;

};


// 4.3 · ARCHIVAR TAREAS HECHAS

const archivarHechas = () => {

    // Guardamos cuántas tareas están hechas.
    const cantidad = tareas.filter(
        tarea => tarea.estado === 'hecha'
    ).length;

    // Eliminamos las tareas hechas.
    tareas = tareas.filter(
        tarea => tarea.estado !== 'hecha'
    );

    return cantidad;

};


// 4.4 · EVENTOS DEL TABLERO

// Un único evento CLICK en el tablero.
tablero.addEventListener('click', (event) => {

    // Buscamos el botón pulsado.
    const boton = event.target.closest('button[data-accion]');

    if (!boton) {
        return;
    }

    // Buscamos la tarjeta.
    const tarjeta = boton.closest('.tarjeta');

    if (!tarjeta) {
        return;
    }

    // Obtenemos el ID.
    const id = Number(tarjeta.dataset.id);

    // Movemos la tarea según el botón.
    if (boton.dataset.accion === 'avanzar') {

        moverTarea(id, 1);

    } else if (boton.dataset.accion === 'retroceder') {

        moverTarea(id, -1);

    }

    // Repintamos el tablero.
    repintar();

});


// Buscador.
buscador.addEventListener('input', () => {

    repintar();

});


// Botón para archivar las tareas hechas.
botonArchivar.addEventListener('click', () => {

    archivarHechas();

    repintar();

});


// 4.5 · ENVÍO DEL FORMULARIO

formularioTarea.addEventListener('submit', (event) => {

    // Evitamos el envío del formulario.
    event.preventDefault();

    // Comprobamos las reglas propias.
    comprobarHoras();

    // Obtenemos todos los campos.
    const campos = Array.from(
        formularioTarea.elements
    ).filter(campo =>
        campo.matches('input, select, textarea')
    );

    // Validamos todos los campos.
    const errores = campos.filter(campo =>
        !validarCampo(campo)
    );

    // Si hay errores, enfocamos el primero.
    if (errores.length > 0) {

        errores[0].focus();

        return;

    }

    // Obtenemos los datos del formulario.
    const formData = new FormData(formularioTarea);

    // Creamos el objeto con los datos.
    const datos = {

        titulo: formData.get('titulo').trim(),

        asignatura: formData.get('asignatura'),

        horas: Number(formData.get('horas')),

        prioridad: formData.get('prioridad')

    };

    // Añadimos la tarea.
    anadirTarea(datos);

    // Limpiamos el formulario.
    limpiarFormulario();

    // Mostramos el mensaje de confirmación.
    mensajeFormulario.textContent =
        `Tarea añadida: ${datos.titulo}`;

    // Repintamos el tablero.
    repintar();

});


// ============================================================
// PRIMER PINTADO DE LA PÁGINA
// ============================================================

repintar();
