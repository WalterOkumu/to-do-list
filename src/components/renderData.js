import menuIcon from '../assets/menu.svg';

const renderData = (taskData) => {
  const taskContainer = document.createElement('ul');
  taskContainer.className = 'task-list-container';

  taskData.forEach((data, index) => {
    const taskListDiv = document.createElement('li');
    taskListDiv.className = 'task-list';

    const label = document.createElement('label');
    label.className = 'label';
    label.htmlFor = `checkbox-${index}`;
    label.innerText = 'checkbox';

    const checkBox = document.createElement('input');
    checkBox.className = 'checkbox';
    checkBox.id = `checkbox-${index}`;
    checkBox.type = 'checkbox';

    const task = document.createElement('p');
    task.className = 'task';
    task.innerText = data.description;

    const taskIcon = new Image();
    taskIcon.className = 'task-icon';
    taskIcon.alt = 'task-icon';
    taskIcon.src = menuIcon;

    taskListDiv.appendChild(label);
    taskListDiv.appendChild(checkBox);
    taskListDiv.appendChild(task);
    taskListDiv.appendChild(taskIcon);

    taskContainer.appendChild(taskListDiv);
  });

  return taskContainer;
};

export default renderData;