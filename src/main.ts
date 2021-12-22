import App from './App.vue'
import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'

import './assets/less/style.less'

function bootstrap() {
	const app = createApp(App)

	setupRouter(app)

	setupStore(app)

	app.mount('#app')
}

bootstrap()
