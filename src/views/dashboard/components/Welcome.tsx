import { defineComponent } from 'vue'
import { Avatar } from 'ant-design-vue'
export default defineComponent({
	setup() {
		return () => (
			<div class="bg-primary rounded shadow flex items-center px-12 gap-12">
				<Avatar size={84} />
				<div>
					<h4 class="text-white">Welcome</h4>
				</div>
			</div>
		)
	},
})
