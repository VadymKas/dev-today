import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sidebar } from '.'

const meta: Meta<typeof Sidebar> = {
	title: 'TASK3/Sidebar',
	component: Sidebar
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const SidebarMenu: Story = {
	render: args => {
		const [open, setOpen] = useState(true)

		return (
			<div>
				{open && (
					<Sidebar
						{...args}
						onClose={() => setOpen(false)}
					/>
				)}
			</div>
		)
	},
	args: {
		items: [
			{ id: '1', label: 'Dashboard' },
			{
				id: '2',
				label: 'Settings',
				children: [
					{ id: '2-1', label: 'Profile' },
					{ id: '2-2', label: 'Security' }
				]
			}
		]
	}
}
