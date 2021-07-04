import {getDataFromAPI} from '../promise';

describe('Probar Asinc/Await', () => {
    test('Prueba un asynck ', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/character/1'

        await getDataFromAPI(api).then(data => {
            expect(data.result.length).toBeGreaterThan(0);
        });
        await getDataFromAPI(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });
})