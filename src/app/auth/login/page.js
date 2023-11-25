import AuthForm from '@/app/components/AuthForm';
import { FaExclamationCircle } from 'react-icons/fa';

export default function Login({ searchParams }) {
	const { message } = searchParams;
	return (
		<main className='px-10 bg-white text-black'>
			<div className='h-[100vh] w-full flex items-center justify-center'>
				<div className='w-[30vw]'>
					{message && (
						<div className='flex items-center mb-6 text-xl font-medium text-gray-600'>
							<span className='mr-2 text-2xl text-gray-800'>
								<FaExclamationCircle />
							</span>
							{message}
						</div>
					)}
					<h1 className='text-4xl font-semibold mb-6'>
						Sign in to StackrsBlog
					</h1>
					<AuthForm type='signin' />
				</div>
			</div>
		</main>
	);
}
