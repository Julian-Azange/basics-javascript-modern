//  Promesas

// resolve: se ejecuta cuando la promesa se cumple
// reject: se ejecuta cuando la promesa no se cumple

import { getHeroeById, getHeroeByOwner } from '../bases/08-import-export';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Tarea
//         // importar la funcion getHeroeById(2) y ejecutarla
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// // then: se ejecuta cuando la promesa se cumple
// promesa.then((mensaje) => {
//     console.log(mensaje);
// })
//     .catch((err) => {
//         console.warn(err);
//     })

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Tarea
            // importar la funcion getHeroeById(2) y ejecutarla
            const heroe = getHeroeById(id);
            // console.log(heroe);
            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
}

getHeroeByIdAsync(2).then(console.log).catch(console.warn);