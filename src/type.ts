export type MoneyGapType =  (money: string | number) => string
export type OnceType = (fn: Function) => void

// rules
export type inspectIdenCardType = (val: string) => boolean
export type inspectPhoneType = (val: string) => boolean
export type inspectUsernameType = (val: string) => boolean
export type inspectURLType = (val: string) => boolean
