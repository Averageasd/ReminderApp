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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/POPPINS-REGULAR.TTF */ \"./src/fonts/POPPINS-REGULAR.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ROBOTO-REGULAR.TTF */ \"./src/fonts/ROBOTO-REGULAR.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/ROBOTO-THIN.TTF */ \"./src/fonts/ROBOTO-THIN.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/INTER-REGULAR.TTF */ \"./src/fonts/INTER-REGULAR.TTF\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: 'poppin-regular';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n@font-face {\r\n    font-family: 'roboto-regular';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n@font-face {\r\n    font-family: 'roboto-thin';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}); \r\n}\r\n\r\n@font-face {\r\n    font-family: 'inter-regular';\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n    font-style: normal;\r\n    font-weight: lighter;\r\n}\r\n\r\n\r\n:root{\r\n    --color-with-red-background : #f7ebe8;\r\n    --side-bar-item-bg-color : #e9ecef;\r\n    --main-background-color : #e54b4b;\r\n    --divider-color : #e5e5e5;\r\n}\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: var(--main-background-color);\r\n    overflow: auto;\r\n}\r\n\r\n.side-bar {\r\n    max-width: 20rem;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    gap: 4px;\r\n    padding-top: 1rem;\r\n    flex-direction: column;\r\n    padding-left: 0.25rem;\r\n    padding-right: 0.25rem;\r\n    background-color: white;\r\n}\r\n\r\n.side-bar a {\r\n    width: 100%;\r\n    padding: 0.5rem 0.5rem;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n.sidebar-top {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.side-bar a:hover {\r\n    border-radius: 5px;\r\n    background-color: var(--side-bar-item-bg-color);\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.sidebar-divider {\r\n    margin: 0 auto;\r\n    width: 90%;\r\n    background-color: var(--divider-color);\r\n    height: 1px;\r\n    border: none;\r\n}\r\n\r\n.project-div {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 4px;\r\n    height: 75%;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.project-item {\r\n    display: flex;\r\n    border-radius: 5px;\r\n    background-color: var(--side-bar-item-bg-color);\r\n    cursor: pointer;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.25rem 0.25rem;\r\n}\r\n\r\n.project-name-container {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    width: 50%;\r\n}\r\n\r\n.edit-project-div{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n    padding-top: 0.25rem;\r\n    padding-bottom: 0.25rem;\r\n    gap:0.5rem\r\n}\r\n\r\n.edit-symbol, .delete-symbol{\r\n    width: 1rem;\r\n    height: 1rem;\r\n}\r\n\r\n.add-project-div {\r\n    display: flex;\r\n    padding: 0.5rem 0.5rem;\r\n    gap: 5px;\r\n}\r\n\r\n.main-content {\r\n    flex-grow: 7;\r\n    padding: 2rem;\r\n}\r\n\r\n.project-title{\r\n    color: var(--color-with-red-background);\r\n}\r\n\r\n.projectname-input {\r\n    flex-grow: 8;\r\n    padding: 0.25rem 0.5rem;\r\n    border: 1px solid #e5e5e5;\r\n}\r\n\r\n.projectname-input:focus {\r\n    outline: none;\r\n    border: 2px solid #826aed;\r\n}\r\n\r\n.addproject-btn {\r\n    flex-grow: 2;\r\n    padding: 0.25rem 0.5rem;\r\n    background-color: var(--main-background-color);\r\n    border: none;\r\n    color: var(--color-with-red-background);\r\n    cursor: pointer;\r\n}\r\n\r\n.error-message{\r\n    padding-left:0.5rem;\r\n    padding-right: 0.5rem;\r\n    color:red;\r\n}\r\n\r\n.invisible{\r\n    visibility: hidden;\r\n}\r\n\r\n.todo-item {\r\n    width: 80%;\r\n    padding: 1.25rem 1.25rem;\r\n    background-color: var(--color-with-red-background);\r\n    border-radius: 5px;\r\n    margin: 5px auto;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://reminderapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://reminderapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://reminderapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://reminderapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://reminderapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://reminderapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://reminderapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://reminderapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://reminderapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://reminderapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://reminderapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reminderItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reminderItem */ \"./src/reminderItem.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/delete.svg */ \"./src/images/delete.svg\");\n/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit.svg */ \"./src/images/edit.svg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst newProjectInput = document.querySelector(\".projectname-input\");\r\nconst addProjectBtn = document.querySelector(\".addproject-btn\");\r\nconst projectNameErrorMsg = document.querySelector(\".error-message\");\r\naddProjectBtn.addEventListener(\"click\", addNewProject);\r\nconst projectList = document.querySelector(\".project-div\");\r\nconst mainConent = document.querySelector(\".main-content\");\r\nconst listTitleDisplay = document.querySelector(\".project-title\");\r\nconst projects = [];\r\nlet prjPointer = projects.length === 0 ? null : projects[0];\r\nconst projectNameSet = new Set();\r\n\r\nfunction renderProjectList() {\r\n  projectList.innerHTML = \"\";\r\n  for (const project of projects) {\r\n    const projectItem = createNewProject(project.getName());\r\n    projectList.appendChild(projectItem);\r\n  }\r\n}\r\n\r\nfunction addNewProject(e) {\r\n  let newProjectName = newProjectInput.value;\r\n  if (!projectNameChecker(newProjectName)) {\r\n    displayInvalidProjectNameMsg();\r\n    return;\r\n  }\r\n  projectNameSet.add(newProjectName);\r\n  const project = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](newProjectName);\r\n  projects.push(project);\r\n  const projectItem = createNewProject(project.getName());\r\n  projectList.appendChild(projectItem);\r\n  hideErrorMessage();\r\n  clearProjectNameInput();\r\n}\r\n\r\nfunction hideErrorMessage() {\r\n  projectNameErrorMsg.innerText = \"\";\r\n  projectNameErrorMsg.classList.add(\"invisible\");\r\n}\r\n\r\nfunction clearProjectNameInput() {\r\n  newProjectInput.value = \"\";\r\n}\r\n\r\nfunction projectNameChecker(projectName) {\r\n  if (projectName.length === 0 || projectNameSet.has(projectName)) {\r\n    return false;\r\n  }\r\n  return true;\r\n}\r\n\r\nfunction displayInvalidProjectNameMsg() {\r\n  projectNameErrorMsg.innerText = \"project name is empty or already exists!!!\";\r\n  projectNameErrorMsg.classList.remove(\"invisible\");\r\n}\r\n\r\nfunction createNewProject(projectName) {\r\n  const projectItem = createDynamicElement(\"div\", \"project-item\");\r\n  const projectNameContainer = createDynamicElement(\"div\", \"project-name-container\");\r\n  projectNameContainer.innerText = projectName;\r\n  const editProjectDiv = createDynamicElement(\"div\", \"edit-project-div\");\r\n  const editSymbol = createImage(_images_edit_svg__WEBPACK_IMPORTED_MODULE_4__, \"edit-symbol\");\r\n  editSymbol.addEventListener(\"click\", editProjectName);\r\n  editProjectDiv.appendChild(editSymbol);\r\n  const deleteSymbol = createImage(_images_delete_svg__WEBPACK_IMPORTED_MODULE_3__, \"delete-symbol\");\r\n  deleteSymbol.addEventListener(\"click\", deleteProject);\r\n  editProjectDiv.appendChild(deleteSymbol);\r\n  projectItem.appendChild(projectNameContainer);\r\n  projectItem.appendChild(editProjectDiv);\r\n  projectItem.addEventListener(\"click\", displayTodoItemsOfProjects);\r\n  return projectItem;\r\n}\r\n\r\nfunction displayTodoItemsOfProjects(e) {\r\n  let selectedProject = null;\r\n  if (e.target.classList.contains(\"project-item\")) {\r\n    selectedProject = e.target;\r\n  } else if (\r\n    e.target.classList.contains(\"edit-project-div\") ||\r\n    e.target.classList.contains(\"project-name-container\")\r\n  ) {\r\n    selectedProject = e.target.parentNode;\r\n  }\r\n\r\n  prjPointer =\r\n    projects[Array.from(projectList.children).indexOf(selectedProject)];\r\n  console.log(Array.from(projectList.children).indexOf(selectedProject));\r\n  listTitleDisplay.innerText = prjPointer.getName();\r\n  console.log(prjPointer);\r\n}\r\n\r\nfunction editProjectName(e) {\r\n  e.stopPropagation();\r\n  const projectItem = e.target.parentNode.parentNode;\r\n  const projectNameContainer = Array.from(projectItem.children).find((node) =>\r\n    node.classList.contains(\"project-name-container\")\r\n  );\r\n  const indexOfCurProject = Array.from(projectList.children).indexOf(\r\n    projectItem\r\n  );\r\n  const curProjectName = projectNameContainer.innerText;\r\n  const editProjectNameInput = createDynamicElement(\"input\", null);\r\n  projectNameContainer.innerHTML = \"\";\r\n  projectNameContainer.appendChild(editProjectNameInput);\r\n  editProjectNameInput.focus();\r\n  editProjectNameInput.addEventListener(\"blur\", function () {\r\n    projectNameContainer.innerText =\r\n      editProjectNameInput.value.length === 0\r\n        ? curProjectName\r\n        : editProjectNameInput.value;\r\n    projects[indexOfCurProject].setName(projectNameContainer.innerText);\r\n  });\r\n}\r\n\r\nfunction deleteProject(e) {\r\n  e.stopPropagation();\r\n  const projectItem = e.target.parentNode.parentNode;\r\n  const indexOfCurPrj = Array.from(projectList.children).indexOf(projectItem);\r\n  const projectToBeDeleted = projects[indexOfCurPrj];\r\n  if (prjPointer == projectToBeDeleted){\r\n    listTitleDisplay.innerText = '';\r\n  }\r\n  projects.splice(indexOfCurPrj, 1);\r\n  renderProjectList();\r\n}\r\n\r\nfunction createDynamicElement(type, cssClass) {\r\n  const element = document.createElement(type);\r\n  if (cssClass) element.classList.add(cssClass);\r\n  return element;\r\n}\r\n\r\nfunction createImage(image, cssClass) {\r\n  const img = new Image();\r\n  img.src = image;\r\n  img.classList.add(cssClass);\r\n  return img;\r\n}\r\n\r\nrenderProjectList();\r\n\n\n//# sourceURL=webpack://reminderapp/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\r\n  constructor(name) {\r\n    this.name = name;\r\n    this.todoItems = [];\r\n    this.todoCount = 0;\r\n  }\r\n\r\n  addItem(todo) {\r\n    this.todoItems.push(todo);\r\n    this.todoCount++;\r\n  }\r\n\r\n  removeItem(todoIndex) {\r\n    this.todoItems = this.todoItems.splice(todoIndex, 1);\r\n    this.todoCount--;\r\n  }\r\n\r\n  getProject() {\r\n    return this.todoItems;\r\n  }\r\n\r\n  setName(name) {\r\n    this.name = name;\r\n  }\r\n\r\n  getName() {\r\n    return this.name;\r\n  }\r\n\r\n  getToDoCount() {\r\n    return this.todoCount;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://reminderapp/./src/project.js?");

/***/ }),

/***/ "./src/reminderItem.js":
/*!*****************************!*\
  !*** ./src/reminderItem.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ReminderItem)\n/* harmony export */ });\nclass ReminderItem {\r\n  constructor(title, description, dueDate, priority) {\r\n    this.title = title;\r\n    this.description = description;\r\n    this.dueDate = dueDate;\r\n    this.priority = priority;\r\n  }\r\n\r\n  setTitle(title) {\r\n    this.title = title;\r\n  }\r\n\r\n  setDescription(description) {\r\n    this.description = description;\r\n  }\r\n\r\n  setDueDate(dueDate) {\r\n    this.dueDate = dueDate;\r\n  }\r\n\r\n  setPriority(priority) {\r\n    this.priority = priority;\r\n  }\r\n\r\n  getTitle() {\r\n    return this.title;\r\n  }\r\n\r\n  getDescription() {\r\n    return this.description;\r\n  }\r\n\r\n  getDueDate() {\r\n    return this.dueDate;\r\n  }\r\n\r\n  getPriority() {\r\n    return this.priority;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://reminderapp/./src/reminderItem.js?");

/***/ }),

/***/ "./src/fonts/INTER-REGULAR.TTF":
/*!*************************************!*\
  !*** ./src/fonts/INTER-REGULAR.TTF ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e89cb19905e7db5591b0.TTF\";\n\n//# sourceURL=webpack://reminderapp/./src/fonts/INTER-REGULAR.TTF?");

/***/ }),

/***/ "./src/fonts/POPPINS-REGULAR.TTF":
/*!***************************************!*\
  !*** ./src/fonts/POPPINS-REGULAR.TTF ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"35d26b781dc5fda684cc.TTF\";\n\n//# sourceURL=webpack://reminderapp/./src/fonts/POPPINS-REGULAR.TTF?");

/***/ }),

/***/ "./src/fonts/ROBOTO-REGULAR.TTF":
/*!**************************************!*\
  !*** ./src/fonts/ROBOTO-REGULAR.TTF ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc2b5060f7accec5cf74.TTF\";\n\n//# sourceURL=webpack://reminderapp/./src/fonts/ROBOTO-REGULAR.TTF?");

/***/ }),

/***/ "./src/fonts/ROBOTO-THIN.TTF":
/*!***********************************!*\
  !*** ./src/fonts/ROBOTO-THIN.TTF ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a732a12eb07742232407.TTF\";\n\n//# sourceURL=webpack://reminderapp/./src/fonts/ROBOTO-THIN.TTF?");

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eac1a29b0fcadff53187.svg\";\n\n//# sourceURL=webpack://reminderapp/./src/images/delete.svg?");

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb174535b66c89089803.svg\";\n\n//# sourceURL=webpack://reminderapp/./src/images/edit.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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