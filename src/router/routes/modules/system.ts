import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/administrators',
		name: 'administrator',
		component: () => import('@/views/system/administrator/index.vue'),
	},
]

export default routes
