import React from 'react';
import { Button } from './Button';
import BlogTile from './BlogTile';

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

const BlogFeed = () => {
	return (
		<section>
			<div className='flex w-full items-center justify-between mb-2'>
				<h6 className='text-xl font-medium'>Feed</h6>
			</div>
			<div className='grid grid-cols-3 gap-8'>
				{DEMO_BLOGS.map((blog) => (
					<BlogTile key={blog.id} blog={blog} />
				))}
			</div>
		</section>
	);
};

export default BlogFeed;
