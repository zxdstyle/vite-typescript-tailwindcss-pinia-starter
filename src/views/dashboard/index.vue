<template>
	<main class="container"> </main>
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

<style lang="less" scoped>
	.cover {
		position: relative;
		transition: transform 0.3s;

		img {
			border-radius: 0.75em;
			width: 100%;
			user-select: none;
			aspect-ratio: 1 / 1;
			border: 1px solid rgba(0, 0, 0, 0.04);
		}

		.shadow {
			position: absolute;
			top: 0;
			height: 100%;
			width: 100%;
			opacity: 0;
			z-index: -1;

			background-size: cover;
			background-repeat: no-repeat;
		}

		&:hover {
			transform: scale(1.01);
			.shadow {
				top: 12px;
				opacity: 0.6;
				filter: blur(16px) opacity(0.6);
				transform: scale(0.92, 0.96);
				border-radius: 0.75em;
				aspect-ratio: 1 / 1;
				transition: all 0.3s ease-in-out;
			}
		}
	}
</style>
