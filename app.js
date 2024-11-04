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

const saludar = (nombre, apellido) => console.log("Hola " + nombre + " " + apellido)
saludar("Emi", "Rotta")

//Ejemplo 

//Declara una variable var llamada mensajeGlobal fuera de una función, una variable let llamada mensajeLocal dentro de un bloque y una constante const llamada mensajeConstante dentro de una función. Imprime cada variable para ver si es accesible dentro o fuera de su scope.
var mensajeGlobal = "Estoy en el scope global";

function verificarScope() {
    const mensajeConstante = "Estoy en el scope de la funcion";
    if(true){
        let mensajeLocal = "Estoy en el scope del bloque";
        console.log(mensajeLocal)
    }
    console.log(mensajeConstante)
}
verificarScope()
console.log(mensajeGlobal)

// Ejercicio 2: Cambiar valores con let y const
// Consigna: Crea una variable let llamada contador y asígnale un valor inicial de 5. Luego, incrementa su valor en 1. Después, intenta hacer lo mismo con una constante const llamada numeroConstante con valor 10. Observa qué sucede y explica por qué.

// Ejercicio 3: Scope de variables en funciones
// Consigna: Declara una función imprimirMensaje que tenga una variable let llamada mensaje con el valor "Hola desde la función". Intenta acceder a mensaje fuera de la función y explica qué sucede.



// Ejercicio 4: Funciones comunes y flechas
// Consigna: Crea una función común llamada saludarPersona que reciba un nombre y devuelva un saludo. Luego crea una función flecha llamada saludarPersonaFlecha que haga lo mismo. Llama ambas funciones y verifica que el resultado sea el mismo.


// Ejercicio 5: Concatenación e interpolación
// Consigna: Crea una variable nombre y otra variable edad. Luego crea una oración que diga "Mi nombre es [nombre] y tengo [edad] años" usando concatenación y luego usando interpolación.
