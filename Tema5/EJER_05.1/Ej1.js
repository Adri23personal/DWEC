console.log("Inicio");

try {
    console.log("Dentro del try 1");

    //Total no está declarada, por lo que se produce un ReferenceError
    console.log(total);

    //Esto no se ejecuta porque el error interrumpe el try
    console.log("Dentro del try 2");

} catch (error) {

    //Capturamos el error y mostramos su nombre
    console.log("Capturado: ", error.name);

} finally {

    //Finally siempre se ejecuta, aunque haya o no un error
    console.log("Limpieza");
}

//El programa continúa después del bloque try/catch/finally
console.log("Fin");