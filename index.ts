// COMENTARIO DE UNA linea
/**
 * COMENTARIO DE VARIAS LINEAS
 */

// TIPOS DE DATOS

// TIPO : String 
let  nombre: string = "nombre";

// TIPO : boolean
let estado: boolean = true;

// TIPO : numerico, ya sea " float , integer " 
let numero: number = 6;

// TIPO : any = no usuar de este dato o ABUDAR de él
let cualquiera : any = "445";
let cualquiera2 : any = 5;

/**
 * No podemos cambiar el dato de una variable que esta de
 * un tipo de dato a OTRO TIPO de DATO
 */


// TIPO : CONST se define en constante
const GRAVEDAD: number = 9.8;



// template de string

let saludo: string = "Hola mundo";
let mensaje: string = "buenas noches";
let anno: number = 2021;

let imprimirMensaje: string = `saludo: ${saludo}\n ${mensaje}\n año ${anno}`

console.log(imprimirMensaje);


//############################################
// ARREGLOS

//arreglo que solo guarda numeros
let arregloNumeros: number[] = [2,3,4.3];

//arreglo que solo guarda Strings
let arregloCadenas: string[] = ["a","hola","pepe"];

//arreglo de booleans
let arregloBooleans: boolean[] = [true, false];

//arreglo que guarda cualquier DATO : any
let arregloCualquiera: any[] = [2,"hello",true];


//############################################
// Recorrer el arreglo  con "for-of"
// Impirmir un arreglo al azar

// Lo correcto debe ser "const" porque la variable que itera no va a hacer cambiada 
for (const elemento of arregloCualquiera) {
    console.log(elemento);    
}

//###########################################
// Recorrer el arreglo con "forEach" 

// Se define el arreglo a recorrer luego el for y despues cada elemento
arregloNumeros.forEach((numero) => { console.log(numero);} )


// METODOS
// LONGITUD 
// Sabe la longitud de mi arreglo, cuantos elementos hay en él
console.log(arregloBooleans.length);



// ####################################

// OBJETOS
// Un objeto se va  adefinir asi
// No se le coloca comillas a las propiedades, es decir, a las llaves
let dias: any = {edad: 24, nombre: "Andres", casado: false}

// para poder leer un elememnto seria 
// lectura con corchetes(leemos la 'llave' y nos entrega el 'valor')
// Etsa notacion de corchetes es mejor para recorridos en ciclos 
console.log(dias["edad"])

// Etsa seria la lectura con el punto
console.log(dias.nombre);

// RECORRIDO PARA EL OBJETO 
// Utilizaremos ele forin
for (const llave in dias) {
    console.log("propiedad", dias) // Sacamos las llaves del objeto
    console.log("valor", dias[llave]) // Nos da los valores del OBJETO
}





// ############################
// Estructuras de datos
// 




// --------------------------------------------------
// Se define una variable de TIPO : NUMBER
let edad: number = 18;
console.log("HOLA MUNDO");

// Se renombra la variable edad
edad = 20; // Se ingresa el DATO del mismo "TIPO"

