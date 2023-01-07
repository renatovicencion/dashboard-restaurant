import React from "react";

import { RiCloseLine } from "react-icons/ri";
import CartProduct from "./CartProduct";
// Imgs
import Dish1 from "./../../assets/dish1.png";
import Dish2 from "./../../assets/dish2.png";

const Cart = ({ showOrder, toggleOrders }) => {
	return (
		<div
			className={`lg:col-span-2 fixed top-0 w-full h-full lg:w-96 lg:right-0 bg-[#1F1D2B] transition-all z-50 ${
				showOrder ? "right-0" : "-right-full"
			}`}
		>
			{/* ORDERS */}
			<div className='relative pt-16 lg:pt-8 text-gray-300 p-8 h-full'>
				<RiCloseLine
					onClick={toggleOrders}
					className='absolute lg:hidden left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl'
				/>
				<h1 className='text-2xl my-4'>Order #151416</h1>
				{/* TABS */}
				<div className='flex items-center gap-4 flex-wrap mb-8'>
					<button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'>
						Dine in
					</button>
					<button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
						To Go
					</button>
					<button className='text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500'>
						Delivery
					</button>
				</div>
				{/* CART */}
				<div>
					<div className='grid grid-cols-6 mb-4 p-4'>
						<h5 className='col-span-4'>Item</h5>
						<h5>Qty</h5>
						<h5>Price</h5>
					</div>

					{/* PRODUCTS */}
					<div className='h-[400px] md:h-[700px] lg:h-[540px] overflow-scroll'>
						{/* PRODUCT */}
						<CartProduct
							img={Dish1}
							title='Spaicy seaso...'
							price='2.29'
							quantity='2'
							subtotal='4.58'
						/>

						<CartProduct
							img={Dish2}
							title='Spaicy seaso...'
							price='2.29'
							quantity='2'
							subtotal='4.58'
						/>

						<CartProduct
							img={Dish1}
							title='Spaicy seaso...'
							price='2.29'
							quantity='2'
							subtotal='4.58'
						/>

						<CartProduct
							img={Dish2}
							title='Spaicy seaso...'
							price='2.29'
							quantity='2'
							subtotal='4.58'
						/>
					</div>
				</div>

				{/* SUBMIT PAYMENT */}
				<div className='bg-[#262837] w-full absolute bottom-0 left-0 p-4'>
					<div className='flex items-center justify-between mb-4'>
						<span className='text-gray-400'>Discount</span>
						<span>$0</span>
					</div>
					<div className='flex items-center justify-between mb-6'>
						<span className='text-gray-400'>Subtotal</span>
						<span>$201.03</span>
					</div>
					<div>
						<button className='bg-[#ec7c6a] w-full py-2 px-4 rounded-lg'>
							Continue to payment
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
