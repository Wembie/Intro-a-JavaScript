//Comentarios Uwu

/**Comentarios Grandecitos
 * como de Uwu*/

console.log("Lolcito o ke");

//Variables y tipo de datos (var/let)

var nombre = "Wembie"; //String
var edad = 19; //Int

nombre = 69.0; //String to Float

var array = [1, 3, 5, 7, 9]; //Lista

var objeto = {
  //Objeto pero como Diccionario en Python
  nombre: "Juancito",
  edad: "Sapa",
  email: "Chupapimuñañyo@ohdaddy.com"
};

var booleano = true;

//

const constante = 100;

//Estructuras de Control

//Condicionales

let año = 2020;
if (año >= 2002) {
  console.log("Mayor pa");
} else if (año == 2002) {
  console.log("Igual pa");
} else {
  console.log("Menor pa");
}

//Operador terniarion

let contenido = año == 2002 ? "Igual pa" : "Sabra Dios pa";
console.log(contenido);

//Switch

switch (año) {
  case 2020:
    console.log("Igual pa");
    break;
  default:
    console.log("A bueno pa saber");
    break;
}

//Repeticion

let nombres = ["Akali", "Camile", "Kai'sa"];

//While

let index = 0;
console.log("Con WHILE");
while (index < nombres.length) {
  console.log(`Posicion: ${index}\nNombre del Campeon: ${nombres[index]}`);
  index++;
}

//For
let i;
console.log("Con FOR");
for (i = 0; i < nombres.length; i++) {
  console.log(`Posicion: ${i}\nNombre del Campeon: ${nombres[i]}`);
}

//ForEach
console.log("Con FOREACH");
nombres.forEach((item) => {
  console.log(item);
});

//Funciones

function suma(a, b) {
  return a + b;
}
console.log(suma(5, 5));

const resta = (a, b) => {
  return a - b;
};
console.log(resta(5, 5));

//Clases

let Persona = {
  nombre: "xd",
  apellido: "aweno",
  edad: 69,
  getNombre: function () {
    return this.nombre;
  }
};

console.log(Persona.getNombre());

class Personita {
  constructor(nombre, apellido, edad) {
    //Atributos
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }
}

const wembie = new Personita("Wembie", "Wembai", 69);
console.log(wembie.getNombre());