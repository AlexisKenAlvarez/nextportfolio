import Image from 'next/image';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState, useEffect } from 'react';
import { FunctionComponent } from 'react'
import { AnimatePresence } from 'framer-motion';
import SideNav from './SideNav';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface myProp {
	activeColor: string
	onClick: () => void,
	active: string
}

const Nav: FunctionComponent<myProp> = (props) => {
	const { onClick, active } = props

	const { activeColor } = props
	const router = useRouter()
	const navitems = [
		{
			route: '/',
			link: "home"
		},
		{
			route: '/projects',
			link: "projects"
		},
		{
			route: '/contact',
			link: "contact"
		},
	]
	const [navActive, setNav] = useState(false)

	const handleClose = () => {
		setNav(false)
	}

	return (
		<div className={`mynav p-7 flex items-center justify-between relative z-40`}>
			<Link href="/">
				<div className='flex items-center w-fit cursor-pointer'>
					<Image src="/icon.webp" alt="Logo" width="34" height="34" className='w-auto h-auto dark:invert' />
					<p className='font-quicksand font-medium ml-4 hover:text-mygreen transition-all ease-in-out dark:text-white dark:hover:text-lightg'>alvarez.portfolio&#40;&#41;</p>
				</div>
			</Link>


			<div>
				<HiOutlineBars3BottomRight className='lg:hidden text-3xl dark:text-white' onClick={() => { setNav(true) }} />
				<ul className='font-quicksand font-medium w-[29rem] justify-between items-center hidden lg:flex'>
					{navitems.map((items, index) => {
						return (
							<Link href={items.route} key={index}>
								<div>
									<li className="peer capitalize cursor-pointer hover:text-mygreen transition-all ease-in-out select-none font-medium dark:hover:text-lightg dark:text-white" style={router.route.includes("/projects") ? router.route === items.route ? { color: activeColor } : {} : router.route === items.route ? { color: activeColor } : {}}>{items.link}&#40;&#41;</li>
									<div className='w-0 rounded-full h-1 mt-1 bg-mygreen mx-auto peer-hover:w-5 transition-all ease-in-out pointer-events-none dark:bg-lightg' style={router.route.includes('/projects') ? router.route === items.route ? { width: "2.5rem" } : {} : router.route === items.route ? { width: "2.5rem" } : {}}></div>
								</div>
							</Link>

						)
					})}
					<Link href="/terminal">
						<div className='  px-5 py-2 select-none w-fit bg-black opacity-70 text-white font-courier  rounded font-medium cursor-pointer hover:text-lightg hover:opacity-100 transition-all ease-in-out'>
							terminal_
						</div>
					</Link>


				</ul>
			</div>


			<AnimatePresence>
				{navActive ? <SideNav close={handleClose} onClick={onClick} active={active} /> : null}
			</AnimatePresence>

		</div>
	);
}

export default Nav;