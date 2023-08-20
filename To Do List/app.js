// get the elements
let inputBox = document.getElementById('todo-input');
let addBtn = document.getElementById('add-btn');
let itemList = document.getElementById('items');

// Event  listner
document.addEventListener('DOMContentLoaded', getTodos)
itemList.addEventListener('click', deleteEdit)
//function
addBtn.addEventListener("click", function (event) {
    event.preventDefault();

    if (inputBox.value === "") {
        alert("Task cannot be blank!")
        return false;
    }

    //SvaeTasks in localStorage
    saveLocalTodos(inputBox.value)

    // create a todoDiv
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('item');


    // Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = inputBox.value;
    todoDiv.appendChild(newTodo)

    // Check mark  button 
    let editBtn = document.createElement('button');
    editBtn.classList.add('complete-btn');
    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square" ></i>`
    todoDiv.appendChild(editBtn);

    // Create a remove button
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-btn');
    removeBtn.innerHTML = `<i class="fa-solid fa-trash " ></i>`
    todoDiv.appendChild(removeBtn);

    // Append to list
    itemList.appendChild(todoDiv);

    // Clear the input value
    inputBox.value = "";



    return true;
})

function deleteEdit(e) {

    let item = e.target;
    console.log(item)

    // DElete todo
    if (item.classList[1] === "fa-trash") {
        const todo = item.parentElement.parentElement;
        todo.remove()
        removeLocalTodos(todo)
    }

    // Edit todo
    if (item.classList[1] === "fa-pen-to-square") {
        inputBox.value = item.parentElement.previousElementSibling.innerHTML;
        item.parentElement.parentElement.remove();

    }

}

// Mark completed task
itemList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
}, false);


function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

}

function getTodos() {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function (todo) {
        // create a todoDiv
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('item');


        // Create LI
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo)

        // Check mark  button 
        let editBtn = document.createElement('button');
        editBtn.classList.add('complete-btn');
        editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square" ></i>`
        todoDiv.appendChild(editBtn);

        // Create a remove button
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.innerHTML = `<i class="fa-solid fa-trash" ></i>`
        todoDiv.appendChild(removeBtn);

        
        // Append to list
        itemList.appendChild(todoDiv);


    });
}

// Remove localtodos
function removeLocalTodos(todo) {
    // Check-- Hey Do I already have thing in there
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}
