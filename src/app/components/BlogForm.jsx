'use client';

import React, { useEffect, useState } from 'react';
import Input from './Input';
import { Button } from './Button';
import { createClient } from '@/utils/client';
import { useRouter } from 'next/navigation';
import DropImageUpload from './DropImageUpload';
import ImagePreview from './ImagePreview';
import { v4 as uuidv4 } from 'uuid';
import useInput from '@/hooks/use-input';

const BlogForm = ({ header, blog, type }) => {
	const {
		value: content,
		setValue: setContent,
		onBlurHandler: contentBlurHandler,
		error: contentError,
	} = useInput((value) => {
		if (!value || value.trim().length === 0)
			return 'This field cannot be empty';
		if (value.trim().length < 200)
			return 'The blog content should have 200+ characters';
	}, blog?.content ?? '');
	const {
		value: title,
		setValue: setTitle,
		error: titleError,
		onBlurHandler: titleBlurHandler,
	} = useInput((value) => {
		if (!value || value.trim().length === 0)
			return 'This field cannot be empty';
		return null;
	}, blog?.title ?? '');
	const [imageFile, setImageFile] = useState();
	const router = useRouter();
	const supabase = createClient();

	// useEffect(() => {
	// 	await supabase.storage.from('blogs-image').
	// }, [supabase])

	const imageSelectHandler = (selectedFiles, rejectedFiles) => {
		if (selectedFiles.length > 0) {
			console.log(selectedFiles);
			setImageFile(selectedFiles[0]);
		}
	};

	const submitForm = async (e) => {
		e.preventDefault();
		titleBlurHandler();
		contentBlurHandler();
		if (titleError || contentError) return;
		const {
			data: { user },
		} = await supabase.auth.getUser();
		let blogError;
		if (type === 'new') {
			if (imageFile) {
				const imgPath = `${uuidv4()}${imageFile.path.split('.').pop()}`;
				await supabase.storage.from('blogs-image').upload(imgPath, imageFile);
				const {
					data: { publicUrl: imgUrl },
				} = supabase.storage.from('blogs-image').getPublicUrl(imgPath);
				const { error: err } = await supabase
					.from('blogs')
					.insert({ title, content, author_id: user.id, image_url: imgUrl });
				error = err;
			} else {
				const { error: err } = await supabase
					.from('blogs')
					.insert({ title, content, author_id: user.id });
				blogError = err;
			}
		}
		if (type === 'update') {
			const imgPath = `${uuidv4()}${imageFile.path.split('.').pop()}`;
			if (imageFile) {
				const { data, error } = await supabase.storage
					.from('blogs-image')
					.upload(imgPath, imageFile);
			}
			const {
				data: { publicUrl: imgUrl },
			} = supabase.storage.from('blogs-image').getPublicUrl(imgPath);
			if (imageFile) {
				const { error: err } = await supabase
					.from('blogs')
					.update({ title, content, image_url: imgUrl })
					.eq('id', blog.id);
				blogError = err;
			} else {
				const { error: err } = await supabase
					.from('blogs')
					.update({ title, content })
					.eq('id', blog.id);
				blogError = err;
			}
		}
		if (!blogError) {
			router.replace('/profile');
		}
	};
	return (
		<form
			className='sm:mx-8 md:mx-12 lg:mx-20 xl:mx-40 py-8'
			onSubmit={submitForm}
		>
			<div className='flex justify-center'>
				<h1 className='text-3xl font-bold mb-12'>{header}</h1>
			</div>
			<div>
				<div className='mb-6'>
					{imageFile && (
						<ImagePreview
							file={imageFile}
							deleteHandler={() => setImageFile(null)}
						/>
					)}
					<label className='font-semibold text-xl'>Upload image</label>
					<DropImageUpload onSelectFiles={imageSelectHandler} />
					<p className='text-sm text-gray-500'>
						<span>File type: doc, pdf, types of images</span>
					</p>
				</div>
				<Input
					label='Title'
					placeholder='Title of your blog'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					error={titleError}
					onBlur={titleBlurHandler}
				/>
				<Input
					label='Content'
					variant='textarea'
					placeholder='Your blog content'
					value={content}
					error={contentError}
					onBlur={contentBlurHandler}
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
