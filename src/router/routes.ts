import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/layouts/default/index.vue'),
		children: [
			{
				path: '/',
				name: 'home',
				component: () => import('@/views/dashboard/index.vue'),
			},
		],
	},
]

export default routes
