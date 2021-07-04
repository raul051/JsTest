import {getDataFromAPI} from '../promise'

describe('Probando promesas', () => {
    test('realizando una petición a una API', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromAPI(api).then(data => {
            console.log(data);
            expect(data).toBeGreaterThan(0);
            done();
        });
    });
});