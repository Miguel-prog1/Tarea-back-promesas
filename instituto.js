const color = require('colors')
/*2) Crear un archivo llamado instituto.js, dentro de este archivo
crear un objeto que se llame alumno con las siguientes
propiedades: Nombre, Edad, inscriptoAMaterias (un array de
strings), debeCorrelativa (un booleano)
realizar los siguientes métodos.
a) Se desea generar un método para realizar una inscripción a una
materia (recibe como parámetro de entrada el objeto alumno, y el
nombre de la materia a inscribirse) y un método para validar si
tiene las correlativas aprobadas (recibe como parámetro de
entrada el objeto alumno)
b) El método para realizar una inscripción no se debe ejecutar
hasta no validar si tiene las correlativas aprobadas. En el
método validarCorrelativa, utilizar la propiedad
“debeCorrelativa” para validarlo, en el método para inscribir,
en caso de que el alumno no deba la correlativa, agregar la
materia al array de materias “inscriptoAMaterias” del objeto.
c) Simular retardos en los métodos de validar correlativas y
realizar inscripción de 2 segundos y 5 segundos respectivamente.
d) En cualquiera de los dos casos se debe ejecutar un log en
consola que informe que se finalizó la operación.
e) Ejecutar las promesas y definir como se debe comportar en cada
caso (resuelto/rechazado)
*/

const alumno = {
    nombre: "Lucas",
    edad: "22",
    inscriptoAMaterias: ["Lengua", "Matematica", "Base de datos"],
    debeCorrelativa: true
}
let materia = "programacion"

function Inscripcion(alumno, materia, correlativa) {

    return new Promise((resolve, reject) => {
        console.log("Realizando la inscripcion".yellow)
        setTimeout(() => {
            alumno.inscriptoAMaterias.push(materia)
            resolve(`La inscripcion se realizo con exito: ${alumno.inscriptoAMaterias}`)
        }, 5000)
    })

}

function validarCorrelativas(alumno) {
    return new Promise((resolve, reject) => {
        console.log("Verificando si tenes todas las correlativas aprobadas".yellow)
        let correlativa = alumno.debeCorrelativa
        setTimeout(() => {
            if (!correlativa) {
                resolve(`Tiene todas las correlativas aprobadas`)
            }
            else {
                reject(`Lo sentimos, todabia no aprobo todas las correlativas`)
            }
        }, 2000)
    })
}



function Provando() {
    validarCorrelativas(alumno)
        .then(result => {
            console.log(result.green)
            return Inscripcion(alumno, materia, result)
        })
        .then((result)=>{
            console.log(result.green)
        })
        .catch(error => {
            console.log(error.red)
        })
        .finally(final => {
            console.log("Finalizo la operacion".yellow)
        })
}

Provando()