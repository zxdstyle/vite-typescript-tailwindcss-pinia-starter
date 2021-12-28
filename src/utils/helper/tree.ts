import { Menu } from '@/router/types'

export function getAllParentPath<T = Recordable>(treeData: T[], path: string) {
	const menuList = findPath(treeData, (n) => n.path === path) as Menu[]
	return (menuList || []).map((item) => item.path)
}

export function findPath<T = any>(tree: any, func: Fn, config: Partial<TreeHelperConfig> = {}): T | T[] | null {
	config = getConfig(config)
	const path: T[] = []
	const list = [...tree]
	const visitedSet = new Set()
	const { children } = config
	while (list.length) {
		const node = list[0]
		if (visitedSet.has(node)) {
			path.pop()
			list.shift()
		} else {
			visitedSet.add(node)
			node[children!] && list.unshift(...node[children!])
			path.push(node)
			if (func(node)) {
				return path
			}
		}
	}
	return null
}
interface TreeHelperConfig {
	id: string
	children: string
	pid: string
}
const DEFAULT_CONFIG: TreeHelperConfig = {
	id: 'id',
	children: 'children',
	pid: 'pid',
}

const getConfig = (config: Partial<TreeHelperConfig>) => Object.assign({}, DEFAULT_CONFIG, config)
