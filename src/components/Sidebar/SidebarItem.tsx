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
				item.children?.map(child => (
					<div
						key={child.id}
						style={{ paddingLeft: 24 }}>
						{`-  ${child.label}`}
					</div>
				))}
		</div>
	)
}
