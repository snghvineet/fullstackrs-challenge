import AuthForm from '@/app/components/AuthForm';
import { RouteButton } from '@/app/components/Button';
import { FaExclamationCircle } from 'react-icons/fa';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';

export default function Login({ searchParams }) {
	const { message } = searchParams;
	return (
		<main className='px-10 bg-white text-black'>
			<RouteButton>
				<span className='text-3xl'>
					<IoIosHome />
				</span>
			</RouteButton>
			<div className='h-[100vh] w-full flex items-center justify-center'>
				<div className='xl:w-[30vw]'>
					{message && (
						<div className='flex items-center mb-6 text-xl font-medium text-gray-600'>
							<span className='mr-2 text-2xl text-gray-800'>
								<FaExclamationCircle />
							</span>
							{message}
						</div>
					)}
					<h1 className='text-3xl md:text-4xl font-semibold mb-6'>
						Sign in to StackrsBlog
					</h1>
					<AuthForm type='signin' />
				</div>
			</div>
		</main>
	);
}
