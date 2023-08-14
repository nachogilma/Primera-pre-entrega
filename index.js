//declaro arrays

let nombre = prompt ("Ingrese su nombre de usuario")

if (nombre == "") {
    alert ("A usted no se le a asignado un nombre de usuario")
} else {
    alert ("Su nuevo usuario es: " + nombre)
}

do {
    celular = prompt("Hola " + nombre + ", ingrese su numero telefonico por favor");
} while (isNaN(celular));

let direccion = prompt ("Hola " + nombre + ", ingrese donde quiere que entregemos su pedido porfavor")



//declaro bucle para la edad

do{numero = parseInt(prompt("Muy bien, a continuación ingrese su edad (tiene que ser mayor de edad para ingresar)"))}
while (numero < 18 || numero >100 || isNaN (numero))

alert ("oprima aceptar para dirigirse a la compra")

//declaro variable para los productos

let precio= 0;
let produc = "Pizzas";
let productos = "Otros";
do{
    productos = parseInt(prompt ("Elige unas de las siguientes Pizzas colocando su número (todas nuestras pizzas estan elaboradas en hornos de barro):\n1) Triple (salsa de tomate y muzzarella 3000$) \n2) Real (salsa de tomate ,muzzarella y morrones 3400$) \n3) Real con jamon (Salsa de tomate ,jamon ,muzzarella y morrones 3400$) \n4) La pizza de di gilma (salsa de tomate , cebolla ,muzzarella ,morrones ,perejil y oregano 3800$) \n5) Cuatriple (salsa de tomate y doble muzzarella 3400$) \n6) Jamon (salsa de tomate ,muzzarella y jamon 3600$) \n7) Panceta (salsa de tomate ,muzzarella ,panceta y cebolla de verdeo 3800$) \n8) Provolone (Salsa de tomate ,muzzarella y provolone 3800$) \n9) Anchoas (Salsa de tomate y anchoas 3400$) \n10) Roquefort (Salsa de tomate , muzzarella y roquefort 3600$)"))


} while (productos < 1 || productos > 10 || isNaN(productos))

switch (productos) {
    case 1:
        precio = 3000;
        produc = "Triple";
        break;

    case 2:
        precio = 3400;
        produc = "Real";
        break;

    case 3:
        precio = 3800;
        produc = "Real con jamon";
        break;

    case 4:
        precio = 3800;
        produc = "La pizza di gilma";
        break;

    case 5:
        precio = 3400;
        produc = "Cuatriple";
        break;

    case 6:
        precio = 3600;
        produc = "Jamon";
        break;

    case 7:
        precio = 3800;
        produc = "Panceta";
        break;

    case 8:
        precio = 3800;
        produc = "Provolone";
        break;

    case 9:
        precio = 3400;
        produc = "Anchoas"
        break;

    case 10:
        precio = 3600;
        produc = "Roquefort"
        break;
}

//declaro variable para la cantidad

let unidades;

do{
    unidades = parseInt( prompt("cuantas unidades del " + produc + " va a comprar?"))
}while(unidades < 1 || isNaN(unidades))

let resultado = 0

function multiplicar ( precio, cantidad) {
    resultado = precio * cantidad
}

function mostrar (mensaje){
    alert ("Usted compro " + unidades + " " + produc + ". El total a pagar es de $" + mensaje + ".")
}

multiplicar(precio, unidades);
mostrar(resultado)

let filtro = "Otros"

let end = "Otros"

let final = "Otros"

let demas;

let acces;

alert("su resultado con iva incluido hasta el momento es de $" + resultado * 1.21)

const extras = [
    {
        nombre: "cocacola",
        precio: 900
    },

    {
        nombre: "7up",
        precio: 800
    },

    {
        nombre: "plaplapla",
        precio: 700
    },

    {
        nombre: "plaplapla2",
        precio: 900
    },
]
    let comprar = prompt ("Desea agregar algo mas al carrito? escriba 1 para si")

    if  (comprar === "1") {
        while (isNaN(comprar));
    }

    do{
        filtro = prompt ("ingrese el nombre de lo que quiera agregar al carrito:\n1) cocacola \n2) 7up \n3) etc.... ")
    }while (filtro != "cocacola" && filtro != "7up" && filtro != "etc....")
    
    const resultadoFinal = extras.filter(
        (a) => a.nombre.includes(filtro)
    )

    do{
        final = prompt("ingrese el nombre del producto:\n1)" + resultadoFinal [0].nombre + "\n2)" + resultadoFinal [1].nombre + "\n3)" + resultadoFinal [2].nombre )
    }while (final != resultadoFinal[0].nombre && final != resultadoFinal[1].nombre && final != resultadoFinal[2].nombre)

    do{
        Extras = parseInt( prompt("cuantas unidades desea agregar al carrito?"))
    }while(Extras < 1 || isNaN(Extras))
    
    
    switch (Extra) {
        case "gaseosas":
            precioextras = 900;
            break;
        case "gaseosas":
            precioextras = 900;
            break;
        case "gaseosas":
            precioextras = 900;
            break;
        case "gaseosas":
            precioextras = 900;
            break;
        case "gaseosas":
            precioextras = 900;
            break;
        case "gaseosas":
            precioextras = 900;
            break;
    }

    acces = alert("Su precio en accesorios es de $" + precioextras * unidadesextra + ". Y su precio final de compra es de $" + (resultado + (extras * Extras)))
    

//resultadoFinal.forEach((filtro=>{prompt(filtro.nombre)}))



alert(`Hola ${nombre} en la ${direccion} se realizara su entrega, cuando arribe el pedido se lo llamara a su celular ${celular} Bienvenido a La pizzeria di Gilma`);

alert("su pedido arribarà en los proximos 30 minutos")

/*class Producto {
    constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
    }

    vender() {
      this.cantidad -= 1; // this.cantidad = this.cantidad - 1
    }
}

const producto1 = new Producto(
    "Monitor gamer curvo Samsung C27R500FHL",
    867212,
    "http://1234df",
    5
);

console.log(producto1);
producto1.vender();
console.log(producto1);
*/