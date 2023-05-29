class Pizzas{
    constructor(tipo,precio,){
        this.tipo = tipo;
        this.precio = precio;
    }
}



let Muzzarella = new Pizzas (`Muzzarella`, "1300");
let Napolitana = new Pizzas (`Napolitana`, "1800");
let quesos = new Pizzas (`4quesos`, "2000");
let Anchoas = new Pizzas (`Anchoas`, "2100");
let DobleChedar = new Pizzas(`Doble Chedar`, "1000");
let DobleAnchoa = new Pizzas(`Doble Anchoa`, "1100");
let AceitunasNegras = new Pizzas(`Aceitunas Negras`, "1300");


const Apizzas = [
    Muzzarella,
    Napolitana,
    quesos,
    Anchoas,
    DobleAnchoa,
    DobleChedar,
    AceitunasNegras,
]

const Acarrito = [
    
]
 let totalCompra = Acarrito.reduce((acum, prod)=> {
         return accum + prod.precio}, 0)

console.log (totalCompra);
console.log (Acarrito)

function inicio(){
     let elecciones= prompt( "\n 1: Elejir Pizza. \n 2: Poner ingredientes Extras a ty gusto. \n 3: Salir") 

     if (elecciones==="1"){
        Compra()
     }
     else if (elecciones==="2"){
        CompraExtras()
     }
     else if (elecciones==="3"){
        return;
     }
}

function Compra(){
    let elecciones = alert(`Estas son nuestras Pizzas
    1: Muzzarella $1300
    2: Napolitana $1800
    3: 4quesos $2000
    4: Anchoas $2100` )
    let tipo= prompt("Escribe el producto de tu compra:")
    let precio= prompt("Tipea el importe de tu producto")


    const agregarpizza = new Pizzas(tipo,precio)
    Acarrito.push(agregarpizza)
    alert ("Hicimos nota de tu pedido")

    let eleccion2 = prompt (" Ingrese una opcion  \n 1: Seguir Comprando  \n 2: agregdarle un Extra :=D . \n 3: Ir al Carrito.")
    if(eleccion2 === "1"){
       Compra()
    }
    else if (eleccion2 === "2"){
        CompraExtras()
    }
    else if (eleccion2==="3"){
        carrito()
    }
}

function CompraExtras(){
    const elecciones = alert(`Pensando en tus propios gustos Extras, tipea el nombre para agregar al carrito:
    1: DobleChedar $500
    2: DobleAnchoas $800
    3: AceitunasNegras $450
    `)
    let tipo= prompt("Escribe el producto que quieres agregar:")
    let precio= prompt("Escribe el importe del producto extra a agregar: ")

    const agregarextra = new Pizzas(tipo,precio)
    Acarrito.push(agregarextra)
    
    alert ("Hicimos nota de tu ingrediente extra!")

    let eleccion2 = prompt (" Ingrese una opcion  \n 1: Seguir Comprando una Pizza. \n 2: Queres mas Extras!! \n 3: Ir al Carrito.")
    if (eleccion2 === "1"){
        Compra()
    }
    else if (eleccion2 === "2"){
        CompraExtras()
    }
    else if (eleccion2 ==="3"){
        carrito()

    }
}
 function carrito (){
    Acarrito.map((Apizzas)=> {
        alert(`Has elejido ${Apizzas.tipo} por un precio de ${Apizzas.precio}`)
    })
    
    let elecciones3= prompt( "\n 1: Seguir Comprando \n 2: Finalizar compra")
    
   if (elecciones3 === "1"){
        Compra()
    }
    else if (elecciones3==="2"){
        return;
    }

    }


inicio()



