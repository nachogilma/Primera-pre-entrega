
alert("Al ser la primera vez que se crea su usuario se le solicitan nombre y apellido , celular. mail y edad (opcional)");
let nombre = prompt("ingrese el nombre");
let apellido = prompt("ingrese el apellido");
let direccion = prompt("ingrese la direccion");
let celular;
do {
    celular = prompt("ingrese su numero telefonico por favor");
} while (isNaN(celular));
if (nombre != "" && apellido != "" && direccion != "" && celular !="") {
} else {
alert("Para poder realizar el pedido se solicita nombre , apellido , direcion y celular , porfavor rellene los espacios vacios");
while (condition) {
    break
    }
}
let mail = prompt("si quiere que le lleguen promociones y beneficios introduzca su mail, si no desea introducirlo precione cancelar") 
let edad = prompt("ingrese su fecha de cumpleaños para conseguir beneficios, si no desea introducirlo precione cancelar");

    if (nombre != "" && apellido != "" && direccion != "" && celular != "" && mail != "" && edad != "") {
    alert(`Hola ${nombre} ${apellido} en la ${direccion} se realizara su entrega, cuando arribe el pedido se lo llamara a su celular ${celular} Bienvenido a La pizzeria di Gilma`);
        } else {
    alert("Gracias por confiar en nosotros a continuacion puede elegir entre todas estas");
}

let respuesta = prompt(" Si desea una pizza individual escriba 1 , si desea seleccionar un combo escriba 2 (todas nuestras pizzas estan elaboradas con hornos de piedra)")
            alert("Escriba el numero que esta al lado de cada estilo de pizza para seleccionarla")

if(respuesta === '1' ){
    let individual = prompt(" 1) Pizza muzzarela 3500$   2) Pizza cuatro quesos 3700$   3) Pizza fugazzeta 3700$  4) Pizza cuatro estaciones 3800$  5) Pizza con champiñones 3700$    6) Pizza Napolitana 3650$")
    //codigo a ejecutar cuando la condicion1 sea verdadera
    
   /* if (respuesta === '1') {
        alert("usted a agregado una pizza muzzarela total a pagar 3500$")
    }

    if (respuesta === '2') {
        alert("usted a agregado una pizza cuatro quesos total a pagar 3700$")
    }

    if (respuesta === '3') {
        alert("usted a agregado una pizza fugazzeta total a pagar 3700$")
    }

    if (respuesta === '4') {
        alert("usted a agregado una pizza cuatro estaciones total a pagar 3800$")
    }

    if (respuesta === '5') {
        alert("usted a agregado una pizza con champigñones total a pagar 3700$")
    }

    if (respuesta === '6') {
        alert("usted a agregado una pizza napolitana total a pagar 3650$")
    }
    */
}else if(respuesta === '2' ){
    let combo = prompt(" 1) dos pizzas muzzarela 6500$   2) Una pizza muzzarela y una napolitana 5500$    3) Pizza cuatro estaciones y cuatro quesos 7000$    4) Pizza fugazzeta y una Pizza con champiñones 6800$")

    if (respuesta === '1') {
        alert("usted a agregado dos pizzas muzzarela total a pagar 6500$")
    }

    if (respuesta === '2') {
        alert("usted a agregado Una pizza muzzarela y una napolitana total a pagar 5500$")
    }

    if (respuesta === '3') {
        alert("usted a agregado Pizza cuatro estaciones y cuatro quesos total a pagar 7000$")
    }

    if (respuesta === '4') {
        alert("usted a agregado Pizza fugazzeta y una Pizza con champiñones total a pagar 6800$")
    }

    //codigo a ejecutar cuando la condicion2 sea verdadera

}else{
    alert("Porfavor escriba un numero");
    //codigio a ejecutar cuando ninguna de las condiciones sean verdaderas
    let respuesta = prompt("Si desea una pizza individual escriba 1 , si desea seleccionar un combo escriba 2 (todas nuestras pizzas estan elaboradas con hornos de piedra)")

}if (respuesta === '1' ) {

    let individual = prompt(" 1) Pizza muzzarela 3500$   2) Pizza cuatro quesos 3700$  3) Pizza fugazzeta 3700$  4) Pizza cuatro estaciones 3800$  5) Pizza con champiñones 3700$    6) Pizza Napolitana 3650$")

    if (respuesta === '1') {
        alert("usted a agregado una pizza muzzarela total a pagar 3500$")
    }

    if (respuesta === '2') {
        alert("usted a agregado una pizza cuatro quesos total a pagar 3700$")
    }

    if (respuesta === '3') {
        alert("usted a agregado una pizza fugazzeta total a pagar 3700$")
    }

    if (respuesta === '4') {
        alert("usted a agregado una pizza cuatro estaciones total a pagar 3800$")
    }

    if (respuesta === '5') {
        alert("usted a agregado una pizza con champigñones total a pagar 3700$")
    }

    if (respuesta === '6') {
        alert("usted a agregado una pizza napolitana total a pagar 3650$")
    }

}else if (respuesta === '2' ) {

    let combo = prompt(" 1) dos pizzas muzzarela 6500$   2) Una pizza muzzarela y una napolitana 5500$    3) Pizza cuatro estaciones y cuatro quesos 7000$    4) Pizza fugazzeta y una Pizza con champiñones 6800$") 
    
}

alert("En aproximadamente 30 minutos arribara su pedido")