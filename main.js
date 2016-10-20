// concat().example();
// joinSplitCharAt().example();
// indexOf().example();
// slice().example();
// sort().example();
filter().example();

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

function slice() {

    return {
        example
    }

    function example() {
        // slice lets us copy an array
        // BUT it doesn't work well with objects, because it only copies the reference

        var items = [1, 2, 3, 4, 5];
        var copy = items.slice();

        copy.push(6);

        console.log(items, copy);

        // for slicing you have to indicate the first and the last index, but the last index is not included

        var items2 = [1, 2, 3, 4, 5];
        console.log(items.slice(2)); // [3,4,5]
        console.log(items.slice(2, 4)); // [3,4]
        console.log(items.slice(2, 5)); // [3,4,5]
        console.log(items.slice(-1)); // [5]
        console.log(items.slice(-3)); // [3,4,5]
    }

}

function sort() {
    return {
        example
    }

    function example() {
        // RETURNS the same array modified!

        // it's useful for sorting strings, and strings only

        var items = ['john', 'John', 'Mary', 'Paul']; // ['John','Mary','Paul','john']
        console.log(items.sort());

        // sorting numbers

        var numbers = [134, 4545, 345, 98];
        console.log(numbers.sort((a, b) => a - b)); // ascending
        console.log(numbers.sort((a, b) => b - a)); // descending

        // example

        var lessons = [
            {
                title: 'lesson1',
                views: 1000
            },
            {
                title: 'lesson2',
                views: 1050
            },
            {
                title: 'lesson3',
                views: 1025
            }
        ];

        var list = lessons
            .sort((a, b) => b.views - a.views) // descending
            .map(x => `  <li>${x.title} (${x.views})</li>`)
            .join('\n');

        var output = `<ul>\n${list}\n</ul>`;
        console.log(output);
    }
}

function filter() {
    return {
        example
    }

    function example() {
        // creates a new array!
        // the new array will content only the elements that return true

        var items = [1, 2, 3, 4, 5];

        console.log(items.filter(x => x > 3));
    }
}