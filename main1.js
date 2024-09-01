
// Usuario que responda a la pregunta
let respuesta = prompt("¿Eres bellisimo/a?").toLocaleLowerCase();

// Evalúa la respuesta y muestra el mensaje correspondiente en la consola
if (respuesta === "si") {
    console.log("Ciertamente");
} else if (respuesta === "no") {
    console.log("No te creo")    
}

// ejercicio 2

let div2NO = Number(prompt("Tu numero es divisible entre dos: :)"));
if (div2NO % 2 === 0) {
    console.log(div2NO + " es divisible entre 2");
}else {
    console.log(div2NO + " no es divisible entre 2");
}

// ejercicio 3

let numero = Number(prompt("Tu numero es divisible entre dos: :)"));
if (numero % 2 === 0) {
    alert(div2NO + " es divisible entre 2");
}else {
    alert(numero + " no es divisible entre 2");
}

// ejercicio 4

let cliente = Number(prompt("Tu numero de cliente es: :)"));
if (cliente === 1000) {
    console.log("Ganaste un premio");
} else {
    console.log("Lo sentimos sigue participando")
}

// ejercicio cinco

let numero1 = Number(prompt("Ingresa el primer número:"));
let numero2 = Number(prompt("Ingresa el segundo número:"));

// Verifica cuál de los dos números es menor y muestra el resultado en la consola
if (numero1 < numero2) {
    console.log(numero1 + " es menor que " + numero2);
} else if (numero2 < numero1) {
    console.log(numero2 + " es menor que " + numero1);
}

// ejercicio seis

// Solicita al usuario que ingrese tres números
let numero3 = Number(prompt("Ingresa el primer número:"));
let numero4 = Number(prompt("Ingresa el segundo número:"));
let numero7 = Number(prompt("Ingresa el tercer número:"));

// Verifica cuál de los tres números es el mayor
let mayor;

if (numero3 >= numero4 && numero3 >= numero7) {
    mayor = numero3;
} else if (numero4 >= numero3 && numero4 >= numero7) {
    mayor = numero4;
} else {
    mayor = numero7;
}

// Muestra el número mayor en la consola
console.log("El número mayor es: " + mayor);

// ejercicio 7
let dia = prompt("Dime un día de la semana:").toLowerCase();

// Verifica el día ingresado y responde con un mensaje acorde.
if (dia === "lunes") {
    console.log("Ten un buen inicio de semana.");
} else if (dia === "martes") {
    console.log("Uff, casi es miércoles.");
} else if (dia === "miércoles") {
    console.log("Ya es ombligo de la semana.");
} else if (dia === "jueves") {
    console.log("¡Ya es juebebes!");
} else if (dia === "viernes") {
    console.log("¡POR FIN ES VIERNES!");
} else {
    // Si el día no es de lunes a viernes, este bloque se ejecutará.
    console.log("¡Pásala increíble!");
}

// ejercicio 8
let calificacion = Number(prompt("Ingresa una calificación entre 1 y 10:"));

// Verifica que la calificación esté dentro del rango permitido
if (calificacion >= 1 && calificacion <= 10) {
    // Determina la categoría de la calificación
    if (calificacion < 6) {
        console.log("Reprobado");
    } else if (calificacion >= 6 && calificacion <= 8) {
        console.log("Regular");
    } else if (calificacion === 9) {
        console.log("Bien");
    } else if (calificacion === 10) {
        console.log("Excelente");
    }
} else {
    // Si la calificación no está en el rango, imprime un mensaje de error
    console.log("Error: La calificación debe estar entre 1 y 10.");
}

// ejercicio 9
// Precio base del helado sin topping
const precioBase = 50;

// Solicita al usuario que ingrese el topping deseado
let topping = prompt("¿Qué topping te gustaría para tu helado? (Oreo, KitKat, Brownie):");

// Variable para almacenar el precio final
let precioFinal;

// Calcula el precio final en función del topping seleccionado
if (topping.toLowerCase() === "oreo") {
    precioFinal = precioBase + 10;
    console.log("Has elegido Oreo. El precio total es: " + precioFinal + " MXN");
} else if (topping.toLowerCase() === "kitkat") {
    precioFinal = precioBase + 15;
    console.log("Has elegido KitKat. El precio total es: " + precioFinal + " MXN");
} else if (topping.toLowerCase() === "brownie") {
    precioFinal = precioBase + 20;
    console.log("Has elegido Brownie. El precio total es: " + precioFinal + " MXN");
} else {
    console.log("No tenemos este topping, lo sentimos.");
    console.log("El precio del helado sin ningún topping es: " + precioBase + " MXN");
}

// Ejercicio 10 Define los precios mensuales y duraciones de los cursos
const precios = {
    course: 4999,
    carrera: 3999,
    master: 2999
};

const duraciones = {
    course: 2,
    carrera: 6,
    master: 12
};

// Solicita al usuario que elija un curso
let curso = prompt("Elige el curso: Course, Carrera, Master");

// Convierte la opción a minúsculas para facilitar la comparación
curso = curso.toLowerCase();

// Verifica si el curso elegido es válido
if (precios[curso] && duraciones[curso]) {
    // Solicita al usuario si tiene alguna beca
    let beca = prompt("¿Tienes alguna beca? (Facebook, Google, Jesua):");
    
    // Convierte la beca a minúsculas para facilitar la comparación
    beca = beca.toLowerCase();
    
    // Aplica el descuento basado en la beca
    let descuento;
    switch (beca) {
        case "facebook":
            descuento = 0.20; // 20% de descuento
            break;
        case "google":
            descuento = 0.15; // 15% de descuento
            break;
        case "jesua":
            descuento = 0.50; // 50% de descuento
            break;
        default:
            descuento = 0; // Sin descuento si la beca no es válida
            break;
    }
    
    // Calcula el precio mensual con descuento
    let precioMensual = precios[curso];
    let precioConDescuento = precioMensual * (1 - descuento);
    
    // Calcula el costo total del curso
    let duracion = duraciones[curso];
    let costoTotal = precioConDescuento * duracion;
    
    // Muestra el precio mensual con descuento y el costo total en la consola
    console.log("Precio mensual con descuento: " + precioConDescuento.toFixed(2) + " MXN");
    console.log("Costo total por el curso (" + duracion + " meses): " + costoTotal.toFixed(2) + " MXN");
} else {
    console.log("Curso no válido. Por favor, elige entre Course, Carrera, o Master.");
}

// Ejercicio 10

// Solicita al usuario que ingrese el tipo de vehículo
let vehiculo = prompt("¿Qué tipo de vehículo tienes? (coche, moto, autobús):");

// Convierte el tipo de vehículo a minúsculas para facilitar la comparación
vehiculo = vehiculo.toLowerCase();

// Solicita al usuario la distancia recorrida en kilómetros
let distancia = Number(prompt("¿Cuántos kilómetros has recorrido?"));

// Solicita al usuario la cantidad de litros consumidos
let litros = Number(prompt("¿Cuántos litros has consumido?"));

// Define los precios por kilómetro para cada tipo de vehículo
const preciosKilometro = {
    coche: 0.20,
    moto: 0.10,
    autobús: 0.50
};

// Calcula el costo adicional por los litros consumidos
let cargoExtra;
if (litros > 100) {
    cargoExtra = 10;
} else {
    cargoExtra = 5;
}

// Verifica si el tipo de vehículo es válido y calcula el costo total
if (preciosKilometro[vehiculo] !== undefined) {
    let precioPorKilometro = preciosKilometro[vehiculo];
    let costoTotal = (precioPorKilometro * distancia) + cargoExtra;

    // Muestra el costo total en la consola
    console.log("El total a pagar es: " + costoTotal.toFixed(2) + " MXN");
} else {
    console.log("Tipo de vehículo no válido. Por favor, elige entre coche, moto, o autobús.");
}

