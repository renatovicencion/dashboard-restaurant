import React, { useState } from "react";
import {
	RiMenuLine,
	RiUserLine,
	RiAddLine,
	RiPieChart2Line,
	RiCloseLine,
	RiArrowDownSLine,
} from "react-icons/ri";

// Components
import Sidebar from "./components/shared/Sidebar";
import Cart from "./components/shared/Cart";
import Header from "./components/shared/Header";
import Card from "./components/shared/Card";

// Imgs
import Dish1 from "./assets/dish1.png";
import Dish2 from "./assets/dish2.png";

const App = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};

	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};

	return (
		<div className='bg-[#262837] w-full min-h-screen'>
			<Sidebar showMenu={showMenu} />
			<Cart showOrder={showOrder} toggleOrders={toggleOrders} />
			{/* Menú móvil */}
			<nav className='bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 rounded-tl-xl rounded-tr-xl flex items-center justify-between'>
				<button className='p-2'>
					<RiUserLine />
				</button>
				<button className='p-2' onClick={toggleOrders}>
					<RiPieChart2Line />
				</button>
				<button className='p-2'>
					<RiAddLine />
				</button>
				<button className='text-white p-2' onClick={toggleMenu}>
					{showMenu ? <RiCloseLine /> : <RiMenuLine />}
				</button>
			</nav>

			<main className='lg:pl-32 lg:pr-96 pb-20'>
				<div className='md:p-8 p-4'>
					{/* HEADER */}
					<Header />
					{/* TITLE CONTENT */}
					<div className='flex items-center justify-between mb-8'>
						<h2 className='text-xl text-gray-300'>Choose Dishes</h2>
						<button className='flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg'>
							<RiArrowDownSLine /> Dine in
						</button>
					</div>

					{/* CONTENT */}
					<div className='p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'>
						<Card
							img={Dish1}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>

						<Card
							img={Dish2}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>

						<Card
							img={Dish1}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>

						<Card
							img={Dish2}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>

						<Card
							img={Dish1}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>

						<Card
							img={Dish2}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>

						<Card
							img={Dish1}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>

						<Card
							img={Dish2}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>

						<Card
							img={Dish1}
							title='Speacy seasoned seafood noodles'
							price='$2.29'
							stock='20 Bowls available'
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
