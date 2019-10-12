import { initial } from './cfg/initial';
import { polyphone } from './cfg/polyphone';

function checkCh(s) {
  const uni = s.charCodeAt(0);
  if (uni > 40869 || uni < 19968) return s; // 不在汉字编码范围
  return polyphone[uni] || initial.charAt(uni - 19968); // 多音字||非多音字
}

function mkRslt(arr) {
  let arrRslt = [''];
  for (let l = 0, len = arr.length; l < len; l++) {
    const str = arr[l];
    const strLen = str.length;
    if (strLen === 1) {
      for (let k = 0; k < arrRslt.length; k++) {
        arrRslt[k] += str;
      }
    } else {
      let tmpArr = arrRslt.slice(0);
      arrRslt = [];
      for (let i = 0; i < strLen; i++) {
        const tmp = tmpArr.slice(0);
        for (let j = 0; j < tmp.length; j++) {
          tmp[j] += str.charAt(i);
        }
        arrRslt = [...arrRslt, ...tmp];
      }
    }
  }
  return arrRslt;
}

function makePy(str) {
  const arrResult = [];
  for (let i = 0, len = str.length; i < len; i++) {
    arrResult.push(checkCh(str.charAt(i)));
  }
  return mkRslt(arrResult);
}

export default function getFirstChar(str) {
  const s = str.trim();
  return !s ? [] : makePy(String(s));
}
