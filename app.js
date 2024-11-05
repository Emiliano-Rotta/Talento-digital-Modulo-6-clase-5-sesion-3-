//var let y const

// var es la forma antigua de declarar variables en JavaScript.
// Su alcance es funcional o global (si se declara fuera de una función, estará disponible en todo el archivo).
// Es posible redeclarar una variable var, lo cual puede provocar errores inesperados si el nombre de la variable se repite en varios lugares.


// let es una forma más moderna de declarar variables y fue introducida en ES6.
// Su alcance es bloque, lo que significa que solo es accesible dentro de las llaves {} donde fue declarada.
// A diferencia de var, no permite redeclaraciones dentro del mismo bloque, lo que ayuda a evitar errores.

// let nombre = "Emiliano"

// console.log(nombre)
// nombre = "Juan"
// console.log(nombre)

// const también fue introducido en ES6 y se usa para declarar constantes, es decir, valores que no pueden ser reasignados.
// Tiene un alcance de bloque y, al igual que let, no permite redeclaraciones.
// Aunque el valor de una constante no puede ser reasignado, en el caso de objetos y arrays, sus propiedades internas sí pueden modificarse.

// const apellido = ["Rotta", "Duran"]
// console.log(apellido)
// apellido.push("Sanchez")
// console.log(apellido)

// var: Se recomienda evitar var en la mayoría de los casos, ya que su alcance global puede causar problemas inesperados.
// let: Úsalo para variables cuyo valor puede cambiar dentro de un bloque o función.
// const: Prefiere const siempre que sea posible, especialmente para valores que no se van a reasignar.



//Scope y Bloques

// Scope (Ámbito):
// El scope o ámbito de una variable define dónde es accesible dentro del código.
// En JavaScript, existen principalmente tres tipos de scope: global, funcional y de bloque.
// Una variable declarada en el scope global estará disponible en todo el archivo, mientras que una variable declarada en un scope funcional solo estará disponible dentro de la función donde fue declarada. El scope de bloque es válido solo para variables declaradas con let o const y limita su accesibilidad al bloque {} donde fueron declaradas.
// Bloques:
// Un bloque es cualquier porción de código que está delimitada por llaves { }, como en funciones, estructuras condicionales o bucles.
// Las variables declaradas con let y const dentro de un bloque solo estarán disponibles en ese bloque.


// if (true){
//     let mensaje = "Hola"
//     console.log(mensaje)
// }

// console.log(mensaje)

//Funciones!!

// function saludar () {
//     console.log("hola")
// }
// saludar()

// const saludar = (nombre, apellido) => console.log("Hola " + nombre + " " + apellido)
// saludar("Emi", "Rotta")

// //Ejemplo 

// //Declara una variable var llamada mensajeGlobal fuera de una función, una variable let llamada mensajeLocal dentro de un bloque y una constante const llamada mensajeConstante dentro de una función. Imprime cada variable para ver si es accesible dentro o fuera de su scope.
// var mensajeGlobal = "Estoy en el scope global";

// function verificarScope() {
//     const mensajeConstante = "Estoy en el scope de la funcion";
//     if(true){
//         let mensajeLocal = "Estoy en el scope del bloque";
//         console.log(mensajeLocal)
//     }
//     console.log(mensajeConstante)
// }
// verificarScope()
// console.log(mensajeGlobal)

// // Ejercicio 2: Cambiar valores con let y const
// // Consigna: Crea una variable let llamada contador y asígnale un valor inicial de 5. Luego, incrementa su valor en 1. Después, intenta hacer lo mismo con una constante const llamada numeroConstante con valor 10. Observa qué sucede y explica por qué.

// let contador = 5
// contador ++
// console.log(contador)

// const numeroConstante = 10
// // numeroConstante ++
// console.log(numeroConstante)
// // no se puede modificar debido a que es una const.

// // Ejercicio 3: Scope de variables en funciones
// // Consigna: Declara una función imprimirMensaje que tenga una variable let llamada mensaje con el valor "Hola desde la función". Intenta acceder a mensaje fuera de la función y explica qué sucede.

// function imprimirMensaje() {
//     let mensaje = "Hola desde la funcion"
// }
// // console.log(mensaje)
// // el mensaje no esta definido debido a que esta declarado dentro de la funcion y lo estamos llamande desde afuera.

// // Ejercicio 4: Funciones comunes y flechas
// // Consigna: Crea una función común llamada saludarPersona que reciba un nombre y devuelva un saludo. Luego crea una función flecha llamada saludarPersonaFlecha que haga lo mismo. Llama ambas funciones y verifica que el resultado sea el mismo.

// function saludarPersona(nombre) {
//     return `Hola, ${nombre}!`
// }

// const saludarPersonaFlecha = (nombre) => `Hola, ${nombre}!`

// console.log(saludarPersona("Juan"));
// console.log(saludarPersonaFlecha("Juan"));


// // Ejercicio 5: Concatenación e interpolación
// // Consigna: Crea una variable nombre y otra variable edad. Luego crea una oración que diga "Mi nombre es [nombre] y tengo [edad] años" usando concatenación y luego usando interpolación.

// var nombre = "Juan" 
// var edad =  "32"

// let oracion = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años "
// let oracionInter = `Hola, mi nombre es ${nombre} y tengo ${edad} años`

// console.log(oracion);
// console.log(oracionInter);

//Concatenación e Interpolación

// let nombreProfesor = "Emiliano"

// let concatenación = "El profesor es " + nombreProfesor;
// let interpolacion = `El profesor es ${nombreProfesor}`

// console.log(concatenación)
// console.log(interpolacion)

// let nombre = "María";
// let edad = 25;
// let mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// console.log(mensaje); // "Hola, mi nombre es María y tengo 25 años."

// // Ventajas de la Interpolación
// // Legibilidad: Las cadenas interpoladas son más fáciles de leer y entender, especialmente cuando hay varias variables y expresiones.
// // Facilidad de Uso: No es necesario preocuparse por los operadores de concatenación, ya que todo queda dentro de un único template literal.

// //--------------------------------------------------------------------------

// // Consignas de los Ejercicios

// // Declara una variable var llamada mensajeGlobal con un mensaje y luego intenta acceder a esa variable dentro de una función. ¿Es posible? Explica por qué.
// var mensajeGlobal = "Este es un mensaje global";

// function mostrarMensaje() {
//   console.log(mensajeGlobal); // Accesible, ya que var tiene alcance global si está fuera de una función.
// }

// mostrarMensaje(); // "Este es un mensaje global"


// // Crea una función llamada imprimirSaludo que reciba un nombre y devuelva "Hola, [nombre]". Usa concatenación para crear el mensaje.
// function imprimirSaludo(nombre) {
//     return "Hola, " + nombre;
//   }
  
//   console.log(imprimirSaludo("Juan")); // "Hola, Juan"
  


// // Declara una constante const llamada PI con el valor 3.14. Intenta reasignar un nuevo valor a PI y observa el resultado. Explica qué sucede.
// // const PI = 3.14;
// //PI = 3.1415; // Error: Assignment to constant variable.
// // Esto causa un error porque PI es una constante y no puede ser reasignada.


// // Crea una función llamada calcularAreaCirculo que reciba el radio de un círculo y devuelva el área usando la constante PI. (Recuerda: área = PI * radio * radio).
// const PI = 3.14;

// function calcularAreaCirculo(radio) {
//   return PI * radio * radio;
// }

// console.log(calcularAreaCirculo(5)); // 78.5


// // Declara una variable let dentro de un bloque if y accede a ella tanto dentro como fuera del bloque. Describe el resultado y explica el por qué.
// if (true) {
//     let mensaje = "Variable dentro del bloque";
//     console.log(mensaje); // "Variable dentro del bloque" - Accesible dentro del bloque
//   }
  
  // console.log(mensaje); // Error: mensaje is not defined - No es accesible fuera del bloque
  

// Declara dos variables, nombre y edad, e imprime un mensaje usando interpolación que diga: "Mi nombre es [nombre] y tengo [edad] años."
let nombre = "Ana";
let edad = 28;

let mensaje = `Mi nombre es ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // "Mi nombre es Ana y tengo 28 años."


// Crea una función flecha llamada doblarNumero que reciba un número y retorne el doble de ese número.
const doblarNumero = numero => numero * 2;

console.log(doblarNumero(5)); // 10


// Escribe una función llamada calcularEdad que reciba el año de nacimiento y el año actual y devuelva la edad calculada. Usa interpolación para el mensaje que diga "Tienes [edad] años."

function calcularEdad(anioNacimiento, anioActual) {
    let edad = anioActual - anioNacimiento;
    return `Tienes ${edad} años.`;
  }
  
  console.log(calcularEdad(1993, 2024)); // "Tienes 31 años."
  

// Declara una variable let llamada contador y asígnale el valor 1. Luego, incrementa su valor en 1 y muestra el resultado en la consola.
let contador = 1;
contador ++;
console.log(contador); // 2

// Escribe una función que use let y const correctamente para sumar dos números. Llama a la función con dos números y muestra el resultado en la consola.

function sumarNumeros(num1, num2) {
    let resultado = num1 + num2;
    const resultadoDos = num1 + num2;
    return resultado;
  }
  
  console.log(sumarNumeros(3, 7)); // 10
  