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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  (0,_main_js__WEBPACK_IMPORTED_MODULE_0__.initialize)();\r\n});\r\n\n\n//# sourceURL=webpack://theodinproject-restaurant-website/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialize: () => (/* binding */ initialize)\n/* harmony export */ });\nfunction createHeader(contentElement) {\r\n  const siteLogo = document.createElement('img');\r\n  siteLogo.src = 'assets/logo.png';\r\n  siteLogo.classList.add('site-logo');\r\n\r\n  const siteTitle = document.createElement('h1');\r\n  siteTitle.textContent = 'Mythos';\r\n  siteLogo.classList.add('site-title');\r\n\r\n  const leftSideNavElement = document.createElement('div');\r\n  leftSideNavElement.append(siteLogo);\r\n  leftSideNavElement.append(siteTitle);\r\n  leftSideNavElement.classList.add('left-nav');\r\n\r\n  const navItems = ['home', 'contact', 'menu'];\r\n  const navListElement = document.createElement('ul');\r\n  navItems.forEach(navItem => {\r\n    const navItemButton = document.createElement('button');\r\n    navItemButton.textContent = navItem;\r\n    navItemButton.id = navItem;\r\n    navItemButton.classList.add('nav-item-button');\r\n\r\n    const navItemElement = document.createElement('li');\r\n    navItemElement.append(navItemButton);\r\n    navItemElement.classList.add('nav-item');\r\n    navListElement.append(navItemElement);\r\n  });\r\n  navListElement.classList.add('nav-list');\r\n\r\n  const rightSideNavElement = document.createElement('div');\r\n  rightSideNavElement.append(navListElement);\r\n  rightSideNavElement.classList.add('right-nav');\r\n\r\n  const navContainerElement = document.createElement('div');\r\n  navContainerElement.append(leftSideNavElement);\r\n  navContainerElement.append(rightSideNavElement);\r\n  navContainerElement.classList.add('nav-container');\r\n\r\n  const headerElement = document.createElement('header');\r\n  headerElement.append(navContainerElement);\r\n\r\n  contentElement.append(headerElement);\r\n}\r\n\r\nfunction createFooter(contentElement) {}\r\n\r\nfunction initialize() {\r\n  const contentElement = document.getElementById('content');\r\n  createHeader(contentElement);\r\n}\r\n\n\n//# sourceURL=webpack://theodinproject-restaurant-website/./src/main.js?");

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