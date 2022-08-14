const renderBottomArea = () => {
  const bottomDiv = document.createElement('div');
  bottomDiv.className = 'bottom-area';

  const bottomText = document.createElement('p');
  bottomText.className = 'bottom-text';
  bottomText.innerText = 'Clear all completed';

  bottomDiv.appendChild(bottomText);

  return bottomDiv;
};

export default renderBottomArea;