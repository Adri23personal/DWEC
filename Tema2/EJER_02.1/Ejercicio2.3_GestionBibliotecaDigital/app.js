// Importamos las funciones del módulo biblioteca.js.
import { agregarLibro, obtenerLibros } from "./biblioteca.js";

// Mostramos la colección inicial de libros.
console.log("Colección inicial:");
console.log(obtenerLibros());

// Creamos un nuevo libro.
const nuevoLibro = {
    id: 11,
    titulo: "El viaje de Chihiro",
    autor: "Spirited Away",
    paginas: 200
};

// Añadimos el nuevo libro a la biblioteca.
agregarLibro(nuevoLibro);

// Mostramos la colección después de añadir el libro.
console.log("Colección después de añadir el libro:");
console.log(obtenerLibros());