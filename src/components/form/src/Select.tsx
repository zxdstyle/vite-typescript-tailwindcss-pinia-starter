import { FunctionalComponent } from 'vue'

const Select: FunctionalComponent = (_, context) => {
	const { attrs, slots } = context
	return (
		<select class="font-semibold border-none rounded-md appearance-none bg-gray-100 focus:outline-none text-black px-3 py-1 min-w-xs" {...attrs}>
			{slots.default?.()}
		</select>
	)
}

const Option: FunctionalComponent = (_, context) => {
	const { attrs, slots } = context
	return <option {...attrs}>{slots.default?.()}</option>
}

export { Select, Option }
