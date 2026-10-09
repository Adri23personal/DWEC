// Creamos el arreglo con las mismas 10 canciones del ejercicio anterior.
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

// Creamos un nuevo arreglo con las canciones que duran más de 180 segundos.
const cancionesLargas = playlist.filter(function(cancion) {
    return cancion.duracion > 180;
});

// Convertimos cada canción filtrada en un mensaje de texto.
const mensajes = cancionesLargas.map(function(cancion) {
    return "La canción '" + cancion.titulo + "' de " +
        cancion.artista + " dura " + cancion.duracion + " segundos.";
});

// Mostramos el arreglo de mensajes en la consola.
console.log(mensajes);