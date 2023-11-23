import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const LinkButton = ({ href, children, variant, className }) => {
	let btnStyle = 'bg-white text-black hover:bg-gray-300';
	if (variant === 'text') btnStyle = 'text-gray-300 hover:text-white';
	return (
		<Button variant={variant} className={className}>
			<Link href={href}>{children}</Link>
		</Button>
	);
};

const Button = ({ children, variant, className }) => {
	let btnStyle = 'bg-white text-black hover:bg-gray-300';
	if (variant === 'text') btnStyle = 'text-gray-300 hover:text-white';
	if (variant === 'primary')
		btnStyle = 'text-white bg-black hover:bg-gray-800 ';
	return (
		<div
			className={twMerge(
				'w-fit px-8 py-3 rounded-full text-lg font-semibold text-center tracking-wide hover:cursor-pointer',
				btnStyle,
				className
			)}
		>
			{children}
		</div>
	);
};

export { LinkButton, Button };
