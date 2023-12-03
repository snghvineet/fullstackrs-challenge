import { createClient } from '@/utils/server';
import { IconButton, LinkButton } from './Button';
import Logo from './Logo';
import { cookies } from 'next/headers';
import { CiMenuBurger } from 'react-icons/ci';
import SideMenu from './SideMenu';

const NavBar = async ({ loggedIn }) => {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	// console.log(user);

	// console.log('here in nav');
	const notLoggedInNavComponents = (
		<>
			<LinkButton
				href='/auth/login'
				variant='text'
				className='mr-2 hidden sm:block'
			>
				Log in
			</LinkButton>
			<LinkButton href='/auth/signup' className='mr-2'>
				Sign up
			</LinkButton>
		</>
	);

	const loggedInNavComponents = (
		<div className='hidden sm:flex'>
			<LinkButton href='/blogs/new' variant='text' className='px-4'>
				Write a blog
			</LinkButton>
			<LinkButton href='/profile' variant='text' className='px-4 mr-4'>
				Panel
			</LinkButton>
			<LinkButton href='/auth/signout' className='mr-2'>
				Sign out
			</LinkButton>
		</div>
	);

	return (
		<nav>
			<div className='w-full h-28 sm:h-20 flex items-center bg-black px-8'>
				<Logo />
				<div className='flex-grow' />
				{user ? loggedInNavComponents : notLoggedInNavComponents}
				{user && <SideMenu />}
			</div>
		</nav>
	);
};

export default NavBar;
