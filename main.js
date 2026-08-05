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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* ===========================\r\n   Josh Comeau CSS Reset\r\n=========================== */\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n*:not(dialog) {\r\n    margin: 0;\r\n}\r\n\r\n@media (prefers-reduced-motion: no-preference) {\r\n    html {\r\n        interpolate-size: allow-keywords;\r\n        scroll-behavior: smooth;\r\n    }\r\n}\r\n\r\nbody {\r\n    line-height: 1.5;\r\n    -webkit-font-smoothing: antialiased;\r\n    font-family: Georgia, serif;\r\n    overflow: hidden;\r\n    background: black;\r\n}\r\n\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n    display: block;\r\n    max-width: 100%;\r\n}\r\n\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font: inherit;\r\n}\r\n\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    overflow-wrap: break-word;\r\n    color: white;\r\n}\r\n\r\np {\r\n    text-wrap: pretty;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    text-wrap: balance;\r\n}\r\n\r\n#root,\r\n#__next {\r\n    isolation: isolate;\r\n}\r\n\r\n/* ===========================\r\n   Scrollbar\r\n=========================== */\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: transparent;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: rgba(181, 136, 52, .75);\r\n    border-radius: 100px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: rgba(214, 170, 84, .9);\r\n}\r\n\r\n/* ===========================\r\n   Navbar\r\n=========================== */\r\n\r\nnav {\r\n    height: 70px;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 35px;\r\n\r\n    background: rgba(15, 10, 5, .95);\r\n\r\n    border-bottom: 2px solid #7b5b2d;\r\n\r\n    box-shadow: 0 4px 15px rgba(0,0,0,.5);\r\n}\r\n\r\nnav button {\r\n\r\n    cursor: pointer;\r\n\r\n    padding: 10px 28px;\r\n\r\n    color: white;\r\n\r\n    background: transparent;\r\n\r\n    border: 2px solid #b58b4a;\r\n\r\n    border-radius: 50px;\r\n\r\n    font-weight: bold;\r\n\r\n    letter-spacing: 1px;\r\n\r\n    transition: .25s;\r\n}\r\n\r\nnav button:hover {\r\n\r\n    background: #b58b4a;\r\n\r\n    color: black;\r\n\r\n    transform: translateY(-2px);\r\n}\r\n\r\n/* ===========================\r\n   Main Content\r\n=========================== */\r\n\r\n#content {\r\n\r\n    position: relative;\r\n\r\n    height: calc(100vh - 70px);\r\n\r\n    width: 100vw;\r\n\r\n    background-size: cover;\r\n\r\n    background-position: center;\r\n\r\n    background-repeat: no-repeat;\r\n\r\n    display: flex;\r\n\r\n    justify-content: center;\r\n\r\n    align-items: center;\r\n\r\n    overflow: hidden;\r\n}\r\n\r\n/* Dark cinematic overlay */\r\n\r\n#content::before {\r\n\r\n    content: \"\";\r\n\r\n    position: absolute;\r\n\r\n    inset: 0;\r\n\r\n    background: rgba(0,0,0,.45);\r\n\r\n}\r\n\r\n#content>* {\r\n\r\n    position: relative;\r\n\r\n    z-index: 1;\r\n\r\n    animation: fade .35s ease;\r\n}\r\n\r\n/* ===========================\r\n   Home Page\r\n=========================== */\r\n\r\n#homeDiv {\r\n\r\n    width: min(700px, 90%);\r\n\r\n    display: flex;\r\n\r\n    flex-direction: column;\r\n\r\n    align-items: center;\r\n\r\n    gap: 25px;\r\n\r\n    padding: 40px;\r\n\r\n    border-radius: 35px;\r\n\r\n    background: rgba(20,20,20,.55);\r\n\r\n    backdrop-filter: blur(10px);\r\n\r\n    border: 1px solid rgba(255,255,255,.12);\r\n\r\n    box-shadow: 0 20px 40px rgba(0,0,0,.45);\r\n}\r\n\r\n#homeDiv img {\r\n\r\n    width: 320px;\r\n\r\n    height: auto;\r\n\r\n    filter: drop-shadow(0 10px 18px rgba(0,0,0,.55));\r\n}\r\n\r\n#homeDiv p {\r\n\r\n    text-align: center;\r\n\r\n    color: white;\r\n\r\n    font-size: 1.05rem;\r\n\r\n    line-height: 1.8;\r\n}\r\n\r\n#homeDiv button {\r\n\r\n    cursor: pointer;\r\n\r\n    margin-top: 10px;\r\n\r\n    padding: 14px 34px;\r\n\r\n    border: none;\r\n\r\n    border-radius: 50px;\r\n\r\n    background: #b58b4a;\r\n\r\n    color: white;\r\n\r\n    font-weight: bold;\r\n\r\n    letter-spacing: 1px;\r\n\r\n    transition: .25s;\r\n}\r\n\r\n#homeDiv button:hover {\r\n\r\n    transform: translateY(-3px);\r\n\r\n    background: #d4aa54;\r\n}\r\n\r\n/* ===========================\r\n   Menu Page\r\n=========================== */\r\n\r\n#menuDiv {\r\n\r\n    width: min(1200px, 100%);\r\n\r\n    height: 100%;\r\n\r\n    margin: auto;\r\n\r\n    display: grid;\r\n\r\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n\r\n    gap: 35px;\r\n\r\n    overflow-y: auto;\r\n\r\n    overflow-x: hidden;\r\n\r\n    padding: 40px;\r\n}\r\n\r\n.foodItem {\r\n\r\n    display: flex;\r\n\r\n    flex-direction: column;\r\n\r\n    align-items: center;\r\n\r\n    gap: 18px;\r\n\r\n    padding: 20px;\r\n\r\n    border-radius: 28px;\r\n\r\n    background: rgba(18,18,18,.6);\r\n\r\n    backdrop-filter: blur(8px);\r\n\r\n    border: 1px solid rgba(255,255,255,.08);\r\n\r\n    box-shadow: 0 15px 30px rgba(0,0,0,.4);\r\n\r\n    transition: .3s;\r\n}\r\n\r\n.foodItem:hover {\r\n\r\n    transform: translateY(-8px);\r\n\r\n    box-shadow: 0 25px 45px rgba(0,0,0,.55);\r\n}\r\n\r\n.foodItem img {\r\n\r\n    width: 100%;\r\n\r\n    height: 240px;\r\n\r\n    object-fit: cover;\r\n\r\n    border-radius: 18px;\r\n}\r\n\r\n.foodItem h3 {\r\n\r\n    font-size: 1.6rem;\r\n\r\n    color: white;\r\n}\r\n\r\n.foodItem p {\r\n\r\n    text-align: center;\r\n\r\n    color: rgba(255,255,255,.9);\r\n}\r\n\r\n/* ===========================\r\n   Contact Page\r\n=========================== */\r\n\r\n#contactDiv {\r\n\r\n    width: min(850px, 90%);\r\n\r\n    display: grid;\r\n\r\n    grid-template-columns: 1fr 1fr;\r\n\r\n    gap: 30px;\r\n\r\n    padding: 40px;\r\n\r\n    border-radius: 35px;\r\n\r\n    background: rgba(20,20,20,.58);\r\n\r\n    backdrop-filter: blur(10px);\r\n\r\n    border: 1px solid rgba(255,255,255,.1);\r\n\r\n    box-shadow: 0 20px 40px rgba(0,0,0,.45);\r\n}\r\n\r\n#contactLabel {\r\n\r\n    grid-column: 1 / -1;\r\n\r\n    text-align: center;\r\n\r\n    font-size: 2rem;\r\n\r\n    color: #d8b15b;\r\n\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#contactDiv p {\r\n\r\n    line-height: 2;\r\n\r\n    color: white;\r\n}\r\n\r\n#contactDiv strong {\r\n\r\n    color: #d8b15b;\r\n}\r\n\r\n/* ===========================\r\n   Fade Animation\r\n=========================== */\r\n\r\n@keyframes fade {\r\n\r\n    from {\r\n\r\n        opacity: 0;\r\n\r\n        transform: translateY(15px);\r\n\r\n    }\r\n\r\n    to {\r\n\r\n        opacity: 1;\r\n\r\n        transform: translateY(0);\r\n\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactDiv = document.createElement(\"div\");\r\ncontactDiv.id = \"contactDiv\";\r\n\r\ncontactDiv.innerHTML = `\r\n    <h2 id=\"contactLabel\">Contact Us</h2>\r\n\r\n    <p><strong>📍 Address:</strong><br>\r\n    The Odin's Inn<br>\r\n    42 Raven's Wharf,<br>\r\n    Frostholm District,<br>\r\n    Bergen, Norway 5003\r\n    </p>\r\n\r\n    <p><strong>📞 Phone:</strong><br>\r\n    +47 412 56 789\r\n    </p>\r\n\r\n    <p><strong>✉️ Email:</strong><br>\r\n    feast@odinsinn.com\r\n    </p>\r\n\r\n    <p><strong>🌐 Website:</strong><br>\r\n    www.odinsinn.com\r\n    </p>\r\n\r\n    <p><strong>🕒 Opening Hours:</strong><br>\r\n    Monday – Thursday: 11:00 AM – 10:00 PM<br>\r\n    Friday – Saturday: 11:00 AM – 12:00 AM<br>\r\n    Sunday: 12:00 PM – 9:00 PM\r\n    </p>\r\n\r\n    <p><strong>🍺 Follow Us:</strong><br>\r\n    Instagram: @odinsinn<br>\r\n    Facebook: The Odin's Inn\r\n    </p>\r\n`\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactDiv);\n\n//# sourceURL=webpack://restaurantpage/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurantLogo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/restaurantLogo.svg */ \"./src/assets/restaurantLogo.svg\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\r\n\r\n\r\nconst homeDiv = document.createElement(\"div\");\r\nhomeDiv.id = \"homeDiv\";\r\n\r\nconst logo = document.createElement(\"img\");\r\nlogo.src = _assets_restaurantLogo_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nconst viewMenuButton = document.createElement(\"button\");\r\nviewMenuButton.textContent = \"View menu\"\r\nviewMenuButton.addEventListener(\"click\", () => {\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n    content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n})\r\n\r\nhomeDiv.appendChild(logo);\r\nhomeDiv.appendChild(viewMenuButton);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeDiv);\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_RestaurantBackground_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/RestaurantBackground.png */ \"./src/assets/RestaurantBackground.png\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _assets_restaurantLogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/restaurantLogo.svg */ \"./src/assets/restaurantLogo.svg\");\nconsole.log('index.js loaded');\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\ncontent.innerHTML = \"\";\r\ncontent.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\ncontent.style.backgroundImage = `url(${_assets_RestaurantBackground_png__WEBPACK_IMPORTED_MODULE_1__})`;\r\n\r\nconst navbar = document.querySelector(\"nav\");\r\n\r\nconst homeButton = document.createElement(\"button\");\r\nconst menuButton = document.createElement(\"button\");\r\nconst contactButton = document.createElement(\"button\");\r\n\r\nhomeButton.textContent = \"Home\";\r\nmenuButton.textContent = \"Menu\";\r\ncontactButton.textContent = \"Contact\";\r\n\r\nhomeButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = \"\";\r\n    content.appendChild(_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n});\r\n\r\nmenuButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = \"\";\r\n    content.appendChild(_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n});\r\n\r\ncontactButton.addEventListener(\"click\", () => {\r\n    content.innerHTML = \"\";\r\n    content.appendChild(_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\r\n});\r\n\r\nnavbar.appendChild(homeButton);\r\nnavbar.appendChild(menuButton);\r\nnavbar.appendChild(contactButton);\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ \"./src/menuItems.js\");\n\r\n\r\nconst menuDiv = document.createElement(\"div\");\r\nmenuDiv.id = \"menuDiv\";\r\n\r\nfor(const menuItem of _menuItems__WEBPACK_IMPORTED_MODULE_0__[\"default\"]){\r\n    const foodItem = document.createElement(\"div\");\r\n    foodItem.classList.add(\"foodItem\");\r\n    foodItem.innerHTML = `\r\n        <img src=\"${menuItem.coverImage}\" alt=\"${menuItem.name}\">\r\n        <h3>${menuItem.name}</h3>\r\n        <p>₹${menuItem.price}</p>\r\n    `;\r\n\r\n    menuDiv.appendChild(foodItem);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuDiv);\r\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?\n}");

/***/ },

/***/ "./src/menuItems.js"
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_paneerTikka_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/paneerTikka.avif */ \"./src/assets/paneerTikka.avif\");\n/* harmony import */ var _assets_butterChicken_avif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/butterChicken.avif */ \"./src/assets/butterChicken.avif\");\n/* harmony import */ var _assets_chickenBiryani_avif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/chickenBiryani.avif */ \"./src/assets/chickenBiryani.avif\");\n/* harmony import */ var _assets_masalaDosa_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/masalaDosa.avif */ \"./src/assets/masalaDosa.avif\");\n/* harmony import */ var _assets_palakPaneer_avif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/palakPaneer.avif */ \"./src/assets/palakPaneer.avif\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst menuItems = [\r\n    {\r\n        name : \"Paneer Tikka Masala\",\r\n        price: 250,\r\n        coverImage : _assets_paneerTikka_avif__WEBPACK_IMPORTED_MODULE_0__\r\n    },\r\n    {\r\n        name: \"Butter Chicken\",\r\n        price: 320,\r\n        coverImage: _assets_butterChicken_avif__WEBPACK_IMPORTED_MODULE_1__\r\n    },\r\n    {\r\n        name: \"Chicken Biryani\",\r\n        price: 280,\r\n        coverImage: _assets_chickenBiryani_avif__WEBPACK_IMPORTED_MODULE_2__\r\n    },\r\n    {\r\n        name: \"Masala Dosa\",\r\n        price: 180,\r\n        coverImage: _assets_masalaDosa_avif__WEBPACK_IMPORTED_MODULE_3__\r\n    },\r\n    {\r\n        name: \"Palak Paneer\",\r\n        price: 240,\r\n        coverImage: _assets_palakPaneer_avif__WEBPACK_IMPORTED_MODULE_4__\r\n    }\r\n];\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);\n\n//# sourceURL=webpack://restaurantpage/./src/menuItems.js?\n}");

/***/ },

/***/ "./src/assets/RestaurantBackground.png"
/*!*********************************************!*\
  !*** ./src/assets/RestaurantBackground.png ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0ba48ddd6c4b759558d4.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/RestaurantBackground.png?\n}");

/***/ },

/***/ "./src/assets/butterChicken.avif"
/*!***************************************!*\
  !*** ./src/assets/butterChicken.avif ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1b0f5c5353489374fbe5.avif\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/butterChicken.avif?\n}");

/***/ },

/***/ "./src/assets/chickenBiryani.avif"
/*!****************************************!*\
  !*** ./src/assets/chickenBiryani.avif ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1d9462e5fb641db8aacf.avif\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/chickenBiryani.avif?\n}");

/***/ },

/***/ "./src/assets/masalaDosa.avif"
/*!************************************!*\
  !*** ./src/assets/masalaDosa.avif ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c1667c5a6ce7311f26c2.avif\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/masalaDosa.avif?\n}");

/***/ },

/***/ "./src/assets/palakPaneer.avif"
/*!*************************************!*\
  !*** ./src/assets/palakPaneer.avif ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8e132ade2836f475a6a1.avif\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/palakPaneer.avif?\n}");

/***/ },

/***/ "./src/assets/paneerTikka.avif"
/*!*************************************!*\
  !*** ./src/assets/paneerTikka.avif ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8dc8660de9e6252b5f13.avif\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/paneerTikka.avif?\n}");

/***/ },

/***/ "./src/assets/restaurantLogo.svg"
/*!***************************************!*\
  !*** ./src/assets/restaurantLogo.svg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"cbaf1028a2c3178e50d0.svg\";\n\n//# sourceURL=webpack://restaurantpage/./src/assets/restaurantLogo.svg?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;