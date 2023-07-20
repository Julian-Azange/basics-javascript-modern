// Variables y Constantes

const nombre = 'Julian';
const apellido = 'Azange';

let valorDado = 5;
valorDado = 4;

console.log( nombre, apellido, valorDado );

if ( true ) {
    // var no se debe usar...
    // variable de scope local
    const nombre = 'Peter';
    let valorDado = 6;
    console.log( nombre );
}

console.log( valorDado );