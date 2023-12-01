import BlogForm from '@/app/components/BlogForm';
import { createClient } from '@/utils/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function CreateBlog({ params }) {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const { data, error } = await supabase
		.from('blogs')
		.select()
		.eq('id', params.id)
		.eq('author_id', user.id);
	if (error || data.length === 0) return redirect(`/edit/${params.id}/error`);
	const existingBlog = data[0];
	console.log(existingBlog);
	return (
		<main className='bg-white min-h-[80vh] px-10 text-black'>
			<BlogForm header='Edit your blog' blog={existingBlog} type='update' />
			{params.id}
		</main>
	);
}
