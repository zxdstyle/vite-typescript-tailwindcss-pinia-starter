import { MenuGroup } from '@/router/types'

const system: MenuGroup = {
	name: 'auth',
	children: [
		{
			name: '系统管理',
			path: '/admin',
			children: [
				{ name: '管理员', path: '/admin' },
				{ name: '角色', path: '/role' },
				{ name: '权限', path: '/permission' },
				{ name: '菜单', path: '/menu' },
			],
		},
	],
}

export default system
