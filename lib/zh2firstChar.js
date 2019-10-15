'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _initial = require('./cfg/initial');

var _polyphone = require('./cfg/polyphone');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var checkCh = function checkCh(s) {
  var uni = s.charCodeAt(0);
  if (uni > 40869 || uni < 19968) return s; // 不在汉字编码范围
  return _polyphone.polyphone[uni] || _initial.initial.charAt(uni - 19968); // 多音字||非多音字
};

var mkRslt = function mkRslt(arr) {
  var arrRslt = [''];
  for (var l = 0, len = arr.length; l < len; l++) {
    var str = arr[l];
    var strLen = str.length;
    if (strLen === 1) {
      for (var k = 0; k < arrRslt.length; k++) {
        arrRslt[k] += str;
      }
    } else {
      var tmpArr = arrRslt.slice(0);
      arrRslt = [];
      for (var i = 0; i < strLen; i++) {
        var tmp = tmpArr.slice(0);
        for (var j = 0; j < tmp.length; j++) {
          tmp[j] += str[i];
        }
        arrRslt = [].concat(_toConsumableArray(arrRslt), _toConsumableArray(tmp));
      }
    }
  }
  return arrRslt;
};

var makePy = function makePy(str) {
  var arrResult = [];
  for (var i = 0, len = str.length; i < len; i++) {
    arrResult.push(checkCh(str[i]));
  }
  return mkRslt(arrResult);
};

var getFirstChar = function getFirstChar(str) {
  var s = str.trim();
  return !s ? [] : makePy(String(s));
};

exports.default = getFirstChar;