// Creamos un arreglo llamado playlist que contiene 10 canciones.
// Cada canción es un objeto con título, artista y duración en segundos.
const playlist = [
    { titulo: "Luz de Luna", artista: "Artista 1", duracion: 210 },
    { titulo: "Camino al Sol", artista: "Artista 2", duracion: 175 },
    { titulo: "Noche Estrellada", artista: "Artista 3", duracion: 240 },
    { titulo: "Vuelve a Empezar", artista: "Artista 4", duracion: 160 },
    { titulo: "Mar Abierto", artista: "Artista 5", duracion: 195 },
    { titulo: "Sueños", artista: "Artista 6", duracion: 220 },
    { titulo: "Amanecer", artista: "Artista 7", duracion: 145 },
    { titulo: "Sin Miedo", artista: "Artista 8", duracion: 185 },
    { titulo: "Horizonte", artista: "Artista 9", duracion: 200 },
    { titulo: "Último Baile", artista: "Artista 10", duracion: 170 }
];

// Recorremos todas las canciones de la playlist.
// En cada vuelta, cancion representa un objeto de la lista.
playlist.forEach(function(cancion) {

    // Mostramos el título y el artista de la canción actual.
    console.log("Título: " + cancion.titulo);
    console.log("Artista: " + cancion.artista);

});