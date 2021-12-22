<template>
	<Navbar />
	<router-view />
</template>

<script lang="ts">
	import Navbar from './components/Navbar.vue'
	import { defineComponent, reactive, toRefs } from 'vue'

	export default defineComponent({
		components: { Navbar },
		props: {},
		setup() {
			const state = reactive({})

			return { ...toRefs(state) }
		},
	})
</script>

<style lang="less" scoped></style>
