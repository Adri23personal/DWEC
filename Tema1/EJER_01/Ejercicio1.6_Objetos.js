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
        calificacion : 5
    },
    {
        nombre : "Roberto",
        calificacion : 3
    },
    {
        nombre : "Julia",
        calificacion : 7
    }] },

    {

    nombre : "Fotografía Digital y Edición",
    profesor : "Sofía",
    estudiantes : [
    {
        nombre : "Belén",
        calificacion : 9
    },
    {
        nombre : "David",
        calificacion : 5
    },
    {
        nombre : "Rubén",
        calificacion : 6
    }] },

    {

    nombre : "Historia del Arte",
    profesor : "Cecilia",
    estudiantes : [
    {
        nombre : "Silvia",
        calificacion : 10
    },
    {
        nombre : "Alejandro",
        calificacion : 4.85
    },
    {
        nombre : "Pablo",
        calificacion : 8
    }] },

    {

    nombre : "Producción Musical",
    profesor : "Jaime",
    estudiantes : [
    {
        nombre : "Nieves",
        calificacion : 7
    },
    {
        nombre : "Iván",
        calificacion : 6
    },
    {
        nombre : "Juan",
        calificacion : 4
    }] }

]

// 2. Utiliza `.map()` para crear un nuevo array `resumenCursos` que contenga objetos con:
// - `nombreCurso`
// - `promedioCalificaciones` (promedio de las calificaciones de los estudiantes)
let resumenCursos = cursos.map(unCurso => {
    let suma = 0

    for(x=0; x < unCurso.estudiantes.length; x++) {
        //Dame el elemento que está en la posición x del array.
        suma = suma + unCurso.estudiantes[x].calificacion
    }

    let promedio = suma / unCurso.estudiantes.length;


    return {
        nombreCurso :  unCurso.nombre,
        promedioCalificaciones : promedio

    }
})


// 3. Utiliza `.filter()` para obtener un array `cursosDestacados` que contenga 
// solo los cursos cuyo promedio de calificaciones sea mayor o igual a 7.
let cursosDestacados = resumenCursos.filter(resumen => {

    if(resumen.promedioCalificaciones >= 7) {
        return true

    } else {
        return false
    }
    
});

// 4. Recorre los cursos destacados e imprime en consola un mensaje como:
// `"📘 El curso [nombreCurso] tiene un promedio de [promedio] y es considerado destacado."` 
for(x=0; x < cursosDestacados.length; x++) {
    console.log(`El curso ${cursosDestacados[x].nombreCurso} tiene un promedio de ${cursosDestacados[x].promedioCalificaciones} y es considerado destacado.`)
}


// 5. Verifica si hay algún estudiante con calificación menor a 4 en cada curso. Si lo hay, imprime:
// `"⚠️ Atención: En el curso [nombreCurso] hay estudiantes con calificaciones muy bajas."` 

// Recorro cursos
for (let x = 0; x < cursos.length; x++) {

    // Array de estudiantes del curso que estoy recorriendo
    for (let y = 0; y < cursos[x].estudiantes.length; y++) {

        //  y avanza primero y hace todos los bucles, luego aumenta x
        if (cursos[x].estudiantes[y].calificacion < 4) {
            console.log(`⚠️ Atención: En el curso ${cursos[x].nombre} hay estudiantes con calificaciones muy bajas.`);
        }

    }
}

