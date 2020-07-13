import { isNoLetter } from '../src/Rules';

test('判断是否存在字符串', () => {
  expect(isNoLetter('124fagx')).toBe(false)
})