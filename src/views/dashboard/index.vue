<template>
	<main class="container">
		<div class="card grid grid-cols-5 gap-12">
			<div v-for="i in 20" :key="i">
				<div class="cover hover:cursor-pointer">
					<div class="relative">
						<img src="https://p2.music.126.net/hC0q2dGbOWHVfg4nkhIXPg==/109951165374881177.jpg?param=512y512" />
						<div class="shadow" style="background-image: url('https://p2.music.126.net/hC0q2dGbOWHVfg4nkhIXPg==/109951165374881177.jpg?param=512y512')"></div>
					</div>
				</div>
				<div class="text">
					<div class="title" style="font-size: 16px"><a href="/playlist/5277778542" class="">Bedtime Beats</a></div>
					<div class="info"><span>by Apple Music</span></div>
				</div>
			</div>
		</div>
	</main>
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
