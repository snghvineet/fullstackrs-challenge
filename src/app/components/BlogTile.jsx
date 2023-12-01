'use client';

import { FaClock } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import Link from 'next/link';
import { IconButton } from './Button';
import { FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const ReadTime = ({ time }) => {
	return (
		<div className='flex items-center'>
			<span className='text-lg mr-2'>
				<FaClock />
			</span>
			<span>{time}</span>
		</div>
	);
};

const BlogTile = ({ blog, editable }) => {
	const date = blog.publishedOn.toLocaleDateString();
	const contentSize = editable ? 70 : 100;
	const contentBrief = blog.content.substring(0, contentSize) + '...';
	const titleBrief = blog.title.substring(0, 35) + '...';
	const router = useRouter();
	const handleEdit = () => {
		router.push(`/blogs/edit/${blog.id}`);
	};
	const handleDelete = async () => {};
	return (
		<div className='w-full bg-gray-700 rounded-xl h-[55vh] flex flex-col overflow-hidden'>
			<div className='h-2/3 bg-gray-100 relative'>
				{editable && (
					<div className='absolute right-2 top-2 '>
						<IconButton icon={<FaEdit />} onClick={handleEdit}></IconButton>
						<IconButton icon={<MdDelete />} className='text-orange-700 ml-2' />
					</div>
				)}
			</div>
			<div className='h-[40%] flex flex-col py-3 px-6 bg-lime-200'>
				<div className='flex-grow flex-col flex'>
					<span className='font-semibold mb-1'>{blog.title}</span>
					<span className='text-sm'>
						{contentBrief}{' '}
						<Link className='text-sky-500 underline' href={`/blogs/${blog.id}`}>
							Read more
						</Link>
					</span>
				</div>

				<div className='flex items-center justify-between text-sm font-semibold'>
					<span>{blog.author}</span>
					<span>{date}</span>
				</div>
			</div>
		</div>
	);
};

export default BlogTile;
