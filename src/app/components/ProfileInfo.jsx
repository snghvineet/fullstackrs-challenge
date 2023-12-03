import React from 'react';
import { FaNoteSticky } from 'react-icons/fa6';

const ProfileInfo = ({ name, email, count }) => {
	return (
		<div className='flex justify-center mb-8 xl:mb-0'>
			<div className='flex flex-col w-fit py-4 px-8 justify-center items-center border rounded-lg'>
				<div className='flex justify-center'>
					<div className='flex w-60 h-60 rounded-full items-center justify-center bg-slate-600 text-6xl text-white'>
						{name[0]}
					</div>
				</div>
				<div className='mt-4'>
					<div className=''>
						<div className='text-xl font-semibold'>{name}</div>
						<div className='text-gray-500'>{email}</div>
						<div className='mt-3 text-gray-800'>
							More features coming soon...
						</div>
						<div className='mt-6 flex items-center'>
							<FaNoteSticky className='text-gray-600 mr-2 text-lg' />{' '}
							<p>
								{count}
								<span className='text-gray-800'>
									{' '}
									blog{count > 1 ? 's' : ''} written
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
