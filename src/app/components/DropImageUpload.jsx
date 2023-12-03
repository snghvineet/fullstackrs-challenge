import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaUpload } from 'react-icons/fa6';

const DropImageUpload = (props) => {
	const onDrop = props.onSelectFiles;
	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		accept: {
			'image/*': ['.jpeg', '.png'],
		},
		maxFiles: 1,
	});

	return (
		<div
			{...getRootProps({
				className: 'flex items-center justify-center w-full mt-2',
			})}
		>
			<label
				htmlFor='images'
				className='flex flex-col rounded-lg border border-2px w-full items-center justify-center h-28  p-3 group text-center cursor-pointer'
			>
				Select or drop an image
				<FaUpload className='mt-2' />
			</label>
			<input {...getInputProps()} />
		</div>
	);
};

export default DropImageUpload;
