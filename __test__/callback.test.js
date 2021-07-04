import { callbackHell } from "../callback";

describe('probando un callback', () => {
    test('callback', done => {
        function otherCallback(data){
            expect(data).toBe('Hola JS')
            done();
        }
        callbackHell(otherCallback);
    });
});