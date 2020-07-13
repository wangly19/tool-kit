/**
 * 字符串是否存在字母，保证纯数字
 * @param value 传入需要被规则字符串
 */
export const isNoLetter = (value: string) => {
  const RegText: RegExp = /^[^A-Za-z]*$/g;
  return RegText.test(value);
}
