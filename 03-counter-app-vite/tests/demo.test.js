
describe('Pruebas en <DemoComponent/>', () => { 

    test('Esta prueba no debe fallar', () => {
        // 1. Inicializacion
        const message1 ='Hola mundo';
        //2. estimulo
        const message2 = message1.trim();
        //3. Observa el comportamiento... esperado
        expect(message1).toBe(message2);
    })

})