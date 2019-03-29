"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var oRegexType = /^[*][\w]*[*]/;

var _default = function _default(sLine) {
  var aLabel = oRegexType.exec(sLine.trim());

  if (Array.isArray(aLabel) && aLabel.length !== 0) {
    return {
      type: aLabel[0].substring(1, aLabel[0].length - 1),
      content: sLine.replace(aLabel[0], '').trim()
    };
  }

  return {
    type: 'default',
    content: sLine
  };
};

exports.default = _default;