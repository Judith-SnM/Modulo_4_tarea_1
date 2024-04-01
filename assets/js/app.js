class Consultorio {
    constructor(Paciente) {
        this.pacientes = [];

    }
    get getPacientes() {
        return this.pacientes;
    }

    set setPacientes(Paciente) {
        this.pacientes.push(Paciente);
    }

    //Metodo
    buscarPorNombre = function (nombre) {
        return this.pacientes.find(paciente => paciente.nombre === nombre);
    }

    mostrardatos = function () {
        this.Pacientes.forEach(paciente => {
            console.log("Nombre:", paciente.nombre);
            console.log("Edad:", paciente.edad);
            console.log("RUT:", paciente.rut);
            console.log("Diagnóstico:", paciente.diagnostico);
        })
    }
}
class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }

    get getNombre() {
        return this.nombre;
    }
    get getEdad() {
        return this.edad;
    }
    get getRut() {
        return this.rut;
    }
    get getDiagnostico() {
        return this.diagnostico;
    }

    set setNombre(value) {
        this.nombre = value;
    }
    set setEdad(value) {
        this.edad = value;
    }
    set setRut(value) {
        this.rut = value;
    }
    set setDiagnostico(value) {
        this.diagnostico = value;
    }

}

//instanciar
const consultorio = new Consultorio();


const pacienteUno = new Paciente("Berta", 76, "6.383.128-K", "Diabetes");
const pacienteDos = new Paciente("Leoncio", 70, "7.007.335-8", "Asmatico");
const pacienteTres = new Paciente("Judith", 37, "16.692.403-0", "obesidad");

consultorio.setPacientes = pacienteUno;
consultorio.setPacientes = pacienteDos;
consultorio.setPacientes = pacienteTres;

console.log(Consultorio.getPacientes)
console.log("Datos de Judith:");
console.log(consultorio.buscarPorNombre("Judith"));

console.log("Todos los pacientes:");
consultorio.mostrardatos();