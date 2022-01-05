import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteSvgIcons from 'vite-plugin-svg-icons'
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'

function pathResolve(dir: string) {
	return resolve('./', '.', dir)
}

export default defineConfig({
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					hack: `true; @import (reference) "${resolve('src/assets/less/variable.less')}";`,
				},
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
		viteSvgIcons({
			// 指定需要缓存的图标文件夹
			iconDirs: [pathResolve('src/assets/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]',
		}),
	],
	resolve: {
		alias: {
			'@': pathResolve('src'),
			'#': pathResolve('types'),
		},
	},
	server: {
		port: 8080,
		proxy: {},
	},
})
