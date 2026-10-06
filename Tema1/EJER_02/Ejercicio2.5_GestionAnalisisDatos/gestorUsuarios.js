const crearPerfil = (nombre, email, edad) => {

    let usuario = {
        nombre: nombre, 
        email: email, 
        edad: edad}

    return usuario
}

const mostrarPerfil = (usuario) => {
    console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email}, Edad: ${usuario.edad}`)
}

export {crearPerfil}

export default mostrarPerfil //as alias