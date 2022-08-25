import './styles/styles.scss';
import renderToDoContainer from './components/renderToDoContainer.js';
import addFavicon from './components/addFavicon.js';

window.onload = () => {
  addFavicon();
  renderToDoContainer();
};