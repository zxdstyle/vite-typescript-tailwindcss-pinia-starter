<template>
	<button class="button-icon hover:bg-gray-100 active:scale-75 first:ml-0"><slot></slot></button>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	export default defineComponent({
		name: 'ButtonIcon',
	})
</script>

<style lang="less" scoped>
	button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 8px;
		background: transparent;
		margin: 4px;
		border-radius: 25%;
		transition: 0.2s;
		.svg-icon {
			color: var(--color-text);
			height: 16px;
			width: 16px;
		}
	}
</style>
