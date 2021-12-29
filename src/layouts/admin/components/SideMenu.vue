<template>
	<Menu v-model:selectedKeys="selectedKeys" :openKeys="openKeys" mode="inline" @click="onClick" class="mx-4 w-auto border-none">
		<MenuItemGroup v-for="(group, index) in menuGroups" :key="index" v-bind="group" />
	</Menu>
</template>

<script lang="ts">
	import { MenuItemGroup } from './Menu'
	import { Menu } from 'ant-design-vue'
	import { getAllParentPath } from '@/utils/helper/tree'
	import { defineComponent, PropType, reactive, toRefs } from 'vue'
	import { MenuGroup } from '@/router/types'
	import { useRouter, useRoute } from 'vue-router'

	interface MenuItemInfo {
		key: string
	}

	interface State {
		openKeys: string[]
		selectedKeys: string[]
	}

	export default defineComponent({
		name: 'SideMenu',
		components: { MenuItemGroup, Menu },
		props: {
			menuGroups: {
				type: Array as PropType<MenuGroup[]>,
				default: () => [],
			},
		},
		setup(props) {
			const route = useRoute()
			const router = useRouter()

			const state: State = reactive({
				openKeys: [],
				selectedKeys: [],
			})

			const onClick = ({ key }: MenuItemInfo) => router.push({ name: key })

			state.selectedKeys = [route.name?.toString() || '']
			state.openKeys = getAllParentPath(props.menuGroups, route.name?.toString() || '')

			return { ...toRefs(state), onClick }
		},
	})
</script>

<style lang="less" scoped></style>
