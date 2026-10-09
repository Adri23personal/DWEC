// Importamos las funciones que necesitamos.
import {
    agregarLibro,
    obtenerLibros,
    buscarLibro,
    eliminarLibro
} from "./biblioteca.js";

// Mostramos la colección inicial.
console.log("Colección inicial:");
console.log(obtenerLibros());

// Añadimos un libro nuevo para comprobar agregarLibro().
agregarLibro({
    id: 11,
    titulo: "El castillo ambulante",
    autor: "Diana Wynne Jones",
    paginas: 288
});

// Buscamos el libro que tiene el id 5.
console.log("Libro encontrado:");
console.log(buscarLibro(5));

// Eliminamos el libro con el id 3.
eliminarLibro(3);

// Mostramos la colección después de eliminarlo.
console.log("Colección final:");
console.log(obtenerLibros());