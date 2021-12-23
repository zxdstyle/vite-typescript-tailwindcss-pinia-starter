import { RouteRecordRaw } from 'vue-router'

const index: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/layouts/admin/index.vue'),
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('@/views/dashboard/index.vue'),
			},
			{
				path: '/settings',
				name: 'settings',
				component: () => import('@/views/setting/index.vue'),
			},
		],
	},
]

export default index
