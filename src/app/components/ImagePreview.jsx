import React from 'react';
import Image from 'next/image';
import { IoIosCloseCircle } from 'react-icons/io';
import { IconButton } from './Button';

const ImagePreview = ({ file, deleteHandler }) => {
	return (
		<div className='flex justify-center'>
			<div className='relative'>
				<IconButton
					className='absolute top-2 right-2 text-3xl text-red-500'
					onClick={deleteHandler}
					icon={<IoIosCloseCircle />}
				></IconButton>
				<Image
					alt='Blog header image'
					src={URL.createObjectURL(file)}
					width={300}
					height={300}
				/>
			</div>
		</div>
	);
};

export default ImagePreview;
