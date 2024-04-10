// import {heroes} from './data/heroes'

import heroes from '../data/heroes'


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);


// console.log(getHeroeById(2));


// Filter para encontrar a todos que coincidan, Find solo 1
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'))