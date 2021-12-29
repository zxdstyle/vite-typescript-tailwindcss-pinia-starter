<template>
	<button @click="toggle" class="flex items-center justify-center relative bg-primary w-10 h-10 cursor-pointer search-btn active:scale-125" :class="active ? 'active' : ''">
		<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill="none">
			<g id="svg_1" class="search-icon" stroke="null">
				<rect x="1.7573" y="0.45475" id="svg_2" fill-opacity="0.01" fill="white" height="13.98707" width="13.21692" stroke="null" />
				<path
					id="svg_3"
					stroke-width="3"
					fill="none"
					d="m14.08597,23.05481c5.51197,0 9.98036,-4.52668 9.98036,-10.11055c0,-5.58388 -4.46839,-10.11055 -9.98036,-10.11055c-5.51197,0 -9.98036,4.52668 -9.98036,10.11055c0,5.58388 4.46839,10.11055 9.98036,10.11055z"
					stroke="#fff"
				/>
				<path
					id="svg_4"
					stroke-linecap="round"
					stroke-width="3"
					d="m17.40696,8.98515c-0.84991,-0.86102 -2.02408,-1.39353 -3.32099,-1.39353c-1.29692,0 -2.47107,0.53253 -3.32105,1.39353"
					stroke="#fff"
				/>
				<path id="svg_5" stroke-linecap="round" stroke-width="3" d="m21.26115,20.21303l4.98155,5.04653" stroke="#fff" />
			</g>

			<g stroke="null" class="close-icon" id="svg_1">
				<title>Close search</title>
				<line stroke="#fff" fill="none" stroke-width="3" x1="25.22246" y1="6.75235" x2="7.30109" y2="22.44397" id="svg_3" stroke-linecap="round" />
				<line stroke="#fff" fill="none" stroke-width="3" x1="24.90528" y1="22.7631" x2="7.47944" y2="6.5144" stroke-linecap="round" id="svg_4" />
			</g>
		</svg>
	</button>
</template>

<script lang="ts">
	import { defineComponent, ref } from 'vue'

	export default defineComponent({
		setup() {
			let active = ref(false)

			const toggle = () => {
				active.value = !active.value
			}
			return { toggle, active }
		},
	})
</script>

<style lang="less" scoped>
	.search-btn {
		--shadow: rgba(0, 6, 39, 0.1);
		--light-shadow: rgba(255, 255, 255, 0.8);
		transition: transform 0.3s;
		border-radius: 9px;
		box-shadow: -12px -12px 24px var(--light-shadow, transparent), 12px 12px 24px var(--shadow, transparent);

		.search-icon {
			transition: all 0.125s ease-in-out;
			transform-origin: center;
		}
		.close-icon {
			visibility: hidden;
			opacity: 0;
			transform: scale(0.5);
			transition: all 0.125s ease-in-out;
			transform-origin: center;
		}

		&.active {
			svg {
				& > g.search-icon {
					visibility: hidden;
					opacity: 0;
					transform: scale(0.5);
				}

				& > g.close-icon {
					visibility: visible;
					opacity: 1;
					transform: scale(1);
				}
			}
		}
	}
</style>
