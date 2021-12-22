import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'

function pathResolve(dir: string) {
	return resolve('./', '.', dir)
}

export default defineConfig({
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	plugins: [
		vue(),
		vueJsx(),
		styleImport({
			resolves: [AndDesignVueResolve()],
		}),
	],
	resolve: {
		alias: {
			'@': pathResolve('src'),
		},
	},
	server: {
		proxy: {},
	},
})
