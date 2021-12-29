<template>
	<div>
		<Header v-bind="headerAttr">
			<template #left>
				<slot name="header-left"></slot>
			</template>
		</Header>
	</div>
</template>

<script lang="ts">
	import Header from './components/Header'
	import { defineComponent, onMounted, ref, toRefs, unref, computed } from 'vue'
	import type { BasicTableProps } from './typing'
	import { deepMerge } from '@/utils'

	export default defineComponent({
		name: 'BasicTable',
		components: { Header },
		emits: ['register'],
		setup(props, { emit }) {
			let instance = {
				setProps: setProps,
			}

			const propsRef = ref<Partial<BasicTableProps> | null>(null)

			function setProps(p: BasicTableProps) {
				propsRef.value = deepMerge(unref(propsRef) || ({} as any), p)
			}

			onMounted(() => emit('register', instance))

			// const getBindValue = computed((): Recordable => {
			// 	return {
			// 		...attrs,
			// 		...unref(propsRef),
			// 	}
			// })

			const headerAttr = computed((): Recordable => {
				console.log(propsRef.value?.title)
				return {
					title: propsRef.value?.title,
				}
			})

			return { headerAttr }
		},
	})
</script>

<style lang="less" scoped></style>
