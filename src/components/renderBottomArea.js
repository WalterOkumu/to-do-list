import clearCompletedTasks from './clearCompletedTasks';

const renderBottomArea = () => {
  const bottomDiv = document.createElement('div');
  bottomDiv.className = 'bottom-area';
  bottomDiv.id = 'bottom-area';

  if (window.localStorage.getItem('taskList')) {
    bottomDiv.style.visibility = 'visible';
  } else {
    bottomDiv.style.visibility = 'hidden';
  }

  const bottomText = document.createElement('p');
  bottomText.className = 'bottom-text';
  bottomText.innerText = 'Clear all completed';
  bottomText.addEventListener('click', () => clearCompletedTasks());

  bottomDiv.appendChild(bottomText);

  return bottomDiv;
};

export default renderBottomArea;