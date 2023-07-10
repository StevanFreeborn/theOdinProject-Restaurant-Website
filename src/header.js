function createSiteLogo() {
  const siteLogo = document.createElement('img');
  siteLogo.src = 'assets/logo.png';
  siteLogo.classList.add('site-logo');
  return siteLogo;
}

function createSiteTitle() {
  const siteTitle = document.createElement('h1');
  siteTitle.textContent = 'Mythos';
  siteTitle.classList.add('site-title');
  return siteTitle;
}

function createNavList() {
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
  return navListElement;
}

function createNav() {
  const siteLogo = createSiteLogo();
  const siteTitle = createSiteTitle();

  const leftSideNavElement = document.createElement('div');
  leftSideNavElement.append(siteLogo);
  leftSideNavElement.append(siteTitle);
  leftSideNavElement.classList.add('left-nav');

  const navList = createNavList();

  const rightSideNavElement = document.createElement('div');
  rightSideNavElement.append(navList);
  rightSideNavElement.classList.add('right-nav');

  const navContainerElement = document.createElement('div');
  navContainerElement.append(leftSideNavElement);
  navContainerElement.append(rightSideNavElement);
  navContainerElement.classList.add('nav-container');
  return navContainerElement;
}

export function renderHeader(contentElement) {
  const nav = createNav();
  const headerElement = document.createElement('header');
  headerElement.append(nav);
  contentElement.append(headerElement);
}
