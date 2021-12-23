<template>
	<main class="container lg:px-32 xl:px-64 2xl:px-80">
		<div class="card">
			<div class="item">
				<div>语言</div>
				<Select>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
				</Select>
			</div>
			<div class="item">
				<div>外观</div>
				<Select>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
				</Select>
			</div>
			<div class="item">
				<div>音乐语种偏好</div>
				<Select>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
				</Select>
			</div>
			<div class="divider">
				<h5>歌词</h5>
			</div>
			<div class="item">
				<div>音乐语种偏好</div>
				<Select>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
					<Option :value="12">111</Option>
				</Select>
			</div>
			<div class="divider">
				<h5>歌词</h5>
			</div>
			<div class="item">
				<div>音乐语种偏好</div>
				<Switch />
			</div>
		</div>

		<div class="text-center mt-24 text-black font-semibold">
			<p class="text-base">MADE BY <a href="http://github.com/qier222" target="_blank">QIER222</a></p>
			<p class="text-sm opacity-50 -mt-2">v0.4.2</p>
		</div>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from 'vue'
	import { Select, Option, Switch } from '@/components/form'

	export default defineComponent({
		name: 'Index',
		components: { Select, Option, Switch },
		setup() {},
	})
</script>

<style lang="less" scoped>
	.item {
		@apply flex justify-between w-full text-base my-6;
	}
	.divider {
		border-bottom: 1px solid rgba(128, 128, 128, 0.18);
		@apply my-8;
	}
</style>
