import storageAvailable from './storageAvailable.js';
import removeAllChildNodes from './removeChildNodes.js';
import updateTask from './updateTask.js';
import editTask from './editTask.js';
import deleteTask from './deleteTask.js';

const renderData = () => {
  const toDoListContainer = document.getElementsByClassName('to-do-list-container')[0];

  let taskData = [];

  let taskContainer = document.getElementsByClassName('task-list-container')[0];

  if (taskContainer === null || taskContainer === undefined) {
    taskContainer = document.createElement('ul');
    taskContainer.className = 'task-list-container';
  }

  if (storageAvailable('localStorage')) {
    const { localStorage } = window;

    if (localStorage.getItem('taskList')) {
      taskData = JSON.parse(localStorage.getItem('taskList'));

      removeAllChildNodes(taskContainer);

      taskData.forEach((data, index) => {
        const taskListDiv = document.createElement('li');
        taskListDiv.className = 'task-list';

        const checkBox = document.createElement('input');
        checkBox.className = 'checkbox';
        checkBox.id = `checkbox-${index}`;
        checkBox.name = `checkbox-${index}`;
        checkBox.type = 'checkbox';
        checkBox.placeholder = '';
        checkBox.addEventListener('click', (event) => updateTask(event));

        const label = document.createElement('input');
        label.className = 'task';
        label.readOnly = 'readOnly';
        label.id = `label-checkbox-${index}`;
        label.value = data.description;
        label.addEventListener('click', (event) => editTask(event));

        const taskIcon = document.createElement('div');
        taskIcon.className = 'task-icon';
        taskIcon.id = `task-icon-${index}`;
        taskIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
        taskIcon.addEventListener('click', () => deleteTask());

        taskListDiv.appendChild(checkBox);
        taskListDiv.appendChild(label);
        taskListDiv.appendChild(taskIcon);

        taskContainer.appendChild(taskListDiv);

        toDoListContainer.appendChild(taskContainer);
      });
    }
  }
};

export default renderData;