const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const newTask = newTaskInput.value.trim();

  if (newTask) {
    addTask(newTask);
    newTaskInput.value = '';
  }
});

function addTask(task) {
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const completeCheckbox = document.createElement('input');
  completeCheckbox.type = 'checkbox';
  completeCheckbox.addEventListener('change', function() {
    taskItem.classList.toggle('completed');
  });

  const taskText = document.createElement('span');
  taskText.textContent = task;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', function() {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(completeCheckbox);
  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
}

