<template>
	<main class="w-full">
		<div class="grid grid-cols-12 gap-10">
			<Welcome class="col-span-4" />
			<AnalyticsCard class="col-span-2" v-for="i in 4" :key="i" />
			<Analytics class="col-span-6" />
			<QuickOperate class="col-span-4" />
		</div>
	</main>
</template>

<script lang="ts">
	import Welcome from './components/Welcome'
	import Analytics from './components/Analytics'
	import QuickOperate from './components/QuickOperate'
	import AnalyticsCard from './components/AnalyticsCard'
	import { defineComponent, reactive, toRefs } from 'vue'

	export default defineComponent({
		components: { AnalyticsCard, QuickOperate, Analytics, Welcome },
		props: {},
		setup() {
			const state = reactive({})

			return { ...toRefs(state) }
		},
	})
</script>

<style lang="less" scoped></style>
