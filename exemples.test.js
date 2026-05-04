const ex = require('./exemples.js');

test('additionner 1 + 2 égale 3', () => {
	expect(ex.somme(1, 2)).toEqual(3);
});