// Operador condicional (ternário)

const active = true;

// let message = '';

// if (active) {
//     message = 'Active';
// }else {
//     message = 'Inactive';
// }

// const message = active ? 'Active' : 'Inactive';

// forma corta de hacer un if
const message = !active && 'Active';

console.log(message);