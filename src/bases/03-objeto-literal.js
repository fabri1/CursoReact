const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 56654654,
        lat: 12.2133,
        lng: 34.32434,
    }
}

// console.table(persona);

// copia el objeto no lo sustituye
const persona2 = {...persona};

persona2.nombre = 'Peter';

console.log(persona);

console.log(persona2);