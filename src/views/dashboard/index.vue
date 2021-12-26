<template>
	<main class="w-full">
		<div class="grid grid-cols-12 gap-8">
			<AnalyticsCard class="col-span-2" v-for="i in 4" :key="i" />
		</div>
	</main>
</template>

<script lang="ts">
	import AnalyticsCard from './components/AnalyticsCard'
	import { defineComponent, reactive, toRefs } from 'vue'

	export default defineComponent({
		components: { AnalyticsCard },
		props: {},
		setup() {
			const state = reactive({})

			return { ...toRefs(state) }
		},
	})
</script>

<style lang="less" scoped></style>
