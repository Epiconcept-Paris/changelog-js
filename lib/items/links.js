"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var oRegexLink = /\[(.*?)\]\(.*?\)/;

var _default = function _default(oItem) {
  var content = oItem.content;
  var aLinks = [];
  var aResultLink = oRegexLink.exec(content.trim());

  while (Array.isArray(aResultLink) && aResultLink.length !== 0) {
    content = content.replace(aResultLink[0], '').trim();
    aLinks.push({
      url: aResultLink[0].substring(aResultLink[0].indexOf('](') + 2, aResultLink[0].length - 1),
      label: aResultLink[0].substring(1, aResultLink[0].indexOf(']('))
    });
    aResultLink = oRegexLink.exec(content.trim());
  }

  if (aLinks.length === 0) {
    return oItem;
  }

  return _objectSpread({}, oItem, {
    content: content,
    links: aLinks
  });
};

exports.default = _default;