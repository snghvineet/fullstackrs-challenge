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
	// console.log(blogs);
	return (
		<main className='px-10 py-10 bg-white text-black flex flex-col lg:flex-row'>
			<ProfileInfo
				name={author.full_name}
				email={user.email}
				count={blogs.length}
			/>

			{/* <div className='flex-col flex justify-center h-[20vh] items-center flex-grow'>
					<h1 className='text-4xl'>Welcome, {author.full_name}</h1>
					<h4>Here are the blogs written by you</h4>
				</div> */}
			<div>
				<BlogFeed blogs={blogs} editable={true} header='Your blogs' />
			</div>
		</main>
	);
}
