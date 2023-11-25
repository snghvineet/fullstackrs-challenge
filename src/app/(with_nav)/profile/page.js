import BlogFeed from '@/app/components/BlogFeed';
import ProfileInfo from '@/app/components/ProfileInfo';
import { fetchAllBlogs } from '@/utils/fetch-blogs';
import { createClient } from '@/utils/server';

import { cookies } from 'next/headers';

export default async function Home() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const {
		data: { user },
	} = await supabase.auth.getUser();
	// console.log(user);
	const { blogs, author } = await fetchAllBlogs({ authorId: user.id });
	console.log(blogs);
	return (
		<main className='px-10 bg-white text-black flex flex-col '>
			<ProfileInfo />
			<div className='flex-col flex h-[20vh] justify-center items-center'>
				<h1 className='text-4xl'>Welcome, {author}</h1>
				<h4>Here are the blogs written by you</h4>
			</div>
			<div>
				<BlogFeed blogs={blogs} />
			</div>
		</main>
	);
}
