import NavBar from '../components/NavBar';

export default function NavLayout({ children }) {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
