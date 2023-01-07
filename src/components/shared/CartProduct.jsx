import React from "react";

import { RiDeleteBin5Line } from "react-icons/ri";

const CartProduct = ({ img, title, price, quantity, subtotal }) => {
	return (
		<div className='bg-[#262837] p-4 rounded-xl mb-4'>
			<div className='grid grid-cols-6 mb-4'>
				{/* PRODUCT DESCRIPTION */}
				<div className='flex items-center gap-3 col-span-4'>
					<img
						src={img}
						alt=''
						className='w-10 h-10 object-cover rounded-full'
					/>
					<div>
						<h5 className='text-sm'>{title}</h5>
						<p className='text-xs text-gray-500'>${price}</p>
					</div>
				</div>
				{/* QUANTITY */}
				<div className='text-center'>
					<span>{quantity}</span>
				</div>
				{/* SUBTOTAL */}
				<div>
					<span>${subtotal}</span>
				</div>
			</div>

			{/* NOTE */}
			<div className='grid grid-cols-6 items-center gap-2'>
				<form className='col-span-5'>
					<input
						type='text'
						className='bg-[#1F1D2B] w-11/12 py-2 px-4 rounded-lg outline-none'
						placeholder='Order note...'
					/>
				</form>
				<div>
					<button className='border border-red-500 p-2 rounded-lg'>
						<RiDeleteBin5Line className='text-red-500' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartProduct;
