export type MoneyGapType =  (money: string | number) => string
export type OnceType = (fn: Function) => void
export type numberOmitType = (val: number) => string | number
export type fileToBase64Type = (file: File) => string

// rules
export type inspectIdenCardType = (val: string) => boolean
export type inspectPhoneType = (val: string) => boolean
export type inspectUsernameType = (val: string) => boolean
export type inspectURLType = (val: string) => boolean
