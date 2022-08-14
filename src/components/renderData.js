const renderData = (taskData) => {
  const taskContainer = document.createElement('ul');
  taskContainer.className = 'task-list-container';

  taskData.forEach((data, index) => {
    const taskListDiv = document.createElement('li');
    taskListDiv.className = 'task-list';

    const label = document.createElement('label');
    label.className = 'label';
    label.htmlFor = `checkbox-${index}`;
    label.innerText = '';

    const checkBox = document.createElement('input');
    checkBox.className = 'checkbox';
    checkBox.id = `checkbox-${index}`;
    checkBox.type = 'checkbox';

    const task = document.createElement('p');
    task.className = 'task';
    task.innerText = data.description;

    const taskIcon = document.createElement('div');
    taskIcon.className = 'task-icon';
    taskIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
    taskListDiv.appendChild(label);

    label.appendChild(checkBox);

    taskListDiv.appendChild(task);
    taskListDiv.appendChild(taskIcon);

    taskContainer.appendChild(taskListDiv);
  });

  return taskContainer;
};

export default renderData;