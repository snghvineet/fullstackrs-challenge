import React from 'react';

const Banner = () => {
	return (
		<div className='w-full h-[25vh] flex flex-col justify-center items-center text-center'>
			<h1 className='text-4xl font-semibold'>Blog</h1>
			<h6 className='text-lg font-light mt-4'>
				Checkout all the wonderfull blogs written all around the world. <br />{' '}
				Maybe write your own blog and impart your knowledge for everyone.
			</h6>
		</div>
	);
};

export default Banner;
