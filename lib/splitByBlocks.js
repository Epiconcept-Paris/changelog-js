"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(aText) {
  var aSplits = [];
  var bInsideBlock = false;
  aText.forEach(function (sLine) {
    if (sLine.trim() === '---') {
      bInsideBlock = !bInsideBlock;

      if (bInsideBlock) {
        aSplits.push({
          mdContent: []
        });
      }
    } else if (bInsideBlock) {
      var aTextLine = sLine.split(':');

      if (aTextLine.length === 2) {
        if (aTextLine[0].trim() === 'mdContent') {
          throw new Error('"mdContent" is a reserved attribute of the block. Don\'t use it please.');
        }

        aSplits[aSplits.length - 1][aTextLine[0].trim()] = aTextLine[1].trim();
      }
    } else if (aSplits.length !== 0) {
      aSplits[aSplits.length - 1].mdContent.push(sLine);
    }
  });
  return aSplits;
};

exports.default = _default;