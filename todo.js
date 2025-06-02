const input = document.getElementById("titem");
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const todoContainer = document.getElementById('todolist');
addBtn.addEventListener('click', () => {
    if (input.value) {