//despues de cada prueba
afterEach(() => console.log('despues de cada prueba'));
afterAll(() => console.log('Despued de todas las pruebas'));

//antes de cada pruebas
beforeEach(() => console.log('Antes de cada pruebas'));
beforeAll(() => console.log('Antes de todas las pruebas'));

describe('Preparar antes de ejecutar',() => {
    test('Es verdadero', () => {
        expect(true).toBeTruthy();
    });
});