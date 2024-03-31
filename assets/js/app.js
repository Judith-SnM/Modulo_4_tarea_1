class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
        this.diagnostico = diagnostico;
    }
    get getNombre() {
        return this.nombre
    }
    get getEdad() {
        return this.edad
    }
    get getRut() {
        return this.rut
    }
    get getDiagnostico() {
        return this.ediagnostico
    }

    set setNombre(value) {
        this.nombre = value
    }
    set setEdad(value) {
        this.edad = value
    }
    set setRut(value) {
        this.rut = value
    }
    set setDiagnostico(value) {
        this.diagnostico = value
    }




    saludar = function () {
        return `${this.nombre} dice hola`
    }
}
const personaUno = new Paciente("Berta", 76, "6.383.128-K", "Diabetes")
const personaDos = new Paciente("Leoncio", 70, "7.007.335-8", "Asmatico")
const personaTres = new Paciente("Judith", 37, "16.692.403-0", "obesidad")

console.log(personaTres.getnombre)
console.log(personaTres.saludar())