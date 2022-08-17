import storageAvailable from './storageAvailable.js';

const deleteTask = () => {
  window.onclick = (event) => {
    const { localStorage } = window;

    if (storageAvailable('localStorage')) {
      let taskList = [];

      taskList = JSON.parse(localStorage.getItem('taskList'));

      const itemIndex = event.path[2].id.replace('task-icon-', '');

      taskList.splice(itemIndex, 1);

      for (let i = 0; i < taskList.length; i += 1) {
        taskList[i].index = i;
      }

      localStorage.removeItem('taskList');

      localStorage.setItem('taskList', JSON.stringify(taskList));

      window.location.reload();
    }
  };
};

export default deleteTask;