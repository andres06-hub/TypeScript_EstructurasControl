"use strict";
// COMENTARIO DE UNA linea
/**
 * COMENTARIO DE VARIAS LINEAS
 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;
// TIPOS DE DATOS
// TIPO : String 
let nombre = "nombre";
console.log(nombre.length);
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
// #############################################
// #############################################
// ---- CONDICIONALES ----
// -->     SINTAXIS 
/**
 * if(condicion){
 *     codigo</>
 *
 * }else if(condicion){
 *     codigo</>
 * }else{
 *
 * }
 */
// SWITCH
/**
 * switch(evaluacion)
 *    case n:
 *      codigo</>
 *     break;
 * s
 *    case n2:
 *      codigo</>
 *     break;
 *
 *    case n...:
 *      codigo</>
 *     break;
 *
 *    default:
 *      codigo</>
 *     break;
 */
//OPERADOR TERNARIO
/**
 * (condicion)? true : false
 *
 * (condicion)? sentencia(SOLO Si es 'true') : sentencia (SOLO SI es 'false')
 */
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
console.log("\n\t************  FUNCIONES  *************\n");
console.log("## FUNCION NORMAL ##");
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
console.log("-> primeros datos");
parametros(19, undefined);
console.log("\n->segundos datos");
parametros(21, true, "cali");
console.log("--------------------------------------");
/**VARIABLE DE TIPO FUNCION */
console.log("\n##  VARIABLE DE TIPO FUNCION  ##\n");
//variable tipo funcion que recibe un argumento tipo
//number y retorna su cuadrado
//ACA LA FUNCION ES ANONIMA, NO SE NOMBRA
let cuadrado = function (numero) { return numero * numero; };
// Llamamos la funcion
let resultado = cuadrado(23);
console.log(resultado, "\n");
// ############################################
// FUNCION FLECHA
// sin 'argumentos'
// Ahorra codigo
// CUANDO TIENE SOLO UNA INSTRUCCION NO SE USA EL "return" NI LLAVES
console.log("#########  FUNCIONES FLECHA  #########\n");
let saludar = () => console.log("Hola desde la funcion Flecha");
saludar();
//flecha con un argumento numerico
//en los parentesis van los parametros
let potencia = (a) => a * a;
console.log(potencia(8));
//FUNCION FLECHA CON mas de una instrucción
//funcion que toma nombres, estado y retorna un saludo
let bienvenida = (nombres, estado) => {
    // los parametros se guardan en huna variable 
    let nombreUsuario = nombres;
    let estadoUsuario = estado;
    let mensaje = `Bienvenid@ ${nombreUsuario} : Su estado es ${estadoUsuario}`;
    return mensaje;
};
// Se imprimen los datos
console.log("\n---FLECHA con varios parametros---\n", bienvenida("Stefania", true));
console.log("--------------------------------");
// Funcion para sacar el modulo de dos numeros, donde entran dos parametros
let modulo = (numero1, numero2) => {
    // Hacemos validaciones
    if (numero1 == 0 && numero2 == 0) {
        return "Indefinido";
    }
    else if (numero2 == 0) {
        return "INFINITO";
    }
    else if (numero1 == 0) {
        return 0;
    }
    let modulo = numero1 % numero2;
    return modulo;
};
console.log("MODULO : ", modulo(50, 6));
// Desestructuración de objetos y arreglos
console.log("\n***** Desestructuración de objetos y arreglos *****");
// PRIMER EJEMPLO
let a, b, rest;
// En arreglo
/**El orden si importa ya que es por posicion */
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// SEGUNDO EJEMPLO CON key:valor (objetos)
/**En objetos el orden no importa, porque se asigna por referencia
 *
 */
(_a = { a: 100, b: 200, c: 300, d: 400, e: 500 }, { a, b } = _a, rest = __rest(_a, ["a", "b"]));
console.log("\nVariables 'a', 'b'");
console.log(a);
console.log(b);
console.log("Variable rest");
console.log(rest);
// EJEMPLO 3
const numeros = [1, 2, 3, 4, 5];
const [numero1, numero2, ...numRestantes] = numeros;
console.log(numero1);
console.log(numero2);
console.log(numRestantes);
// ################################################
// setTimeout : ASINCRONICIDAD -TIEMPO
/**
 * Es una funcion que se encarga de ejecutar otra funcion despues
 * de un tiempo determinado, para tener una asincronizacion en el programa
 *
 * CALLBACK---> funcion anonima que se llama despues de
 * terminado un proceso asincrono
 */
/**la funcion se ejecutara y se tardara 3000 milisegundos
 * para mostrarse
 */
console.log("\n#### setTimeout - CALLBACK ####\n");
// Se define el TIEMPO cuantos milisegundos se demorara
let milisegundos = 3000;
setTimeout(function () {
    console.log("SE EJECUTO EL CALLBACK en ", milisegundos, " milisegundos");
    console.log("----------------------------------");
}, milisegundos);
console.log("NO espero a que el CALLBACK se llame");
// ############################
// Estructuras de datos
