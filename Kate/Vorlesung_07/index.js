// 1) Imitate a to-do list: create an array of 3 objects
// each object should have 3 fields: "task" (a string (e.g., "Buy bread")), "person"(a string (e.g., "David")), "done" (boolean (true or false))

// console.log('initial todos ', todos)
// Task Number 1
let todos = [
    {
        task: "Buy bread",
        person: "David",
        done: false
    },
    {
        task: "Buy milk",
        person: "Maria",
        done: true
    }, 
    {
        task: "Buy chocolate",
        person: "Jonas",
        done: false
    }
]
console.log('initial todos ', todos)

// Create a function "addToDo" that accepts a new todo object and adds it to our todos array
// Task Number 2
let newObj = {
    task: "Clean Car",
    person: "David",
    done: true
}

function addToDo(addObj) {
    todos.push(addObj);
}

// 3) Call this function with a new toDo object 

// console.log('todos after add ', todos)
// Task Number 3
// Call this function with a new toDo object 
addToDo(newObj);

console.log("Object added: ",todos);

// 4) Create a function "addId": 
// inside this function loop through todos array using "Array.forEach" function
// add a new field: "id" to each object and assign to it the index

function addId(array) {
    array.forEach((name, index) => {
        array[index].id = index;
    })
}

// 5) Call this function
addId(todos)
console.log('todos with index ', todos)

// 6) Reverse the array

todos.reverse()
console.log('array reversed ', todos)

// 7) Remove the last element from the array

todos.pop()
console.log('last elem removed ', todos)

// 8) Console.log the length of your todos array

console.log(todos.length);

// 9) Create a function "deletePersonField": use "for loop" and delete the field "person" from all the objects
// see an example of deleting object field in the 6_tutorial -> objects-arrays

function deletePersonField(array) {
    for(i=0;i<array.length;i++){
        delete array[i].person;
    }
}

// 10) Call this function

deletePersonField(todos);

console.log('delete person ', todos)