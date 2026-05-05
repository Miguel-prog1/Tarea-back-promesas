const color = require('colors')

/*
1) Crear un archivo llamado cuentaBancaria.js, dentro de este
archivo realizar los siguientes métodos.
a) Se desea generar un método para realizar una transferencia y un
método para validar el saldo disponible en la cuenta.
b) El método de realizar transferencia no se debe ejecutar hasta no
validar el saldo y que haya saldo suficiente.
c) Simular retardos en los métodos de validar saldo y realizar
transferencia de 5 segundos y 10 segundos respectivamente.
d) En cualquiera de los casos se debe ejecutar un log en consola
que informe que se finalizó la operación. (había un método de la
promesa que le paso un callback que se ejecuta en cualquiera de
los dos casos)
e) Ejecutar las promesas y definir como se debe comportar en cada
caso (resuelto/rechazado) pasándole las callbacks necesarias.
*/


let saldo = 100
let cuentaTransferencia = 0

const saldoValidado = () => {
    const miPromesa =  new Promise((resolve, rejetc) => {
        console.log("Consultando saldo".yellow)
        setTimeout(() => {
            if (saldo > 0) {
                resolve(`Su saldo es de: ${saldo}`.green)
            }
            else {
                rejetc(`Su saldo es de: ${saldo}`.red)
            }
        }, 5000,)

    })
    return miPromesa
}

const transferencia = (saldoValidado, monto)=>{
    const promesaTrans = new Promise ((resolve, rejetc)=>{
        console.log("Iniciando transferencia".yellow)
        setTimeout(()=>{   
            if(monto <= saldo){
                saldo = saldo - monto
                resolve(`Comenzando transferencia: ${cuentaTransferencia = monto}, tu saldo es de: ${saldo}`)
            }
            else{
                rejetc(`La transferencia no se pudo lograr, por falta de fondo: ${saldo}`)
            }
        }, 10000)
    })
    return promesaTrans
}

let montoTrans = 1000
saldoValidado()
    .then(resuelto => {
        console.log(`Tiene saldo, ${resuelto}`.green)
        return transferencia (resuelto, montoTrans)
    })
    .then(resuelto=>{
        console.log(`La transferencia fue exitosa: ${resuelto}`.green)
    })
    .catch(error => {
        console.log(`Ha devuelto un error, ${error}`.red)
    })
    .finally((final)=>{
        console.log("Se finalizo la consulta".yellow)
    })



    
