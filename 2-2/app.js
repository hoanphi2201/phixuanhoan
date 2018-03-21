var button = document.getElementById('buttonAdd');
var input = document.getElementById('inputAdd');
var list = document.getElementById('list');

function removeTodoFromStorage(index) {
    var todos = getTodosFromStorage();

    todos.splice(index, 1);

    saveTodosToStorage(todos);
}
function addTodoToLocalStorage(text) {
    var todos = getTodosFromStorage();

    todos.push({
        text: text,
        completed: false
    });

    saveTodosToStorage(todos);
}
function toggleTodo(index) {
}
function handleToggleTodo(target) {
    var todos = getTodosFromStorage();
    var id = target.id;
    var todo = todos[id];
    todo.completed = !todo.completed;

    todos[id] = todo;
    saveTodosToStorage(todos);
}
function handleRemoveTodo(target) {
    var todo = target.parentElement;
    var id = todo.id;

    removeTodoFromStorage(id);
}
function onClickTodo(event) {
    var target = event.target;

    var tag = target.tagName;

    if (tag === 'LI') {
        handleToggleTodo(target);
    }

    if (tag === 'SPAN') {
        handleRemoveTodo(target);
    }
    render();
}

function renderTodoToHTML(text, completed, i) {
    if (text != '') {
        var todo = document.createElement('li');
        todo.innerHTML = text + '<span class="close">×</span>';
        todo.id = i;

        if (completed) {
            todo.className = "completed";
        }
        todo.addEventListener('click', onClickTodo);

        list.appendChild(todo);
    }
}

function getTodosFromStorage() {
    var str = localStorage.getItem('todos');
    if (!str) {
        return [];
    }

    try {
        return JSON.parse(str);
    } catch (error) {
        return [];
    }
}

function saveTodosToStorage(todos) {
    var str = JSON.stringify(todos);
    return localStorage.setItem('todos', str);
}

function clearList() {
    list.innerHTML = '';
}

function renderTodosList() {
    var todos = getTodosFromStorage();

    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        renderTodoToHTML(todo.text, todo.completed, i);
    }
}

function render() {
    clearList();
    renderTodosList();
}

function emptyInput() {
    input.value = '';
}

button.addEventListener('click', function () {
    var text = input.value;
    addTodoToLocalStorage(text);
    render();
    emptyInput();
});
render();