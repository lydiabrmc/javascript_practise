describe('Strings-Challenges', () => {

    it('challenge 1 : can check types of different variables', () => {

        expect(typeof 'hello').toEqual("string");
        expect(typeof 2018).toEqual("number");
        expect(typeof true).toEqual("boolean");

    });


    it('challenge 2 : can declare variables', () => {
        let phrase = "I think, therefore I am!"
        let year = 2018
        expect(phrase).toEqual("I think, therefore I am!")
        expect(year).toEqual(2018)

    });


    it('challenge 3 : can fix syntax errors', () => {

        const message = "hello!";
        const classicMessage = "hello world";
        const statement = "I said 'something not right here";

    });


    it('challenge 4 : get the length of big-strings', () => {

        expect(isAscending(ABCs, moonsAndStars, coins, scrambledYear)).toEqual(true);

    });


    it('challenge 5 : can join strings together', () => {

        const firstPart = 'radio';
        const secondPart = 'head';
        const bandOfGenius = firstPart + secondPart;
        expect(bandOfGenius).toEqual('radiohead');

        const item1 = 'bread';
        const item2 = 'milk';
        const item3 = 'marmite';
        const shoppingList = "My shopping list is " + item1 + ", " + item2 + " and " + item3

        expect(shoppingList).toEqual("My shopping list is bread, milk and marmite")

    });


    it('challenge 6 : access characters in strings using indices', () => {

        const truth = "I love my cats!!!!";

        expect(truth[0]).toEqual('I');
        expect(truth[12]).toEqual('a');
        expect(truth[17]).toEqual('!');
        expect(truth[10]).toEqual(' ');
        expect(truth[1]).toEqual(' ');
    });


    it('challenge 7 : can access characters using indices in a bigger string', () => {
        const ABC = "A****************************************************************************************************************************B****************************************************************************************************************************C";
        expect(ABC[0]).toEqual('A');
        expect(ABC[125]).toEqual('B');
        expect(ABC[250]).toEqual('C');

    });

    it('challenge 8 : use the indexOf() and lastIndexOf() method to find the index of certain characters', () => {

        const lyric = 'Never gonna give you up!';

        expect(lyric.indexOf('g')).toEqual(6);
        expect(lyric.lastIndexOf(' ')).toEqual(20);
        expect(lyric.indexOf('c')).toEqual(-1);

    });
});

var STRING_HERE;
var INDEX_HERE;
var YOUR_EXPRESSION_HERE;
var EXPRESSION_HERE;
var NAME_OF_STRING;
var FILL_ME_IN;