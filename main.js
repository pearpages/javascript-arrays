concat().example();

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