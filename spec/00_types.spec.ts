describe('types in typescript', () => {
    describe('decalaring variables and constants', () => {
        it('implicity any', () => {
            // No Typescript in this example.
            // let = Var, Const is constant, Var = Devil
            let x;
            x = 'Tacos';
            expect(typeof x).toBe('string')
            x = 3.19;
            expect(typeof x).toBe('number');
            x = function () { }
            expect(typeof x).toBe('function');
            x = ['dog', 'cat', 'mouse', 99, 'tacos'];
            expect(typeof x).toBe('object');
        });
        it('implicity typing', () => {
            let x: string | number = 'Tacos' // Union type

            x = 3.19

            let y: number | number[];

        });
        it('has const', () => {
            const x = 3.14 // Have to initilze

            const favoriteNumbers = [7, 8, 9]
            favoriteNumbers[0] = 10
            expect(favoriteNumbers).toEqual([10, 8, 9])

            const movie = { title: 'Jaws', yearreleased: 1978 }
            movie.yearreleased = 1977



        });
        it('has var but it is bad and youre a bad person if you use it', () => {
            const age = 22;
            if (age > 21) {
                const message = 'Old Enough'
            }
            else {
                const message = 'Too Young'
            }
            expect(message).toBe('Old Enough')


            const title = 'King of Scotland'
        });

        it('literals in Tyoe', () => {
            const n1 = 'Bob';
            // tslint:disable-next-line: quotemark
            const n2 = "Bob";
            expect(n1).toEqual(n2);
            // tslint:disable-next-line: quotemark
            const someHtml = "<h1 class=\"pretty\">Hello</h1>";
        });

        it('Template Strings', () => {
            const story = `Hello
                This is going to be a long
                string on several lines`

            console.log(story)
            const name = 'Joe';
            const age = 51;
            const job = 'DEV';

            const description1 = 'The name is ' + name + ' and ' + name + ' is ' + age + ' and works as a ' + job;
            expect(description1).toBe('The name is Joe and Joe is 51 and works as a DEV');
            const description2 = `The name is ${name} and ${name} is ${age} and works as a ${job}`;
            expect(description2).toBe('The name is Joe and Joe is 51 and works as a DEV');
        });


    });