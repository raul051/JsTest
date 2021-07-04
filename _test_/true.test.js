import { isNull, isTrue, isFalse, isUndefined} from '../true';

describe('Probar resultados nulos', () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    });
});

describe('Resultados verdaderos', () => {
    test('Es true', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('Probar resultados falseos', () => {
    test('Es falso', () => {
        expect(isFalse()).toBeFalsy();
    });
});

describe('Probar resultados undefined', () => {
    test('Es undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});

describe('Probar resultados no verdaderos', () => {
    test('Falso o verdadero', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});