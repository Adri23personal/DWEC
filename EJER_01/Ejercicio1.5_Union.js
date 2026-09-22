// Crea un array de objetos llamado ‘estudiantes’. Cada objeto debe representar a un estudiante 
// y tener las propiedades ‘nombre’ (string), ‘apellidos’ (string),‘calificacion’ (number) y ‘aprobado’ (boolean). 
// Añade al menos 3 estudiantes.
let estudiantes = [{

    nombre: "Adriana",
    apellidos: "Gutierrez de la Vega",
    calificacion: 7.85,
    aprobado: true
},

{
    nombre: "Belén",
    apellidos: "Rodriguez Cueto",
    calificacion: 8,
    aprobado: true
},
{
    nombre: "Manuel",
    apellidos: "Sanchez Martinez",
    calificacion: 4,
    aprobado: false
}
]

// Utiliza el método .map() para crear un nuevo array donde a cada estudiante 
// se le añade una propiedad ‘id’ única (puede ser 1, 2, 3…).
let conId = estudiantes.map((estudiante, indice) => {
    estudiante.id = indice + 1
    return estudiante
})


// Utiliza el método .filter() para obtener un array que contenga únicamente a los estudiantes 
// que tienen una calificación mayor o igual a 5.
let aptos = estudiantes.filter(alumno => 
    alumno.calificacion >= 5
)

// Para cada estudiante en el array filtrado (los aprobados), imprime un mensaje en consola 
// usando Template Strings que diga: “¡Felicidades [nombre], has aprobado con [calificacion]!”.
for (alumno of aptos) {
    console.log(`¡Felicidades ${alumno.nombre}, has aprobado con ${alumno.calificacion}!`)
}

// Recorre el array original y verifica si el valor de la propiedad aprobado es coherente 
// con la calificacion (es decir, si calificacion >= 5 entonces aprobado debe ser true, y si es menor, debe ser false).
for(alumno of estudiantes) {
    if(alumno.aprobado == (alumno.calificacion >=5)) {
        alumno.aprobado = true
        console.log(`La nota del alumno ${alumno.nombre} es coherente`)
    } else {
        alumno.aprobado = false
        console.log(`La nota del alumno ${alumno.nombre} no es coherente`)
    }
}

// Si hay incoherencias, imprime un mensaje como:
// “⚠️ Incoherencia en el registro de [nombre]: calificación = [calificacion], aprobado = [aprobado]”
if(!(alumno.aprobado == (alumno.calificacion >= 5))) {
    console.log(`⚠️ Incoherencia en el registro de ${alumno.nombre}: calificación = ${alumno.calificacion}, aprobado = ${alumno.aprobado}`)
}