// concat().example();
// joinSplitCharAt().example();
indexOf().example();

function concat() {
    return {
        example
    }

    function example() {

        // Concat 
        // It retuns a new array !!!
        // The new array is the merge of the selected plus the ones you want to concatenate

        // IMPORTANT
        // Object references (and not the actual object): concat copies object references into the new array. 
        // Both the original and new array refer to the same object. 
        // That is, if a referenced object is modified, the changes are visible to both the new and original arrays.

        var items = [1, 2];
        var newItems = items.concat(3, 4, 5, 6);

        console.log(newItems);

        // It can flatten arrays but only one level

        var arr1 = [1, 2, 3];
        var arr2 = [4, 5, 6];
        var arr3 = [7, 8, 9];

        var merge = arr1.concat(arr2, arr3);
        console.log(merge);

        // An example:

        var people = [
            { name: 'Shane' },
            { name: 'Sally' }
        ];
        var people2 = [{ name: 'Simon' }, { name: 'Ben' }];

        people.concat(people2).forEach((v) => console.log(v.name));
    }
}

function joinSplitCharAt() {

    return {
        example
    }

    function example() {
        // Join

        var names = ['Shane', 'Alan', 'Osbourne'];
        console.log(names.join(' '));

        var html = [];
        html.push('<div>');
        html.push('<p>Hello World!</p>');
        html.push('</div>');

        console.log(html.join(''));

        // another example

        var name = 'shane osbourne';

        var res = name.split(' ')
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
            .join(' ');

        console.log(res);
    }
}

function indexOf() {
    return {
        example
    }

    function example() {
        // with strings

        var family1 = ['Shane', 'Sally', 'Isaac', 'Kittie'];

        function exists(group, value) {
            return (group.indexOf(value) !== -1);
        }

        console.log(exists(family1, 'Kittie'));
        console.log(exists(family1, 'John'));

        // with objects

        var shane = {
            name: 'Shane'
        }
        var sally = {
            name: 'Sally'
        }
        var kittie = {
            name: 'Kittie'
        }

        var family2 = [shane, sally];

        console.log(exists(family2, shane));
        console.log(exists(family2, kittie));

        // case example, filtering files

        var whitelist = ['.css', '.js'];
        var events = [
            {
                file: 'css/core.css'
            },
            {
                file: 'js/app.js'
            },
            {
                file: 'index.html'
            }
        ];

        var filtered = events.filter((event) => {
            var ext = require('path').extname(event.file);
            return exists(whitelist, ext);
        });
        console.log(filtered);
    }
}