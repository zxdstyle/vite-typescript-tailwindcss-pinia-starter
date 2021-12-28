import { Menu as IMenu } from '@/router/types'
import { Menu } from 'ant-design-vue'
import { defineComponent, PropType } from 'vue'
import SvgIcon from '@/components/common/SvgIcon.vue'

const MenuItemGroup = defineComponent({
	props: {
		name: String,
		children: Array as PropType<IMenu[]>,
	},
	setup(props) {
		return () => (
			<Menu.ItemGroup title={props.name}>
				{props.children?.map((menu) => {
					return <MenuItem item={menu} />
				})}
			</Menu.ItemGroup>
		)
	},
})

const MenuItem = defineComponent({
	props: {
		item: {
			type: Object as PropType<IMenu>,
			default: () => {},
		},
	},
	setup(props) {
		const i = props.item?.icon || 'round'
		const icon = (
			<span>
				<SvgIcon name={i} class={i === 'round' ? 'w-4 h-4' : 'w-6 h-6'} />
			</span>
		)

		if (props.item && props.item.children && props.item.children.length > 0) {
			const slots = {
				default: () => {
					return (
						<>
							{props.item?.children?.map((item) => {
								return <MenuItem item={item} />
							})}
						</>
					)
				},
				icon: () => icon,
			}

			return () => (
				<Menu.SubMenu title={props.item?.name} key={props.item?.path}>
					{slots}
				</Menu.SubMenu>
			)
		}

		const slots = {
			default: () => props.item.name,
			icon: () => icon,
		}

		return () => (
			<Menu.Item title={props.item.name} key={props.item.path}>
				{slots}
			</Menu.Item>
		)
	},
})

export { MenuItemGroup }
