<template>
	<main class="container"></main>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs } from 'vue'

	export default defineComponent({
		props: {},
		setup() {
			const state = reactive({})

			return { ...toRefs(state) }
		},
	})
</script>

<style lang="less" scoped></style>
