// Import, Export, Default Export
// Funciones comunes de arreglos

import heroes, { owners } from '../data/heroes';

// find: devuelve el primer elemento que cumpla con la condición
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// filter: devuelve todos los elementos que cumplan con la condición
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
