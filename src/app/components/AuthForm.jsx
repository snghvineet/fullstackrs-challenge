import React from 'react';
import Link from 'next/link';
import Input, { CheckBox } from './Input';
import { Button } from './Button';

const AuthForm = ({ type }) => {
	const signingUp = type === 'signup';
	return (
		<form className='flex flex-col items-center text-lg'>
			{signingUp && <Input label='Name' placeholder='Your name' />}
			<Input label='Email' placeholder='author@example.com' />
			<Input
				label='Password'
				placeholder='8+ characters'
				inputProps={{ type: 'password' }}
			/>
			{signingUp && <CheckBox />}
			<Button variant='primary' className='px-10 py-4 w-full mt-4'>
				{signingUp ? 'Create Account' : 'Sign in'}
			</Button>
			<label
				htmlFor='link-checkbox'
				className='ms-2 font-medium text-gray-600 mt-6'
			>
				{signingUp ? 'Already have an account? ' : "Don't have an account? "}
				<Link
					href={`/auth/${signingUp ? 'login' : 'signup'}`}
					className='text-black underline'
				>
					{signingUp ? 'Sign in' : 'Sign up'}
				</Link>
				.
			</label>
		</form>
	);
};

export default AuthForm;
