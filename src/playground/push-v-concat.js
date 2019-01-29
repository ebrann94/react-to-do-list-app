console.log('App is Running');

const items = [{
    item: 'Item 1',
    completed: false
},
{
    item: 'Item 2',
    completed: false
}]

const newItem = {
    item: 'Item 3',
    completed: false
}

const newItemArr = items.push(newItem);

console.log(newItemArr);
console.log(items);