// Crea un objeto ‘producto’ con las propiedades: ‘nombre’ (string), ‘precio’ (number).
let producto = {
    nombre: "Ordenador",
    precio : 400.99
}

// Crea un objeto ‘cliente’ con las propiedades: ‘nombreCliente’ (string), ‘esPremium’ (boolean).
let cliente = {
    nombreCliente : "Adriana",
    esPremium: false
}

// Combina ambos objetos en un nuevo objeto llamado ‘pedido’ utilizando el Spread Operator (…).
let pedido = {...producto, ...cliente}

// Muestra el objeto ‘pedido’ en consola.
console.log(pedido)

// ¿Qué sucede si las propiedades de los objetos originales tienen el mismo nombre? Crea un nuevo objeto ‘cliente2’
// con la propiedad ‘nombre’ y combínalo con el objeto ‘producto’ para ver el resultado.
let cliente2 = {
    nombre: "Tablet"
}

let combinacion = {...producto, ...cliente2}

console.log(combinacion)