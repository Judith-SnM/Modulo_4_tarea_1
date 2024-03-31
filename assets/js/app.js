function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}
const personaUno = new Paciente("Berta", 76, "6.383.128-K", "Diabetes")
const personaDos = new Paciente("Leoncio", 70, "7.007.335-8", "Asmatico")

console.log(personaUno)
