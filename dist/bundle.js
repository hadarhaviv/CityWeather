/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ \"./js/services.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\njquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#mainBTN\").click(() => {\r\n    getCityInfo();\r\n});\r\nconst CreateCard = (info) => {\r\n    let card = `<div class=\"card ml-3\" style=\"width: 10rem;\">\r\n    <img class=\"card-img-top\" src=\"http://openweathermap.org/img/w/${info[\"weather\"][0][\"icon\"]}.png\" alt=\"Card image cap\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">${info[\"sys\"][\"country\"]}</h5>\r\n      <h5 class=\"card-title\">${info[\"name\"]}</h5>\r\n      <p class=\"card-text\">${info[\"weather\"][0][\"description\"]}</p>\r\n      <p class=\"card-text\">Average Temp ${info.avg}</p>\r\n    </div>\r\n  </div>`;\r\n    return card;\r\n};\r\nlet cityInput = jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#weatherInput\");\r\nfunction getCityInfo() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            let currentCity = cityInput.val();\r\n            let info = yield _services__WEBPACK_IMPORTED_MODULE_1__[\"Service\"].getWeather(currentCity);\r\n            let tempArray = [info[\"main\"][\"temp_min\"], info[\"main\"][\"temp_max\"]];\r\n            let sum = tempArray.reduce((previous, current) => current += previous);\r\n            let avg = sum / tempArray.length;\r\n            info.avg = avg;\r\n            let currentCard = CreateCard(info);\r\n            jquery__WEBPACK_IMPORTED_MODULE_0___default()(\"#cardsContainer\").append(currentCard);\r\n        }\r\n        catch (err) {\r\n            console.log(err);\r\n        }\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/services.js":
/*!************************!*\
  !*** ./js/services.js ***!
  \************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Service\", function() { return Service; });\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"jquery\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass Service {\r\n}\r\nService.url = \"http://api.openweathermap.org/data/2.5/weather?q=\";\r\nService.appID = \"be98303a003d83978bc91660581ea833\";\r\nService.getWeather = (city) => {\r\n    return new Promise((resolve, reject) => {\r\n        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({\r\n            method: \"GET\",\r\n            dataType: \"json\",\r\n            url: Service.url + city + \"&appid=\" + Service.appID,\r\n            success: (response) => {\r\n                resolve(response);\r\n            }, error: (error) => {\r\n                reject(error);\r\n            }\r\n        });\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./js/services.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });