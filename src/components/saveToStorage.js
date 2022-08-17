import storageAvailable from './storageAvailable';

const saveToStorage = (newTask) => {
  if (storageAvailable('localStorage')) {
    const { localStorage } = window;

    let taskList = [];

    const check = localStorage.getItem('taskList');

    if (check === null || check === '') {
      taskList.push({
        index: 0,
        description: newTask,
        completed: false,
      });
      localStorage.setItem('taskList', JSON.stringify(taskList));
    } else {
      taskList = JSON.parse(localStorage.getItem('taskList'));

      taskList.push({
        index: taskList.length,
        description: newTask,
        completed: false,
      });
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  }
};

export default saveToStorage;