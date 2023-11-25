'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Input, { CheckBox } from './Input';
import { Button } from './Button';
import { createClient } from '@/utils/client';

const AuthForm = ({ type }) => {
	console.log('Auth section');
	const supabase = createClient();
	const router = useRouter();
	const signingUp = type === 'signup';
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [fullname, setFullname] = useState('');

	const handleSignUp = async () => {
		console.log('Signing up...');
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${window.location.origin}/auth/callback`,
				data: { full_name: fullname },
			},
		});
		router.refresh();
		if (error) {
			return router.replace('/auth/login?message=Could not authenticate user');
		}

		return router.replace(
			'/auth/login?message=Check email to continue sign in process'
		);
		// console.log(data);
	};

	const handleSignIn = async () => {
		console.log('trying to sign in');
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		console.log(data, error);

		if (error) return router.replace('/auth/login?message=Invalid Credentials');
		router.refresh();
		return router.replace('/auth/callback');
	};

	const submitForm = (e) => {
		e.preventDefault();

		console.log('Form being submitted.', window.location.origin);
		signingUp ? handleSignUp() : handleSignIn();
	};
	const formAction =
		type === 'signup' ? `/auth/singup/callback` : `/auth/login/callback`;
	return (
		<form className='flex flex-col items-center text-lg' onSubmit={submitForm}>
			{signingUp && (
				<Input
					label='Name'
					placeholder='Your name'
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
				/>
			)}
			<Input
				label='Email'
				placeholder='author@example.com'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				label='Password'
				placeholder='8+ characters'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				inputProps={{ type: 'password' }}
			/>
			{signingUp && <CheckBox />}
			<Button variant='primary' className='px-10 py-4 w-full mt-6'>
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
