<template>
	<nav class="h-18 w-full bg-white shadow">
		<div class="container h-full flex items-center justify-between">
			<div></div>
			<div>
				<Avatar :size="48" />
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
	import { Avatar } from 'ant-design-vue'
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'Navbar',
		components: { Avatar },
		setup() {},
	})
</script>

<style lang="less" scoped></style>
