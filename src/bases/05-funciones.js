// Funciones en JS

// const saludar = function (nombre){
//     return `Hola ${nombre}`;
// }

const saludar2 = (nombre) =>{
    return `Hola ${nombre}`;
}

const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;


// console.log(saludar('Goku'));

console.log(saludar2('Vegeta'))
console.log(saludar3('Gohan'))
console.log(saludar4())

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Krilin',
//     }
// }

const getUser = () => ({
    uid: 'ABC123',
    username: 'Krilin',
})


const user = getUser();

console.log(user);

// Tarea 
// 1. Transformar en funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre){
//     return{
//         uid: 'ABC567',
//         username: nombre,
//     }
// };

// const usuarioActivo = getUsuarioActivo('Fabri');

const getUsuarioActivo = (nombre) => ({

        uid: 'ABC567',
        username: nombre,
    })


const usuarioActivo = getUsuarioActivo('Fabri');

console.log(usuarioActivo)