// Crea un objeto ‘coche’ con las propiedades: ‘marca’ (string), ‘modelo’ (string), ‘año’ (number) y ‘estaDisponible’ (boolean).
let coche = {
    marca: "Kia",
    modelo: "Niro",
    año: 2007,
    estaDisponible: true
}

// Muestra el objeto completo en consola utilizando console.table().
console.table(coche)

// Usa la desestructuración (destructuring) para extraer la ‘marca’ y el ‘modelo’ en variables separadas e imprímelas en consola.
let {marca, modelo} = coche

console.log(marca)
console.log(modelo)

// Cambia el valor de la propiedad ‘estaDisponible’ a ‘true’.
estaDisponible = true

// Agrega una nueva propiedad ‘color’ al objeto.
coche.color = "rosa"

// Elimina la propiedad ‘año’ del objeto.
delete coche.año

// Vuelve a imprimir el objeto modificado en consola.
console.table(coche)