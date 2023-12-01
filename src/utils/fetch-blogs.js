import { cookies } from 'next/headers';
import { createClient } from './server';

export async function fetchBlog(id) {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const { data: blog } = await supabase.from('blogs').select().eq('id', id);
	const { data: author, error } = await supabase
		.from('profiles')
		.select('full_name')
		.eq('id', blog[0].author_id);

	return {
		id: blog[0].id,
		title: blog[0].title,
		content: blog[0].content,
		publishedOn: new Date(blog[0].created_at),
		author: author[0].full_name,
	};
}

export async function fetchAllBlogs(options) {
	let authorId = null;
	if (options) authorId = options.authorId;
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	let query1 = supabase.from('blogs').select();
	let query2 = supabase.from('profiles').select('id, full_name');

	if (authorId) {
		query1.eq('author_id', authorId);
		query2.eq('id', authorId);
	}

	const { data, error } = await query1;
	const { data: authors } = await query2;

	const authorFinder = new Map();
	authors.forEach((val) => authorFinder.set(val.id, val.full_name));
	const blogs = data.map((val) => {
		return {
			id: val.id,
			author: authorFinder.get(val.author_id),
			publishedOn: new Date(val.created_at),
			title: val.title,
			content: val.content,
		};
	});
	return { blogs, author: authors[0] };
}
