"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var oRegexImage = /!\[(.*?)\]\(.*?\)/;

var _default = function _default(oItem) {
  var content = oItem.content;
  var aImages = [];
  var aResult = oRegexImage.exec(content.trim());

  while (Array.isArray(aResult) && aResult.length !== 0) {
    content = content.replace(aResult[0], '').trim();
    aImages.push({
      url: aResult[0].substring(aResult[0].indexOf('](') + 2, aResult[0].length - 1),
      label: aResult[0].substring(2, aResult[0].indexOf(']('))
    });
    aResult = oRegexImage.exec(content.trim());
  }

  if (aImages.length === 0) {
    return oItem;
  }

  return _objectSpread({}, oItem, {
    content: content,
    images: aImages
  });
};

exports.default = _default;