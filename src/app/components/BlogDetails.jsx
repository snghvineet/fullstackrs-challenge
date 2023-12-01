import { fetchBlog } from '@/utils/fetch-blogs';
import React from 'react';

const DEMO_BLOG = {
	id: 2,
	author: 'Emily',
	title: 'What is global warming?',
	content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dui dui, porta et feugiat sed, mollis sit amet dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse tristique sit amet eros ac fermentum. Sed a lorem hendrerit, laoreet neque vel, tempus ipsum. Donec imperdiet elit id suscipit fermentum. Quisque luctus est quis dolor porta, non eleifend quam sodales. In ultrices ligula ultrices, maximus nunc at, fermentum ex. Vivamus at ligula eu augue semper dignissim. Morbi a justo eu dui semper rutrum. Vivamus posuere, velit in lobortis fermentum, ante magna accumsan metus, quis sodales ligula nunc at massa.

    Morbi iaculis ex id laoreet vulputate. Duis efficitur mauris in libero iaculis, sed laoreet justo varius. Fusce lectus velit, tristique non massa sit amet, pellentesque viverra nisl. Aliquam molestie hendrerit ante nec blandit. Quisque malesuada imperdiet arcu, id pretium felis rutrum sit amet. Nullam neque neque, dignissim non vehicula vitae, eleifend nec leo. Etiam convallis egestas mauris, sed vulputate velit scelerisque quis. Aliquam maximus enim id orci sollicitudin, sit amet facilisis ligula porttitor. Quisque neque augue, luctus sed aliquam ut, posuere quis magna. Aliquam dictum dui et quam consequat, nec viverra eros fringilla. Pellentesque tempor tellus ut justo congue fringilla. Fusce ipsum quam, porttitor ut ultricies id, ornare sed sapien.
    
    Quisque vel gravida lorem. Cras odio diam, dapibus eget tincidunt id, aliquam nec augue. Ut viverra libero sit amet tortor semper, et imperdiet lacus consectetur. Ut nunc risus, pulvinar ac pulvinar ac, tristique id velit. Sed massa justo, commodo ut pretium et, blandit volutpat metus. Aenean vulputate ultrices dui, pellentesque laoreet nisi lobortis ac. Duis nec tempus leo, non venenatis risus.
    
    Mauris pellentesque viverra neque quis vulputate. Proin suscipit vel mauris eget mollis. Etiam aliquet fermentum nibh sed maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut ac faucibus elit. Nulla sagittis lectus ut enim sagittis, nec feugiat dolor sagittis. Vestibulum sollicitudin aliquam elit, at rutrum ligula consectetur vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis condimentum lacus, sagittis rhoncus lorem. Curabitur tristique, eros vel consectetur blandit, enim ligula finibus mi, ac viverra augue dolor et diam. Aliquam pulvinar, orci quis semper rhoncus, tellus enim facilisis quam, sed aliquam lorem massa nec tellus. Vivamus porta ante ac libero pulvinar congue. Integer at orci vel mi scelerisque elementum sit amet porttitor mi. Vivamus ipsum sem, consectetur at lectus ut, pretium finibus ipsum.
    
    Ut sit amet nibh tempus, varius erat et, posuere metus. Aliquam porta enim lorem, ut mattis eros sagittis ut. Aenean vitae ante sem. In imperdiet eros turpis, sit amet malesuada risus consectetur nec. Curabitur ut mauris at sem dapibus mollis tincidunt nec metus. Integer egestas commodo felis, eu pretium tortor gravida nec. Suspendisse potenti.`,
	publishedOn: new Date(),
};

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
	return (
		<div className='bg-white text-black px-60 min-h-[90vh]'>
			<section className='pt-12 pb-4'>
				<h1 className='text-6xl text-start px-4 mb-8 font-semibold'>
					{blog.title}
				</h1>
				<div className='px-4 text-lg flex justify-between items-center py-4'>
					<span className='font-bold'>{blog.author}</span>
					<span className='font-bold'>Published: {date}</span>
				</div>
				<Divider />
			</section>
			<div className='mx-auto w-[40vw] mt-12 text-lg text-justify '>
				{blog.content.split('\n').map((i, key) => (
					<div key={key} className='mb-6'>
						{i}
						<br />
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogDetails;
