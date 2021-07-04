import { arrayFruits, arraycolors } from "../arrys";

describe('Comprobarque existe un elemento', () => {
    test('¿Tiene una platano?', () => {
        expect(arrayFruits()).toContain('platano');
    });
    test('No contiene un platano', () => {
        expect(arrayFruits()).not.toContain('banana');
    });
    test('Comprobar el tamaño de un arreglo',() => {
        expect(arrayFruits()).toHaveLength(5);
    });
    test('Comprobaremos si existe un color', () => {
        expect(arrayFruits()).toContain('azul');
    });
});