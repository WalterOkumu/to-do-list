import renderData from './renderData';
import saveToStorage from './saveToStorage';

const addToList = () => {
  const newTask = document.forms[0].elements['task-input'].value;

  document.forms[0].elements['task-input'].value = '';

  saveToStorage(newTask);
  renderData();

  document.getElementsByClassName('bottom-area')[0].style.visibility = 'visible';
};

export default addToList;