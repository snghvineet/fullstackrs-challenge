import { LinkButton } from './Button';
import Logo from './Logo';

const NavBar = () => {
	return (
		<nav>
			<div className='w-full h-20 flex items-center bg-black px-8'>
				<Logo />
				<div className='flex-grow' />
				<LinkButton href='/login' variant='text' className='mr-2'>
					Log in
				</LinkButton>
				<LinkButton href='/signup' className='mr-2'>
					Sign up
				</LinkButton>
			</div>
		</nav>
	);
};

export default NavBar;
