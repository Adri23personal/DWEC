// Escribe una **Function Declaration** llamada `calcularAreaRectangulo` que acepte `base` 
// y `altura` y devuelva el área.
function calcularAreaRectangulo (base = 3, altura = 5) { // Añade valores por defecto a los parámetros (si quieres)
    return base * altura
}

// Escribe la misma lógica usando una **Function Expression** y guárdala 
// en una constante `calcularAreaTriangulo`.
const calcularAreaTriangulo = function(base, altura) {
    return (base * altura) / 2
}

// Convierte la función anterior en una **Arrow Function**.
const calcularAreaTrianguloArrow = (base, altura) => {
    return (base * altura) / 2
}

// Añade valores a los parámetros
calcularAreaRectangulo(5, 10)
calcularAreaTriangulo(8, 12)
calcularAreaTrianguloArrow(5, 8)

//  Llama a cada función con valores de prueba y muestra el resultado en la consola.
console.log(calcularAreaRectangulo(5, 10))
console.log(calcularAreaTriangulo(8, 12))
console.log(calcularAreaTrianguloArrow(5, 8))