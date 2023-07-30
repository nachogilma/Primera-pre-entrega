
alert("Al ser la primera vez que se crea su usuario se le solicitan nombre y apellido , celular , mail y edad asi posee la posibilidad de ganarse beneficios para su proxima compra");
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
    alert(`Hola ${nombre} ${apellido} en la ${direccion} se realizara su entrega, cuando arrive el pedido se lo llamara a su celular ${celular} Bienvenido a La pizzeria di Gilma`);
        } else {
    alert("Gracias por confiar en nosotros a continuacion puede elegir entre todas estas");
}

let respuesta = prompt("Si desea una pizza individual escriba 1 , si desea seleccionar un combo escriba 2 (todas nuestras pizzas estan elaboradas con hornos de piedra)")

if(respuesta === 1){
    
    //codigo a ejecutar cuando la condicion1 sea verdadera

}else if(respuesta === 2){

    //codigo a ejecutar cuando la condicion2 sea verdadera

}else{
    alert("Porfavor escriba correctamente 1 o 2");

    let respuesta = prompt("Si desea una pizza individual escriba 1 , si desea seleccionar un combo escriba 2 (todas nuestras pizzas estan elaboradas con hornos de piedra)")

    if(respuesta === 1){
    
    //codigo a ejecutar cuando la condicion1 sea verdadera

    }else if(respuesta === 2){
    //codigio a ejecutar cuando ninguna de las condiciones sean verdaderas
} 