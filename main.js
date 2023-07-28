
alert("Al ser la primera vez que se crea su usuario se le solicitan nombre y apellido , celular , mail y edad asi posee la posibilidad de ganarse beneficios para su proxima compra");

let nombre = prompt("ingrese el nombre");

let apellido = prompt("ingrese el apellido");

let direccion = prompt("ingrese la direccion")

while(isNaN(variableDelNumero)){
    prompt = "Ingrese el número de celular"
    }

let mail = prompt("ingrese su email");

let edad = prompt("ingrese su edad");

//let celular = prompt("ingrese su numero telefonico");

//${mail} ${edad}

    if (nombre != "" && apellido != "" && direccion != "" && celular != "" && mail != "" && edad != "") {
    alert(`Hola ${nombre} ${apellido} en la ${direccion} se realizara su entrega, cuando arrive el pedido se lo llamara a su celular ${celular} Bienvenido a La pizzeria di Gilma`);
        } else {
    alert("Gracias por confiar en nosotros a continuacion puede elegir entre todas estas");
}

let pizzas = prompt("Ingrese el codigo de la moneda");

    switch (moneda) {
    case "ars":
    alert("Moneda de argentina");
    break;

    case "clp":
        alert("Moneda de chile");
            break;
        
        case "cop":
            alert("Moneda de colombia");
            break;
        
        default:
            alert("Moneda no reconocida");
        break;
    }
