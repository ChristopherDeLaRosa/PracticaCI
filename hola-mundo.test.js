const holaMundo = require('./hola-mundo');

test('debe retornar ¡Hola, Mundo!', () => {
    expect(holaMundo()).toBe('¡Hola, Mundo Electiva!');
});