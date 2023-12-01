import BlogDetails from '@/app/components/BlogDetails';

export default function Page({ params }) {
	return (
		<main>
			<BlogDetails id={params.id} />
		</main>
	);
}
