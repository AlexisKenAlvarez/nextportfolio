import Image from 'next/image';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState } from 'react';
import { FunctionComponent } from 'react'
import { AnimatePresence } from 'framer-motion';
import SideNav from './SideNav';


const Nav: FunctionComponent = () => {
	const navitems = ['home', 'projects', 'contact']
	const [navActive, setNav] = useState(false)

	const handleClose = () => {
		setNav(false)
	}

	return (
		<div className={`mynav p-7 flex items-center justify-between relative`}>
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


			<AnimatePresence>
				{navActive ? <SideNav close={handleClose}/> : null}
			</AnimatePresence>
			


		</div>
	);
}

export default Nav;