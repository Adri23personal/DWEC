// Importamos las dos funciones que vamos a probar.
import {
    hayLibrosLargos,
    todosSonLibrosCortos
} from "./biblioteca.js";

// Comprobamos si hay libros de más de 300 páginas.
console.log("¿Hay libros de más de 300 páginas?");
console.log(hayLibrosLargos(300));

// Comprobamos si todos los libros tienen menos de 500 páginas.
console.log("¿Todos tienen menos de 500 páginas?");
console.log(todosSonLibrosCortos(500));

// Comprobamos si hay libros de más de 700 páginas.
console.log("¿Hay libros de más de 700 páginas?");
console.log(hayLibrosLargos(700));

// Comprobamos si todos tienen menos de 100 páginas.
console.log("¿Todos tienen menos de 100 páginas?");
console.log(todosSonLibrosCortos(100));