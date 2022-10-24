/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  width: 400px;\n  margin: 0 auto;\n}\n@media (max-width: 420px) {\n  .main {\n    padding: 20px;\n  }\n}\n\n.button_container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n}\n\n.button {\n  background-color: rgb(14, 192, 168);\n  font-size: 18px;\n  color: white;\n  border: 0;\n  padding: 10px;\n  box-shadow: 1px 1px 1px black;\n}\n\n.button:hover {\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.active {\n  background-color: rgb(88, 88, 92);\n}\n\n.action_container {\n  padding: 10px 0;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  gap: 30px;\n}\n\ncanvas {\n  border: 1px solid black;\n  background-color: rgb(180, 179, 179);\n}\n\n.size_container {\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  padding: 10px 0 0 0;\n}\n\n.frame_size,\n.sizes {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.field_area {\n  font-size: 32px;\n  height: 400px;\n  padding: 0px;\n  position: relative;\n  border: 2px solid black;\n}\n\n.fieldpiece {\n  transition: 1s;\n  border: 2px solid black;\n  height: 96px;\n  line-height: 96px;\n  position: absolute;\n  text-align: center;\n  vertical-align: middle;\n  width: 96px;\n}\n\n.win {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: center;\n  align-items: center;\n  font-size: 26px;\n  margin-top: 20px;\n}\n\n.results {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.results div {\n  padding: 10px 15px;\n}\n@media (max-width: 720px) {\n  .results {\n    top: 600px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,YAAA;EACA,cAAA;AACJ;AACI;EAPJ;IAQQ,aAAA;EAEN;AACF;;AACA;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,8BAAA;AAEJ;;AACA;EACI,mCAAA;EACA,eAAA;EACA,YAAA;EACA,SAAA;EACA,aAAA;EACA,6BAAA;AAEJ;;AACA;EACI,eAAA;EACA,gBAAA;AAEJ;;AACA;EACI,iCAAA;AAEJ;;AACA;EACI,eAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,SAAA;AAEJ;;AACA;EACI,uBAAA;EACA,oCAAA;AAEJ;;AACA;EACI,aAAA;EACA,wBAAA;EACA,uBAAA;EACA,mBAAA;AAEJ;;AACA;;EAEI,aAAA;EACA,uBAAA;EACA,mBAAA;AAEJ;;AACA;EACI,eAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,uBAAA;AAEJ;;AACA;EACI,cAAA;EACA,uBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,sBAAA;EACA,WAAA;AAEJ;;AACA;EACI,aAAA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;AAEJ;;AACA;EACI,kBAAA;EACA,MAAA;EACA,OAAA;AAEJ;AAAI;EACI,kBAAA;AAER;AACI;EATJ;IAUQ,UAAA;EAEN;AACF","sourcesContent":[".main {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    width: 400px;\r\n    margin: 0 auto;\r\n\r\n    @media (max-width: 420px) {\r\n        padding: 20px;\r\n    }\r\n}\r\n\r\n.button_container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.button {\r\n    background-color: rgb(14, 192, 168);\r\n    font-size: 18px;\r\n    color: white;\r\n    border: 0;\r\n    padding: 10px;\r\n    box-shadow: 1px 1px 1px black;\r\n}\r\n\r\n.button:hover {\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n}\r\n\r\n.active {\r\n    background-color: rgb(88, 88, 92);\r\n}\r\n\r\n.action_container {\r\n    padding: 10px 0;\r\n    display: flex;\r\n    flex-flow: row nowrap;\r\n    justify-content: center;\r\n    gap: 30px;\r\n}\r\n\r\ncanvas {\r\n    border: 1px solid black;\r\n    background-color: rgb(180, 179, 179);\r\n}\r\n\r\n.size_container {\r\n    display: flex;\r\n    flex-flow: column nowrap;\r\n    justify-content: center;\r\n    padding: 10px 0 0 0;\r\n}\r\n\r\n.frame_size,\r\n.sizes {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.field_area {\r\n    font-size: 32px;\r\n    height: 400px;\r\n    padding: 0px;\r\n    position: relative;\r\n    border: 2px solid black;\r\n}\r\n\r\n.fieldpiece {\r\n    transition: 1s;\r\n    border: 2px solid black;\r\n    height: 96px;\r\n    line-height: 96px;\r\n    position: absolute;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    width: 96px;\r\n}\r\n\r\n.win {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 26px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.results {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n\r\n    & div {\r\n        padding: 10px 15px;\r\n    }\r\n\r\n    @media (max-width: 720px) {\r\n        top: 600px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

console.log("\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C. \u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E \u043D\u0430 95 \u0431\u0430\u043B\u043B\u043E\u0432. \u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0432\u0441\u0435, \u043A\u0440\u043E\u043C\u0435 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u043F\u0443\u043D\u043A\u0442\u043E\u0432:\n- implemented selection of different sizes for frame: +10\n- tiles can be dragged with use of mouse: +15\n\u0414\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u0434\u043E\u0431\u0430\u0432\u0438\u043B \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043D\u0430\u0447\u0430\u0442\u044C \u0434\u0432\u0438\u0433\u0430\u0442\u044C \u043A\u0443\u0431\u044B \u0431\u0435\u0437 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u043D\u0430 \u0441\u0442\u0430\u0440\u0442(\u0412 \u0442\u0430\u043A\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u0432\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0441\u0442\u043E \u0441\u0442\u043E\u0438\u0442 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435), \u0447\u0442\u043E\u0431\u044B \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0432 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u0438 \u043D\u0430\u0436\u0430\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 Save \u0438 \u043F\u043E\u0442\u043E\u043C \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C \u043D\u0430 Results.\n\u042F \u0441\u0430\u043C \u043B\u0438\u0447\u043D\u043E 2 \u0440\u0430\u0437\u0430 \u0441 \u043D\u0443\u043B\u044F \u0441\u043E\u0431\u0440\u0430\u043B, \u043F\u043E\u044D\u0442\u043E\u043C\u0443 \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0448\u0430\u0444\u043B\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0445\u043E\u0440\u043E\u0448\u043E. \u0415\u0441\u043B\u0438 \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043C\u043D\u0435 \u0432 \u0434\u0441. \u0421\u043F\u0430\u0441\u0438\u0431\u043E! \n");
var divMain = document.createElement("div"),
  buttonContainer = document.createElement("div"),
  actionContainer = document.createElement("div"),
  fieldContainer = document.createElement("div"),
  sizeContainer = document.createElement("div");
divMain.className = "main";
buttonContainer.className = "button_container";
buttonContainer.innerHTML = "   \n    <button class=\"button start_button\">Shuffle and start</button>\n    <button class=\"button stop_button\">Stop</button>\n    <button class=\"button save_button\">Save</button>\n    <button class=\"button res_button\">Results</button>\n";
actionContainer.className = 'action_container';
actionContainer.innerHTML = "\n    <div class=\"moves\">Moves: 0 </div>\n    <div class=\"time\">Time: 00:00 </div>\n";
fieldContainer.className = 'field_container';
fieldContainer.innerHTML = "\n    <div class=\"field_area\">\n        <div>1</div>  <div>2</div>  <div>3</div>  <div>4</div>\n        <div>5</div>  <div>6</div>  <div>7</div>  <div>8</div>\n        <div>9</div>  <div>10</div> <div>11</div> <div>12</div>\n        <div>13</div> <div>14</div> <div>15</div>\n    </div>\n";
sizeContainer.className = 'size_container';
sizeContainer.innerHTML = "\n    <div class=\"frame_size\">4x4</div>\n    <div class=\"sizes\">Other sizes 3x3 4x4 5x5 6x6 7x7 8x8</div>\n";
divMain.appendChild(buttonContainer);
divMain.appendChild(actionContainer);
divMain.appendChild(fieldContainer);
divMain.appendChild(sizeContainer);
document.body.appendChild(divMain);
var winContainer = document.createElement("div");
winContainer.className = "win";
var buttons = document.querySelectorAll('.button'),
  field = document.querySelector('.field_area');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    buttons.forEach(function (item) {
      item.classList.remove('active');
    });
    button.classList.add('active');
  });
});
var move_counter = 0;
var seconds_counter = 0;
var fieldPiece = field.getElementsByTagName('div');
for (var i = 0; i < fieldPiece.length; i++) {
  fieldPiece[i].className = 'fieldpiece';
  fieldPiece[i].style.left = i % 4 * 100 + 'px';
  fieldPiece[i].style.top = parseInt(i / 4) * 100 + 'px';
  fieldPiece[i].style.backgroundPosition = '-' + fieldPiece[i].style.left + ' ' + '-' + fieldPiece[i].style.top;
  for (var _i = 0; _i < fieldPiece.length; _i++) {
    fieldPiece[_i].onclick = function () {
      if (checkMove(parseInt(this.innerHTML))) {
        swap(this.innerHTML - 1);
        move_counter++;
        move_counter = setMove(move_counter);
      }
      if (finish()) {
        win(move_counter, seconds_counter);
      }
      return;
    };
  }
}
;
var time = document.querySelector('.time'),
  start_button = document.querySelector('.start_button'),
  stop_button = document.querySelector('.stop_button'),
  save_button = document.querySelector('.save_button'),
  res_button = document.querySelector('.res_button');
var spaceY = '300px',
  spaceX = '300px';
var timerInterval;
var isPaused = false;
function setTime(seconds) {
  timerInterval = setInterval(function () {
    if (!isPaused) {
      seconds_counter++;
      seconds = seconds_counter;
      var m = Math.floor(seconds / 60);
      if (m < 10) {
        m = "0" + m;
      }
      var s = seconds % 60;
      if (s < 10) {
        s = "0" + s;
      }
      time.innerHTML = "Time: ".concat(m, ":").concat(s);
    }
  }, 1000);
}
var audio = new Audio('./audio.mp3');
function play() {
  audio.currentTime = 0;
  audio.play();
  audio.volume = 0.02;
}
start_button.addEventListener('click', function () {
  time.innerHTML = "Time: 00:00";
  clearInterval(timerInterval);
  for (var _i2 = 0; _i2 < fieldPiece.length; _i2++) {
    fieldPiece[_i2].onclick = function () {
      if (checkMove(parseInt(this.innerHTML))) {
        swap(this.innerHTML - 1);
        move_counter++;
        move_counter = setMove(move_counter);
      }
      if (finish()) {
        win(move_counter, seconds_counter);
      }
      return;
    };
  }
  move_counter = 0;
  setMove(move_counter);
  seconds_counter = 0;
  setTime(seconds_counter);
  if (document.querySelector('.win')) {
    document.querySelector('.win').remove();
  }
  if (stop_button.textContent == 'Resume') {
    stop_button.textContent = 'Stop';
    isPaused = false;
  }
  shuffle();
  play();
});
stop_button.addEventListener('click', function () {
  if (stop_button.textContent == 'Stop') {
    stop_button.textContent = 'Resume';
    isPaused = true;
    for (var _i3 = 0; _i3 < fieldPiece.length; _i3++) {
      fieldPiece[_i3].onclick = function () {
        return false;
      };
    }
    audio.pause();
  } else {
    stop_button.textContent = 'Stop';
    isPaused = false;
    audio.play();
    for (var _i4 = 0; _i4 < fieldPiece.length; _i4++) {
      fieldPiece[_i4].onclick = function () {
        if (checkMove(parseInt(this.innerHTML))) {
          swap(this.innerHTML - 1);
          move_counter++;
          move_counter = setMove(move_counter);
        }
        if (finish()) {
          win(move_counter, seconds_counter);
        }
        return;
      };
    }
  }
});
function shuffle() {
  for (var _i5 = 0; _i5 < fieldPiece.length; _i5++) {
    fieldPiece[_i5].onclick = function () {
      if (checkMove(parseInt(this.innerHTML))) {
        swap(this.innerHTML - 1);
        move_counter++;
        move_counter = setMove(move_counter);
      }
      if (finish()) {
        win(move_counter, seconds_counter);
      }
      return;
    };
  }
  for (var _i6 = 0; _i6 < 300; _i6++) {
    var rand = parseInt(Math.random() * 100) % 4;
    if (rand == 0) {
      var temp = up(spaceX, spaceY);
      if (temp != -1) {
        swap(temp);
      }
    }
    if (rand == 1) {
      var _temp = down(spaceX, spaceY);
      if (_temp != -1) {
        swap(_temp);
      }
    }
    if (rand == 2) {
      var _temp2 = left(spaceX, spaceY);
      if (_temp2 != -1) {
        swap(_temp2);
      }
    }
    if (rand == 3) {
      var _temp3 = right(spaceX, spaceY);
      if (_temp3 != -1) {
        swap(_temp3);
      }
    }
  }
}
function setMove(count) {
  document.querySelector('.moves').textContent = "Moves: ".concat(count);
  return count;
}
function left(x, y) {
  var cordX = parseInt(x);
  var cordY = parseInt(y);
  if (cordX > 0) {
    for (var i = 0; i < fieldPiece.length; i++) {
      if (parseInt(fieldPiece[i].style.left) + 100 == cordX && parseInt(fieldPiece[i].style.top) == cordY) {
        return i;
      }
    }
  } else {
    return -1;
  }
}
function right(x, y) {
  var cordX = parseInt(x);
  var cordY = parseInt(y);
  if (cordX < 300) {
    for (var i = 0; i < fieldPiece.length; i++) {
      if (parseInt(fieldPiece[i].style.left) - 100 == cordX && parseInt(fieldPiece[i].style.top) == cordY) {
        return i;
      }
    }
  } else {
    return -1;
  }
}
function up(x, y) {
  var cordX = parseInt(x);
  var cordY = parseInt(y);
  if (cordY > 0) {
    for (var _i7 = 0; _i7 < fieldPiece.length; _i7++) {
      if (parseInt(fieldPiece[_i7].style.top) + 100 == cordY && parseInt(fieldPiece[_i7].style.left) == cordX) {
        return _i7;
      }
    }
  } else {
    return -1;
  }
}
function down(x, y) {
  var cordX = parseInt(x);
  var cordY = parseInt(y);
  if (cordY < 300) {
    for (var _i8 = 0; _i8 < fieldPiece.length; _i8++) {
      if (parseInt(fieldPiece[_i8].style.top) - 100 == cordY && parseInt(fieldPiece[_i8].style.left) == cordX) {
        return _i8;
      }
    }
  } else {
    return -1;
  }
}
function swap(position) {
  var temp = fieldPiece[position].style.top;
  fieldPiece[position].style.top = spaceY;
  spaceY = temp;
  temp = fieldPiece[position].style.left;
  fieldPiece[position].style.left = spaceX;
  spaceX = temp;
}
function checkMove(position) {
  if (left(spaceX, spaceY) == position - 1) {
    return true;
  }
  if (down(spaceX, spaceY) == position - 1) {
    return true;
  }
  if (up(spaceX, spaceY) == position - 1) {
    return true;
  }
  if (right(spaceX, spaceY) == position - 1) {
    return true;
  }
}
function win(move_counter, seconds_counter) {
  for (var _i9 = 0; _i9 < fieldPiece.length; _i9++) {
    fieldPiece[_i9].onclick = function () {
      return false;
    };
  }
  clearInterval(timerInterval);
  var m = Math.floor(seconds_counter / 60);
  if (m < 10) {
    m = "0" + m;
  }
  var s = seconds_counter % 60;
  if (s < 10) {
    s = "0" + s;
  }
  document.querySelector('.time').textContent = "Time: ".concat(m, ":").concat(s);
  winContainer.innerHTML = "   \n    Hooray! You solved the puzzle in ".concat(m, ":").concat(s, " and ").concat(move_counter, " moves!\n    ");
  document.body.appendChild(winContainer);
  save_button.addEventListener('click', function () {
    return saveData(move_counter, seconds_counter);
  });
}
var resDiv = document.createElement("div");
resDiv.className = 'results';
res_button.addEventListener('click', results);
function results() {
  resDiv.innerHTML = '<div>Results</div>';
  var results = JSON.parse(window.localStorage.getItem('result'));
  var i = 0;
  for (var key in results) {
    if (i > 9) {
      break;
    }
    var m = Math.floor(results[key].time / 60);
    if (m < 10) {
      m = "0" + m;
    }
    var s = results[key].time % 60;
    if (s < 10) {
      s = "0" + s;
    }
    resDiv.innerHTML += "\n            <div>\n                ".concat(i + 1, ". Time: ").concat(m, ":").concat(s, ", Moves: ").concat(results[key].moves, " \n            </div>\n        ");
    i++;
  }
  if (document.body.querySelector('.results')) {
    document.body.querySelector('.results').remove();
  } else {
    document.body.appendChild(resDiv);
  }
}
function saveData(moves, time) {
  var results = JSON.parse(window.localStorage.getItem('result'));
  if (results === null) {
    results = [];
  }
  results.push({
    moves: moves,
    time: time
  });
  window.localStorage.setItem('result', JSON.stringify(results));
}
function finish() {
  var flag = true;
  for (var _i10 = 0; _i10 < fieldPiece.length; _i10++) {
    var top = parseInt(fieldPiece[_i10].style.top);
    var _left = parseInt(fieldPiece[_i10].style.left);
    if (_left != _i10 % 4 * 100 || top != parseInt(_i10 / 4) * 100) {
      flag = false;
      break;
    }
  }
  return flag;
}
})();

/******/ })()
;
//# sourceMappingURL=bundle9b06990e9e0e3504e59c.js.map