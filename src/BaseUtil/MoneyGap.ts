const MoneyGap = (money: string | number) => {
  return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default MoneyGap