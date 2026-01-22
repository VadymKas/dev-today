import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Toast } from '.'

const meta: Meta<typeof Toast> = {
	title: 'TASK2/Toast',
	component: Toast
}

export default meta
type Story = StoryObj<typeof Toast>

export const Success: Story = {
	render: args => {
		const [open, setOpen] = useState(true)

		return (
			<>
				{open && (
					<Toast
						{...args}
						onClose={() => setOpen(false)}
					/>
				)}
			</>
		)
	},
	args: {
		message: 'Success toast message',
		type: 'success',
		closable: true,
		duration: 1000
	}
}

export const InfoClosable: Story = {
	render: args => {
		const [open, setOpen] = useState(true)

		return (
			<>
				{open && (
					<Toast
						{...args}
						onClose={() => setOpen(false)}
					/>
				)}
			</>
		)
	},
	args: {
		message: 'Info toast message',
		type: 'info',
		duration: 3000,
		closable: true
	}
}
