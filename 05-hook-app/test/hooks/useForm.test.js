import { renderHook } from "@testing-library/react"
import  {useForm} from '../../src/hooks/useForm'
import { act } from "react-dom/test-utils"
describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'Fabri',
        email: 'fabri@gmail.com'
    }    
    test('debe de regresar los valores por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onReset: expect.any(Function),
        })
     })

     test('debe de cambiar el nombre del formulario', () => { 
        const {result} = renderHook(() => useForm(initialForm))
        const newValue = 'Juan';
        const {onInputChange} = result.current;
        act(() => {
            onInputChange({target: {name:'name', value: newValue}})
        })

        expect(result.current.name).toBe(newValue)
        expect(result.current.formState.name).toBe(newValue)
      })
     test('debe de resetear el formulario', () => { 

        const {result} = renderHook(() => useForm(initialForm))
        const newValue = 'Juan';
        const {onInputChange, onReset} = result.current;
        act(() => {
            onInputChange({target: {name:'name', value: newValue}})
            onReset();
        })

        expect(result.current.name).toBe(initialForm.name)
        expect(result.current.formState.name).toBe(initialForm.name)
      })
 })