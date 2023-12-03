'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import Input, { CheckBox } from './Input';
import { Button } from './Button';
import { createClient } from '@/utils/client';
import useInput from '@/hooks/use-input';
import LoadingSpinner from './LoadingSpinner';

const AuthForm = ({ type }) => {
	// console.log('Auth section');
	const [loading, setLoading] = useState(false);
	const supabase = createClient();
	const router = useRouter();
	const signingUp = type === 'signup';
	const {
		value: email,
		setValue: setEmail,
		error: emailError,
		onBlurHandler: emailBlurHandler,
		reset: resetEmail,
	} = useInput((value) => {
		let regex = new RegExp(/\S+@\S+\.\S+/);
		if (!value || value.trim().length === 0)
			return 'This field cannot be empty';
		if (!regex.test(value?.toLowerCase())) return 'Enter a valid email';
		return null;
	});
	const {
		value: password,
		setValue: setPassword,
		error: passwordError,
		onBlurHandler: passwordBlurHandler,
		reset: passwordReset,
	} = useInput((value) => {
		if (!value || value.trim().length === 0) return 'This field is required';
		if (value.trim().length < 8)
			return 'Passwords are atleast 8 characters long';
		return null;
	});
	const {
		value: fullname,
		setValue: setFullname,
		error: fullnameError,
		onBlurHandler: fullnameBlurHandler,
		reset: fullnameReset,
	} = useInput((value) => {
		if (!value || value.trim().length === 0) return 'This field is required';
	});

	const handleSignUp = async () => {
		console.log('Signing up...');
		setLoading(true);
		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${process.env.NEXT_PUBLIC_HOSTURL}/auth/callback`,
				data: { full_name: fullname },
			},
		});
		router.refresh();
		resetEmail();
		passwordReset();
		fullnameReset();
		setLoading(false);
		if (error) {
			return router.replace('/auth/login?message=Could not authenticate user');
		}

		return router.replace(
			'/auth/login?message=Check email to continue sign in process'
		);
		// console.log(data);
	};

	const handleSignIn = async () => {
		setLoading(true);
		console.log('trying to sign in');
		const { data, error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});
		// console.log(data, error);
		setLoading(false);
		resetEmail();
		passwordReset();
		fullnameReset();
		if (error) return router.replace('/auth/login?message=Invalid Credentials');

		router.refresh();
		return router.replace('/auth/callback');
	};

	const submitForm = (e) => {
		e.preventDefault();
		if (signingUp) fullnameBlurHandler();
		emailBlurHandler();
		passwordBlurHandler();
		// console.log(fullnameError, emailError, passwordError);
		if (fullnameError || emailError || passwordError) return;
		if (signingUp) handleSignUp();
		else handleSignIn();
	};
	const buttonText = signingUp ? 'Create Account' : 'Sign in';
	return (
		<form className='flex flex-col items-center text-lg' onSubmit={submitForm}>
			{signingUp && (
				<Input
					label='Name'
					placeholder='Your name'
					value={fullname}
					onChange={(e) => setFullname(e.target.value)}
					error={fullnameError}
					onBlur={fullnameBlurHandler}
				/>
			)}
			<Input
				label='Email'
				placeholder='author@example.com'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				onBlur={emailBlurHandler}
				error={emailError}
			/>
			<Input
				label='Password'
				placeholder='8+ characters'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				onBlur={passwordBlurHandler}
				inputProps={{ type: 'password' }}
				error={passwordError}
			/>
			{/* {signingUp && <CheckBox />} */}
			<Button variant='primary' className='px-10 py-4 w-full mt-6'>
				{loading ? <LoadingSpinner /> : buttonText}
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
