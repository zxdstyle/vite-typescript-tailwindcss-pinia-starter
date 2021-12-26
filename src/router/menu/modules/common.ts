import { MenuGroup } from '@/router/types'

const common: MenuGroup = {
	name: 'dashboard',
	children: [{ name: '控制台', path: 'dashboard', icon: 'desktop' }],
}

export default common
