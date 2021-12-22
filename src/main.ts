import App from './App.vue'
import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import { setupStore } from '@/store'
import { setupRouter } from '@/router'

import './assets/less/style.less'

function bootstrap() {
	const app = createApp(App)

	setupRouter(app)

	setupStore(app)

	app.mount('#app')
}

bootstrap()
