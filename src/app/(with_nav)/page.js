import Banner from '../components/Banner';
import BlogFeed from '../components/BlogFeed';

export default async function Home() {
	return (
		<main className='px-10 bg-white text-black'>
			<Banner />
			<BlogFeed />
		</main>
	);
}
