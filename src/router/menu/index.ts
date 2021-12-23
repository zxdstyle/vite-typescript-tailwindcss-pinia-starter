import type { MenuGroup } from '../types'

const modules = import.meta.globEager('./modules/**/*.ts')

const moduleList: MenuGroup[] = []

Object.keys(modules).forEach((key) => {
	const mod = modules[key].default || {}
	const modList = Array.isArray(mod) ? [...mod] : [mod]
	moduleList.push(...modList)
})

const menu: MenuGroup[] = [...moduleList]

export default menu
