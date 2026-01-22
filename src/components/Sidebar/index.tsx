import { SidebarItem, type SidebarItemType } from './SidebarItem'
import './sidebar.css'

type Props = {
	items: SidebarItemType[]
	onClose: () => void
}

export const Sidebar = ({ items, onClose }: Props) => {
	return (
		<div>
			<div
				className={'sidebar-button'}
				onClick={onClose}
			/>
			<aside className={'sidebar'}>
				{items.map(i => (
					<SidebarItem
						key={i.id}
						item={i}
					/>
				))}
			</aside>
		</div>
	)
}
