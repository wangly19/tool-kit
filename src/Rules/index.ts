/**
 * 字符串是否存在字母，保证纯数字
 * @param value 传入需要被规则字符串
 */
export const isNoLetter = (value: string) => {
  const RegText: RegExp = /^[^A-Za-z]*$/g;
  return RegText.test(value);
}

/**
 * 当前值是否是邮箱的规则
 * @param val 传入需要被验证的字符串
 */
export const isEmail = (val: string) => {
  const RegText: RegExp = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  return RegText.test(val)
}

/**
 * 当前值是否是11位数的手机号码
 * @param val 传入需要被验证的字符串
 */
export const isPhone = (val: string) => {
  const RegText: RegExp = /^1[0-9]{10}$/;
  return RegText.test(val);
}

