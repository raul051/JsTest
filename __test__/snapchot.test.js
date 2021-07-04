import { getCharacter } from '../snapchot';
import rick from '../rick.json';

describe('Es hora de las instantaneas', () => {
    test('Snapchot', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });
});