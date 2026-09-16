// Declaración de variables
const nombre = "Adriana"
let edad =22

// Declarar variable con valor booleano
const tieneMascota = true

// Modificar la edad
edad = 23

// No permite reasignar un nuevo valor a ‘tieneMascota’ porque es const y no let
// tieneMascota = false

// edad nombre console.log

// Imprime el valor y el tipo de cada una de las variables, "typeof" te dice el tipo de dato
console.log(nombre, typeof nombre)
console.log(edad, typeof edad)
console.log(tieneMascota, typeof tieneMascota)

// Crear una frase que describa a la persona usando Template Strings
if (tieneMascota) {
    console.log(`${nombre} tiene ${edad} años y tiene mascota.`)
  } else {
    console.log(`${nombre} tiene ${edad} años y no tiene mascota.`)
  }
  