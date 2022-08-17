import storageAvailable from './storageAvailable';

const updateLocalStorage = () => {
  const taskList = [];

  const tasks = document.querySelectorAll('.task');

  tasks.forEach((task, index) => {
    taskList.push({
      index,
      description: task.value,
      completed: false,
    });
  });

  const { localStorage } = window;

  if (storageAvailable('localStorage')) {
    localStorage.removeItem('taskList');

    localStorage.setItem('taskList', JSON.stringify(taskList));
  }
};

export default updateLocalStorage;