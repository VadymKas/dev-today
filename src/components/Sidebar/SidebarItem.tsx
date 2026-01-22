import { useState } from 'react'

export type SidebarItemType = {
	id: string
	label: string
	children?: SidebarItemType[]
}

export const SidebarItem = ({ item }: { item: SidebarItemType }) => {
	const [open, setOpen] = useState(false)

	return (
		<div>
			<div onClick={() => setOpen(open => !open)}>{item.label}</div>
			{open &&
				item.children?.map(c => (
					<div
						key={c.id}
						style={{ paddingLeft: 32 }}>
						{c.label}
					</div>
				))}
		</div>
	)
}
