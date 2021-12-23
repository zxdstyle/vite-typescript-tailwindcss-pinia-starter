export interface Menu {
	name: string

	icon?: string

	path: string

	paramPath?: string

	disabled?: boolean

	children?: Menu[]

	orderNo?: number

	hideMenu?: boolean
}

export interface MenuGroup {
	name: string
	children: Menu[]
}
