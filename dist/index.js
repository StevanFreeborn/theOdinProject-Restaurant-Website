/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContact: () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\r\n  const contactContent = `\r\n    <h1>We'd love to hear from you!</h1>\r\n    <div>Joplin, Missouri</div>\r\n    <div>(417) 624-6984</div>\r\n    <a \r\n      href=\"https://goo.gl/maps/xmB3zUumVbVHBxqEA\" \r\n      target=\"_blank\"\r\n    >\r\n      1306 S Range Line Joplin, MO\r\n    </a>\r\n  `;\r\n\r\n  const contactElement = document.createElement('div');\r\n  contactElement.classList.add('contact');\r\n  contactElement.innerHTML = contactContent;\r\n  return contactElement;\r\n}\r\n\n\n//# sourceURL=webpack://theodinproject-restaurant-website/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFooter: () => (/* binding */ renderFooter)\n/* harmony export */ });\nfunction createGithubImage() {\r\n  const githubImage = document.createElement('img');\r\n  githubImage.src = 'assets/github.png';\r\n  githubImage.classList.add('github-image');\r\n  return githubImage;\r\n}\r\n\r\nfunction createGithubUsername() {\r\n  const githubUsername = document.createElement('span');\r\n  githubUsername.textContent = 'StevanFreeborn';\r\n  githubUsername.classList.add('github-username');\r\n  return githubUsername;\r\n}\r\n\r\nfunction createGithubLink() {\r\n  const githubImage = createGithubImage();\r\n  const githubUsername = createGithubUsername();\r\n  const githubLink = document.createElement('a');\r\n  githubLink.href =\r\n    'https://github.com/StevanFreeborn/theOdinProject-Restaurant-Website';\r\n  githubLink.target = '_blank';\r\n  githubLink.append(githubImage);\r\n  githubLink.append(githubUsername);\r\n  githubLink.classList.add('github-link');\r\n  return githubLink;\r\n}\r\n\r\nfunction createGithubContainer() {\r\n  const githubContainer = document.createElement('div');\r\n  githubContainer.classList.add('github-container');\r\n  return githubContainer;\r\n}\r\n\r\nfunction renderFooter(contentElement) {\r\n  const githubLink = createGithubLink();\r\n  const githubContainer = createGithubContainer();\r\n  githubContainer.append(githubLink);\r\n  const footerElement = document.createElement('footer');\r\n  footerElement.append(githubContainer);\r\n  contentElement.append(footerElement);\r\n}\r\n\n\n//# sourceURL=webpack://theodinproject-restaurant-website/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeader: () => (/* binding */ renderHeader)\n/* harmony export */ });\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nconst tabs = {\r\n  HOME: 'home',\r\n  CONTACT: 'contact',\r\n  MENU: 'menu',\r\n};\r\n\r\nfunction createSiteLogo() {\r\n  const siteLogo = document.createElement('img');\r\n  siteLogo.src = 'assets/logo.png';\r\n  siteLogo.classList.add('site-logo');\r\n  return siteLogo;\r\n}\r\n\r\nfunction createSiteTitle() {\r\n  const siteTitle = document.createElement('h1');\r\n  siteTitle.textContent = 'Mythos';\r\n  siteTitle.classList.add('site-title');\r\n  return siteTitle;\r\n}\r\n\r\nfunction renderTabContent(tab) {\r\n  const mainElement = document.getElementById('main');\r\n  mainElement.innerHTML = '';\r\n\r\n  let tabContent = document.createElement('div');\r\n\r\n  switch (tab) {\r\n    case tabs.HOME:\r\n      tabContent = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();\r\n      break;\r\n    case tabs.CONTACT:\r\n      tabContent = (0,_contact_js__WEBPACK_IMPORTED_MODULE_0__.createContact)();\r\n      break;\r\n    case tabs.MENU:\r\n      tabContent = (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenu)();\r\n      break;\r\n    default:\r\n      break;\r\n  }\r\n\r\n  mainElement.append(tabContent);\r\n}\r\n\r\nfunction createNavList() {\r\n  const navItems = Object.values(tabs);\r\n  const navListElement = document.createElement('ul');\r\n  navItems.forEach(navItem => {\r\n    const navItemButton = document.createElement('button');\r\n    navItemButton.textContent = navItem;\r\n    navItemButton.id = navItem;\r\n    navItemButton.classList.add('nav-item-button');\r\n    navItemButton.onclick = () => renderTabContent(navItem);\r\n\r\n    const navItemElement = document.createElement('li');\r\n    navItemElement.append(navItemButton);\r\n    navItemElement.classList.add('nav-item');\r\n    navListElement.append(navItemElement);\r\n  });\r\n  navListElement.classList.add('nav-list');\r\n  return navListElement;\r\n}\r\n\r\nfunction createNav() {\r\n  const siteLogo = createSiteLogo();\r\n  const siteTitle = createSiteTitle();\r\n\r\n  const leftSideNavElement = document.createElement('div');\r\n  leftSideNavElement.append(siteLogo);\r\n  leftSideNavElement.append(siteTitle);\r\n  leftSideNavElement.classList.add('left-nav');\r\n\r\n  const navList = createNavList();\r\n\r\n  const rightSideNavElement = document.createElement('div');\r\n  rightSideNavElement.append(navList);\r\n  rightSideNavElement.classList.add('right-nav');\r\n\r\n  const navContainerElement = document.createElement('div');\r\n  navContainerElement.append(leftSideNavElement);\r\n  navContainerElement.append(rightSideNavElement);\r\n  navContainerElement.classList.add('nav-container');\r\n  return navContainerElement;\r\n}\r\n\r\nfunction renderHeader(contentElement) {\r\n  const nav = createNav();\r\n  const headerElement = document.createElement('header');\r\n  headerElement.append(nav);\r\n  contentElement.append(headerElement);\r\n}\r\n\n\n//# sourceURL=webpack://theodinproject-restaurant-website/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\r\n  const homeContent = `\r\n    <h1>Experience the Taste of Greece</h1>\r\n    <img class=\"mythos-image\" alt=\"picture of mythos restaurant\" src=\"assets/mythos.jpg\" />\r\n  `;\r\n\r\n  const homeElement = document.createElement('div');\r\n  homeElement.classList.add('home');\r\n  homeElement.innerHTML = homeContent;\r\n\r\n  return homeElement;\r\n}\r\n\n\n//# sourceURL=webpack://theodinproject-restaurant-website/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const rootElement = document.getElementById('content');\r\n  (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.renderHeader)(rootElement);\r\n\r\n  const homeElement = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.createHome)();\r\n  const mainElement = document.createElement('main');\r\n  mainElement.id = 'main';\r\n  mainElement.append(homeElement);\r\n\r\n  rootElement.append(mainElement);\r\n\r\n  (0,_footer_js__WEBPACK_IMPORTED_MODULE_0__.renderFooter)(rootElement);\r\n});\r\n\n\n//# sourceURL=webpack://theodinproject-restaurant-website/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n  const menuContent = `\r\n    <h2 class=\"menu-section-title\">Appetizers</h2>\r\n    <div class=\"menu-section-container\">\r\n      <div class=\"menu-item\">\r\n        <div class=\"details\">\r\n          <div class=\"title\">Spicy Feta Dip</div>\r\n          <div class=\"description\">Feta cheese blend, pepperoncini peppers, tomato brunoise, warm pita chips.</div>\r\n        </div>\r\n        <div class=\"price\">13</div>\r\n      </div>\r\n      <div class=\"menu-item\">\r\n        <div class=\"details\">\r\n          <div class=\"title\">Bang Bang Shrimp</div>\r\n          <div class=\"description\">Breaded fried shrimp, spicy bang bang sauce, sweet lime ginger dip, scallions.</div>\r\n        </div>\r\n        <div class=\"price\">13</div>\r\n      </div>\r\n    </div>\r\n    <h2 class=\"menu-section-title\">Soups & Salads</h2>\r\n    <div class=\"menu-section-container\">\r\n      <div class=\"menu-item\">\r\n        <div class=\"details\">\r\n          <div class=\"title\">Wedge Salad</div>\r\n          <div class=\"description\">Wedge of iceberg lettuce, tomatoes, eggs, bacon and blue cheese dressing.</div>\r\n        </div>\r\n        <div class=\"price\">12</div>\r\n      </div>\r\n      <div class=\"menu-item\">\r\n        <div class=\"details\">\r\n          <div class=\"title\">Caprese Salad</div>\r\n          <div class=\"description\">heirloom tomatoes, fresh mozzarella cheese, olive oil, fresh basil leaves.</div>\r\n        </div>\r\n        <div class=\"price\">12</div>\r\n      </div>\r\n    </div>\r\n    <h2 class=\"menu-section-title\">Entrees</h2>\r\n    <div class=\"menu-section-container\">\r\n      <div class=\"menu-item\">\r\n        <div class=\"details\">\r\n          <div class=\"title\">Bacon Wrapped Atlantic Salmon</div>\r\n          <div class=\"description\">Atlantic salmon wrapped in applewood smoked bacon, herb creamed leeks, rice pilaf.</div>\r\n        </div>\r\n        <div class=\"price\">34</div>\r\n      </div>\r\n      <div class=\"menu-item\">\r\n        <div class=\"details\">\r\n          <div class=\"title\">Chilean Seabass</div>\r\n          <div class=\"description\">Parmesan seared seabass, roasted pancetta, smoked tomato scallion broth, potato gnocchi, olive caper relish, oven roasted tomatoes, feta cheese.</div>\r\n        </div>\r\n        <div class=\"price\">44</div>\r\n      </div>\r\n    </div>\r\n  `;\r\n  const menuElement = document.createElement('div');\r\n  menuElement.classList.add('menu');\r\n  menuElement.innerHTML = menuContent;\r\n  return menuElement;\r\n}\r\n\n\n//# sourceURL=webpack://theodinproject-restaurant-website/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;