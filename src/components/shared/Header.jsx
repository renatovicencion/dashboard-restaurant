import React from "react";

import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
	return (
		<header>
			{/* TITLE AND SEARCH */}
			<div className='flex flex-col gap-4 mb-6 md:flex-row md:justify-between md:items-center'>
				<div>
					<h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
					<p className='text-gray-500'>07 Octubre 2022</p>
				</div>

				<form action=''>
					<div className='w-full relative'>
						<RiSearch2Line className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300' />
						<input
							type='text'
							className='bg-[#1F1D2B] rounded-lg text-gray-300 w-full py-2 pl-10 outline-none pr-4'
							placeholder='Search'
						/>
					</div>
				</form>
			</div>
			{/* TABS */}
			<nav className='text-gray-300 flex items-center justify-between border-b mb-6 md:justify-start md:gap-8'>
				<a
					href='#'
					className='relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px] text-[#ec7c6a]'
				>
					Hot dishes
				</a>
				<a href='#' className='py-2 pr-4'>
					Cold dishes
				</a>
				<a href='#' className='py-2 pr-4'>
					Soup
				</a>
				<a href='#' className='py-2'>
					Grill
				</a>
			</nav>
		</header>
	);
};

export default Header;
