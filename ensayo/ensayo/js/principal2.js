javascript
// Nombre y apellidos: ______________________________

import { tareasIniciales } from './datos.js';

// ============================================================
// CONSTANTES Y ELEMENTOS DE LA PÁGINA
// ============================================================

// Creamos un array con los tres estados posibles de una tarea.
// El orden es importante porque después utilizaremos las posiciones
// del array para saber si una tarea puede avanzar o retroceder.
const ESTADOS = ['porhacer', 'encurso', 'hecha'];

// Establecemos el máximo de horas pendientes que podemos tener.
const LIMITE_HORAS = 40;


// querySelector() sirve para buscar un elemento HTML utilizando
// un selector CSS. Devuelve el primer elemento que encuentra.
// Por ejemplo, '#buscador' busca el elemento que tiene id="buscador".

const formularioTarea = document.querySelector('#formulario-tarea');

// Accedemos directamente al campo llamado "horas" que está dentro
// del formulario. La propiedad elements permite acceder a los
// campos del formulario mediante el valor de su atributo name.
const campoHoras = formularioTarea.elements.horas;

const mensajeFormulario = document.querySelector('#mensaje-formulario');
const buscador = document.querySelector('#buscador');
const botonArchivar = document.querySelector('#boton-archivar');
const tablero = document.querySelector('#tablero');
const listaHoras = document.querySelector('#horas-asignatura');
const progreso = document.querySelector('#progreso');


// Creamos un objeto para guardar las tres columnas del tablero.
// Cada propiedad contiene el elemento HTML donde se mostrarán
// las tareas que tengan ese estado.
//
// Por ejemplo, columnas.porhacer permite acceder a la columna
// donde aparecen las tareas pendientes.
const columnas = {
    porhacer: document.querySelector('#col-porhacer'),
    encurso: document.querySelector('#col-encurso'),
    hecha: document.querySelector('#col-hecha')
};


// Creamos otro objeto para guardar los elementos HTML que muestran
// el número de tareas que hay en cada columna.
//
// Después modificaremos su textContent para actualizar los números.
const contadores = {
    porhacer: document.querySelector('#num-porhacer'),
    encurso: document.querySelector('#num-encurso'),
    hecha: document.querySelector('#num-hecha')
};


// Desactivamos la validación automática del navegador.
// De esta manera, nosotros controlamos cuándo se validan los campos
// y qué mensajes de error queremos mostrar.
formularioTarea.noValidate = true;


// Creamos una copia de las tareas iniciales.
//
// map() recorre todos los elementos del array y devuelve un nuevo
// array con los resultados de aplicar la función a cada elemento.
//
// tarea => ({ ...tarea }) crea un objeto nuevo copiando todas
// las propiedades de cada tarea.
//
// Los tres puntos (...) se llaman operador spread y permiten
// copiar las propiedades de un objeto dentro de otro.
//
// Así evitamos trabajar directamente con los objetos originales.
let tareas = tareasIniciales.map(tarea => ({ ...tarea }));


// Creamos una función que actualiza toda la información de la página.
const repintar = () => {

    // Primero buscamos las tareas que coinciden con el texto
    // introducido en el buscador.
    //
    // buscador.value obtiene el texto que ha escrito el usuario.
    // buscarTareas() devuelve un array con las tareas que coinciden.
    //
    // Ese array se utiliza para actualizar las columnas del tablero.
    pintarTablero(buscarTareas(tareas, buscador.value));

    // Actualizamos también el resumen de horas y el porcentaje
    // de tareas completadas.
    //
    // Aquí utilizamos todas las tareas, no solamente las filtradas
    // por el buscador, para que el resumen general no cambie.
    pintarResumen(tareas);
};


// ============================================================
// APARTADO 1 · FORMULARIO Y VALIDACIÓN
// ============================================================


// 1.1 · MENSAJE DE ERROR

const mensajeDeError = (campo) => {

    // La propiedad validity proporciona información sobre
    // los posibles errores de validación de un campo HTML.
    //
    // Devuelve un objeto con diferentes propiedades booleanas.
    // Cada una indica si se cumple una determinada condición.
    const validity = campo.validity;


    // valueMissing es true cuando el campo es obligatorio
    // y el usuario no ha introducido ningún valor.
    if (validity.valueMissing) {
        return 'Este campo es obligatorio';
    }


    // tooShort es true cuando el texto introducido tiene
    // menos caracteres de los permitidos por minlength.
    //
    // campo.minLength obtiene el número mínimo de caracteres
    // establecido en el HTML.
    if (validity.tooShort) {
        return `Escribe al menos ${campo.minLength} caracteres`;
    }


    // rangeUnderflow indica que el número es inferior al mínimo.
    // rangeOverflow indica que el número supera el máximo.
    //
    // campo.min y campo.max permiten obtener esos límites.
    //
    // El operador || significa O: basta con que una de las
    // dos condiciones sea verdadera para entrar en el if.
    if (validity.rangeUnderflow || validity.rangeOverflow) {
        return `Debe estar entre ${campo.min} y ${campo.max}`;
    }


    // customError indica que existe un error personalizado.
    // Este tipo de error se establece utilizando setCustomValidity().
    //
    // validationMessage devuelve el mensaje de error asociado
    // al campo.
    if (validity.customError) {
        return campo.validationMessage;
    }


    // Si ninguna condición anterior se cumple, significa
    // que no hemos encontrado ningún error.
    // Devolvemos una cadena vacía.
    return '';
};


// 1.2 · VALIDAR CAMPO

const validarCampo = (campo) => {

    // Llamamos a la función anterior para obtener el mensaje
    // de error correspondiente al campo que estamos comprobando.
    const mensaje = mensajeDeError(campo);


    // nextElementSibling obtiene el siguiente elemento HTML
    // que está al mismo nivel que el campo.
    //
    // En nuestro formulario, ese elemento será la zona donde
    // queremos mostrar el mensaje de error.
    const zonaError = campo.nextElementSibling;


    // Comprobamos dos cosas:
    // 1. Que exista un elemento siguiente.
    // 2. Que ese elemento tenga la clase CSS "error".
    //
    // && significa Y: las dos condiciones deben cumplirse.
    if (zonaError && zonaError.classList.contains('error')) {

        // textContent cambia el texto que aparece dentro
        // del elemento HTML.
        //
        // Si hay un error, mostramos el mensaje.
        // Si no hay error, el mensaje será una cadena vacía.
        zonaError.textContent = mensaje;
    }


    // Si mensaje no está vacío, significa que existe un error.
    if (mensaje !== '') {

        // classList.add() añade una clase CSS al elemento.
        // En este caso, añadimos "invalido" para poder
        // mostrar visualmente que el campo tiene un error.
        campo.classList.add('invalido');

        // Devolvemos false porque el campo no es válido.
        return false;

    } else {

        // Si no hay errores, quitamos la clase "invalido".
        campo.classList.remove('invalido');

        // Devolvemos true porque el campo es válido.
        return true;
    }

};


// 1.3 · COMPROBAR HORAS

const comprobarHoras = () => {

    // Queremos calcular cuántas horas pendientes tenemos actualmente.
    //
    // filter() recorre un array y crea OTRO ARRAY solamente
    // con los elementos que cumplen la condición indicada.
    //
    // tarea => tarea.estado !== 'hecha'
    // significa que solamente queremos las tareas cuyo estado
    // sea diferente de "hecha".
    //
    // !== significa diferente en valor y en tipo.
    //
    // Por tanto, las tareas terminadas quedan fuera del resultado.
    const pendientes = tareas

        .filter(tarea => tarea.estado !== 'hecha')

        // reduce() sirve para recorrer un array y acumular
        // sus valores hasta obtener un único resultado.
        //
        // Recibe dos argumentos:
        // 1. Una función que indica cómo acumular los valores.
        // 2. Un valor inicial para el acumulador.
        //
        // suma representa las horas acumuladas hasta ese momento.
        // tarea representa la tarea que estamos recorriendo.
        //
        // suma + tarea.horas añade las horas de la tarea actual
        // a todas las horas que llevábamos acumuladas.
        //
        // El 0 final indica que empezamos a sumar desde cero.
        .reduce((suma, tarea) => suma + tarea.horas, 0);


    // value obtiene el contenido del campo de horas como texto.
    //
    // Si está vacío, asignamos 0 para evitar trabajar con
    // un valor vacío.
    //
    // Si tiene contenido, utilizamos valueAsNumber para obtener
    // directamente el valor numérico del campo.
    const horasNuevas = campoHoras.value === ''
        ? 0
        : campoHoras.valueAsNumber;


    // Sumamos las horas que ya están pendientes y las que
    // queremos añadir con la nueva tarea.
    //
    // Si el resultado supera LIMITE_HORAS (40), mostramos un error.
    if (pendientes + horasNuevas > LIMITE_HORAS) {

        // setCustomValidity() permite establecer un error
        // de validación personalizado en un campo HTML.
        //
        // El mensaje se guardará en el propio campo y podremos
        // recuperarlo después mediante validationMessage.
        campoHoras.setCustomValidity(
            `Superas el límite de 40 h pendientes (ahora hay ${pendientes} h)`
        );

    } else {

        // Si no superamos el límite, eliminamos cualquier error
        // personalizado que pudiera tener el campo.
        //
        // Para eliminarlo pasamos una cadena vacía.
        campoHoras.setCustomValidity('');

    }

};


// 1.4 · LIMPIAR FORMULARIO

const limpiarFormulario = () => {

    // reset() devuelve los campos del formulario a sus valores
    // iniciales, es decir, los valores que tenían al cargar la página.
    formularioTarea.reset();


    // querySelectorAll() busca TODOS los elementos que coinciden
    // con el selector indicado.
    //
    // A diferencia de querySelector(), no devuelve solamente
    // el primero, sino una colección de todos los encontrados.
    //
    // input, select y textarea son los tres tipos de elementos
    // de formulario que queremos limpiar.
    const campos = formularioTarea.querySelectorAll(
        'input, select, textarea'
    );


    // forEach() permite recorrer una colección o un array
    // ejecutando una función una vez por cada elemento.
    //
    // En cada repetición, la variable campo representa
    // uno de los campos del formulario.
    campos.forEach(campo => {

        // Quitamos la clase visual que indica que hay un error.
        campo.classList.remove('invalido');


        // Eliminamos cualquier error personalizado.
        campo.setCustomValidity('');


        // Buscamos el elemento HTML que está inmediatamente
        // después del campo actual.
        const zonaError = campo.nextElementSibling;


        // Si existe y tiene la clase "error", borramos su texto.
        if (zonaError && zonaError.classList.contains('error')) {

            zonaError.textContent = '';
        }

    });


    // Borramos también el mensaje general del formulario.
    mensajeFormulario.textContent = '';

};


// 1.5 · EVENTOS DEL FORMULARIO


// EVENTO CHANGE.
//
// addEventListener() sirve para detectar cuándo ocurre un evento
// en un elemento HTML y ejecutar una función como respuesta.
//
// El evento change se ejecuta cuando el valor de un campo cambia
// y el usuario confirma ese cambio, normalmente al salir del campo.
formularioTarea.addEventListener('change', (event) => {

    // event es el objeto que contiene información del evento.
    //
    // event.target indica el elemento HTML concreto que ha provocado
    // el evento, es decir, el campo que ha cambiado.
    const campo = event.target;


    // matches() comprueba si el elemento cumple el selector CSS.
    //
    // En este caso comprobamos que sea un input, select o textarea.
    // Si no es ninguno de ellos, no hacemos nada.
    if (campo.matches('input, select, textarea')) {

        // Comprobamos si las horas siguen dentro del límite permitido.
        comprobarHoras();

        // Validamos el campo que ha cambiado.
        validarCampo(campo);

    }

});


// EVENTO INPUT.
//
// Se ejecuta cada vez que cambia el contenido de un campo,
// por ejemplo, al escribir o borrar una letra.
//
// A diferencia de change, input permite reaccionar mientras
// el usuario está escribiendo.
formularioTarea.addEventListener('input', (event) => {

    // Obtenemos el campo que ha provocado el evento.
    const campo = event.target;


    // Solo volvemos a validar si:
    // 1. El elemento es un input, select o textarea.
    // 2. Tiene actualmente la clase "invalido".
    //
    // De esta manera evitamos mostrar errores antes de tiempo
    // en campos que todavía no han sido validados.
    //
    // && significa que ambas condiciones deben ser verdaderas.
    if (
        campo.matches('input, select, textarea') &&
        campo.classList.contains('invalido')
    ) {

        // Actualizamos la comprobación de horas.
        comprobarHoras();

        // Volvemos a validar el campo mientras se escribe.
        validarCampo(campo);

    }

});


// EVENTO KEYDOWN.
//
// Detecta cuándo se pulsa una tecla del teclado.
// event.key permite conocer qué tecla se ha pulsado.
formularioTarea.addEventListener('keydown', (event) => {

    // Comprobamos si la tecla pulsada es Escape.
    if (event.key === 'Escape') {

        // preventDefault() evita que se ejecute el comportamiento
        // predeterminado del navegador para ese evento.
        event.preventDefault();

        // Si se pulsa Escape, limpiamos el formulario.
        limpiarFormulario();

    }

});


// ============================================================
// APARTADO 2 · CÁLCULOS CON LOS DATOS
// ============================================================


// 2.1 · BUSCAR TAREAS

const buscarTareas = (lista, texto) => {

    // trim() elimina los espacios en blanco que hay al principio
    // y al final de una cadena de texto.
    //
    // toLowerCase() convierte todas las letras a minúsculas.
    //
    // Hacemos ambas operaciones para que la búsqueda no dependa
    // de los espacios sobrantes ni de las mayúsculas.
    //
    // Por ejemplo: "  MATEMATICAS " se convierte en
    // "matematicas".
    const busqueda = texto.trim().toLowerCase();


    // Si el texto está vacío después de eliminar los espacios,
    // significa que el usuario no ha escrito nada.
    if (busqueda === '') {

        // Devolvemos una copia del array original utilizando spread.
        // Así obtenemos todas las tareas sin modificar la lista original.
        return [...lista];
    }


    // filter() recorre todas las tareas de la lista y devuelve
    // un nuevo array que contiene solamente las que cumplen
    // la condición que escribimos dentro de la función.
    //
    // En este caso queremos encontrar tareas cuyo título
    // O cuya asignatura contengan el texto buscado.
    return lista.filter(tarea =>

        // Convertimos el título a minúsculas para que la búsqueda
        // no distinga entre mayúsculas y minúsculas.
        //
        // includes() comprueba si una cadena contiene otra cadena.
        // Devuelve true si encuentra el texto y false si no lo encuentra.
        //
        // Por ejemplo:
        // "matematicas".includes("mate") devuelve true.
        tarea.titulo.toLowerCase().includes(busqueda) ||

        // Hacemos exactamente la misma comprobación con la asignatura.
        //
        // El operador || significa O.
        // Por tanto, basta con que coincida el título o la asignatura
        // para que la tarea aparezca en los resultados.
        tarea.asignatura.toLowerCase().includes(busqueda)

    );

};


// 2.2 · AGRUPAR POR ESTADO

const agruparPorEstado = (lista) => {

    // Devolvemos un objeto con tres propiedades.
    // Cada propiedad contiene un array de tareas de ese estado.
    //
    // Utilizamos filter() tres veces porque queremos separar
    // las tareas según su estado.

    return {

        // Creamos un array con las tareas pendientes.
        // La condición comprueba que el estado sea "porhacer".
        porhacer: lista.filter(tarea => tarea.estado === 'porhacer'),


        // Creamos otro array con las tareas que están en curso.
        encurso: lista.filter(tarea => tarea.estado === 'encurso'),


        // Creamos otro array con las tareas que ya están terminadas.
        hecha: lista.filter(tarea => tarea.estado === 'hecha')

    };

};


// 2.3 · HORAS POR ASIGNATURA

const horasPorAsignatura = (lista) => {

    // Queremos saber cuántas horas hay asignadas a cada asignatura.
    //
    // Para ello utilizamos reduce(), que permite recorrer
    // un array y construir un único resultado acumulando información.
    //
    // En este caso el resultado será un objeto.
    //
    // Por ejemplo:
    // {
    //     Matematicas: 10,
    //     Historia: 5,
    //     Ingles: 8
    // }
    const agrupadas = lista.reduce((acumulador, tarea) => {

        // acumulador es el objeto donde vamos guardando las horas.
        // tarea es la tarea que estamos procesando en esta repetición.


        // Comprobamos si ya existe una propiedad en el objeto
        // con el nombre de la asignatura actual.
        //
        // Si todavía no existe, la creamos y le damos valor 0.
        //
        // acumulador[tarea.asignatura] permite utilizar el nombre
        // de la asignatura como nombre de una propiedad.
        if (!acumulador[tarea.asignatura]) {

            acumulador[tarea.asignatura] = 0;
        }


        // Añadimos las horas de la tarea actual al total
        // que ya teníamos guardado para esa asignatura.
        //
        // El operador += equivale a:
        // acumulador[tarea.asignatura] =
        // acumulador[tarea.asignatura] + tarea.horas
        acumulador[tarea.asignatura] += tarea.horas;


        // Devolvemos el acumulador actualizado para que reduce()
        // pueda utilizarlo en la siguiente repetición.
        return acumulador;


    // El objeto vacío {} es el valor inicial del acumulador.
    // Empezamos sin ninguna asignatura ni ninguna hora registrada.
    }, {});


    // Object.entries() convierte las propiedades de un objeto
    // en un array de parejas.
    //
    // Cada pareja contiene:
    // [nombre de la propiedad, valor de la propiedad]
    //
    // Por ejemplo:
    // { Matematicas: 10, Historia: 5 }
    //
    // Se convierte en:
    // [
    //     ['Matematicas', 10],
    //     ['Historia', 5]
    // ]
    //
    // Esto nos permite utilizar después map() y sort().
    return Object.entries(agrupadas)


        // map() recorre cada pareja del array y transforma
        // cada una en un objeto con dos propiedades.
        //
        // [asignatura, horas] utiliza la desestructuración
        // de arrays para separar los dos valores de cada pareja.
        //
        // El resultado será:
        // [
        //     { asignatura: 'Matematicas', horas: 10 },
        //     { asignatura: 'Historia', horas: 5 }
        // ]
        .map(([asignatura, horas]) => ({

            asignatura,
            horas

        }))


        // sort() ordena los elementos de un array.
        //
        // Recibe una función con dos elementos, a y b,
        // que compara para decidir cuál debe ir primero.
        //
        // Si el resultado es negativo, a va antes que b.
        // Si es positivo, b va antes que a.
        // Si es cero, mantienen su posición relativa.
        //
        // En este caso queremos ordenar las asignaturas
        // desde la que tiene más horas hasta la que tiene menos.
        .sort((a, b) => {


            // Primero comprobamos si las horas de las dos
            // asignaturas son diferentes.
            if (b.horas !== a.horas) {

                // Restamos b.horas - a.horas.
                // Así ordenamos de mayor a menor.
                //
                // Ejemplo:
                // a.horas = 5 y b.horas = 10.
                // 10 - 5 = 5.
                // El resultado positivo coloca b antes que a.
                return b.horas - a.horas;
            }


            // Si las dos asignaturas tienen las mismas horas,
            // las ordenamos alfabéticamente.
            //
            // localeCompare() compara dos cadenas de texto
            // teniendo en cuenta las reglas del idioma.
            //
            // Devuelve un número negativo, positivo o cero,
            // según el orden alfabético de las cadenas.
            return a.asignatura.localeCompare(b.asignatura);

        });

};


// ============================================================
// APARTADO 3 · PINTAR LA PÁGINA
// ============================================================


// 3.1 · CREAR TARJETA

const crearTarjeta = (tarea) => {

    // createElement() crea un nuevo elemento HTML.
    // En este caso creamos un elemento <li> para representar
    // visualmente una tarea dentro de una columna.
    const tarjeta = document.createElement('li');


    // classList.add() permite añadir una o varias clases CSS.
    //
    // Añadimos la clase general "tarjeta" y otra que depende
    // de la prioridad de la tarea.
    //
    // Por ejemplo, si la prioridad es alta, añadirá:
    // "tarjeta prioridad-alta".
    tarjeta.classList.add(
        'tarjeta',
        `prioridad-${tarea.prioridad}`
    );


    // dataset permite guardar información personalizada
    // en los atributos data-* de un elemento HTML.
    //
    // Al escribir dataset.id estamos creando el atributo:
    // data-id="..."
    //
    // Guardamos el ID de la tarea para identificarla después
    // cuando el usuario pulse sus botones.
    tarjeta.dataset.id = tarea.id;


    // Creamos un elemento <strong> para mostrar el título.
    const titulo = document.createElement('strong');

    // Añadimos una clase CSS para poder darle estilo.
    titulo.classList.add('titulo');

    // textContent introduce el título como texto dentro del elemento.
    titulo.textContent = tarea.titulo;


    // Creamos un <span> para mostrar información adicional.
    const meta = document.createElement('span');

    meta.classList.add('meta');

    // Utilizamos una plantilla de texto para mostrar
    // la asignatura y el número de horas.
    meta.textContent = `${tarea.asignatura} · ${tarea.horas} h`;


    // Creamos el botón para retroceder una tarea de estado.
    const retroceder = document.createElement('button');

    // Indicamos que es un botón normal y no un botón
    // de envío de formulario.
    retroceder.type = 'button';

    // Guardamos la acción que debe realizar mediante dataset.
    // Así podremos reconocerlo después en el evento click.
    retroceder.dataset.accion = 'retroceder';

    // Establecemos el texto visible del botón.
    retroceder.textContent = '←';


    // Creamos el botón para avanzar una tarea de estado.
    const avanzar = document.createElement('button');

    avanzar.type = 'button';

    avanzar.dataset.accion = 'avanzar';

    avanzar.textContent = '→';


    // indexOf() busca la posición de un elemento dentro de un array.
    //
    // Si encuentra el valor, devuelve su índice empezando por 0.
    // Si no lo encuentra, devuelve -1.
    //
    // Ejemplo:
    // ESTADOS.indexOf('porhacer') devuelve 0.
    // ESTADOS.indexOf('encurso') devuelve 1.
    // ESTADOS.indexOf('hecha') devuelve 2.
    //
    // Guardamos esa posición para saber si la tarea puede avanzar
    // o retroceder.
    const posicion = ESTADOS.indexOf(tarea.estado);


    // disabled permite desactivar un botón.
    //
    // Si la posición es 0, estamos en la primera columna.
    // Por tanto, no podemos retroceder más.
    retroceder.disabled = posicion === 0;


    // ESTADOS.length devuelve el número de elementos del array.
    // En este caso devuelve 3.
    //
    // El último índice es 2 porque los índices empiezan en 0.
    //
    // Si la posición coincide con ese último índice,
    // estamos en la columna de tareas hechas y no podemos avanzar.
    avanzar.disabled = posicion === ESTADOS.length - 1;


    // append() permite introducir varios elementos dentro
    // de otro elemento HTML.
    //
    // Añadimos el título, la información y los dos botones
    // dentro de la tarjeta.
    tarjeta.append(
        titulo,
        meta,
        retroceder,
        avanzar
    );


    // Devolvemos la tarjeta completa para poder añadirla
    // posteriormente a la columna correspondiente.
    return tarjeta;

};


// 3.2 · PINTAR TABLERO

const pintarTablero = (lista) => {

    // Primero vaciamos todas las columnas.
    //
    // forEach() recorre el array ESTADOS y ejecuta la función
    // una vez por cada estado.
    ESTADOS.forEach(estado => {

        // textContent = '' elimina todo el contenido de texto
        // y los elementos HTML que hubiera dentro de la columna.
        //
        // Así evitamos duplicar tarjetas cada vez que repintamos.
        columnas[estado].textContent = '';

    });


    // Agrupamos las tareas por estado utilizando la función
    // agruparPorEstado().
    //
    // El resultado es un objeto con tres arrays:
    // grupos.porhacer, grupos.encurso y grupos.hecha.
    const grupos = agruparPorEstado(lista);


    // Recorremos nuevamente los tres estados.
    ESTADOS.forEach(estado => {


        // grupos[estado] permite acceder dinámicamente al array
        // correspondiente al estado que estamos recorriendo.
        //
        // forEach() recorre todas las tareas de ese grupo.
        grupos[estado].forEach(tarea => {


            // Creamos el elemento HTML que representa la tarea.
            const tarjeta = crearTarjeta(tarea);


            // Introducimos la tarjeta en la columna correspondiente.
            columnas[estado].append(tarjeta);

        });


        // length devuelve el número de elementos que contiene
        // un array.
        //
        // Actualizamos el contador de la columna con la cantidad
        // de tareas que tiene ese estado.
        //
        // textContent convierte el número en el texto que
        // se muestra en la página.
        contadores[estado].textContent = grupos[estado].length;

    });

};


// 3.3 · PINTAR RESUMEN

const pintarResumen = (lista) => {

    // Vaciamos la lista donde mostramos las horas por asignatura.
    // De esta manera evitamos repetir los resultados anteriores.
    listaHoras.textContent = '';


    // Llamamos a horasPorAsignatura() para obtener un array
    // con el total de horas agrupadas y ordenadas.
    const resumen = horasPorAsignatura(lista);


    // Recorremos el array del resumen.
    resumen.forEach(elemento => {

        // Creamos un elemento <li> para cada asignatura.
        const li = document.createElement('li');

        // Mostramos el nombre de la asignatura y sus horas.
        li.textContent = `${elemento.asignatura} — ${elemento.horas} h`;

        // Añadimos el elemento a la lista HTML.
        listaHoras.append(li);

    });


    // Calculamos el porcentaje de tareas completadas.


    // length obtiene el número total de tareas.
    const total = lista.length;


    // filter() devuelve un nuevo array con las tareas
    // cuyo estado es exactamente "hecha".
    //
    // Después utilizamos length para saber cuántas hay.
    //
    // No necesitamos guardar el array filtrado porque solamente
    // nos interesa su cantidad.
    const hechas = lista.filter(
        tarea => tarea.estado === 'hecha'
    ).length;


    // Calculamos el porcentaje de tareas terminadas.
    //
    // Utilizamos el operador ternario:
    // condición ? resultado_si_true : resultado_si_false
    //
    // Si total es 0, devolvemos 0 para evitar dividir entre cero.
    //
    // Si hay tareas, calculamos:
    // (tareas hechas / tareas totales) * 100.
    //
    // Math.round() redondea el resultado al número entero más cercano.
    const porcentaje = total === 0
        ? 0
        : Math.round((hechas / total) * 100);


    // Mostramos el número de tareas hechas, el total
    // y el porcentaje de progreso.
    progreso.textContent =
        `Hechas: ${hechas} de ${total} (${porcentaje} %)`;

};


// ============================================================
// APARTADO 4 · INTERACCIÓN
// ============================================================


// 4.1 · MOVER TAREA

const moverTarea = (id, paso) => {

    // find() busca dentro de un array el primer elemento
    // que cumple una condición.
    //
    // Recorre las tareas hasta encontrar una cuyo ID coincida
    // con el ID que hemos recibido como parámetro.
    //
    // Si la encuentra, devuelve el objeto completo de esa tarea.
    // Si no encuentra ninguna, devuelve undefined.
    const tarea = tareas.find(tarea => tarea.id === id);


    // Comprobamos si find() ha encontrado la tarea.
    //
    // ! significa negación.
    // Por tanto, !tarea significa que no existe una tarea encontrada.
    if (!tarea) {

        // return termina inmediatamente la ejecución de la función.
        return;
    }


    // indexOf() devuelve la posición actual del estado de la tarea
    // dentro del array ESTADOS.
    const posicion = ESTADOS.indexOf(tarea.estado);


    // Sumamos el paso a la posición actual.
    //
    // Si paso es 1, avanzamos una posición.
    // Si paso es -1, retrocedemos una posición.
    const nuevaPosicion = posicion + paso;


    // Comprobamos que la nueva posición sea válida.
    //
    // La primera condición evita que el índice sea inferior a 0.
    // La segunda evita que supere el último índice del array.
    //
    // Si cualquiera de las condiciones es verdadera,
    // no podemos realizar el movimiento.
    if (
        nuevaPosicion < 0 ||
        nuevaPosicion >= ESTADOS.length
    ) {

        return;
    }


    // Cambiamos el estado de la tarea.
    //
    // Accedemos al array ESTADOS utilizando la nueva posición.
    //
    // Por ejemplo, si nuevaPosicion es 1,
    // el nuevo estado será "encurso".
    tarea.estado = ESTADOS[nuevaPosicion];

};


// 4.2 · AÑADIR TAREA

const anadirTarea = (datos) => {

    // Necesitamos calcular un ID nuevo que no esté repetido.


    // reduce() recorre todas las tareas y devuelve un único valor:
    // el ID más alto que existe actualmente.
    //
    // mayor representa el ID más alto encontrado hasta el momento.
    // tarea representa la tarea actual que estamos comprobando.
    const mayorId = tareas.reduce((mayor, tarea) => {

        // Math.max() devuelve el mayor de los números recibidos.
        //
        // Comparamos el mayor ID encontrado hasta ahora
        // con el ID de la tarea actual.
        //
        // Si el ID actual es mayor, lo guardamos.
        // Si no, mantenemos el valor anterior.
        return Math.max(mayor, tarea.id);


    // Empezamos desde 0 por si el array está vacío.
    }, 0);


    // Creamos un objeto que representa la nueva tarea.
    const nuevaTarea = {

        // Asignamos el siguiente ID disponible.
        id: mayorId + 1,

        // Guardamos el título recibido en datos.
        titulo: datos.titulo,

        // Guardamos la asignatura.
        asignatura: datos.asignatura,

        // Guardamos las horas.
        horas: datos.horas,

        // Todas las tareas nuevas empiezan en estado pendiente.
        estado: 'porhacer',

        // Guardamos la prioridad seleccionada.
        prioridad: datos.prioridad

    };


    // push() añade un elemento al final de un array.
    //
    // En este caso añadimos el objeto nuevaTarea
    // al array principal de tareas.
    //
    // Importante: push() modifica directamente el array original.
    tareas.push(nuevaTarea);


    // Devolvemos el objeto creado.
    return nuevaTarea;

};


// 4.3 · ARCHIVAR TAREAS HECHAS

const archivarHechas = () => {

    // Primero contamos cuántas tareas están terminadas.


    // filter() crea un array nuevo con las tareas cuyo estado
    // sea "hecha".
    //
    // length nos permite obtener el número de elementos
    // que contiene ese array.
    //
    // Guardamos el número antes de eliminarlas porque después
    // ya no estarán dentro del array tareas.
    const cantidad = tareas.filter(
        tarea => tarea.estado === 'hecha'
    ).length;


    // Volvemos a utilizar filter(), pero esta vez queremos
    // conservar solamente las tareas que NO están terminadas.
    //
    // !== significa diferente.
    //
    // Por tanto, todas las tareas con estado distinto de "hecha"
    // se mantienen en el nuevo array.
    //
    // Las tareas terminadas quedan excluidas.
    //
    // Como filter() devuelve un nuevo array, reasignamos
    // ese resultado a la variable tareas.
    tareas = tareas.filter(
        tarea => tarea.estado !== 'hecha'
    );


    // Devolvemos el número de tareas que hemos archivado.
    return cantidad;

};


// 4.4 · EVENTOS DEL TABLERO


// Añadimos un único evento click al tablero completo.
//
// En lugar de añadir un evento a cada botón individual,
// aprovechamos la propagación de eventos.
//
// Cuando pulsamos un botón, el evento también llega a sus
// elementos contenedores. Esto se conoce como propagación
// o bubbling.
//
// Así podemos gestionar los clics de todos los botones
// utilizando un solo addEventListener().
tablero.addEventListener('click', (event) => {


    // closest() busca el elemento más cercano, empezando por
    // el elemento actual y subiendo por sus elementos padres,
    // que coincida con el selector indicado.
    //
    // Buscamos un botón que tenga el atributo data-accion.
    //
    // Esto es útil porque event.target podría ser un elemento
    // interno del botón y no necesariamente el propio botón.
    const boton = event.target.closest('button[data-accion]');


    // Si no hemos encontrado un botón válido, terminamos.
    if (!boton) {

        return;
    }


    // Buscamos la tarjeta más cercana que contenga el botón.
    //
    // De esta manera sabemos a qué tarea pertenece el botón pulsado.
    const tarjeta = boton.closest('.tarjeta');


    // Si no encontramos una tarjeta, no hacemos nada.
    if (!tarjeta) {

        return;
    }


    // Recuperamos el ID que guardamos anteriormente
    // en el atributo data-id de la tarjeta.
    //
    // dataset.id devuelve el valor como texto.
    // Number() lo convierte a número.
    const id = Number(tarjeta.dataset.id);


    // Comprobamos qué botón se ha pulsado mediante dataset.accion.
    //
    // Si es "avanzar", enviamos 1 como paso.
    if (boton.dataset.accion === 'avanzar') {

        moverTarea(id, 1);


    // Si es "retroceder", enviamos -1 como paso.
    } else if (boton.dataset.accion === 'retroceder') {

        moverTarea(id, -1);

    }


    // Una vez modificada la tarea, actualizamos toda la página.
    repintar();

});


// BUSCADOR.
//
// Escuchamos el evento input del buscador.
// Se ejecuta cada vez que el usuario escribe o borra texto.
//
// No necesitamos recuperar el texto aquí porque repintar()
// ya obtiene el valor actualizado mediante buscador.value.
buscador.addEventListener('input', () => {

    // Actualizamos el tablero y el resumen.
    repintar();

});


// BOTÓN PARA ARCHIVAR LAS TAREAS HECHAS.
//
// Escuchamos el evento click del botón.
botonArchivar.addEventListener('click', () => {

    // Eliminamos del array principal las tareas terminadas.
    archivarHechas();

    // Actualizamos la página para que desaparezcan las tarjetas.
    repintar();

});


// 4.5 · ENVÍO DEL FORMULARIO

// Escuchamos el evento submit, que se produce cuando
// el usuario intenta enviar el formulario.
formularioTarea.addEventListener('submit', (event) => {


    // Evitamos el comportamiento predeterminado del formulario.
    //
    // Normalmente, el navegador intentaría enviar los datos
    // y podría recargar la página.
    //
    // preventDefault() evita ese comportamiento porque
    // queremos gestionar el envío mediante JavaScript.
    event.preventDefault();


    // Comprobamos las reglas personalizadas de las horas.
    // Así nos aseguramos de que no superamos el límite de 40 horas.
    comprobarHoras();


    // Obtenemos todos los elementos del formulario y los convertimos
    // en un array normal utilizando Array.from().
    //
    // formularioTarea.elements devuelve una colección con
    // los campos del formulario.
    //
    // Array.from() convierte esa colección en un array
    // para poder utilizar sus métodos habituales, como filter().
    const campos = Array.from(
        formularioTarea.elements
    )


    // filter() crea un array nuevo que contiene únicamente
    // los elementos que cumplen la condición.
    //
    // matches() comprueba si cada elemento es un input,
    // select o textarea.
    //
    // De esta manera excluimos otros elementos que puedan
    // estar dentro del formulario pero que no sean campos.
    .filter(campo =>
        campo.matches('input, select, textarea')
    );


    // Creamos un array con los campos que tienen errores.


    // filter() recorre todos los campos anteriores y conserva
    // únicamente aquellos para los que la condición devuelve true.
    //
    // validarCampo(campo) devuelve:
    // true si el campo es válido.
    // false si el campo tiene algún error.
    //
    // El símbolo ! invierte el resultado.
    //
    // Por tanto, !validarCampo(campo) será true cuando
    // el campo NO sea válido.
    //
    // El resultado es un array que contiene solamente
    // los campos que tienen errores.
    const errores = campos.filter(campo =>
        !validarCampo(campo)
    );


    // Comprobamos si el array de errores tiene elementos.
    //
    // length devuelve el número de elementos del array.
    //
    // Si es mayor que 0, significa que existe al menos
    // un campo incorrecto.
    if (errores.length > 0) {


        // focus() coloca el foco en un elemento HTML.
        //
        // errores[0] accede al primer elemento del array.
        //
        // Así llevamos al usuario directamente al primer campo
        // que tiene un error para que pueda corregirlo.
        errores[0].focus();


        // Detenemos la ejecución de la función.
        //
        // De esta manera no se continúa con la creación
        // de la nueva tarea mientras existan errores.
        return;

    }


    // Si llegamos aquí, todos los campos son válidos.


    // FormData() obtiene los datos del formulario.
    //
    // Recibe el formulario como argumento y crea un objeto
    // que permite acceder a los valores de sus campos.
    const formData = new FormData(formularioTarea);


    // Creamos un objeto con los datos que necesitamos
    // para construir la nueva tarea.
    const datos = {


        // get() permite obtener el valor de un campo
        // utilizando el atributo name del HTML.
        //
        // Por ejemplo, get('titulo') obtiene el contenido
        // del campo cuyo name es "titulo".
        //
        // trim() elimina los espacios del principio y del final
        // para evitar guardar títulos con espacios sobrantes.
        titulo: formData.get('titulo').trim(),


        // Obtenemos la asignatura seleccionada.
        asignatura: formData.get('asignatura'),


        // Obtenemos las horas y las convertimos a número.
        //
        // FormData devuelve normalmente los valores como texto.
        // Number() permite convertir ese texto en un valor numérico.
        horas: Number(formData.get('horas')),


        // Obtenemos la prioridad seleccionada.
        prioridad: formData.get('prioridad')

    };


    // Llamamos a la función que crea la tarea y la añade
    // al array principal.
    anadirTarea(datos);


    // Dejamos el formulario preparado para introducir
    // una nueva tarea, eliminando los valores y errores.
    limpiarFormulario();


    // Mostramos un mensaje indicando que la tarea
    // se ha añadido correctamente.
    //
    // Utilizamos una plantilla de texto para incluir
    // el título de la tarea recién creada.
    mensajeFormulario.textContent =
        `Tarea añadida: ${datos.titulo}`;


    // Actualizamos el tablero, los contadores y el resumen.
    repintar();

});


// ============================================================
// PRIMER PINTADO DE LA PÁGINA
// ============================================================


// Ejecutamos repintar() una vez al cargar el JavaScript.
//
// Así mostramos desde el principio las tareas iniciales,
// sus respectivas columnas, los contadores, las horas
// por asignatura y el porcentaje de progreso.
repintar();