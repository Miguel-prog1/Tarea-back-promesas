const color = require(`colors`)

let productos = [
    {
        id: 1,
        nombreProducto: "Procesador",
        precio: 150000,
        stock: 80

    },
    {
        id: 2,
        nombreProducto: "Placa madre",
        precio: 80000,
        stock: 1200
    }
    ,
    {
        id: 3,
        nombreProducto: "Memoria ram",
        precio: 30000,
        stock: 50

    },
    {
        id: 4,
        nombreProducto: "Fuente",
        precio: 77000,
        stock: 100

    },
    {
        id: 5,
        nombreProducto: "Almacenamiento",
        precio: 90000,
        stock: 1000

    }
]

let producto
let nombreproducto = "Fuente"
let cantidad = 10
function validarStock(nombre, productos, cantidad) {
    return new Promise((resolve, reject) => {
        console.log("encontrando prducto".yellow)
        setTimeout(() => {
            producto = productos.filter(element => element.nombreProducto == nombre)[0]
            if (producto == undefined) {
                reject(`No se pudo encontrar el producto ${nombre}`.red)
            }
            else if (cantidad > producto.stock) {
                reject(`Lo sentimos no hay stock suficiente`.red)
            }
            else (
                resolve(`Se encontro el producto: ${nombre}. Y hay stock suficiente: ${producto.stock}`.green)
            )
        }, 2000)
    })
}
function realizarVenta(producto, cantidad, validacionStrock) {
    return new Promise((resolve, reject) => {
        console.log("Realizando la venta".yellow)
        setTimeout(() => {
            producto.stock = producto.stock - cantidad
            resolve(`Esta es la cantidad de la compra es: ${cantidad} y esto es lo que queda en stock: ${producto.stock}`)
        }, 1000);
    })

}
function imprimirEtiqueta(nombreproducto, compra) {
    return new Promise((resolve, reject) => {
        console.log("Comenzando la impresion de la etiqueta".yellow)
        setTimeout(() => {
            resolve(`Nombre del producto: ${nombreproducto}, unidades compradas : ${cantidad}. Muchas gracias por su compra`)
        }, 4000)


    })
}
function funcionalidadMercado (){
    validarStock(nombreproducto, productos, cantidad)
    .then(result => {
        console.log(`${result}`)
        return realizarVenta(producto, cantidad, result)
    })
    .then((result) => {
        console.log(`La compra se realizo con exito: ${result}`.green)
        return imprimirEtiqueta(nombreproducto, result)
    })
    .then((result) => {
        console.log(result.green)
    })
    .catch(error => console.log(error))
    .finally(final => console.log("Finalizo la operacion".yellow))
}

module.exports = {funcionalidadMercado}