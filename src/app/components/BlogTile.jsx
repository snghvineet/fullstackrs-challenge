import { FaClock } from 'react-icons/fa6';

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

const BlogTile = ({ blog }) => {
	const date = blog.publishedOn.toLocaleDateString();
	const contentBrief = blog.content.substring(0, 100) + '...';
	const titleBrief = blog.title.substring(0, 35) + '...';
	return (
		<div className='w-full bg-gray-700 rounded-xl h-[55vh] flex flex-col overflow-hidden'>
			<div className='h-2/3 bg-gray-100' />
			<div className='h-1/3 flex flex-col py-3 px-6 bg-lime-200'>
				<div className='flex-grow flex-col flex'>
					<span className='font-semibold mb-1'>{blog.title}</span>
					<span className='text-sm'>{contentBrief}</span>
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
