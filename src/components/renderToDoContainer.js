import syncIcon from '../assets/sync.svg';
import returnIcon from '../assets/return.svg';
import taskData from '../data.json';
import renderData from './renderData.js';
import renderBottomArea from './renderBottomArea.js';

const renderToDoContainer = () => {
  const toDoListContainer = document.getElementsByClassName('to-do-list-container')[0];

  const listHeader = document.createElement('div');
  listHeader.className = 'list-header';

  const listTitle = document.createElement('div');
  listTitle.className = 'title';
  listTitle.innerHTML = 'Today&#39;s To Do';

  const syncImage = new Image();
  syncImage.src = syncIcon;
  syncImage.className = 'sync-image';

  const taskContainer = document.createElement('div');
  taskContainer.className = 'task-container';

  const taskInputBox = document.createElement('input');
  taskInputBox.className = 'task-input';
  taskInputBox.type = 'text';
  taskInputBox.placeholder = 'Add to your list...';

  const returnImage = new Image();
  returnImage.src = returnIcon;
  returnImage.className = 'return-icon';

  listHeader.appendChild(listTitle);
  listHeader.appendChild(syncImage);

  taskContainer.appendChild(taskInputBox);
  taskContainer.appendChild(returnImage);

  toDoListContainer.appendChild(listHeader);
  toDoListContainer.appendChild(document.createElement('hr'));
  toDoListContainer.appendChild(taskContainer);
  toDoListContainer.appendChild(document.createElement('hr'));

  toDoListContainer.appendChild(renderData(taskData));
  toDoListContainer.appendChild(renderBottomArea());
};

export default renderToDoContainer;