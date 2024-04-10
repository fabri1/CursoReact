// Desectructuración

const persona = {
    nombre: 'tony',
    edad:45,
    clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

const { nombre:nombre2 } = persona;
console.log(nombre2)

// console.log(nombre)
// console.log(persona.edad)
// console.log(persona.clave)

const Context = ({clave, nombre, edad, rango = 'Capitán'}) => {
    
    // console.log(nombre, edad, rango)

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.13414,
            lng: 31.134234,
        }
    }
}

const {nombreClave, anios, latlng} = Context(persona);
const {lat, lng} = latlng
console.log(nombreClave, anios)
console.log(lat, lng)