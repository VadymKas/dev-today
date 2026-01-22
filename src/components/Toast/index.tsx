import { useEffect, useState } from 'react'
import './toast.css'
import CancelIcon from '../../assets/icons/CancelIcon'

type ToastType = 'success' | 'error' | 'info'

type Props = {
	message: string
	type?: ToastType
	duration?: number
	onClose: () => void
	closable?: boolean
}

export const Toast = ({
	message,
	type = 'info',
	duration = 3000,
	onClose,
	closable
}: Props) => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const id = requestAnimationFrame(() => setVisible(true))
		return () => cancelAnimationFrame(id)
	}, [])

	const handleClose = () => {
		setVisible(false)

		setTimeout(() => {
			onClose()
		}, 300)
	}

	useEffect(() => {
		const timer = setTimeout(handleClose, duration)
		return () => clearTimeout(timer)
	}, [duration, onClose])

	return (
		<div
			className={`${closable ? 'toast clearable' : 'toast'} ${type} ${visible ? 'toast-enter' : 'toast-exit'}`}>
			{message}
			{closable && (
				<button
					className="toast-button"
					onClick={handleClose}>
					<CancelIcon />
				</button>
			)}
		</div>
	)
}
