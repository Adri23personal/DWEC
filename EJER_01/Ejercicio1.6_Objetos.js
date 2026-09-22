// 1. Crea un array llamado `cursos`, donde cada elemento sea un objeto que represente un curso. Cada curso debe tener las siguientes propiedades:
// - `nombre` (string)
// - `profesor` (string)
// - `estudiantes` (array de objetos), donde cada objeto represente a un estudiante con:
// - nombre (string)
// - `calificacion` (number)

// Crea al menos 4 cursos, y cada uno con al menos 3 estudiantes.

let cursos = [
    {

    nombre : "Desarrollo Web",
    profesor : "Manolo",
    estudiantes : [
    {
        nombre : "Pedro",
        calificacacion : 5
    },
    {
        nombre : "Roberto",
        calificacacion : 3
    },
    {
        nombre : "Julia",
        calificacacion : 7
    }] },

    {

    nombre : "Fotografía Digital y Edición",
    profesor : "Sofía",
    estudiantes : [
    {
        nombre : "Belén",
        calificacacion : 9
    },
    {
        nombre : "David",
        calificacacion : 5
    },
    {
        nombre : "Rubén",
        calificacacion : 6
    }] },

    {

    nombre : "Historia del Arte",
    profesor : "Cecilia",
    estudiantes : [
    {
        nombre : "Silvia",
        calificacacion : 10
    },
    {
        nombre : "Alejandro",
        calificacacion : 4.85
    },
    {
        nombre : "Pablo",
        calificacacion : 8
    }] },

    {

    nombre : "Producción Musical",
    profesor : "Jaime",
    estudiantes : [
    {
        nombre : "Nieves",
        calificacacion : 7
    },
    {
        nombre : "Iván",
        calificacacion : 6
    },
    {
        nombre : "Juan",
        calificacacion : 4
    }] }

]

// 2. Utiliza `.map()` para crear un nuevo array `resumenCursos` que contenga objetos con:
// - `nombreCurso`
// - `promedioCalificaciones` (promedio de las calificaciones de los estudiantes)
let resumenCursos 


// 3. Utiliza `.filter()` para obtener un array `cursosDestacados` que contenga solo los cursos cuyo promedio de calificaciones sea mayor o igual a 7.

// 4. Recorre los cursos destacados e imprime en consola un mensaje como:

// `"📘 El curso [nombreCurso] tiene un promedio de [promedio] y es considerado destacado."`

// 5. Verifica si hay algún estudiante con calificación menor a 4 en cada curso. Si lo hay, imprime:

// `"⚠️ Atención: En el curso [nombreCurso] hay estudiantes con calificaciones muy bajas."`