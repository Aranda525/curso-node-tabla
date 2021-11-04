const fs = require('fs');  //* Necesario para tener los paquetes/modulos necesarios
const crearArchivo = (base = 5, listar = false) => {

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) { //Si listar es TRUE
        console.log('=======================');
        console.log('Tabla del ' + base);
        console.log('=======================');

        console.log(salida);
    }

    fs.writeFile('tabla_del_5.txt', salida, (err) => {
        if (err) throw err; //* Si se produce un error entonces se lo muestra

        //! Sino ocurre lo siguiente. Son 2 sentencias que NO estan anidadas
        console.log('El archivo fue creado');
    });
}

//! De esta forma exportamos la funcion de este archivo a otro
module.exports = {
    crearArchivo //* Estamos exportando la funcion definiendola como una propiedad 1 de objeto
}

