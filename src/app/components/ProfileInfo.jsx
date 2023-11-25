import React from 'react';

const ProfileInfo = () => {
	return (
		<div className='flex py-8'>
			<div className='flex w-32 h-32 rounded-full items-center justify-center bg-lime-300 '>
				V
			</div>
			<div className='ml-8 flex-grow flex flex-col justify-center gap-1'>
				<div className='text-lg'>Full name</div>
				<div>Email</div>
				<div>Blogs written:</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
