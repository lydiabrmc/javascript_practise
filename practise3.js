describe('Iteration Challenges', () => {


    it('push the numbers from 1 up to ( and including ) 20 into items', () => {

        const items = [];
        for (let i = 1; i <= 20; i++) {
            items.push(i);
        }
        console.log(items)
        expect(items).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });

    it('push the even numbers from 0 up to ( and including ) 14 into items', () => {
        const items = [];
        for (let i = 0; i <= 14; i++) {
            if (i % 2 === 0) {
                items.push(i);
            }
        }
        console.log(items)
        expect(items).toEqual([0, 2, 4, 6, 8, 10, 12, 14]);
    });

    it('push the multiples of 5 from 10 to 100 ( inclusive ) in ascending order into items', () => {

        const items = [];
        for (let i = 10; i <= 100; i++) {
            if (i % 5 === 0) {
                items.push(i);
            }
        }
        console.log(items)
        expect(items).toEqual([10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]);
    });

    it('push the numbers from 42 down to ( and including ) 3 in descending order into items', () => {

        const items = [];
        for (let i = 3; i <= 42; i++) {
            items.push(i)
        }
        items.sort(function (a, b) {
            return b - a
        })
        console.log(items)
        expect(items).toEqual([42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3]);
    });

    it('push each item into a new array with ! on the end', () => {

        const sounds = ['fizz', 'buzz', 'bang', 'crash', 'wallop'];
        const exclaimedSounds = [];
        for (let i = 0; i < sounds.length; i++) {
            exclaimedSounds.push(sounds[i] + "!")
        }
        console.log(exclaimedSounds)

        expect(exclaimedSounds).toEqual(['fizz!', 'buzz!', 'bang!', 'crash!', 'wallop!'])
    });

    it('write a for loop that iterates over an array and prints the current array element and its index', () => {

        const tutors = ['Anat', 'Paul C', 'Paul R', 'Jonny', 'Mitch', 'Vel', 'Alex', 'Ant']
        const tutorsAndIndex = [];
        for (let i = 0; i < tutors.length; i++) {
            tutorsAndIndex.push(i + " : " + tutors[i]);
        }
        console.log(tutorsAndIndex)
        expect(tutorsAndIndex).toEqual(["0 : Anat", "1 : Paul C", "2 : Paul R", "3 : Jonny", "4 : Mitch", "5 : Vel", "6 : Alex", "7 : Ant"]);
    });

    it('write a for loop that logs only the names with length greater than 5', () => {

        const tutors = ['Angela', 'Anne', 'Elizabeth', 'Julie', 'Mo', 'Barbara'];
        const tutorsOverLength5 = [];
        for (let i = 0; i < tutors.length; i++) {
            if (tutors[i].length > 5) {
                tutorsOverLength5.push(tutors[i])
            }
        }
        console.log(tutorsOverLength5)
        expect(tutorsOverLength5).toEqual(['Angela', 'Elizabeth', 'Barbara']);
    });

    it('update a variable **total** to get the total of adding all the numbers from 1 to 50', () => {

        let total = 0;
        for (let i = 0; i <= 50; i++) {
            total += i;
        }
        console.log(total)
        expect(total).toEqual(1275);
    });

    it('iterate over an array to build up a checkList string', () => {

        let checkList = '';
        const items = ['apple', 'banana', 'pear', 'orange'];
        for (let i = 0; i < items.length; i++) {
            if (i + 1 === items.length) {
                checkList += ' and ' + items[i];
            } else if (i > 0) {
                checkList += ', ' + items[i];
            } else {
                checkList += items[i];
            }
        }
        console.log(checkList)
        expect(checkList).toEqual('apple, banana, pear and orange');
    });

    it('iterate over list to get the strings only', () => {

        const list = ['hello', 'random', 3, true, false, '!', true, 1990, 'boom'];
        const stringsOnly = [];
        for (let i = 0; i < list.length; i++) {
            if (typeof list[i] === "string") {
                stringsOnly.push(list[i])
            }
        }
        console.log(stringsOnly)

        expect(stringsOnly).toEqual(['hello', 'random', '!', 'boom']);
    });

    it('iterate over an array to create an new array of upper case strings', () => {

        const normalWords = ['I', 'am', 'learning', 'how', 'to', 'code'];
        const upperCaseWords = [];
        for (let i = 0; i < normalWords.length; i++) {
            upperCaseWords.push(normalWords[i].toUpperCase())
        }
        console.log(upperCaseWords)

        expect(upperCaseWords).toEqual(['I', 'AM', 'LEARNING', 'HOW', 'TO', 'CODE']);
    });

    it('find the names of all the staff that are 28 or over', () => {

        const staff = [
            { name: 'Anat', age: 22 },
            { name: 'Paul C', age: 31 },
            { name: 'Paul R', age: 27 },
            { name: 'Vel', age: 29 },
            { name: 'Sam', age: 30 },
            { name: 'Jonny', age: 32 },
            { name: 'Ant', age: 26 },
            { name: 'Mitch', age: 28 },
            { name: 'Tom', age: 24 },
            { name: 'Alex', age: 24 }
        ];

        const staffOverOrAt28 = [];
        for (let i = 0; i < staff.length; i++) {
            if (staff[i].age >= 28) {
                staffOverOrAt28.push(staff[i].name)
            }
        }
        console.log(staffOverOrAt28)
        expect(staffOverOrAt28).toEqual(['Paul C', 'Vel', 'Sam', 'Jonny', 'Mitch']);
    });
});
