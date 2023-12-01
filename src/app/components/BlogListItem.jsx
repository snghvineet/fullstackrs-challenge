import React from 'react';
import Link from 'next/link';
import dateFormat from '@/utils/date-format';
import { Button } from './Button';

const BlogListItem = ({ blog, editable, editHandler, deleteHandler }) => {
	const date = dateFormat.inMonthFormat(blog.publishedOn);
	const briefContent = blog.content.substring(0, 240) + '...';
	return (
		<div className='bg-slate-100 rounded-lg px-6 pb-3 pt-6'>
			<h1 className='text-2xl font-semibold'>{blog.title}</h1>
			<span className='text-sm'>
				{briefContent}{' '}
				<Link className='text-sky-500 underline' href={`/blogs/${blog.id}`}>
					Read more
				</Link>
			</span>
			<div className='flex justify-between items-center mt-2 text-md'>
				<span className='font-semibold'>{blog.author}</span>
				<span>{date}</span>
			</div>
			{editable && (
				<div className='flex justify-end gap-4 mt-2'>
					<Button
						className='py-1 hover:bg-red-400 hover:text-white'
						onClick={deleteHandler}
					>
						Delete
					</Button>
					<Button className='py-1' onClick={editHandler}>
						Edit
					</Button>
				</div>
			)}
		</div>
	);
};

export default BlogListItem;
