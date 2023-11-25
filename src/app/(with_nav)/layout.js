import { cookies } from 'next/headers';
import NavBar from '../components/NavBar';
import { createClient } from '@/utils/server';

export default async function NavLayout({ children }) {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const { user, error } = await supabase.auth.getUser();
	// console.log(error);
	let loggedIn = user !== null;
	if (error) loggedIn = false;

	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
