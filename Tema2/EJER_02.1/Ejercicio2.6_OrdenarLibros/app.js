// Importamos las funciones necesarias.
import {
    obtenerLibros,
    ordenarPorPaginas
} from "./biblioteca.js";

// Mostramos los libros antes de ordenarlos.
console.log("Libros antes de ordenar:");
console.log(obtenerLibros());

// Ordenamos la colección por número de páginas.
ordenarPorPaginas();

// Mostramos los libros después de ordenarlos.
console.log("Libros ordenados de menor a mayor número de páginas:");
console.log(obtenerLibros());