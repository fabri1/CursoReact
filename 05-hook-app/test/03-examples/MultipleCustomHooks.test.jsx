import { render, screen } from "@testing-library/react"
import {MultipleCustomHooks} from '../../src/03-examples/MultipleCustomHooks'


describe('Pruebas en MultipleCustomHooks', () => {
    test('debe de mostrar el componente por defecto', () => { 

        render(<MultipleCustomHooks/>)
        expect(screen.getByText('Cargando'))

        const nextButton = screen.getByRole('button',{name: 'Siguiente'})

        expect(nextButton.disabled).toBeFalsy();
     })

     test('debe de mostrar un', () => { second })
 })