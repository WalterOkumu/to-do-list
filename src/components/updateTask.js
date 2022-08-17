import storageAvailable from './storageAvailable.js';

const updateTask = (event) => {
  const checkBox = event.target;
  const { localStorage } = window;
  let taskList = [];
  const itemIndex = event.target.id.replace('checkbox-', '');

  if (checkBox.checked) {
    event.target.nextElementSibling.style.textDecoration = 'line-through';

    const itemIndex = event.target.id.replace('checkbox-', '');

    if (storageAvailable('localStorage')) {
      taskList = JSON.parse(localStorage.getItem('taskList'));

      if (Array.isArray(taskList)) {
        localStorage.removeItem('taskList');
        taskList[itemIndex].completed = true;
        localStorage.setItem('taskList', JSON.stringify(taskList));
      }
    }
  } else {
    event.target.nextElementSibling.style.textDecoration = 'none';

    if (storageAvailable('localStorage')) {
      taskList = JSON.parse(localStorage.getItem('taskList'));

      if (Array.isArray(taskList)) {
        localStorage.removeItem('taskList');
        taskList[itemIndex].completed = false;
        localStorage.setItem('taskList', JSON.stringify(taskList));
      }
    }
  }
};

export default updateTask;