function createHeader(contentElement) {
  const siteLogo = document.createElement('img');
  siteLogo.src = 'assets/logo.png';
  siteLogo.classList.add('site-logo');

  const siteTitle = document.createElement('h1');
  siteTitle.textContent = 'Mythos';
  siteLogo.classList.add('site-title');

  const leftSideNavElement = document.createElement('div');
  leftSideNavElement.append(siteLogo);
  leftSideNavElement.append(siteTitle);
  leftSideNavElement.classList.add('left-nav');

  const navItems = ['home', 'contact', 'menu'];
  const navListElement = document.createElement('ul');
  navItems.forEach(navItem => {
    const navItemButton = document.createElement('button');
    navItemButton.textContent = navItem;
    navItemButton.id = navItem;
    navItemButton.classList.add('nav-item-button');

    const navItemElement = document.createElement('li');
    navItemElement.append(navItemButton);
    navItemElement.classList.add('nav-item');
    navListElement.append(navItemElement);
  });
  navListElement.classList.add('nav-list');

  const rightSideNavElement = document.createElement('div');
  rightSideNavElement.append(navListElement);
  rightSideNavElement.classList.add('right-nav');

  const navContainerElement = document.createElement('div');
  navContainerElement.append(leftSideNavElement);
  navContainerElement.append(rightSideNavElement);
  navContainerElement.classList.add('nav-container');

  const headerElement = document.createElement('header');
  headerElement.append(navContainerElement);

  contentElement.append(headerElement);
}

function createFooter(contentElement) {}

export function initialize() {
  const contentElement = document.getElementById('content');
  createHeader(contentElement);
}
