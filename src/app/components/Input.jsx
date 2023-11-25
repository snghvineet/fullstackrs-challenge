'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const Input = ({ label, placeholder, inputProps, value, onChange }) => {
	const id = 'input-id-' + label;
	return (
		<div className='flex flex-col mb-6 w-full'>
			<label htmlFor={id} className='font-semibold text-lg mb-2'>
				{label}
			</label>
			<input
				className='border border-gray-300 rounded-xl py-4 px-6 outline-none outline-offset-0 focus:outline-lime-100 focus:outline-4'
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				{...inputProps}
			/>
			<span className='mt-2 hidden'>Error text</span>
		</div>
	);
};

const CheckBox = () => {
	const [checked, setChecked] = useState(false);
	const bgColor = checked ? 'bg-lime-400' : 'bg-white';
	return (
		<div className='flex items-center w-full'>
			<input
				id='link-checkbox'
				type='checkbox'
				value=''
				className='w-5 h-5 absolute opacity-0 cursor-pointer'
				checked={checked}
				onChange={() => setChecked((val) => !val)}
			/>
			<div
				className={twMerge(
					'w-6 h-6 rounded-sm border flex items-center justify-center text-white mr-2',
					bgColor
				)}
			>
				<FaCheck fontWeight='bold' />
			</div>
			<label htmlFor='link-checkbox' className='ms-2 font-medium text-gray-600'>
				I agree with the{' '}
				<Link href='#' className='text-black hover:underline'>
					terms and conditions
				</Link>
				.
			</label>
		</div>
	);
};

export { CheckBox };
export default Input;
