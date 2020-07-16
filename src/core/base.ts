/**
 * ====================================================================
 * @wangly 基本常用的工具类
 * ====================================================================
 */
import { MoneyGapType } from '../type'

/**
 * 金额格式花，千分位逗号
 * @param money 金额文本
 */
export const MoneyGap: MoneyGapType = (money: string | number) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
