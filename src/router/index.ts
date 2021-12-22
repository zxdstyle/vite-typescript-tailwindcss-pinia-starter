import type { App } from 'vue'
import routes from './routes'
import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

export function setupRouter(app: App<Element>) {
	app.use(router)
}
