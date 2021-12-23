import { defineStore } from 'pinia'
import menu from '@/router/menu'

export const useMenu = defineStore({
	id: 'menu',
	state: () => ({
		menu: menu,
	}),
	getters: {
		getMenu: (state) => state.menu,
	},
	actions: {},
})
