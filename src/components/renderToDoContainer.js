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

  const syncImage = document.createElement('div');
  syncImage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg>';
  syncImage.className = 'sync-image';

  const taskContainer = document.createElement('div');
  taskContainer.className = 'task-container';

  const taskInputLabel = document.createElement('label');
  taskInputLabel.innerText = '';
  taskInputLabel.htmlFor = 'task-input';
  taskInputLabel.className = 'label';

  const taskInputBox = document.createElement('input');
  taskInputBox.className = 'task-input';
  taskInputBox.id = 'task-input';
  taskInputBox.type = 'text';
  taskInputBox.placeholder = 'Add to your list...';

  const returnImage = document.createElement('div');
  returnImage.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-return-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/></svg>';
  returnImage.className = 'return-icon';

  listHeader.appendChild(listTitle);
  listHeader.appendChild(syncImage);

  taskInputLabel.appendChild(taskInputBox);

  taskContainer.appendChild(taskInputLabel);
  taskContainer.appendChild(returnImage);

  toDoListContainer.appendChild(listHeader);
  toDoListContainer.appendChild(document.createElement('hr'));
  toDoListContainer.appendChild(taskContainer);
  toDoListContainer.appendChild(document.createElement('hr'));

  toDoListContainer.appendChild(renderData(taskData));
  toDoListContainer.appendChild(renderBottomArea());
};

export default renderToDoContainer;