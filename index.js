"use strict";
// COMENTARIO DE UNA linea
/**
 * COMENTARIO DE VARIAS LINEAS
 */
// TIPOS DE DATOS
// TIPO : String 
let nombre = "nombre";
// TIPO : boolean
let estado = true;
// TIPO : numerico, ya sea " float , integer " 
let numero = 6;
// TIPO : any = no usuar de este dato o ABUDAR de él
let cualquiera = "445";
let cualquiera2 = 5;
/**
 * No podemos cambiar el dato de una variable que esta de
 * un tipo de dato a OTRO TIPO de DATO
 */
// TIPO : CONST se define en constante
const GRAVEDAD = 9.8;
// ----------------------------
// 'TEMPLATES'
let saludo = "Hola mundo";
let mensaje = "buenas noches";
let anno = 2021;
let imprimirMensaje = `saludo: ${saludo}\n ${mensaje}\n año ${anno}`;
console.log(imprimirMensaje);
let mostrarMensaje = "OK : " + saludo + "--" + mensaje + "--" + anno;
console.log(mostrarMensaje);
// ###########################################
//############################################
// ARREGLOS
//arreglo que solo guarda numeros
let arregloNumeros = [2, 3, 4.3];
let listNumeros = [5, 8, 96, 5.5];
//arreglo que solo guarda Strings
let arregloCadenas = ["a", "hola", "pepe"];
let listCadenas = ["Hola", "epa", "whats up?"];
//arreglo de booleans
let arregloBooleans = [true, false];
let listaBoolean = [true, false];
//arreglo que guarda cualquier DATO : any
let arregloCualquiera = [2, "hello", true];
let listaCualquiera = [854.78, "numbers", true, 58];
//############################################
// *************   CICLOS  *******************
// Recorrer el arreglo  con "for-of"
// Impirmir un arreglo al azar
// Lo correcto debe ser "const" porque la variable que itera no va a hacer cambiada 
for (const elemento of arregloCualquiera) {
    console.log(elemento);
}
//###########################################
// Recorrer el arreglo con "forEach" 
// Se define el arreglo a recorrer luego el for y despues cada elemento
arregloNumeros.forEach((numero) => { console.log(numero); });
// METODOS
// LONGITUD 
// Sabe la longitud de mi arreglo, cuantos elementos hay en él
console.log(arregloBooleans.length);
// ####################################
// OBJETOS
// Un objeto se va  adefinir asi
// No se le coloca comillas a las propiedades, es decir, a las llaves
let dias = { edad: 24, nombre: "Andres", casado: false };
// para poder leer un elememnto seria 
// lectura con corchetes(leemos la 'llave' y nos entrega el 'valor')
// Esta notacion de corchetes es mejor para recorridos en ciclos 
console.log(dias["edad"]);
// Etsa seria la lectura con el punto
console.log(dias.nombre);
// RECORRIDO PARA EL OBJETO 
// Utilizaremos ele forin
for (const llave in dias) {
    console.log("propiedad", dias); // Sacamos las llaves del objeto
    console.log("valor", dias[llave]); // Nos da los valores del OBJETO
}
// while 
/**
 * SINTAXIS:
 *
 * while(condicion){
 *    codigo a  ejecutar
 * }
 */
let i = 4;
while (i > 0) {
    let mensajeWhile = `\nHOLA MUNDO ${i}`;
    console.log(mensajeWhile);
    i -= 1;
}
/**
 * DO WHILE
 *
 * SINTAXIS : Se ejecutara una vez como minimo
 *
 * do{
 *     Codigo a ejecutar
 * }while(condicion)
 *
 */
// let pass;
// do {
//     pass = prompt('Introduzca  su contraseña');
// } while (pass != 'hola');
// #############################################################
/**
 * Switch
 *
 * Es para poder validar unos datos en especifico, tiene la misma funcionalidad que es JAVA
 */
// #############################################################
// FUNTONS -> FUNCIONES
/**
 * Las funciones cumplen una TAREA en ESPECIFICO
 * Hace una FUNCIONALIDAD.
 */
console.log("\n************  FUNCIONES  *************\n");
function parametros(edad, estado, ciudad = "Armenia") {
    // Imprimimos el primer parametro que es obligatorio
    console.log(edad);
    /**
     * El parametro estado es opcional, con el "?" se sabe que es opcional
     * si no se va a pasar nada se le dice "undefined"
    */
    if (estado) {
        console.log(estado);
    }
    // Se imprime el parametro con el dato por defecto
    console.log(ciudad);
}
parametros(19, undefined);
// ################################################
// setTimeout
/**
 * Es una funcion que se encarga de ejecutar otra funcion despues
 * de un tiempo determinado, para tener una asincronizacion en el programa
 */
// ############################################
// FUNCION FLECHA
// sin 'argumentos'
// Ahorra codigo
// CUANDO TIENE SOLO UNA INSTRUCCION NO SE USA EL "return" NI LLAVES
console.log("#########  FUNCION FLECHA  #########");
let saludar = () => console.log("Hola desde la funcion Flecha");
// ############################
// Estructuras de datos
