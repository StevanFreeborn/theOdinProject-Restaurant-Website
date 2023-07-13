import { renderFooter } from './footer.js';
import { renderHeader } from './header.js';
import { createHome } from './home.js';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('content');
  renderHeader(rootElement);

  const homeElement = createHome();
  const mainElement = document.createElement('main');
  mainElement.id = 'main';
  mainElement.append(homeElement);

  rootElement.append(mainElement);

  renderFooter(rootElement);
});
