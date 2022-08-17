import storageAvailable from './storageAvailable.js';

const updateTask = (event) => {
  const checkBox = event.target;

  if (checkBox.checked) {
    event.target.nextElementSibling.style.textDecoration = 'line-through';

    const itemIndex = event.target.id.replace('checkbox-', '');

    const taskList = [];

    const tasks = document.querySelectorAll('.task');

    tasks.forEach((task, index) => {
      taskList.push({
        index,
        description: task.value,
        completed: false,
      });
    });

    taskList[itemIndex].completed = true;

    const { localStorage } = window;

    if (storageAvailable('localStorage')) {
      localStorage.removeItem('taskList');

      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  } else {
    event.target.nextElementSibling.style.textDecoration = 'none';

    const itemIndex = event.target.id.replace('checkbox-', '');

    const taskList = [];

    const tasks = document.querySelectorAll('.task');

    tasks.forEach((task, index) => {
      taskList.push({
        index,
        description: task.value,
        completed: false,
      });
    });

    taskList[itemIndex].completed = false;

    const { localStorage } = window;

    if (storageAvailable('localStorage')) {
      localStorage.removeItem('taskList');

      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  }
};

export default updateTask;