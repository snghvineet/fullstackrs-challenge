'use client';

import React, { useState } from 'react';
import Input from './Input';
import { Button } from './Button';
import { createClient } from '@/utils/client';
import { useRouter } from 'next/navigation';

const BlogForm = ({ header, blog, type }) => {
	const [content, setContent] = useState(blog.content);
	const [title, setTitle] = useState(blog.title);

	const router = useRouter();

	const submitForm = async (e) => {
		e.preventDefault();
		console.log({ title, content });
		const supabase = createClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();
		if (type === 'new') {
			await supabase
				.from('blogs')
				.insert({ title, content, author_id: user.id });
		}
		if (type === 'update') {
			await supabase.from('blogs').update({ title, content }).eq('id', blog.id);
		}

		router.replace('/profile');
	};
	return (
		<form className='mx-12 py-8' onSubmit={submitForm}>
			<div className='flex justify-center'>
				<h1 className='text-3xl font-bold'>{header}</h1>
			</div>
			<div>
				<Input
					label='Title'
					placeholder='Title of your blog'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<Input
					label='Content'
					variant='textarea'
					placeholder='Your blog content'
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
			</div>
			<div className='flex justify-end'>
				<Button
					variant='text'
					onClick={() => router.replace('/profile')}
					options={{ type: 'button' }}
				>
					Cancel
				</Button>
				<Button outline={true}>{type === 'new' ? 'Create' : 'Update'}</Button>
			</div>
		</form>
	);
};

export default BlogForm;
