import Image from 'next/image';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { RiCloseFill } from "react-icons/ri"
import { useState } from 'react';

const Nav = () => {
	const navitems = ['home', 'projects', 'contact']
	const sideItems = ['home', 'projects', 'contact']
	const [navActive, setNav] = useState(false)

	return (
		<div className="mynav p-7 flex items-center justify-between relative">
			<div className='flex items-center w-fit cursor-pointer'>
				<Image src="/icon.webp" alt="Logo" width="34" height="34" />
				<p className='font-quicksand font-medium ml-4 hover:text-mygreen transition-all ease-in-out'>alvarez.portfolio&#40;&#41;</p>
			</div>

			<div>
				<HiOutlineBars3BottomRight className='lg:hidden text-3xl' onClick={() => { setNav(true) }} />
				<ul className='font-quicksand font-medium w-[29rem] justify-between items-center hidden lg:flex'>
					{navitems.map((items) => {
						return (
							<div key={items}>
								<li className="peer capitalize cursor-pointer hover:text-mygreen transition-all ease-in-out select-none font-medium">{items}&#40;&#41;</li>
								<div className='w-0 rounded-full h-1 mt-1 bg-mygreen mx-auto peer-hover:w-6 transition-all ease-in-out pointer-events-none'></div>
							</div>
						)
					})}
					<div className='bg-black opacity-60 text-white px-5 py-2 select-none cursor-pointer hover:text-white hover:opacity-1 transition-all ease-in-out hover:bg-mygreen'>
						terminal_
					</div>

				</ul>
			</div>

			<div className='absolute bg-lightg w-full h-screen top-0 left-0 translate-x-[100%] transition-all ease-in-out duration-[0.4s] z-10' style={navActive ? { transform: "translateX(0%)" } : {}}></div>

			<div className='bg-db w-full h-screen translate-x-[100%] absolute top-0 right-0 transition-all ease-in-out delay-[0.2s] duration-[0.4s] z-10' style={navActive ? { transform: "translateX(0%)" } : {}}>
				<div className='w-full flex justify-between p-8 pl-12'>
					<Image src="/whitelogo.webp" alt="Logo" width="50" height="50" />
					<RiCloseFill color="white" className='text-white text-3xl' onClick={() => { setNav(false) }} />
				</div>
				<ul className='text-white font-quicksand ml-12 mt-9'>
					{sideItems.map((items) => {
						return (
							<li className="mb-10" key={items}>{items}&#40;&#41;</li>
						)
					})}
					<li>terminal_</li>
				</ul>
			</div>


		</div>
	);
}

export default Nav;