import { getCharacter } from '../snapchot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapchot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('Fallara la instantanea', () => {
        const user = {
            createAt: new Date(),
            id: Math.floor(Math.random() *20) 
        }
        expect(user).toMatchSnapshot();
    });

    test('Tenemos una excepción', () => {
        const user = {
            id: Math.floor(Math.random() *20),
            name: 'Oscar Barajas'
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    });

});