/**
 * =========================================================
 * 规则校验模块
 * =========================================================
 */
import {
  inspectIdenCardType,
  inspectPhoneType,
  inspectUsernameType,
  inspectURLType
} from '../type';

/**
 * 验证身份证号码检查
 * @param val 身份证号码
 */
export const inspectIdenCard: inspectIdenCardType = (val: string): boolean => {
  const regText: RegExp =  /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return regText.test(val);
}

/**
 * 验证手机号码检查
 * @param val 手机号码
 */
export const inspectPhone: inspectPhoneType = (val: string): boolean => {
  const regText: RegExp =  /^1[3456789]\d{9}$/;
  return regText.test(val)
}

/**
 * 验证用户名检查
 * @param val 用户名
 */
export const inspectUsername: inspectUsernameType = (val: string): boolean => {
  const regText: RegExp =  /^[a-zA-Z0-9_-]{4,10}$/;
  return regText.test(val)
}

export const inspectURL: inspectURLType = (val: string): boolean => {
  const regText: RegExp = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return regText.test(val);
}