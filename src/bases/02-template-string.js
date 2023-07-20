//  Template string
// 1. Template string is a string that allows embedded expressions
// 2. Template string is enclosed by backticks (` `) instead of single quotes (' ') or double quotes (" ")
// 3. Template string can contain placeholders. These are indicated by the dollar sign and curly braces (${expression})
// 4. The expressions in the placeholders and the text between the backticks (` `) get passed to a function

const nombre = 'Julian';
const apellido = 'Azange';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`);