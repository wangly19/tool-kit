/**
 * ====================================================================
 * @wangly 基本常用的工具类
 * ====================================================================
 */
import {
  MoneyGapType,
  OnceType,
  numberOmitType,
  fileToBase64Type,
  Fors
} from '../type'

/**
 * 金额格式花，千分位逗号
 * @param money 金额文本
 */
export const moneyGap: MoneyGapType = (money: string | number) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * 函数单词执行
 * @param fn 执行函数
 */
export const once: OnceType = (fn: Function) => {
  let isExecute: boolean = false;
  return function (this) {
    if (!isExecute) {
      isExecute = true;
      fn.apply(this, arguments);
    }
  }
}

/**
 * 数值省略方法
 * @param val 数值
 */
export const numberOmit: numberOmitType = (val: number): string | number => {
  return val > 99 ? `${val}+` : val;
}

/**
 * 文件转base64
 * @param file 文件流
 */
export const fileToBase64: fileToBase64Type = (file: File): string => {
  let fileReader: FileReader = new FileReader();
  fileReader.readAsDataURL(file);
  fileReader.onload = (e: ProgressEvent<FileReader>) => {
    return e.target?.result as string;
  }
  return '';
}

/**
 * 对象和数组循环
 * @param res 传入结果
 * @param callback 处理函数
 */
export const fors: Fors = <T>(res: Array<T> | Object, callback): void => {
  // 对数据进行不同的处理, Object & Array
  if (Array.isArray(res)) {
    for (let i = 0, len = res.length; i < len; i ++) {
      const isSkip: boolean = callback(res[i], i) || false;
      if (isSkip) break;
    }
  }
  if (res instanceof Object && !Array.isArray(res)) {
    for (const key in res) {
      const isSkip: boolean = callback(res[key], key);
      if (isSkip) break;
    }
  }
}

export const toJSON = (res: Object) => {
  
}