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

/*
3) Crear un archivo llamado mercadoRestringido.js, dentro de este
archivo generar cinco objetos de tipo producto, deben tener las
propiedades: id, nombreProducto, precio, stock. Guardar los
cinco objetos en un array llamado productos.
a) Se desea generar un método para realizar venta, validar stock y
generar etiqueta de envío. El método validarStock recibe como
parámetros de entrada un nombre de producto a buscar y el array
productos, debe buscar el producto, en el array de productos, en
caso de que lo encuentre, debe validar el stock disponible. El
método realizarVenta, debe recibir como parámetro de entrada un
objeto producto, y en caso de que se ejecute la venta, descontar
la cantidad vendida del producto. El método imprimirEtiqueta,
recibe como parámetro de entrada el nombre del producto.
b) El método para realizar venta no se debe ejecutar hasta no
validar si hay stock suficiente.
c) El método generar etiqueta solo se debe ejecutar si se realizó
la venta correctamente.
d) Simular retardos en los métodos de validar correlativas y
realizar inscripción de 2 segundos y 1 segundos y 4 segundos
respectivamente.
e) En cualquiera de los casos se debe ejecutar un log en consola
que informe que se finalizó la operación.
f) Ejecutar las promesas y definir como se debe comportar en cada
caso (resuelto/rechazado)
*/

let producto
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
function imprimirEtiqueta(nombreproducto, compra){
    return new Promise ((resolve, reject)=>{
        console.log("Comenzando la impresion de la etiqueta".yellow)
        setTimeout(() => {
            resolve(`Nombre del producto: ${nombreproducto}, unidades compradas : ${cantidad}. Muchas gracias por su compra`)
        },4000)


    })
}

validarStock("Fuente", productos, cantidad)
    .then(result => {
        console.log(`${result}`)
        return realizarVenta(producto, cantidad, result)
    })
    .then((result) => {
        console.log(`La compra se realizo con exito: ${result}`.green)
         return imprimirEtiqueta(nombreproducto,result)
        })
    .then((result)=>{
        console.log(result.green)
    })
    .catch(error => console.log(error))
    .finally(final => console.log("Finalizo la operacion".yellow))