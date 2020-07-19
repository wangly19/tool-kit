/**
 * ====================================================================
 * @wangly 基本常用的工具类
 * ====================================================================
 */
import { MoneyGapType, OnceType } from '../type'

/**
 * 金额格式花，千分位逗号
 * @param money 金额文本
 */
export const moneyGap: MoneyGapType = (money: string | number) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const once: OnceType = (fn: Function) => {
  let isExecute: boolean = false
  return function (this) {
    if (!isExecute) {
      isExecute = true
      fn.apply(this, arguments)
    }
  }
}