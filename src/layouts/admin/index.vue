<template>
	<Navbar />

	<main class="h-full p-8 flex gap-10">
		<Sidebar />
		<router-view />
	</main>
</template>

<script lang="ts">
	import Navbar from './components/Navbar.vue'
	import Sidebar from './components/Sidebar.vue'
	import { defineComponent, reactive, toRefs } from 'vue'

	export default defineComponent({
		components: { Navbar, Sidebar },
		props: {},
		setup() {
			const state = reactive({})

			return { ...toRefs(state) }
		},
	})
</script>
