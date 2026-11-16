
// ================================================================
// RETO 1 · CORREGIR MÉTODOS DE ARRAY
// ================================================================
//
// En este ejercicio vamos a trabajar con métodos de ARRAY.
//
// Un array es una lista de elementos.
// Ejemplo: const numeros = [5, 2, 8, 1];
//
// IMPORTANTE:
// Algunos métodos modifican el array original.
// Otros crean un array nuevo sin modificar el original.
//
// ================================================================
// 1.1 · ordenarNumeros
// ================================================================

// CASO TÍPICO: UTILIZAR SORT PARA ORDENAR UN ARRAY.
//
// Queremos ordenar los números de menor a mayor.
//
// sort() sirve para ordenar los elementos de un array.
//
// IMPORTANTE:
// sort() MODIFICA el array original.
//
// Por eso utilizamos [...numeros] para crear una COPIA
// antes de ordenarlo.
//
// ... se llama SPREAD.
// Sirve para copiar o expandir los elementos de un array.
//
// (a, b) => a - b
// Indica cómo queremos ordenar los números.
//
// Si a - b es negativo, a va antes que b.
// Si es positivo, b va antes que a.
// Si es cero, ambos tienen el mismo valor.
//
// a - b = orden de menor a mayor.
// b - a = orden de mayor a menor.

export const ordenarNumeros = (numeros) =>

  // Creamos una copia del array y la ordenamos.
  [...numeros].sort((a, b) => a - b);


// ================================================================
// 1.2 · duplicarPrecios
// ================================================================

// CASO TÍPICO: UTILIZAR MAP PARA TRANSFORMAR UN ARRAY.
//
// Queremos multiplicar por dos el precio de cada producto.
//
// map() recorre todos los elementos de un array
// y devuelve un ARRAY NUEVO con los resultados.
//
// A diferencia de sort(), map() NO modifica el array original.
//
// precio representa el elemento actual que estamos recorriendo.

export const duplicarPrecios = (precios) =>

  // Recorremos los precios y multiplicamos cada uno por dos.
  //
  // precio * 2 = duplicar el precio.
  //
  // El resultado será un nuevo array con los precios duplicados.

  precios.map((precio) => precio * 2);


// ================================================================
// 1.3 · ultimos
// ================================================================

// CASO TÍPICO: UTILIZAR SLICE PARA EXTRAER UNA PARTE DE UN ARRAY.
//
// Queremos obtener los últimos elementos de una lista.
//
// Recibimos:
// - lista: array original.
// - cantidad: número de elementos que queremos obtener.
//
// slice() permite extraer una parte de un array
// sin modificar el array original.
//
// IMPORTANTE:
// slice() devuelve una COPIA de la parte seleccionada.

export const ultimos = (lista, cantidad) =>

  // -cantidad indica que empezamos a contar desde el final.
  //
  // Por ejemplo:
  // lista = [10, 20, 30, 40, 50]
  // cantidad = 2
  //
  // lista.slice(-2) devuelve [40, 50].
  //
  // Si cantidad es 3, devuelve los últimos 3 elementos.

  lista.slice(-cantidad);


// ================================================================
// 1.4 · primerPar
// ================================================================

// CASO TÍPICO: UTILIZAR FIND PARA BUSCAR UN ELEMENTO.
//
// Queremos encontrar el PRIMER número par de un array.
//
// find() recorre el array y devuelve el primer elemento
// que cumple la condición.
//
// Si no encuentra ninguno, devuelve undefined.
//
// IMPORTANTE:
// find() NO modifica el array original.
//
// % es el operador MÓDULO.
// Devuelve el resto de una división.
//
// numero % 2 === 0
// Significa que al dividir el número entre 2,
// el resto es cero.
//
// Si el resto es cero, el número es PAR.

export const primerPar = (numeros) => {

  // Buscamos el primer número que sea divisible entre 2.
  //
  // numero representa cada elemento del array.

  const par = numeros.find((numero) => numero % 2 === 0);


  // CASO TÍPICO: UTILIZAR ?? PARA DAR UN VALOR ALTERNATIVO.
  //
  // ?? se llama NULLISH COALESCING.
  //
  // Comprueba si el valor de la izquierda es null o undefined.
  //
  // Si encuentra un número par:
  // devuelve ese número.
  //
  // Si no encuentra ninguno:
  // devuelve el texto "ninguno".
  //
  // Es una forma resumida de utilizar un IF y un ELSE.

  return par ?? 'ninguno';

};


// ================================================================
// 1.5 · sumaTotal
// ================================================================

// CASO TÍPICO: UTILIZAR REDUCE PARA SUMAR TODOS LOS ELEMENTOS.
//
// Queremos sumar todos los números de un array.
//
// reduce() recorre todos los elementos y acumula
// un resultado en una única variable.
//
// Recibe dos parámetros principales:
// - acumulado: resultado de la suma que llevamos.
// - numero: elemento actual que estamos sumando.
//
// El 0 del final indica que empezamos a sumar desde cero.
//
// IMPORTANTE:
// reduce() no modifica el array original.

export const sumaTotal = (numeros) =>

  // Recorremos los números y los vamos sumando.
  //
  // acumulado + numero
  // Suma el resultado anterior con el número actual.
  //
  // El resultado final será un único número.

  numeros.reduce(
    (acumulado, numero) => acumulado + numero,
    0
  );


// ================================================================
// CHULETA · MÉTODOS DE ARRAY
// ================================================================
//
// SORT()
// Ordena los elementos de un array.
// IMPORTANTE: modifica el array original.
//
// [...array]
// Crea una copia del array.
//
// MAP()
// Transforma todos los elementos y devuelve un array nuevo.
//
// FILTER()
// Filtra elementos que cumplen una condición.
//
// SLICE()
// Extrae una parte del array sin modificar el original.
//
// FIND()
// Devuelve el primer elemento que cumple una condición.
// Si no encuentra ninguno, devuelve undefined.
//
// REDUCE()
// Recorre un array y acumula un resultado.
//
// SOME()
// Comprueba si al menos un elemento cumple una condición.
//
// EVERY()
// Comprueba si todos los elementos cumplen una condición.
//
// ================================================================
// OPERADORES IMPORTANTES
// ================================================================
//
// ...  -> SPREAD: copiar o expandir elementos.
//
// =>   -> FUNCIÓN FLECHA.
//
// ===  -> Comprobar si dos valores son iguales.
//
// %    -> MÓDULO: devuelve el resto de una división.
//
// ??   -> Utilizar un valor alternativo si el anterior
//         es null o undefined.
//
// ================================================================
// ¡MUY IMPORTANTE! MÉTODOS QUE MODIFICAN O NO EL ARRAY
// ================================================================
//
// MODIFICAN EL ARRAY ORIGINAL:
//
// sort()    -> Ordena el array original.
// push()    -> Añade al final.
// pop()     -> Elimina el último elemento.
// shift()   -> Elimina el primer elemento.
// unshift() -> Añade al principio.
//
// NO MODIFICAN EL ARRAY ORIGINAL:
//
// map()     -> Devuelve un array nuevo.
// filter()  -> Devuelve un array nuevo.
// slice()   -> Devuelve una parte en un array nuevo.
// find()    -> Devuelve un elemento.
// reduce()  -> Devuelve un resultado acumulado.
// some()    -> Devuelve true o false.
//
// TRUCO:
// Si quieres utilizar sort() sin modificar el array original:
//
// const copiaOrdenada = [...numeros].sort((a, b) => a - b);
//
// ================================================================
// CONSEJOS PARA EL EXAMEN
// ================================================================
//
// Si te piden ordenar números       -> SORT.
// Si te piden duplicar o transformar -> MAP.
// Si te piden coger los últimos      -> SLICE.
// Si te piden buscar el primero      -> FIND.
// Si te piden sumar todos            -> REDUCE.
// Si te piden comprobar si existe    -> SOME.
// Si te piden copiar un array        -> [...array].
// Si te piden menor a mayor          -> (a, b) => a - b.
// Si te piden mayor a menor          -> (a, b) => b - a.
