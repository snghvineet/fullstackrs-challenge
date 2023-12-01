import { fetchAllBlogs } from '@/utils/fetch-blogs';
import Banner from '../components/Banner';
import BlogFeed from '../components/BlogFeed';

export default async function Home() {
	const { blogs } = await fetchAllBlogs();
	return (
		<main className='px-10 bg-white text-black'>
			<Banner />
			<BlogFeed blogs={blogs} />
		</main>
	);
}
