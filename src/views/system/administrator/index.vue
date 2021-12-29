<template>
	<div class="bg-white w-full shadow rounded p-4">
		<BasicTable @register="register" />
	</div>
</template>

<script lang="ts">
	import { BasicTable, useTable } from '@/components/table'
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'Index',
		components: { BasicTable },
		setup() {
			const [register] = useTable({
				title: '管理员',
			})

			return { register }
		},
	})
</script>

<style lang="less" scoped></style>
