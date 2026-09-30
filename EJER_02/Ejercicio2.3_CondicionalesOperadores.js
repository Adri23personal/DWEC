// Crea una función que reciba un `saldo` y una cantidad a `retirar`.
// Dentro de la función, comprueba si el `saldo` es mayor o igual a la cantidad a `retirar`.
// Si se puede retirar, muestra “Retiro exitoso. Saldo restante: [nuevo saldo]”.
// Si no, muestra “Saldo insuficiente”.
function retirarDinero (saldo, retirar, tieneTarjetaCredito) {

    if(saldo >= retirar) {
        saldo = saldo - retirar // -=
        console.log(`Retiro exitoso. Saldo restante: ${saldo}`)

    } else {

        // **Extra:** Añade una variable booleana `tieneTarjetaCredito`. Modifica la lógica para que, 
        // si el saldo no es suficiente PERO `tieneTarjetaCredito` es `true`, 
        // muestre “Saldo insuficiente, pagando con tarjeta de crédito”.

        if(tieneTarjetaCredito === true) {
            console.log("Saldo insuficiente, pagado con tarjeta de crédito")

        } else {
            console.log("Saldo insuficiente")
        }

    }
}


retirarDinero(200, 350, true)
// Si pusiera "console.log" fuera de la función, mostraría "undefined",
// ya que la función no tiene un return.
// Con console.log dentro de la función no hace falta poner return.
