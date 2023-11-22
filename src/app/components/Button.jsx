import Link from 'next/link';

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
	return (
		<div
			className={`w-fit px-5 py-2 rounded-lg text-lg font-semibold  ${btnStyle} ${
				className ?? ''
			}`}
		>
			{children}
		</div>
	);
};

export { LinkButton, Button };
