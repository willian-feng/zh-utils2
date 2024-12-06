import { initial } from './cfg/initial';
import { polyphone } from './cfg/polyphone';

const checkCh = (s: string) => {
  const uni = s.charCodeAt(0);
  if (uni > 40869 || uni < 19968) return s; // 不在汉字编码范围
  return polyphone.get(String(uni)) || initial.charAt(uni - 19968); // 多音字||非多音字
}

const mkRslt = (arr: string[]) => {
  let arrRslt: string[] = [''];
  for (let l: number = 0, len: number = arr.length; l < len; l++) {
    const str: string = arr[l];
    const strLen: number = str.length;
    if (strLen === 1) {
      for (let k: number = 0; k < arrRslt.length; k++) {
        arrRslt[k] += str;
      }
    } else {
      let tmpArr: string[] = arrRslt.slice(0);
      arrRslt = [];
      for (let i: number = 0; i < strLen; i++) {
        const tmp: string[] = tmpArr.slice(0);
        for (let j: number = 0; j < tmp.length; j++) {
          tmp[j] += str[i];
        }
        arrRslt = [...arrRslt, ...tmp];
      }
    }
  }
  return arrRslt;
}

const makePy = (str: string) => {
  const arrResult: string[] = [];
  for (let i: number = 0, len: number = str.length; i < len; i++) {
    arrResult.push(checkCh(str[i]));
  }
  return mkRslt(arrResult);
}

const getFirstChar = (str: string) => {
  const s: string = str.trim();
  return !s ? [] : makePy(s);
}

export default getFirstChar;
