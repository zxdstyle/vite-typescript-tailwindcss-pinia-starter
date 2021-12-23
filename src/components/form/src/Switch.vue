<template>
	<div class="toggle">
		<input id="automatically-cache-songs" type="checkbox" name="automatically-cache-songs" />
		<label for="automatically-cache-songs"></label>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'

	export default defineComponent({
		name: 'Switch',
		components: {},
		setup() {},
	})
</script>

<style lang="less" scoped>
	.toggle {
		input {
			@apply opacity-0 absolute cursor-pointer;

			& + label {
				@apply relative inline-block select-none bg-gray-100 rounded-lg;
				transition: 0.4s ease;
				height: 32px;
				width: 52px;
			}

			& + label:before {
				@apply absolute block top-0 left-0 rounded-lg cursor-pointer;
				content: '';
				transition: 0.2s cubic-bezier(0.24, 0, 0.5, 1);
				height: 32px;
				width: 52px;
			}

			& + label:after {
				@apply absolute block bg-white cursor-pointer;
				content: '';
				box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.02), 0 4px 0px 0 hsla(0, 0%, 0%, 0.01), 0 4px 9px hsla(0, 0%, 0%, 0.08), 0 3px 3px hsla(0, 0%, 0%, 0.03);
				transition: 0.35s cubic-bezier(0.54, 1.6, 0.5, 1);
				height: 20px;
				width: 20px;
				top: 6px;
				left: 6px;
				border-radius: 6px;
			}

			&:checked + label:before {
				@apply bg-blue-500;
				transition: width 0.2s cubic-bezier(0, 0, 0, 0.1);
			}

			&:checked + label:after {
				left: 26px;
			}
		}
	}
</style>
