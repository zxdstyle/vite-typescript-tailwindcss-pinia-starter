import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

const modules = import.meta.globEager('./modules/**/*.ts')
Object.keys(modules).forEach((key) => {
	const mod = modules[key].default || {}
	const modList = Array.isArray(mod) ? [...mod] : [mod]
	routes.push(...modList)
})

const index: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/layouts/admin/index.vue'),
		children: [
			...routes,
			{
				path: '/',
				name: 'home',
				component: () => import('@/views/dashboard/index.vue'),
			},
		],
	},
]

export default index
