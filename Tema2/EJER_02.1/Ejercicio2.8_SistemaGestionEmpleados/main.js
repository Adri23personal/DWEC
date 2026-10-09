// Importamos todas las funciones del módulo empleados.js.
import {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
} from "./empleados.js";

// Añadimos varios empleados a la empresa.
agregarEmpleado({
    id: 4,
    nombre: "Carlos",
    departamento: "Recursos Humanos",
    salario: 21000
});

agregarEmpleado({
    id: 5,
    nombre: "Sofía",
    departamento: "Marketing",
    salario: 24000
});

agregarEmpleado({
    id: 6,
    nombre: "Pablo",
    departamento: "Informática",
    salario: 27000
});

// Buscamos y mostramos los empleados de Informática.
console.log("Empleados del departamento de Informática:");
console.log(buscarPorDepartamento("Informática"));

// Calculamos y mostramos el salario promedio.
console.log("Salario promedio:");
console.log(calcularSalarioPromedio());

// Mostramos los empleados ordenados por salario, de mayor a menor.
console.log("Empleados ordenados por salario:");
console.log(obtenerEmpleadosOrdenadosPorSalario());

// Eliminamos al empleado con el id 2.
eliminarEmpleado(2);

// Mostramos la lista después de eliminar al empleado.
console.log("Empleados después de la eliminación:");
console.log(obtenerEmpleadosOrdenadosPorSalario());