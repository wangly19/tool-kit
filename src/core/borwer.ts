export const launchFullscreen = () => {}

export const isAndroid = (): boolean => /Android/i.test(navigator.userAgent) || /Linux/i.test(navigator.appVersion);

export const isIOS = (): boolean => /ipad|iphone/i.test(navigator.userAgent);

export const isWxAPP = (): boolean => /MicroMessenger/i.test(navigator.userAgent);