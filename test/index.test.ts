import { isNoLetter, isEmail, isPhone } from '../src/Rules';
import  from '../dist';
const base = require('../dist')
test('判断是否存在字符', () => {
  expect(isNoLetter('124fagx')).toBe(false)
})

test('是否是邮箱', () => {
  expect(isEmail('1418202350@qq.com')).toBe(true)
})

test('是否手机号', () => {
  expect(isPhone('18607948581')).toBe(true)
})  
