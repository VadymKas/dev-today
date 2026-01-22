import { FC } from 'react';

type Props = {
	className?: string;
};

const CancelIcon: FC<Props> = ({ className }) => {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			stroke='#2B2B2B'
			className={className}>
			<path
				d='M5.75586 14.2424L14.2412 5.75709'
				stroke='inherit'
				strokeWidth='1.25'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M14.2412 14.2427L5.75587 5.75734'
				stroke='inherit'
				strokeWidth='1.25'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default CancelIcon;
