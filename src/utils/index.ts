import { isObject } from './is'

export function hexToRgba(hex: string, opacity: number) {
	if (hex && hex.length > 0) {
		return 'rgba(' + parseInt('0x' + hex.slice(1, 3)) + ',' + parseInt('0x' + hex.slice(3, 5)) + ',' + parseInt('0x' + hex.slice(5, 7)) + ',' + opacity + ')'
	}
	return ''
}

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
	let key: string
	for (key in target) {
		src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
	}
	return src
}
