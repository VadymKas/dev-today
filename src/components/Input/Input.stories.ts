import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '.'

const meta: Meta<typeof Input> = {
	title: 'TASK1/Input',
	component: Input,
	argTypes: {
		clearable: { control: 'boolean' }
	}
}

export default meta
type Story = StoryObj<typeof Input>

export const Password: Story = {
	args: { type: 'password', placeholder: 'Password is needed' }
}

export const Number: Story = {
	args: { type: 'number', placeholder: 'Number is needed' }
}

export const ClearableInput: Story = {
	args: { clearable: true, placeholder: 'Clear me' }
}
