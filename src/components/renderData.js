import menuIcon from '../assets/menu.svg';

const renderData = (taskData) => {
  const taskContainer = document.createElement('ul');
  taskContainer.className = 'task-list-container';

  taskData.forEach((data) => {
    const taskListDiv = document.createElement('li');
    taskListDiv.className = 'task-list';

    const checkBox = document.createElement('input');
    checkBox.className = 'checkbox';
    checkBox.type = 'checkbox';

    const task = document.createElement('p');
    task.className = 'task';
    task.innerText = data.description;

    const taskIcon = new Image();
    taskIcon.className = 'task-icon';
    taskIcon.src = menuIcon;

    taskListDiv.appendChild(checkBox);
    taskListDiv.appendChild(task);
    taskListDiv.appendChild(taskIcon);

    taskContainer.appendChild(taskListDiv);
    taskContainer.appendChild(document.createElement('hr'));
  });

  return taskContainer;
};

export default renderData;