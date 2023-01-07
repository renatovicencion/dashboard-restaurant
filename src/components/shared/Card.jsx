import React from "react";

const Card = ({ img, title, price, stock }) => {
	return (
		<div className='bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center'>
			<img
				src={img}
				alt=''
				className='w-40 h-40 object-cover -mt-16 shadow-2xl rounded-full'
			/>
			<p className='text-xl'>{title}</p>
			<span className='text-gray-400'>{price}</span>
			<p className='text-gray-600'>{stock}</p>
		</div>
	);
};

export default Card;
