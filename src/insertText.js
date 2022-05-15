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

/***/ "./src/insertText.ts":
/*!***************************!*\
  !*** ./src/insertText.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar jsonData = __webpack_require__(/*! ./title.json */ \"./src/title.json\");\nvar wrapperElement = document.getElementById('img-wrapper');\nvar textElement = document.createElement('p');\nvar titleText = jsonData.title;\nvar spaceCount = (titleText.match(/　/g) || []).length;\nif (spaceCount === 0) {\n    textElement.classList.add('one-line');\n}\nelse if (spaceCount === 1) {\n    textElement.classList.add('two-lines');\n}\nelse if (spaceCount === 2) {\n    textElement.classList.add('three-lines');\n}\nelse {\n    textElement.classList.add('four-lines');\n}\nvar formatText = titleText.replace(/　/g, '\\n');\ntextElement.textContent = formatText;\nwrapperElement.appendChild(textElement);\nvar authorElement = document.createElement('div');\nauthorElement.classList.add('author-wrapper');\n// 画像\nvar imgElement = document.createElement('img');\nimgElement.src = 'github.png';\nimgElement.width = 40;\nimgElement.height = 40;\nauthorElement.appendChild(imgElement);\n// 著名\nvar authorTextElement = document.createElement('p');\nauthorTextElement.textContent = 'zawa1205';\nauthorTextElement.classList.add('author-text');\nauthorElement.appendChild(authorTextElement);\nwrapperElement.appendChild(authorElement);\n\n\n//# sourceURL=webpack://generate-ogp/./src/insertText.ts?");

/***/ }),

/***/ "./src/title.json":
/*!************************!*\
  !*** ./src/title.json ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"title\":\"【AWS CLF】　クラウドプラクティショナーを　0から２週間で受かった　勉強方法を伝えたい！\"}');\n\n//# sourceURL=webpack://generate-ogp/./src/title.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/insertText.ts");
/******/ 	
/******/ })()
;