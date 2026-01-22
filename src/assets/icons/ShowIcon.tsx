import { FC } from 'react';

type Props = {
	className?: string;
};

const ShowIcon: FC<Props> = ({ className }) => {
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
				d='M17.6349 9.23629C17.8781 9.57733 17.9997 9.74788 17.9997 10.0003C17.9997 10.2527 17.8781 10.4232 17.6349 10.7643C16.542 12.2967 13.7511 15.6002 9.99984 15.6002C6.24854 15.6002 3.45765 12.2967 2.36482 10.7643C2.12161 10.4232 2 10.2527 2 10.0003C2 9.74788 2.12161 9.57733 2.36482 9.23629C3.45765 7.70388 6.24854 4.40039 9.99984 4.40039C13.7511 4.40039 16.542 7.70388 17.6349 9.23629Z'
				stroke='inherit'
				strokeWidth='1.25'
			/>
			<path
				d='M12.4 10C12.4 8.67456 11.3255 7.6001 10 7.6001C8.67456 7.6001 7.6001 8.67456 7.6001 10C7.6001 11.3255 8.67456 12.4 10 12.4C11.3255 12.4 12.4 11.3255 12.4 10Z'
				stroke='inherit'
				strokeWidth='1.25'
			/>
		</svg>
	);
};

export default ShowIcon;
