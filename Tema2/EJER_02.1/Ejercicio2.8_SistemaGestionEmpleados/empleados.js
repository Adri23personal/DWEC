// Creamos un arreglo con varios empleados.
const empleados = [
    { id: 1, nombre: "Ana", departamento: "Informática", salario: 22000 },
    { id: 2, nombre: "Luis", departamento: "Marketing", salario: 20000 },
    { id: 3, nombre: "Marta", departamento: "Informática", salario: 25000 }
];

// Añade un empleado al arreglo.
function agregarEmpleado(empleado) {
    empleados.push(empleado);
}

// Busca un empleado por su id y lo elimina si existe.
function eliminarEmpleado(id) {
    const indice = empleados.findIndex(function(empleado) {
        return empleado.id === id;
    });

    // Si el empleado existe, lo eliminamos del arreglo.
    if (indice !== -1) {
        empleados.splice(indice, 1);
    }
}

// Devuelve los empleados que pertenecen al departamento indicado.
function buscarPorDepartamento(departamento) {
    return empleados.filter(function(empleado) {
        return empleado.departamento === departamento;
    });
}

// Calcula el salario promedio de todos los empleados.
function calcularSalarioPromedio() {
    // Si no hay empleados, devolvemos 0 para evitar dividir entre cero.
    if (empleados.length === 0) {
        return 0;
    }

    // Sumamos todos los salarios y dividimos entre el número de empleados.
    const totalSalarios = empleados.reduce(function(total, empleado) {
        return total + empleado.salario;
    }, 0);

    return totalSalarios / empleados.length;
}

// Devuelve un nuevo arreglo ordenado de mayor a menor salario.
function obtenerEmpleadosOrdenadosPorSalario() {
    // Copiamos el arreglo para no modificar el orden original.
    const empleadosOrdenados = empleados.slice();

    // Ordenamos la copia desde el salario más alto al más bajo.
    empleadosOrdenados.sort(function(a, b) {
        return b.salario - a.salario;
    });

    return empleadosOrdenados;
}

// Exportamos las funciones para utilizarlas desde main.js.
export {
    agregarEmpleado,
    eliminarEmpleado,
    buscarPorDepartamento,
    calcularSalarioPromedio,
    obtenerEmpleadosOrdenadosPorSalario
};