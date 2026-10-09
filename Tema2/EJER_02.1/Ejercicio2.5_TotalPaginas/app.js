// Importamos la función para calcular el total de páginas.
import {
    obtenerLibros,
    calcularTotalPaginas
} from "./biblioteca.js";

// Mostramos la colección de libros.
console.log("Libros de la biblioteca:");
console.log(obtenerLibros());

// Calculamos y mostramos la suma de todas las páginas.
console.log("Total de páginas:");
console.log(calcularTotalPaginas());