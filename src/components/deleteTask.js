import storageAvailable from './storageAvailable.js';

const deleteTask = () => {
  window.onclick = (event) => {
    const { localStorage, location } = window;
    const itemIndex = parseInt(event.target.parentElement.id.replace('task-icon-', ''), 10);

    if (storageAvailable('localStorage')) {
      let taskList = [];

      taskList = JSON.parse(localStorage.getItem('taskList'));

      taskList.splice(itemIndex, 1);

      taskList.forEach((task, index) => {
        task.index = index + 1;
      });

      localStorage.removeItem('taskList');

      localStorage.setItem('taskList', JSON.stringify(taskList));

      location.reload();
    }
  };
};

export default deleteTask;