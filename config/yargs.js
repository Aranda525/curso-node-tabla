//! Capitulo 35: Creamos 1 archivo Yargs independiente
//! Capitulo 34: Hacemos referencia al paquete yargs

const { argv } = require('yargs');

//* La 1° constante finaliza con ".argv" porque esa parte del archivo Yargs queremos extraer
const yargs = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true
    })
    .option(('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false
    }))
    .check((argv, options) => { //Con check corroboramos que representa dicho archivo
        if (isNaN(argv.b)) {
            throw "La base debe ser 1 numero";
        }

        return true; //Esto se envia SI NO hay un error
    })
    .argv;

module.exports = argv;