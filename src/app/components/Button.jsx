import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const LinkButton = ({ href, children, variant, className = '' }) => {
	let btnStyle = 'bg-white text-black hover:bg-lime-300';
	if (variant === 'text') btnStyle = 'text-gray-300 hover:text-lime-300';
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

const Button = ({
	children,
	variant,
	className,
	onClick,
	outline,
	options,
}) => {
	let btnStyle = 'bg-white text-black hover:bg-lime-300';
	if (outline) btnStyle = twMerge(btnStyle, 'border-2 border-lime-300');
	if (variant === 'text') btnStyle = 'text-gray-400 hover:text-lime-300';
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
			{...options}
		>
			{children}
		</button>
	);
};

const IconButton = ({ icon, onClick, className }) => {
	return (
		<button
			className={twMerge('text-2xl text-gray-800', className)}
			onClick={onClick}
		>
			{icon}
		</button>
	);
};

export { LinkButton, Button, IconButton };
