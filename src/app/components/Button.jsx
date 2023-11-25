import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const LinkButton = ({ href, children, variant, className = '' }) => {
	let btnStyle = 'bg-white text-black hover:bg-gray-300';
	if (variant === 'text') btnStyle = 'text-gray-300 hover:text-white';
	return (
		<Link href={href}>
			<div
				className={twMerge(
					'w-fit px-8 py-3 rounded-full text-lg font-semibold text-center tracking-wide hover:cursor-pointer',
					btnStyle,
					className
				)}
			>
				{children}
			</div>
		</Link>
	);
};

const Button = ({ children, variant, className, onClick }) => {
	let btnStyle = 'bg-white text-black hover:bg-gray-300';
	if (variant === 'text') btnStyle = 'text-gray-300 hover:text-white';
	if (variant === 'primary') {
		children = <button type='submit'>{children}</button>;
		btnStyle = 'text-white bg-black hover:bg-gray-800 ';
	}
	return (
		<button
			className={twMerge(
				'w-fit px-8 py-3 rounded-full text-lg font-semibold text-center tracking-wide hover:cursor-pointer',
				btnStyle,
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export { LinkButton, Button };
