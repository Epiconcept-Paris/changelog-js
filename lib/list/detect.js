"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(aText) {
  var aLists = [];
  var bInsideList = false;
  aText.forEach(function (sLine) {
    if (sLine.trim().indexOf('- ') === 0) {
      if (!bInsideList) {
        aLists.push([]);
        bInsideList = true;
      }
    } else {
      bInsideList = false;
    }

    if (bInsideList) {
      aLists[aLists.length - 1].push(sLine.substring(1).trim());
    } else if (aLists.length !== 0) {
      aLists[aLists.length - 1][aLists[aLists.length - 1].length - 1] += "\n".concat(sLine.trim());
    }
  });
  return aLists;
};

exports.default = _default;