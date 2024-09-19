const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
const tasktext = taskInput.value.trim();

const listItem = document.createElement('li');
listItem.textContent = tasktext;

taskList.appendChild(listItem);

taskInput.value = '';
});