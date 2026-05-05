const color = require('colors')


const alumno = {
    nombre: "Lucas",
    edad: "22",
    inscriptoAMaterias: ["Lengua", "Matematica", "Base de datos"],
    debeCorrelativa: false
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



function funcionalidadAlumnos() {
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


module.exports = {funcionalidadAlumnos}