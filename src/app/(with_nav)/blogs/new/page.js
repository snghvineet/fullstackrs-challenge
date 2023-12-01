import BlogForm from '@/app/components/BlogForm';

export default async function CreateBlog() {
	return (
		<main className='bg-white min-h-[80vh] px-10 text-black'>
			<BlogForm header='New blog' type='new' />
		</main>
	);
}
