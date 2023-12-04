import React from 'react';
import { Button } from './Button';

const ConfirmDialog = ({
	title,
	desc,
	warning,
	cancelHandler,
	confirmHandler,
}) => {
	return (
		<div className='flex justify-center items-center h-full w-full z-10 fixed top-0 right-0'>
			<div className='bg-white md:h-fit px-6 py-4 shadow-lg rounded-lg w-full xl:w-[40vw] sm:w-[60vw]'>
				<h1 className='text-xl font-semibold'>{title}</h1>
				<h3 className=''>{desc}</h3>
				<span className='text-sm text-red-400'>{warning}</span>
				<div className='flex justify-end mt-4 gap-2'>
					<Button variant='text' onClick={cancelHandler}>
						Cancel
					</Button>
					<Button
						className='bg-red-400 text-white hover:bg-red-500'
						onClick={confirmHandler}
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmDialog;
