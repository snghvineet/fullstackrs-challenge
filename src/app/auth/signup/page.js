import AuthForm from '@/app/components/AuthForm';
import { Button, RouteButton } from '@/app/components/Button';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';

export default function Home() {
	return (
		<main className='px-10 bg-white text-black'>
			<RouteButton>
				<span className='text-3xl'>
					<IoIosHome />
				</span>
			</RouteButton>
			<div className='h-full w-full flex items-center justify-center py-4'>
				<div className='xl:w-[30vw]'>
					<h1 className='text-3xl md:text-4xl font-semibold mb-6'>
						Sign up to StackrsBlog
					</h1>
					<AuthForm type='signup' />
				</div>
			</div>
		</main>
	);
}
