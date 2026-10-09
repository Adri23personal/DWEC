// Creamos un arreglo con 10 libros.
// Cada libro tiene un identificador, título, autor y número de páginas.
const libros = [
    { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", paginas: 96 },
    { id: 2, titulo: "1984", autor: "George Orwell", paginas: 328 },
    { id: 3, titulo: "Rebelión en la granja", autor: "George Orwell", paginas: 144 },
    { id: 4, titulo: "Drácula", autor: "Bram Stoker", paginas: 418 },
    { id: 5, titulo: "Frankenstein", autor: "Mary Shelley", paginas: 280 },
    { id: 6, titulo: "El Hobbit", autor: "J. R. R. Tolkien", paginas: 310 },
    { id: 7, titulo: "Dune", autor: "Frank Herbert", paginas: 688 },
    { id: 8, titulo: "Coraline", autor: "Neil Gaiman", paginas: 192 },
    { id: 9, titulo: "Matilda", autor: "Roald Dahl", paginas: 240 },
    { id: 10, titulo: "Fahrenheit 451", autor: "Ray Bradbury", paginas: 192 }
];

// Añade un nuevo libro al arreglo.
function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro);
}

// Devuelve el arreglo completo de libros.
function obtenerLibros() {
    return libros;
}

// Exportamos las funciones para poder utilizarlas en app.js.
export { agregarLibro, obtenerLibros };