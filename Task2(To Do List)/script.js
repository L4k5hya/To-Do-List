const taskInput = document.getElementById('inputs');
const addBtn = document.getElementById('add');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Delete';
  removeBtn.classList.add('remove-btn');
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
  taskInput.value = '';
}
