import type { App } from 'vue'
import routes from './routes'
// @ts-ignore
import NProgress from 'nprogress'
import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.beforeEach(() => {
	NProgress.start()
})

router.afterEach(() => {
	NProgress.done()
})

export function setupRouter(app: App<Element>) {
	app.use(router)
}
