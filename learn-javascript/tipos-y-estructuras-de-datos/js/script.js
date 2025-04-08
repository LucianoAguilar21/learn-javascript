console.log("Ok.");
/*

* var : declara variables globales aunque esté dentro de un bloque de cóodigo
* let : declara variables de bloque
* const : declara 'variables' constantes, no puede cambiar su valor, y son variables de bloque

*/

let name = "Luciano"; // String

let age = "24"; // Number

let job = false; // Boolean

let varUndefined = undefined;


if(age >= 18){
    var esMayor = "Es mayor";
    console.log(esMayor , " // Imprime la variable declarada en el bloque IF"); // Imprime variable declarada dentro de un bloque
}

console.log(esMayor , "// Imprime una varible declarada con 'var' dentro de un bloque IF"); // Puede imprimir una variable declarada dentro de un bloque IF


