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
        test('Petición a una api con error', async () => {
            const apiError = 'http://httpsthat.us/404';
            const peticion = getDataFromAPI(apiError);
            await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
        });
        test('Resulve un Hola', async () => {
            await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
            await expect(Promise.resolve('Error')).resolves.toBe('Error');
        });
    });
})