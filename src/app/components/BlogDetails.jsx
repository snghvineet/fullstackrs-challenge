import { fetchBlog } from '@/utils/fetch-blogs';
import React from 'react';
import Image from 'next/image';

const Divider = ({ width = 2 }) => {
	return <div className={`h-[2px] w-full bg-gray-300`} />;
};

const BlogDetails = async ({ id }) => {
	const data = await fetchBlog(id);
	// console.log(data);
	const blog = data;
	const date = blog.publishedOn.toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
	});
	console.log(blog.imageUrl);
	return (
		<div className='bg-white text-black px-4 sm:px-16 md:px-24 lg:px-40 xl:px-50 min-h-[90vh] pb-12'>
			<section className='pt-12 pb-4'>
				<h1 className='text-3xl md:text-5xl lg:text-5xl xl:text-6xl text-start px-4 lg:mb-4 font-semibold'>
					{blog.title}
				</h1>
				<div className='px-4 text-lg flex flex-col sm:flex-row justify-between sm:items-center py-4'>
					<span className='font-bold'>{blog.author}</span>
					<span className='font-bold'>Published: {date}</span>
				</div>
				<Divider />
			</section>
			{blog.imageUrl && (
				<div className='h-80 w-full relative mt-12'>
					<Image
						src={blog.imageUrl}
						alt='Blog image'
						fill={true}
						objectFit='contain'
					/>
				</div>
			)}
			<section>
				<div className='mx-auto w-[86vw] md:w-[60vw] lg:w-[50vw] mt-4 md:mt-12 text-lg '>
					{blog.content.split('\n').map((i, key) => (
						<div key={key} className='mb-2 text-justify'>
							{i}
							<br />
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default BlogDetails;
