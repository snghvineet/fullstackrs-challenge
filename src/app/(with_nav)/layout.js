import { cookies } from 'next/headers';
import NavBar from '../components/NavBar';
import { createClient } from '@/utils/server';

export default async function NavLayout({ children }) {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
