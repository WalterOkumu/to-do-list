import storageAvailable from './storageAvailable.js';

const clearCompletedTasks = () => {
  const { localStorage } = window;

  if (storageAvailable('localStorage')) {
    let taskList = [];

    taskList = JSON.parse(localStorage.getItem('taskList'));

    if (taskList !== null || Array.isArray(taskList)) {
      const updatedList = taskList.filter((task) => task.completed !== true);

      for (let i = 0; i < updatedList.length; i += 1) {
        updatedList[i].index = i + 1;
      }

      localStorage.removeItem('taskList');
      localStorage.setItem('taskList', JSON.stringify(updatedList));

      window.location.reload();
    }
  }
};

export default clearCompletedTasks;