// Crea un array numeros con al menos 6 números.
let numeros = [1, 2, 3, 4, 5, 6]

// Usa el método `.map()` para crear un nuevo array `dobles` que contenga el doble 
// de cada número del array original.
let dobles = numeros.map(doblar =>
    doblar * 2) //El método .map() ya es un bucle por sí mismo, 
// Cuando ejecutas numeros.map(...), JavaScript automáticamente va a ir número por número



// Usa el método `.filter()` para crear un nuevo array `pares` que contenga 
// solo los números pares del array `numeros`.
let pares = numeros.filter(par => 
    par % 2 == 0
)

// Usa un bucle `for...of` para imprimir cada número del array `pares` en la consola.
for(let digito of pares) {
    console.log(digito)
}
// Para cada elemento de este array, haz algo. "digito" no existía antes, lo estamos creando aquí
// Se podria decir que: para cada digito de pares...haz esto