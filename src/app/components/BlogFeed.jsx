import React from 'react';
import { Button } from './Button';
import BlogTile from './BlogTile';
import { cookies } from 'next/headers';
import { createClient } from '@/utils/server';

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

const BlogFeed = ({ blogs = [] }) => {
	return (
		<section className='mx-12 pb-12'>
			<div className='flex w-full items-center justify-between mb-2'>
				<h6 className='text-xl font-semibold '>Feed</h6>
				{/* <ul className='flex'>
					<li>List</li>
					<li>Other</li>
				</ul> */}
			</div>
			<div className='grid grid-cols-3 gap-12'>
				{[...DEMO_BLOGS, ...blogs].map((blog) => (
					<BlogTile key={blog.id} blog={blog} />
				))}
			</div>
		</section>
	);
};

export default BlogFeed;
