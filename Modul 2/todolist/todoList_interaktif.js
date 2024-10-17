const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
let todos = [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <div>
                <button class="edit-btn" onclick="editTodo(${index})">✏️</button>
                <button class="delete-btn" onclick="deleteTodo(${index})">🗑️</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function editTodo(index) {
    const newTodo = prompt('Edit tugas:', todos[index]);
    if (newTodo !== null) {
        todos[index] = newTodo.trim();
        renderTodos();
    }
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

renderTodos();