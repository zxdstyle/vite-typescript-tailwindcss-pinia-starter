<template>
	<Menu mode="inline">
		<MenuItemGroup v-for="(group, index) in menuGroups" :key="index" v-bind="group" />
	</Menu>
</template>

<script lang="ts">
	import { MenuItemGroup } from './Menu'
	import { Menu } from 'ant-design-vue'
	import { defineComponent, PropType } from 'vue'
	import { MenuGroup } from '@/router/types'

	export default defineComponent({
		name: 'SideMenu',
		components: { MenuItemGroup, Menu },
		props: {
			menuGroups: {
				type: Array as PropType<MenuGroup[]>,
				default: () => [],
			},
		},
		setup() {},
	})
</script>

<style lang="less" scoped></style>
