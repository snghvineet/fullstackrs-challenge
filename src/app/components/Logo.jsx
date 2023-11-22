import React from 'react';
import Link from 'next/link';

const Logo = () => {
	return (
		<div className='mx-2'>
			<h6 className='text-2xl'>
				<Link href='/'>Stackrs Blog</Link>
			</h6>
		</div>
	);
};

export default Logo;
