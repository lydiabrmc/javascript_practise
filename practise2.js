'use-strict';


describe('Number-Challenges', () => {

    const a = 100;
    const b = 28;
    const c = 3;
    const d = 2;

    it('challenge:1 do basic arithmetic', () => {

        expect(a + b).toEqual(128);
        expect(a - b).toEqual(72);
        expect(a * b).toEqual(2800);
        expect(b * d).toEqual(56);
        expect(b / a).toEqual(0.28);
    });

    it('challenge:2 do slightly trickier arithmetic', () => {

        expect((c + d) * a).toEqual(500)
        expect(b / a - d).toEqual(-1.72)
        expect((b - c) * d).toEqual(50)
    });

    it('challenge:3 can use the modulo operator', () => {

        expect(10 % 3).toEqual(1);
        expect(10 % 2).toEqual(0);
        expect(7 % 3).toEqual(1);
        expect(100 % 7).toEqual(2);
        expect(1000 % 3 - 1).toEqual(0);
    });

    it('challenge:4 can round a number to the nearest whole number', () => {
        const a = 28.75;
        expect(Math.round(a)).toEqual(29);

        const b = 53.081
        expect(Math.round(b)).toEqual(53);

    });

    it('challenge:5 can round a decimal number DOWN to the nearest integer', () => {

        const a = 41.82
        expect(Math.floor(a)).toEqual(41);

        const b = 35.5;
        expect(Math.floor(b)).toEqual(35);

    });

    it('challenge:6 can round a decimal number UP to the nearest integer', () => {

        const a = 34.3;
        expect(Math.ceil(a)).toEqual(35);

        const b = 10.25;
        expect(Math.ceil(b)).toEqual(11);

    });

    it('challenge:7 can produce a random number between 0 and 1', () => {

        const randomNum = Math.random(); // <-- here you need to make a random number between 0 and 1
        expect(randomNum >= 0).toEqual(true);
        expect(randomNum < 1).toEqual(true);
    })

});





var FILL_ME_IN;
var NUMBER_HERE;
var EXPRESSION_HERE;