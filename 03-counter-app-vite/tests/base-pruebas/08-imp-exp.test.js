import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";


describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un heroe por ID', () => { 

        const id = 1;

        const hero = getHeroeById(id);
        
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })


     })

     test('getHeroeById debe retornar unndefined si no exite el id', () => { 

        const id = 100;

        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();
     })

     test('getHeroeByOwner debe retornar solo los heroes de DC y ser 3', () => { 

        const owner = 'DC';

        const hero = getHeroesByOwner(owner);


        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
        expect(hero.length).toBe(3);
     })
     test('getHeroeByOwner debe retornar solo los heroes de Marvel y ser 2', () => { 

        const owner = 'Marvel';

        const hero = getHeroesByOwner(owner);
        expect(hero).toEqual(heroes.filter( (heroe) => heroe.owner === owner ));
        expect(hero.length).toBe(2);
     })
 })