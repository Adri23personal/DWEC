
// ================================================================
// RETO 2 · SWITCH Y BUCLES
// ================================================================
//
// En este ejercicio vamos a aprender:
//
// - SWITCH: elegir entre varias opciones.
// - FOR: repetir instrucciones un número determinado de veces.
// - FOR OF: recorrer directamente los elementos de un array.
// - CONTINUE: saltar una vuelta del bucle.
// - BREAK: detener completamente un bucle.
// - IF: comprobar condiciones.
//
// ================================================================
// 2.1 · descuentoPorCategoria
// ================================================================

// CASO TÍPICO: UTILIZAR SWITCH PARA ELEGIR ENTRE VARIAS OPCIONES.
//
// switch sirve para comprobar el valor de una variable
// y ejecutar un código diferente dependiendo de su contenido.
//
// Es parecido a utilizar muchos IF y ELSE IF,
// pero resulta más cómodo cuando tenemos varias opciones.
//
// Recibimos:
// categoria: texto que indica el tipo de cliente.
//
// IMPORTANTE:
// return devuelve el resultado de la función.

export const descuentoPorCategoria = (categoria) => {

  // SWITCH comprueba el valor de categoria.

  switch (categoria) {

    // CASE significa CASO.
    // Si categoria es "estudiante", entramos aquí.
    //
    // También podemos juntar varios CASE.
    // En este caso, estudiante y jubilado tienen
    // exactamente el mismo descuento.

    case 'estudiante':
    case 'jubilado':

      // Devolvemos un descuento del 2 %.
      // 0.02 equivale al 2 %.
      return 0.02;


    // Si categoria es "familiaNumerosa".

    case 'familiaNumerosa':

      // Devolvemos un descuento del 30 %.
      return 0.3;


    // Si categoria es "socio".

    case 'socio':

      // Devolvemos un descuento del 10 %.
      return 0.1;


    // DEFAULT se ejecuta cuando no coincide
    // con ninguno de los CASE anteriores.
    //
    // Es parecido al ELSE de un IF.

    default:

      // Si no pertenece a ninguna categoría,
      // no tiene descuento.
      return 0;

  }

};


// ================================================================
// 2.2 · sumarHastaLimite
// ================================================================

// CASO TÍPICO: UTILIZAR FOR PARA RECORRER UN ARRAY.
//
// Queremos sumar los números de un array,
// pero sin superar un límite.
//
// Recibimos:
// - numeros: array con los números que queremos sumar.
// - limite: cantidad máxima que podemos alcanzar.
//
// También vamos a utilizar:
//
// CONTINUE -> salta el elemento actual y pasa al siguiente.
// BREAK    -> detiene completamente el bucle.
// TYPEOF   -> permite conocer el tipo de un dato.
// ISNAN    -> comprueba si un valor es NaN.

export const sumarHastaLimite = (numeros, limite) => {

  // Creamos una variable para guardar la suma.
  //
  // Utilizamos let porque su valor va a cambiar
  // cada vez que sumemos un número.

  let suma = 0;


  // CASO TÍPICO: UTILIZAR FOR.
  //
  // La estructura de FOR tiene tres partes:
  //
  // 1. let i = 0
  //    Creamos un contador que empieza en cero.
  //
  // 2. i < numeros.length
  //    El bucle continúa mientras queden elementos.
  //
  // 3. i++
  //    Aumentamos el contador en uno en cada vuelta.
  //
  // LENGTH indica cuántos elementos tiene el array.

  for (let i = 0; i < numeros.length; i++) {

    // Guardamos el número de la posición actual.
    //
    // numeros[i] significa:
    // "Dame el elemento que está en la posición i".

    const numero = numeros[i];


    // CASO TÍPICO: UTILIZAR CONTINUE PARA SALTAR ELEMENTOS.
    //
    // typeof numero !== 'number'
    // Comprueba si el elemento NO es un número.
    //
    // Number.isNaN(numero)
    // Comprueba si el valor es NaN (no es un número válido).
    //
    // numero < 0
    // Comprueba si el número es negativo.
    //
    // || significa O.
    // Basta con que se cumpla una condición.
    //
    // Si ocurre cualquiera de estas situaciones,
    // utilizamos continue para saltar ese elemento.

    if (
      typeof numero !== 'number' ||
      Number.isNaN(numero) ||
      numero < 0
    ) {

      continue;

    }


    // CASO TÍPICO: UTILIZAR BREAK PARA DETENER UN BUCLE.
    //
    // Comprobamos si al sumar el siguiente número
    // superaríamos el límite permitido.
    //
    // suma + numero > limite
    // Significa que la suma nueva sería mayor que el límite.
    //
    // Si se cumple, utilizamos break.
    // break detiene completamente el bucle.

    if (suma + numero > limite) {

      break;

    }


    // Si hemos llegado hasta aquí significa que:
    // - El dato es un número válido.
    // - No es negativo.
    // - No superamos el límite.
    //
    // Por tanto, lo añadimos a la suma.

    suma += numero;

    // suma += numero es lo mismo que:
    // suma = suma + numero;

  }


  // Devolvemos la suma final.
  //
  // IMPORTANTE:
  // El return va FUERA del FOR.
  // Así esperamos a que termine el bucle
  // antes de devolver el resultado.

  return suma;

};


// ================================================================
// 2.3 · contarVocales
// ================================================================

// CASO TÍPICO: UTILIZAR FOR OF PARA RECORRER UN TEXTO.
//
// Queremos contar cuántas vocales aparecen en un texto.
//
// Recibimos:
// texto: cadena de caracteres (un string).
//
// Vamos a utilizar:
// - toLowerCase(): convierte el texto en minúsculas.
// - for...of: recorre los caracteres de un texto.
// - includes(): comprueba si un elemento está dentro de otro.
// - ++: aumenta una variable en uno.

export const contarVocales = (texto) => {

  // Creamos un contador que empieza en cero.
  //
  // Cada vez que encontremos una vocal,
  // aumentaremos este contador.

  let total = 0;


  // CASO TÍPICO: UTILIZAR FOR OF PARA RECORRER UN TEXTO.
  //
  // for (const letra of texto)
  // Recorre el texto carácter por carácter.
  //
  // toLowerCase() convierte todas las letras en minúsculas.
  //
  // Así no tenemos que comprobar por separado:
  // A, E, I, O, U y a, e, i, o, u.

  for (const letra of texto.toLowerCase()) {


    // CASO TÍPICO: UTILIZAR INCLUDES PARA COMPROBAR
    // SI UN ELEMENTO ESTÁ DENTRO DE UNA CADENA O ARRAY.
    //
    // "aeiou" contiene todas las vocales.
    //
    // includes(letra) comprueba si la letra actual
    // aparece dentro de esa cadena.
    //
    // Si aparece, significa que hemos encontrado una vocal.

    if ("aeiou".includes(letra)) {

      // Aumentamos el contador en uno.
      //
      // total++ es lo mismo que:
      // total = total + 1;

      total++;

    }

  }


  // Cuando termina el FOR,
  // devolvemos el número total de vocales encontradas.

  return total;

};


// ================================================================
// CHULETA · ESTRUCTURAS IMPORTANTES DE JAVASCRIPT
// ================================================================
//
// SWITCH
// Elegir entre diferentes opciones.
// Ejemplo: tipo de usuario, categoría, día de la semana.
//
// CASE
// Indica una opción dentro de SWITCH.
//
// DEFAULT
// Se ejecuta si ninguna opción coincide.
// Es parecido al ELSE.
//
// FOR
// Repetir instrucciones recorriendo un array mediante posiciones.
//
// FOR OF
// Recorrer directamente los elementos de un array o texto.
//
// WHILE
// Repetir instrucciones mientras se cumpla una condición.
//
// IF
// Comprobar si se cumple una condición.
//
// CONTINUE
// Saltar la vuelta actual del bucle y pasar a la siguiente.
//
// BREAK
// Detener completamente el bucle.
//
// RETURN
// Devolver el resultado de una función.
//
// TYPEOF
// Comprobar el tipo de dato.
//
// LENGTH
// Saber cuántos elementos tiene un array o caracteres un texto.
//
// INCLUDES
// Comprobar si existe un elemento dentro de un array o texto.
//
// TOLOWERCASE
// Convertir un texto a minúsculas.
//
// ================================================================
// DIFERENCIA MUY IMPORTANTE: BREAK Y CONTINUE
// ================================================================
//
// CONTINUE:
// No ejecuta el resto de la vuelta actual.
// Pasa directamente al siguiente elemento.
//
// BREAK:
// Detiene completamente el bucle.
//
// ================================================================
// TRUCOS PARA EL EXAMEN
// ================================================================
//
// Si te piden elegir entre muchas opciones -> SWITCH.
//
// Si te piden recorrer un array por posiciones -> FOR.
//
// Si te piden recorrer directamente sus elementos -> FOR OF.
//
// Si te piden saltar elementos -> CONTINUE.
//
// Si te piden detener un bucle -> BREAK.
//
// Si te piden contar algo -> LET + CONTADOR + ++.
//
// Si te piden comprobar una condición -> IF.
//
// Si te piden comprobar si un texto contiene algo -> INCLUDES.
//
// Si te piden sumar valores -> LET + ACUMULADOR.
//
// ================================================================
