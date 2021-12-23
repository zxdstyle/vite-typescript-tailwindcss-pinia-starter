<template>
	<aside class="bg-white h-full w-72 pt-10 shadow rounded-md text-center">
		<div>
			<Avatar :size="64" />
			<h5>Liey</h5>
		</div>

		<SideMenu :menu-groups="menu" />
	</aside>
</template>

<script lang="ts">
	import SideMenu from './SideMenu.vue'
	import { Avatar } from 'ant-design-vue'
	import { computed, defineComponent } from 'vue'
	import { useMenu } from '@/store/modules/menu'

	export default defineComponent({
		name: 'Sidebar',
		components: { Avatar, SideMenu },
		setup() {
			const store = useMenu()

			const menu = computed(() => store.getMenu)

			return { menu }
		},
	})
</script>

<style lang="less" scoped>
	aside {
		background: url('../../../assets/images/wave.png') no-repeat;
	}
</style>
