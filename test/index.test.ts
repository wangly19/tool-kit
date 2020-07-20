/**
 * Test 测试函数大合集
 */

import {
  moneyGap
} from '../src/core/base';

describe('base库测试集合', () => {
  test('金额增加逗号分界', () => {
    expect(moneyGap('10000')).toBe('10,000');
  });
})

import {
  inspectIdenCard,
  inspectPhone,
  inspectUsername,
  inspectURL
} from '../src/core/rules';

describe('rules库测试集合', () => {
  test('检查是否只是身份证号码', () => {
    expect(inspectIdenCard('362532199800001111')).toBe(true);
    expect(inspectIdenCard('18607948581')).toBe(false);
  });

  test('检查是否是手机号码', () => {
    expect(inspectPhone('13807940000')).toBe(true);
    expect(inspectPhone('11000000000')).toBe(false);
  });

  test('检查是否是限制级用户名', () => {
    expect(inspectUsername('wangly19')).toBe(true);
    expect(inspectUsername('wan')).toBe(false);
    expect(inspectUsername('wan111111111')).toBe(false);
  });

  test('检查是否是网址', () => {
    expect(inspectURL('http://www.baidu.com')).toBe(true);
    expect(inspectURL('ftp://www.baidu.com')).toBe(true);
    expect(inspectURL('https://www.baidu.com')).toBe(true);
    expect(inspectURL('www')).toBe(false);
  });
})



