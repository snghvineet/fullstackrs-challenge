'use client';

import { useState } from 'react';
import BlogTile from './BlogTile';
import BlogListItem from './BlogListItem';
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/client';

const DEMO_BLOGS = [
	{
		id: 1,
		author: 'Jacob',
		title: 'Blog 1',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi ab vero sapiente? Nostrum eaque earum, veniam suscipit magnam fugit quaerat deleniti sint vitae tenetur saepe omnis, repudiandae animi id?',
		publishedOn: new Date(),
	},
	{
		id: 2,
		author: 'Emily',
		title: 'What is global warming?',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi ab vero sapiente? Nostrum eaque earum, veniam suscipit magnam fugit quaerat deleniti sint vitae tenetur saepe omnis, repudiandae animi id?',
		publishedOn: new Date(),
	},
	{
		id: 3,
		author: 'Rishab',
		title: 'Can we launch a rocket using a bottle of Coke?',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem excepturi ab vero sapiente? Nostrum eaque earum, veniam suscipit magnam fugit quaerat deleniti sint vitae tenetur saepe omnis, repudiandae animi id?',
		publishedOn: new Date(),
	},
];

const BlogFeed = ({ blogs = [], header = 'Feed', editable }) => {
	const [tileView, setTileView] = useState(false);
	const router = useRouter();

	const blogEditHandler = (id) => {
		router.push(`/blogs/edit/${id}`);
	};

	const blogDeleteHandler = async (id) => {
		const supabase = createClient();
		const { error } = await supabase.from('blogs').delete().eq('id', id);
		if (error) console.log(error);
		else router.refresh();
	};
	return (
		<section className='mx-12 pb-12'>
			<div className='flex w-full items-center justify-between mb-2'>
				<h6 className='text-xl font-semibold '>{header}</h6>
				{/* <ul className='flex'>
					<li>List</li>
					<li>Other</li>
				</ul> */}
			</div>
			{tileView ? (
				<div className={`grid grid-cols-3 gap-12`}>
					{[...blogs].map((blog) => (
						<BlogTile key={blog.id} blog={blog} editable={editable} />
					))}
				</div>
			) : (
				<div className={`flex flex-col gap-6`}>
					{[...blogs].map((blog) => (
						<BlogListItem
							key={blog.id}
							blog={blog}
							editable={editable}
							editHandler={blogEditHandler.bind(null, blog.id)}
							deleteHandler={blogDeleteHandler.bind(this, blog.id)}
						/>
					))}
				</div>
			)}
		</section>
	);
};

export default BlogFeed;
