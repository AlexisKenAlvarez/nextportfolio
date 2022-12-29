import Image from 'next/image';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect } from 'react';
import { FunctionComponent } from 'react'
import { AnimatePresence } from 'framer-motion';
import SideNav from './SideNav';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Nav: FunctionComponent = () => {
	const router = useRouter()
	const navitems = [
		{
			route: '/',
			link: <Link href='/'>home</Link>
		},
		{
			route: '/projects',
			link: <Link href='/projects'>projects</Link>
		},
		{
			route: '/contact',
			link: <Link href='/contact'>contact</Link>
		},
	]
	const [navActive, setNav] = useState(false)

	const handleClose = () => {
		setNav(false)
	}

	return (
		<div className={`mynav p-7 flex items-center justify-between relative`}>
			<div className='flex items-center w-fit cursor-pointer'>
				<Image src="/icon.webp" alt="Logo" width="34" height="34" className='w-auto h-auto' />
				<p className='font-quicksand font-medium ml-4 hover:text-mygreen transition-all ease-in-out'>alvarez.portfolio&#40;&#41;</p>
			</div>

			<div>
				<HiOutlineBars3BottomRight className='lg:hidden text-3xl' onClick={() => { setNav(true) }} />
				<ul className='font-quicksand font-medium w-[29rem] justify-between items-center hidden lg:flex'>
					{navitems.map((items, index) => {
						return (
							<div key={index}>
								<li className="peer capitalize cursor-pointer hover:text-mygreen transition-all ease-in-out select-none font-medium" style={ router.route === items.route ? {color: "#588F62"} : {}}>{items.link}&#40;&#41;</li>
								<div className='w-0 rounded-full h-1 mt-1 bg-mygreen mx-auto peer-hover:w-5 transition-all ease-in-out pointer-events-none' style={ router.route === items.route ? {width: "2.5rem"} : {}}></div>
							</div>
						)
					})}
					<div className='  px-5 py-2 select-none w-fit bg-black opacity-70 text-white font-courier  rounded font-medium cursor-pointer hover:text-lightg hover:opacity-100 transition-all ease-in-out'>
						terminal_
					</div>
				</ul>
			</div>


			<AnimatePresence>
				{navActive ? <SideNav close={handleClose} /> : null}
			</AnimatePresence>



		</div>
	);
}

export default Nav;