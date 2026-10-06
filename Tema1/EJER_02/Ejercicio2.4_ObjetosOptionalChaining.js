// Crea un objeto `usuario` con `nombre` y `email`.
let usuario = {
    nombre : "Adri",
    email : "nose@gmail.com"
}

// Crea un objeto `perfil` con `puesto` y `empresa`.
let perfil = {
    puesto : "Programador",
    empresa : "Microsoft"
}
// Combina ambos objetos en un nuevo objeto `empleado` usando el “spread operator” (`...`).
let empleado = {usuario, perfil}

// Supongamos que el objeto `empleado` podría tener o no una propiedad anidada 
// `perfil.direccion.ciudad`. Intenta acceder a `empleado.perfil.direccion.ciudad` 
// usando “Optional Chaining” (`?.`) para evitar errores.
empleado.perfil?.direccion?.ciudad
// El problema está antes de llegar a dirección, por eso se ponen antes las interrogaciones
// Esto hace que no produzca un error

// Usa el “Nullish Coalescing Operator” (`??`) para asignar un valor por defecto 
// (“Ciudad no especificada”) si el resultado del paso anterior es `null` o `undefined`.
empleado.perfil?.direccion?.ciudad ?? "Ciudad no especificada"