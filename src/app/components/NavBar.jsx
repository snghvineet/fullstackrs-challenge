import { createClient } from '@/utils/server';
import { LinkButton } from './Button';
import Logo from './Logo';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { FaPencil } from 'react-icons/fa6';
import NavProfileMenu from './NavProfileMenu';

const NavBar = async ({ loggedIn }) => {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// console.log(user);

	const logoutHandler = async () => {
		'use server';
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);
		const { error } = await supabase.auth.signOut();
		if (error) console.log('Error occurred');
		return redirect('/auth/login');
	};

	// console.log('here in nav');
	const notLoggedInNavComponents = (
		<>
			<LinkButton href='/auth/login' variant='text' className='mr-2'>
				Log in
			</LinkButton>
			<LinkButton href='/auth/signup' className='mr-2'>
				Sign up
			</LinkButton>
		</>
	);
	const loggedInNavComponents = (
		<>
			<LinkButton href='/blogs/new' variant='text' className='px-4'>
				Write a blog
			</LinkButton>
			<LinkButton href='/profile' variant='text' className='px-4 mr-4'>
				Panel
			</LinkButton>
			<LinkButton href='/auth/signout' className='mr-2'>
				Sign out
			</LinkButton>
		</>
	);

	return (
		<nav>
			<div className='w-full h-20 flex items-center bg-black px-8'>
				<Logo />
				<div className='flex-grow' />
				{user ? loggedInNavComponents : notLoggedInNavComponents}
			</div>
		</nav>
	);
};

export default NavBar;
