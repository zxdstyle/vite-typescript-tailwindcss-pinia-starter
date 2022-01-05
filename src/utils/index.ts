import { isObject } from './is'
import { unref } from 'vue'
import type { App, Plugin } from 'vue'

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

export function getDynamicProps<T, U>(props: T): Partial<U> {
	const ret: Recordable = {}

	Object.keys(props).map((key) => {
		ret[key] = unref((props as Recordable)[key])
	})

	return ret as Partial<U>
}

export const withInstall = <T>(component: T, alias?: string) => {
	const comp = component as any
	comp.install = (app: App) => {
		app.component(comp.name || comp.displayName, component)
		if (alias) {
			app.config.globalProperties[alias] = component
		}
	}
	return component as T & Plugin
}
