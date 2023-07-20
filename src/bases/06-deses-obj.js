// Desestructuración de objetos
// Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};



// console.log(nombre);
// console.log(edad);
// console.log(clave);

const oseContext = ({nombre, edad, clave, rango = 'Capitan'}) => {
    // console.log(nombre, edad, clave);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng} } = oseContext(persona);

console.log(nombreClave, anios, lat, lng);