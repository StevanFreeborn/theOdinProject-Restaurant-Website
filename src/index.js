import { renderFooter } from './footer.js';
import { renderHeader } from './header.js';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('content');
  renderHeader(rootElement);
  const mainElement = document.createElement('main');
  mainElement.textContent = 'Main';
  rootElement.append(mainElement);
  renderFooter(rootElement);
});
