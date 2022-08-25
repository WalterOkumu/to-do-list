import storageAvailable from './storageAvailable';

const saveToStorage = (newTask) => {
  if (storageAvailable('localStorage')) {
    const { localStorage } = window;

    let taskList = [];

    taskList = JSON.parse(localStorage.getItem('taskList'));

    if (taskList === null || !Array.isArray(taskList) || taskList.length === 0) {
      taskList = [];

      taskList.push({
        index: 1,
        description: newTask,
        completed: false,
      });
      localStorage.setItem('taskList', JSON.stringify(taskList));
    } else {
      taskList = JSON.parse(localStorage.getItem('taskList'));

      taskList.push({
        index: taskList[taskList.length - 1].index + 1,
        description: newTask,
        completed: false,
      });
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  }
};

export default saveToStorage;