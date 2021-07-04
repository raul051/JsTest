import {getDataFromAPI} from '../promise'

describe('Probando promesas', () => {
    test('realizando una petición a una API', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromAPI(api).then(data => {
            console.log(data);
            expect(data.result.length).toBeGreaterThan(0);
            done();
        });
    });
    test('Resuelve un Hola', () => {
        return expect(Promise.resolve('Hola')).resolves.toBe('Hola');
    });
    test('Rechaza con un error', () => {
        return expect(Promise.reject('Error')).rejects.toBe('Error');
    });
});