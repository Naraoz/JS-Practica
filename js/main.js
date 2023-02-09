// Escriba un programa en donde se le pida al usuario
// ingresar el lugar a donde quiera viajar.
// Teniendo en cuenta estos valores:
// - Colombia: $40
// - México: $50
// - Brasil: $30
// - Uruguay: $20
// - Chile: $20
// - Ecuador: $30
// - Perú: $40
// - Estados Unidos: $50
// Mostrarle al usuario cuál sería el costo
//  de viajar al lugar que escribió.

// const lugarDondeQuiereViajar = prompt("Escriba el lugar a donde quiere viajar");

// let costoDelViaje = 0;

// if (
//   lugarDondeQuiereViajar === "Colombia" ||
//   lugarDondeQuiereViajar === "Peru"
// ) {
//   costoDelViaje = 40;
// } else if (
//   lugarDondeQuiereViajar === "Mexico" ||
//   lugarDondeQuiereViajar === "Estados Unidos"
// ) {
//   costoDelViaje = 50;
// }

// console.log(costoDelViaje);

// Escriba un programa que le pida una letra al usuario
// y le diga si es una vocal o no.

// const letra = prompt("Ingrese una Letra");

// if (
//   letra === "a" ||
//   letra === "e" ||
//   letra === "i" ||
//   letra === "o" ||
//   letra === "u"
// ) {
//   console.log("la letra es una vocal");
// } else {
//   console.log("no es una vocal");
// }

// Escriba un programa en donde el usuario
//  ingrese 2 números e indique cuál es el mayor

// const numero1 = parseInt(prompt("Ingrese un numero"));
// const numero2 = parseInt(prompt("Ingrese otro numero"));

// if (numero1 > numero2) {
//   alert("El numero mayor es: " + numero1);
// } else {
//   alert("el numero mayor es:" + numero2);
// }

// El costo del helado es de $5. Escriba un programa en donde
//  se le pida al usuario ingresar la cantidad de helados
// que quiere y mostrar cuánto le saldría

// let costoHelado = 5;

// const cuantosHeladosQuiere = prompt(
//   "Escriba la cantidad de helados que quiera"
// );

// console.log("El Precio total seria: " + cuantosHeladosQuiere * costoHelado);

// Escriba un programa en donde se le solicite la edad al usuario
// y calcule su año de nacimiento, tomando en cuenta que el año actual
//  es 2022.

// const actualYear = 2023;

// let HowOldAreYou = parseInt(prompt("Escriba su edad"));

// alert(" Your year of birth is:" + (actualYear - HowOldAreYou));

// Escriba un programa en donde el usuario ingrese 3 notas,
// calcule el promedio y si es mayor o igual a 4 le indique
// que está aprobado con un alert.

// const notaAprobada = 4;

// let nota1 = parseFloat(prompt("Escriba primera nota "));
// let nota2 = parseFloat(prompt("Escriba segunda nota "));
// let nota3 = parseFloat(prompt("Escriba tercera nota "));

// console.log(nota1 + nota2 + nota3);

// let promedio = (nota1 + nota2 + nota3) / 3;

// if (promedio >= notaAprobada) {
//   alert("Estas aprobado!");
// } else {
//   alert("No estas aprobado");
// }

// Escriba un programa donde se le solicite el año de nacimiento.
// Si es mayor a 18 se le tiene que pedir que ingrese su nombre y apellido
//  para mostrarle un texto con el
//   formato: “Hola nombre apellido, tu edad actual es: edad”.
//   Ejemplo: “Hola Rodrigo Río, tu edad actual es 25”.
// NOTA: Solo solicitar el nombre y apellido si es mayor a 18.

// const yearOfBirth = parseInt(prompt("Write your year of Birth"));

// let currentYear = 2023;

// let age = currentYear - yearOfBirth;

// if (age > 18) {
//   const FullName = prompt("Name and last name");
//   alert("Hi" + " " + FullName + " " + "your actual age is" + " " + age);
// } else {
//   alert("You have to be older than 18 years old");
// }

// Escriba un programa que permita calcular el costo total del producto
// con su IVA. Para esto, solicite al usuario el precio del producto,
// calcule su IVA (21%) y muéstrele en pantalla
// con un alert el precio final.

// let productPrice = parseFloat(prompt("Input the price of the product"));

// let productWithIva = productPrice * (21 / 100);
// console.log(productWithIva);

// let productFinalPrice = productPrice + productWithIva;

// alert("The final price of the product is " + productFinalPrice);

// Escriba un programa que le pida una letra al usuario
//  y le diga si es una vocal o no.

// let vocals = prompt("Type a letter");

// if (
//   vocals === "a" ||
//   vocals === "e" ||
//   vocals === "i" ||
//   vocals === "o" ||
//   vocals === "u"
// ) {
//   alert("The typed letter is a vocal");
// } else {
//   alert("The typed letter is not a vocal");
// }

// console.log("Program finished");

// Escriba un programa en donde se le pida un nombre y una edad al usuario.
// Muestre un mensaje en pantalla si:
// - El nombre es “Gabriel” y tiene más de 24 años
// - El nombre es “María” y tiene entre 28 y 35 años

// const nombre = prompt("Type your name");
// let age = parseInt(prompt("Type your age"));

// if (
//   (nombre === "Gabriel" && age >= 24) ||
//   (nombre === "Maria" && age >= 28 && age <= 35)
// ) {
//   alert("Welcome to our site");
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 0; i < 5; i++) {
//   let nombre = prompt("Type you name");
//   console.log("Your name is " + nombre);
// }

// let writeNumber = parseInt(prompt("Type Number"));

// for (i = 1; i <= 10; i++) {
//   let result = writeNumber * i;
//   alert(writeNumber + " x " + i + " = " + result);
// }

// const quantityOfNames = parseInt(prompt("Type the quantity of names"));

// for (i = 0; i < quantityOfNames; i++) {
//   let nombre = prompt("Type your Name");
//   alert("Your name is " + nombre);
// }

// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let nombre = prompt("Type a name (If you want to go out, type Salir)");

// while (nombre !== "Salir") {
//   console.log("The input name is: " + nombre);

//   nombre = prompt("Type a name (If you want to go out, type Salir)");
// }

// console.log("Progam ended");

// let edad = parseInt(prompt("Type your age"));

// while (edad < 18) {
//   alert("You must be above 18 to access");
//   edad = parseInt(prompt("Type your age again"));
// }

// console.log("Program ended");

// Escriba un programa en donde se le pida al usuario
// ingresar el lugar a donde quiera viajar.
// Teniendo en cuenta estos valores:
// - Colombia: $40
// - México: $50
// - Brasil: $30
// - Uruguay: $20
// - Chile: $20
// - Ecuador: $30
// - Perú: $40
// - Estados Unidos: $50
// Mostrarle al usuario cuál sería el costo
//  de viajar al lugar que escribió.

// const lugarDondeQuiereViajar = prompt("Escriba el lugar a donde quiere viajar");

// let costoDelViaje = 0;

// switch (lugarDondeQuiereViajar) {
//   case "colombia":
//   case "peru":
//     costoDelViaje = 40;
//     break;

//   case "mexico":
//   case "ecuador":
//     costoDelViaje = 50;
//     break;

//   default:
//     costoDelViaje = 500;
//     break;
// }

// console.log("costo del viaje: " + costoDelViaje);

// Realizar un programa en donde el usuario ingrese un día de la semana y
//  se le muestre en pantalla:
// Si es el comienzo de la semana
// Si es fin de semana
// Si es mitad de semana

// const diaDeLaSemana = prompt("Ingrese un dia");

// switch (diaDeLaSemana) {
//   case "Lunes":
//   case "Martes":
//     console.log("Es comienzo de semana");
//     break;

//   case "Miercoles":
//   case "Jueves":
//     console.log("Es comienzo mitad semana");
//     break;

//   case "Viernes":
//   case "Sabado":
//   case "Domingo":
//     console.log("Es comienzo fin semana");
//     break;

//   default:
//     console.log("Dia invalido");
// }

// Realice un programa en donde se le solicite un número
// al usuario y le muestre en pantalla cuántos dígitos tiene.
// (Ej: Si ingreso 27, tiene que mostrarme 2. Si ingreso 115 me tiene
//     que mostrar 3).
// AYUDA: Dividir por 10 a un número le remueve un dígito.

// let numero = parseInt(prompt("Escriba un numero"));

// let numeroContador = 0;

// while (numero > 0) {
//   numeroContador++;
//   numero = parseInt(numero / 10);
// }
// console.log("los digitos son: " + numeroContador);

// Realizar un programa que le pida al usuario cuántos números quiere
//  ingresar y entre todos los que ingrese calcular cual es el mayor,
//  el menor y la media.

// const cantidadDeNumerosAIngresar = parseInt(
//   prompt("Ingrese la cantidad de numeros que quiera ingresar")
// );
// let mayor = 0;
// let menor = 0;
// let media = 0;

// for (let i = 0; i < cantidadDeNumerosAIngresar; i++) {
//   const numero = parseInt(prompt("Ingrese un numero"));

//   media += numero;
// }

// console.log("La media es: " + media / cantidadDeNumerosAIngresar);

class Producto {
  constructor(nombre, precio, detalle, cantidad) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.detalle = detalle;
    this.cantidad = cantidad;
    this.disponible = true;
  }

  sumarIva() {
    return this.precio * 1.21;
  }

  vender() {
    this.disponible = false;
  }

  precioSugerido() {
    return this.precio * 1.21 * 1.25;
  }
}

var arrayProductos = [];
do {
  var comprobacion = prompt(
    "Ingrese nombre del producto o escriba salir para terminar"
  );

  if (
    comprobacion === "salir" ||
    comprobacion === "Salir" ||
    comprobacion === "SALIR"
  ) {
    break;
  } else {
    nombreP = comprobacion;
    var precioP = prompt("Ingrese el precio del producto");
    var detalleP = prompt("Ingrese informacion del producto");
    var cantidadP = prompt("Ingrese la cantidad del producto");
    arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
  }
} while (
  comprobacion != "salir" ||
  comprobacion != "Salir" ||
  comprobacion != "SALIR"
);

console.log(arrayProductos);

for (var producto of arrayProductos) {
  document.write("<h3> Nombre del Producto: " + producto.nombre + "</h3>");
  document.write("<h3> Detalle del producto: " + producto.detalle + "</h3>");
  document.write("<h3> Stock del Producto: " + producto.cantidad + "</h3>");
  document.write("<h3> Precio + IVA es: " + producto.sumarIva() + "</h3>");

  console.log(producto.nombre);
  console.log(producto.detalle);
  console.log(producto.cantidad);
  console.log(producto.sumarIva());
}
