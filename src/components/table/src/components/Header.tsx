import { defineComponent } from 'vue'
import SearchBtn from './SearchBtn.vue'

export default defineComponent({
	props: {
		title: String,
		search: String,
	},
	setup(props, { slots }) {
		return () => {
			const title = slots.title ? slots.title() : <h6 class="m-0">{props.title}</h6>
			return (
				<div class="w-full h-12 border-b flex items-center justify-between pb-4 ">
					<div class="flex items-center">
						{title}
						{slots.left?.()}
					</div>
					<div class="flex items-center">
						<SearchBtn />
					</div>
				</div>
			)
		}
	},
})
