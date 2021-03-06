"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _splitByBlocks = _interopRequireDefault(require("./splitByBlocks"));

var _detect = _interopRequireDefault(require("./list/detect"));

var _type = _interopRequireDefault(require("./items/type"));

var _images = _interopRequireDefault(require("./items/images"));

var _links = _interopRequireDefault(require("./items/links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(sText) {
  var aText = sText.split('\n'); // first, split text using blocks

  return (0, _splitByBlocks.default)(aText).map(function (oBlock) {
    return _objectSpread({}, oBlock, {
      items: (0, _detect.default)(oBlock.mdContent).reduce(function (aPrev, aCurrentList) {
        return [].concat(_toConsumableArray(aPrev), _toConsumableArray(aCurrentList.filter(function (sLine) {
          return sLine.trim() !== '';
        }).map(_type.default).map(_images.default).map(_links.default).map(function (oItem) {
          return _objectSpread({}, oItem, {
            content: oItem.content.split('\n').filter(function (sLine) {
              return sLine.trim() !== '';
            }).join('\n')
          });
        })));
      }, []),
      // cleanup
      mdContent: undefined
    });
  });
};

exports.default = _default;