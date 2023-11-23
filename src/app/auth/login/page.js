import AuthForm from '@/app/components/AuthForm';
import { Button } from '@/app/components/Button';
import Input from '@/app/components/Input';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='px-10 bg-white text-black'>
			<div className='h-[100vh] w-full flex items-center justify-center'>
				<div className='w-[30vw]'>
					<h1 className='text-4xl font-semibold mb-6'>
						Sign in to StackrsBlog
					</h1>
					<AuthForm type='signin' />
				</div>
			</div>
		</main>
	);
}
