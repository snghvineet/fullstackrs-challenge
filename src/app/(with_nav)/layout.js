import { cookies } from 'next/headers';
import NavBar from '../components/NavBar';
import { createClient } from '@/utils/server';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

export default async function NavLayout({ children }) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}
