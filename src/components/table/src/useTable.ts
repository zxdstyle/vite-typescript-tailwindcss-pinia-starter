import { unref, watch, ref } from 'vue'
import type { BasicTableProps, BasicTableInstance } from './typing'

export default function useTable(props: BasicTableProps) {
	const instance = ref<Nullable<BasicTableInstance>>(null)
	const loaded = ref<Nullable<boolean>>(false)

	const register = (val: BasicTableInstance) => {
		if (unref(loaded) && val === unref(instance)) {
			return
		}
		instance.value = val
		loaded.value = true
		getInstance()?.setProps(props)

		watch(
			() => props,
			() => {
				props && getInstance()?.setProps(props)
			},
			{
				immediate: true,
				deep: true,
			},
		)
	}

	const getInstance = () => {
		const i = unref(instance)
		if (!i) {
			throw new Error('useTable instance is undefined!')
		}
		return i
	}

	return [register]
}
