
// ================================================================
// RETO 3 · MÉTODOS DE ARRAY
// ================================================================
//
// En este ejercicio vamos a aprender a utilizar métodos de ARRAY.
//
// Un array es una lista de elementos.
// Por ejemplo:
// const numeros = [2, 5, 8, 10];
//
// Los métodos de array sirven para recorrer, filtrar, ordenar,
// sumar, buscar y transformar los elementos de una lista.
//
// ================================================================
// 3.1 · nombresCaros
// ================================================================

// CASO TÍPICO: FILTER + MAP + SORT.
//
// Queremos:
// 1. Seleccionar los productos que superen un precio mínimo.
// 2. Obtener solamente sus nombres.
// 3. Ordenar los nombres alfabéticamente.
//
// Recibimos:
// - productos: array con los productos.
// - minimo: precio mínimo que queremos comprobar.

export const nombresCaros = (productos, minimo) =>

  productos

    // PASO 1 · FILTER
    // ------------------------------------------------------------
    // filter() sirve para FILTRAR elementos de un array.
    //
    // Recorre todos los productos y se queda solamente
    // con aquellos que cumplen la condición.
    //
    // producto => producto.precio >= minimo
    //
    // Significa:
    // "Quédate con los productos cuyo precio sea mayor
    // o igual que el mínimo indicado".
    //
    // >= significa MAYOR O IGUAL QUE.

    .filter((producto) => producto.precio >= minimo)

    // PASO 2 · MAP
    // ------------------------------------------------------------
    // map() sirve para TRANSFORMAR un array.
    //
    // En este caso, en lugar de devolver el producto completo,
    // solamente queremos devolver su nombre.
    //
    // producto.nombre accede a la propiedad nombre del objeto.

    .map((producto) => producto.nombre)

    // PASO 3 · SORT
    // ------------------------------------------------------------
    // sort() sirve para ORDENAR los elementos de un array.
    //
    // localeCompare() compara dos textos teniendo en cuenta
    // las reglas del idioma.
    //
    // 'es' indica que queremos utilizar el idioma español.
    //
    // (a, b) representa los dos nombres que estamos comparando.
    //
    // El resultado será una lista de nombres ordenados
    // alfabéticamente.

    .sort((a, b) => a.localeCompare(b, 'es'));


// ================================================================
// 3.2 · totalInventario
// ================================================================

// CASO TÍPICO: UTILIZAR REDUCE PARA SUMAR VALORES.
//
// Queremos calcular el valor total de todo el inventario.
//
// Para conseguirlo:
// - Multiplicamos el precio de cada producto por sus unidades.
// - Sumamos todos los resultados.
//
// Recibimos un array de productos.

export const totalInventario = (productos) =>

  // REDUCE
  // --------------------------------------------------------------
  // reduce() sirve para RECORRER UN ARRAY Y ACUMULAR UN RESULTADO.
  //
  // En este caso vamos a ir sumando el valor de todos
  // los productos para obtener el valor total del inventario.
  //
  // total = cantidad que llevamos acumulada.
  // precio = precio del producto actual.
  // unidades = unidades disponibles del producto actual.
  //
  // { precio, unidades } se llama DESESTRUCTURACIÓN.
  // Sirve para extraer directamente esas propiedades del objeto.
  //
  // precio * unidades = valor total de ese producto.
  //
  // El 0 final es el valor inicial de total.
  // Empezamos la suma desde cero.

  productos.reduce(
    (total, { precio, unidades }) => total + precio * unidades,
    0
  );


// ================================================================
// 3.3 · agruparPorCategoria
// ================================================================

// CASO TÍPICO: UTILIZAR REDUCE PARA AGRUPAR ELEMENTOS.
//
// Queremos organizar los nombres de los productos
// según la categoría a la que pertenecen.
//
// Por ejemplo:
//
// {
//   "Informática": ["Ratón", "Teclado"],
//   "Muebles": ["Mesa", "Silla"]
// }
//
// Recibimos un array de productos.

export const agruparPorCategoria = (productos) =>

  productos.reduce(

    // PASO 1 · RECORRER LOS PRODUCTOS
    // ------------------------------------------------------------
    // grupos = objeto donde vamos guardando las categorías.
    // categoria = categoría del producto actual.
    // nombre = nombre del producto actual.
    //
    // Utilizamos desestructuración para extraer directamente
    // las propiedades categoria y nombre.

    (grupos, { categoria, nombre }) => ({

      // PASO 2 · SPREAD (...)
      // ----------------------------------------------------------
      // ...grupos copia todas las categorías que ya teníamos.
      //
      // Es importante porque queremos conservar
      // los grupos que hemos creado anteriormente.

      ...grupos,

      // PASO 3 · CREAR O ACTUALIZAR UNA CATEGORÍA
      // ----------------------------------------------------------
      // [categoria] permite utilizar el valor de la variable
      // categoria como nombre de una propiedad.
      //
      // Por ejemplo, si categoria = "Informática",
      // crearemos una propiedad llamada "Informática".
      //
      // ?? es el operador NULLISH COALESCING.
      // Significa que si grupos[categoria] es null o undefined,
      // utilizaremos un array vacío [].
      //
      // ...(grupos[categoria] ?? [])
      // Copia los nombres que ya estaban guardados.
      //
      // [...array, nombre]
      // Crea un nuevo array añadiendo el nombre actual al final.

      [categoria]: [...(grupos[categoria] ?? []), nombre]

    }),

    // PASO 4 · VALOR INICIAL
    // ------------------------------------------------------------
    // {} es un objeto vacío.
    //
    // Empezamos sin categorías y vamos añadiéndolas
    // conforme recorremos los productos.

    {}

  );


// ================================================================
// 3.4 · productoMasBarato
// ================================================================

// CASO TÍPICO: UTILIZAR REDUCE PARA BUSCAR EL VALOR MENOR.
//
// Queremos encontrar el producto que tenga el precio más bajo.
//
// Recibimos un array de productos.

export const productoMasBarato = (productos) => {

  // REDUCE
  // --------------------------------------------------------------
  // Vamos recorriendo los productos y comparando sus precios.
  //
  // barato = producto que hasta ahora tiene el precio más bajo.
  // producto = producto que estamos comprobando actualmente.
  //
  // undefined significa que al principio todavía no tenemos
  // ningún producto seleccionado.

  return productos.reduce(

    (barato, producto) =>

      // CASO TÍPICO: UTILIZAR EL OPERADOR TERNARIO (? :)
      // ----------------------------------------------------------
      // El operador ternario permite escribir un IF y un ELSE
      // de forma resumida.
      //
      // Su estructura es:
      // condicion ? resultado_si_verdadero : resultado_si_falso
      //
      // Comprobamos dos cosas:
      //
      // 1. barato === undefined
      //    Si todavía no tenemos ningún producto seleccionado,
      //    el producto actual será el más barato provisional.
      //
      // 2. producto.precio < barato.precio
      //    Si el producto actual cuesta menos que el anterior,
      //    nos quedamos con el actual.
      //
      // Si ninguna de las dos condiciones se cumple,
      // mantenemos el producto que ya teníamos.

      barato === undefined || producto.precio < barato.precio
        ? producto
        : barato,

    // Valor inicial: undefined.
    // Así sabemos que todavía no hemos encontrado ningún producto.

    undefined

  );

};


// ================================================================
// 3.5 · hayAgotados
// ================================================================

// CASO TÍPICO: UTILIZAR SOME PARA COMPROBAR SI EXISTE UN ELEMENTO.
//
// Queremos saber si hay algún producto que tenga cero unidades.
//
// some() recorre el array y comprueba si AL MENOS UN elemento
// cumple la condición.
//
// Devuelve:
// true  -> si encuentra algún producto agotado.
// false -> si no encuentra ninguno.

export const hayAgotados = (productos) => {

  // SOME
  // --------------------------------------------------------------
  // producto representa cada elemento que estamos comprobando.
  //
  // producto.unidades accede a las unidades disponibles.
  //
  // === significa IGUAL EXACTAMENTE.
  //
  // Comprobamos si las unidades son iguales a cero.

  return productos.some((producto) => producto.unidades === 0);

};


// ================================================================
// CHULETA · MÉTODOS DE ARRAY MÁS IMPORTANTES
// ================================================================

// FILTER
// Filtra elementos que cumplen una condición.
// Ejemplo: productos.filter(p => p.precio > 10);
//
// MAP
// Transforma los elementos de un array.
// Ejemplo: productos.map(p => p.nombre);
//
// SORT
// Ordena los elementos de un array.
// Ejemplo: numeros.sort((a, b) => a - b);
//
// REDUCE
// Recorre un array y acumula un resultado.
// Ejemplo: numeros.reduce((total, n) => total + n, 0);
//
// SOME
// Comprueba si AL MENOS UN elemento cumple una condición.
// Ejemplo: productos.some(p => p.unidades === 0);
//
// EVERY
// Comprueba si TODOS los elementos cumplen una condición.
// Ejemplo: numeros.every(n => n > 0);
//
// FIND
// Busca y devuelve el PRIMER elemento que cumple una condición.
// Ejemplo: productos.find(p => p.precio < 10);
//
// LENGTH
// Devuelve la cantidad de elementos de un array.
// Ejemplo: productos.length;
//
// ================================================================
// OPERADORES IMPORTANTES
// ================================================================
//
// ===  Igual que.
// !==  Distinto de.
// >    Mayor que.
// <    Menor que.
// >=   Mayor o igual que.
// <=   Menor o igual que.
// &&   Y (se tienen que cumplir las dos condiciones).
// ||   O (basta con que se cumpla una condición).
// ??   Utiliza un valor alternativo si el anterior es null
//      o undefined.
// ...  Spread: copia o expande los elementos de un array
//      o las propiedades de un objeto.
//
// ================================================================
// CONSEJO PARA EL EXAMEN
// ================================================================
//
// Si te piden FILTRAR       -> piensa en FILTER.
// Si te piden TRANSFORMAR   -> piensa en MAP.
// Si te piden SUMAR         -> piensa en REDUCE.
// Si te piden AGRUPAR       -> piensa en REDUCE.
// Si te piden ORDENAR       -> piensa en SORT.
// Si te piden BUSCAR UNO    -> piensa en FIND.
// Si te preguntan SI EXISTE -> piensa en SOME.
// Si te preguntan SI TODOS  -> piensa en EVERY.
// Si te piden CONTAR        -> piensa en FILTER + LENGTH.

