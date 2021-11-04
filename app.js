const { argv, option, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar_elemento');

//!Capitulo 35: Inlcuimos
const argv = require('./config/yargs');

//! Capitulo 32 --> Recibir informacion desde la consola, no sirve para nada esto porque recibe los parametros 
//! y los usa de acuerdo a la posicion
//Comando que nos muestra donde esta guardado el proyecto y ademas, los parametros que mandamos por consola
//console.log(process.argv);

//* -------- Proceso para extraer la base que mandamos por la consola
// Desustruturamos el arreglo, si ponemos "=" a un valor es porque le asignamos 1 valor por defecto SI NO RECIBE NADA
//*const [, , arg3 = 'base=5'] = process.argv;

//Ahora extraemos solo el numero
//*const [, base = 6] = arg3.split('='); Con SPLIT podemos dividir a un string cuando detecte el simbolo/elemento que mandamos
 
//console.log(base); //! termina el 32

//! llamamos a la funcion (En el 32 a mi no me funco)
//crearArchivo(base).then(nombreArchivo => console.log(nombreArchivo, 'creado')).catch(err => console.log(err));


console.clear();

//! llamamos a la funcion para el 34, NO PROBE
crearArchivo(argv.b, argv.l).
then(nombreArchivo => console.log(nombreArchivo, 'creado')).
catch(err => console.log(err));
