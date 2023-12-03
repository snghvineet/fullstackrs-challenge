'use client';
import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { IconButton, LinkButton } from './Button';
import { twMerge } from 'tailwind-merge';
import Logo from './Logo';
import { FaPencil } from 'react-icons/fa6';
import {
	IoIosAddCircle,
	IoIosHome,
	IoIosLogOut,
	IoIosPaper,
	IoIosPerson,
} from 'react-icons/io';
import { useRouter } from 'next/navigation';

const SideBarButton = ({ children, icon, onClick }) => {
	return (
		<button
			className='flex gap-4 text-xl items-center border rounded-full px-6 py-3'
			onClick={onClick}
		>
			<span className='text-gray-700'>{icon}</span>
			{children}
		</button>
	);
};

const SideBar = ({ open, closeSideBar }) => {
	const router = useRouter();
	const visibleClass = open ? 'block' : 'hidden';
	const buttons = [
		{
			id: 'home-button',
			text: 'Home',
			icon: <IoIosHome />,
			onClick: () => {
				closeSideBar();
				router.replace('/');
			},
		},
		{
			id: 'write-button',
			text: 'Write a blog',
			icon: <IoIosPaper />,
			onClick: () => {
				closeSideBar();
				router.replace('/blogs/new');
			},
		},
		{
			id: 'panel-button',
			text: 'Panel',
			icon: <IoIosPerson />,
			onClick: () => {
				closeSideBar();
				router.replace('/profile');
			},
		},
		{
			id: 'signout-button',
			text: 'Sign out',
			icon: <IoIosLogOut />,
			onClick: () => {
				closeSideBar();
				router.replace('/auth/signout');
			},
		},
	];
	return (
		<div
			className={twMerge(
				'w-full h-full top-0 right-0 bg-white fixed z-10 text-black px-8 sm:hidden',
				visibleClass
			)}
		>
			{' '}
			<div className='h-28 items-center flex'>
				<Logo />
			</div>
			<div className='flex flex-col gap-4'>
				{buttons.map((val) => (
					<SideBarButton key={val.id} icon={val.icon} onClick={val.onClick}>
						{val.text}
					</SideBarButton>
				))}
			</div>
		</div>
	);
};

const SideMenu = () => {
	const [show, setShow] = useState(false);
	const toggleShow = () => {
		setShow((val) => {
			document.body.style.overflow = val ? 'unset' : 'hidden';
			return !val;
		});
	};
	return (
		<>
			<IconButton
				icon={<CiMenuBurger color={show ? 'black' : 'white'} />}
				onClick={toggleShow}
				className='z-20 sm:hidden'
			/>
			<SideBar
				open={show}
				closeSideBar={() => {
					document.body.style.overflow = 'unset';
					setShow(false);
				}}
			/>
		</>
	);
};

export default SideMenu;
