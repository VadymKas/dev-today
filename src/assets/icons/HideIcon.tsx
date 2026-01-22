import { FC } from 'react';

type Props = {
	className?: string;
};

const HideIcon: FC<Props> = ({ className }) => {
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
				d='M17.9997 6.80029C17.9997 6.80029 14.7997 11.6002 9.99984 11.6002C5.19993 11.6002 2 6.80029 2 6.80029'
				stroke='inherit'
				strokeWidth='1.25'
				strokeLinecap='round'
			/>
			<path
				d='M12.3999 11.2002L13.5999 13.2002'
				stroke='inherit'
				strokeWidth='1.25'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M16.3999 9.2002L17.9999 10.8002'
				stroke='inherit'
				strokeWidth='1.25'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M2 10.8002L3.59997 9.2002'
				stroke='inherit'
				strokeWidth='1.25'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M7.59988 11.2002L6.3999 13.2002'
				stroke='inherit'
				strokeWidth='1.25'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default HideIcon;
