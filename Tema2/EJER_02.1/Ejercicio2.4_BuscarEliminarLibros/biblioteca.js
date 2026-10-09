// Arreglo inicial con 10 libros.
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

// Añade un libro a la colección.
function agregarLibro(nuevoLibro) {
    libros.push(nuevoLibro);
}

// Devuelve todos los libros.
function obtenerLibros() {
    return libros;
}

// Busca y devuelve el libro cuyo id coincide con el indicado.
function buscarLibro(id) {
    return libros.find(function(libro) {
        return libro.id === id;
    });
}

// Busca la posición del libro y lo elimina si existe.
function eliminarLibro(id) {
    const indice = libros.findIndex(function(libro) {
        return libro.id === id;
    });

    // Si el índice es distinto de -1, significa que el libro existe.
    if (indice !== -1) {
        libros.splice(indice, 1);
    }
}

// Exportamos todas las funciones del módulo.
export { agregarLibro, obtenerLibros, buscarLibro, eliminarLibro };