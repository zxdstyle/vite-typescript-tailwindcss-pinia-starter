import App from './App.vue'
import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'

// @ts-ignore
import NProgress from 'nprogress'

import './assets/less/style.less'

NProgress.configure({ showSpinner: false, trickleSpeed: 100 })

function bootstrap() {
	const app = createApp(App)

	setupRouter(app)

	setupStore(app)

	app.mount('#app')
}

bootstrap()
