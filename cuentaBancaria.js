const color = require('colors')
let monto = 10 
let saldo = 100
let cuentatransferencia = 0 

const saldoValidado = (monto) => {
    const miPromesa =  new Promise((resolve, rejetc) => {
         
        console.log("Consultando saldo".yellow)
        setTimeout(() => {
            if (saldo > monto ) {
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



function funcionalidadBancaria (){

    saldoValidado(monto)
    .then(resuelto => {
        console.log(`Tiene saldo, ${resuelto}`.green)
        return transferencia (resuelto, monto)
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
}


module.exports = {funcionalidadBancaria}