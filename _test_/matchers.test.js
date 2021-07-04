describe('Comprobadores comunes', () => {
    const   user =  {
        name: 'Oscar',
        lastName: 'Barajas'
    }
    const user2 = {
        name: 'Oscar2',
        lastName: 'Barajas2'
    }
    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });
    test('No son exactamente iguales', () =>{
        expect(user).not.toEqual(user2);
    });
});
