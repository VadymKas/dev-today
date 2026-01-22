import { useState } from 'react'
import './input.css'
import ShowIcon from '../../assets/icons/ShowIcon'
import HideIcon from '../../assets/icons/HideIcon'
import CancelIcon from '../../assets/icons/CancelIcon'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	clearable?: boolean
}

export const Input = ({ type, clearable, ...props }: Props) => {
	const [value, setValue] = useState('')
	const [show, setShow] = useState(false)

	const activeType = type === 'password' && show ? 'text' : type

	return (
		<div className="input-wrapper">
			<input
				{...props}
				className={clearable ? 'input clearable' : 'input'}
				type={activeType}
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			{type === 'password' && (
				<button
					type="button"
					onClick={() => setShow(show => !show)}
					className="input-button">
					{show ? <ShowIcon /> : <HideIcon />}
				</button>
			)}
			{clearable && value && (
				<button
					type="button"
					onClick={() => setValue('')}
					className="input-button">
					<CancelIcon />
				</button>
			)}
		</div>
	)
}
