import React from "react";

import {
	RiHome6Line,
	RiPercentLine,
	RiPieChart2Line,
	RiMailLine,
	RiNotification2Line,
	RiSettings3Line,
	RiLogoutBoxRLine,
} from "react-icons/ri";

const Sidebar = ({ showMenu }) => {
	return (
		<div
			className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 transition-all rounded-tr-xl rounded-br-xl z-50 ${
				showMenu ? "left-0" : "-left-full"
			}`}
		>
			<div>
				<ul className='pl-4'>
					<li>
						<h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>
							Logo
						</h1>
					</li>
					<li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
						<a
							href='#'
							className='bg-[#ec7c6a] flex justify-center p-4 rounded-xl text-white'
						>
							<RiHome6Line className='text-lg' />
						</a>
					</li>
					<li className='hover:bg-[#262837] p-4 group rounded-tl-xl rounded-bl-xl'>
						<a
							href='#'
							className='flex group-hover:bg-[#ec7c6a] justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white'
						>
							<RiPercentLine className='text-lg' />
						</a>
					</li>
					<li className='hover:bg-[#262837] p-4 group rounded-tl-xl rounded-bl-xl'>
						<a
							href='#'
							className='flex group-hover:bg-[#ec7c6a] justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white'
						>
							<RiPieChart2Line className='text-lg' />
						</a>
					</li>
					<li className='hover:bg-[#262837] p-4 group rounded-tl-xl rounded-bl-xl'>
						<a
							href='#'
							className='flex group-hover:bg-[#ec7c6a] justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white'
						>
							<RiMailLine className='text-lg' />
						</a>
					</li>
					<li className='hover:bg-[#262837] p-4 group rounded-tl-xl rounded-bl-xl'>
						<a
							href='#'
							className='flex group-hover:bg-[#ec7c6a] justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white'
						>
							<RiNotification2Line className='text-lg' />
						</a>
					</li>
					<li className='hover:bg-[#262837] p-4 group rounded-tl-xl rounded-bl-xl'>
						<a
							href='#'
							className='flex group-hover:bg-[#ec7c6a] justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white'
						>
							<RiSettings3Line className='text-lg' />
						</a>
					</li>
				</ul>
			</div>

			<div>
				<ul className='pl-4'>
					<li className='hover:bg-[#262837] p-4 group rounded-tl-xl rounded-bl-xl'>
						<a
							href='#'
							className='flex group-hover:bg-[#ec7c6a] justify-center p-4 rounded-xl text-[#ec7c6a] group-hover:text-white'
						>
							<RiLogoutBoxRLine className='text-lg' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
