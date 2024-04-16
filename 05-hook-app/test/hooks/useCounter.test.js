const { renderHook } = require("@testing-library/react")
import { act } from 'react-dom/test-utils';
import {useCounter} from '../../src/hooks/useCounter'

describe('Pruebas en el useCounter', () => { 
    test('debe de retornar los valores por defecto', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;

        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));
     })

     test('debe de generar el counter con el valor de 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const {counter} = result.current;
        expect(counter).toBe(100)
      })

      test('debe de incrementar el contador', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, increment} = result.current;
       
        act(() => {
            increment(1);
        });
        expect(result.current.counter).toBe(11);
       })
      test('debe de decrementar el contador', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, decrement} = result.current;
       
        act(() => {
            decrement(1);
        });
        expect(result.current.counter).toBe(9);
       })
      test('debe de resetear el contador', () => {
        const {result} = renderHook(() => useCounter());
        const {counter, decrement, increment, reset} = result.current;
       
        act(() => {
            decrement(5);
            increment(8);
            reset();
        });
        expect(result.current.counter).toBe(counter);
       })
 })