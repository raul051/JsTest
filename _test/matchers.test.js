describe('Comprobadores comunes', () => {
    const   user =  {
        name: 'Oscar',
        lastName: 'Barajas'
    }
    const user2 = {
        name: 'Oscar',
        lastName: 'Barajas'
    }
    test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });
});
