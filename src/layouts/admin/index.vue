<template>
	<div></div>
</template>

<script lang="ts">
	import { defineComponent, reactive, toRefs } from 'vue'

	export default defineComponent({
		components: {},
		props: {},
		setup() {
			const state = reactive({})

			return { ...toRefs(state) }
		},
	})
</script>

<style lang="less" scoped></style>
