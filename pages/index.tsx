
import Head from 'next/head';
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from '../components/Contact';
import Image from 'next/image';
import { CgArrowLongUp } from 'react-icons/cg'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Underline from '../components/Modes/Underline';

const Index = () => {
	const [hMessage, setHoverMessage] = useState(false)
	return (
		<div>
			<Head>
				<title>Alvarez</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
			</Head>

			<div className="h-[38rem] lg:h-[45rem] w-full relative overflow-hidden">
				<Hero />

				<div className="w-[80%] xl:w-[70%] h-[1px] bg-grey mx-auto hidden lg:block mt-16 dark:bg-white"></div>
			</div>
			<About />

			<footer className='w-full md:h-[30rem] h-[25rem] bg-white relative font-raleway overflow-hidden'>
				<div className='flex justify-between mx-auto w-[80%] md:mt-20 mt-10'>
					<div className='text-notSoBlack md:text-5xl font-extrabold text-3xl text-center w-full md:w-auto md:text-left'>
						<h1>Is there a spark?</h1>
						<h2 className='mt-4'>Send me a
							<span className='text-mygreen cursor-pointer relative z-10' onMouseEnter={() => {setHoverMessage(true)}} onMouseLeave={() => {setHoverMessage(false)}}> message.
								<AnimatePresence>
									{hMessage ? <Underline /> : null}
								</AnimatePresence>
								<div className='bg-white w-10 h-full absolute right-[2.35rem] z-[-1] top-5 md:block hidden'></div>
							</span>
						</h2>
					</div>
					<div className='relative items-center h-fit text-3xl font-bold text-notSoBlack w-fit md:flex hidden'>
						<p className='peer cursor-pointer'>Top</p>
						<div className='bg-mygreen peer-hover:w-[4.8rem] h-[0.2rem] absolute bottom-[-0.5rem] mx-auto left-auto right-auto w-0 transition-all ease-in-out duration-500 origin-center'></div>
						<CgArrowLongUp className='rotate-180 peer-hover:rotate-0 transition-all ease-in-out duration-500 opacity-0 peer-hover:opacity-100 pointer-events-none' />
					</div>
				</div>

				<div className='flex md:justify-between mx-auto w-[80%] absolute lg:bottom-10 left-0 right-0 h-fit bottom-16 flex-col md:flex-row items-center md:items-start'>
					<div className='flex items-center w-fit cursor-pointer'>
						<Image src="/icon.webp" alt="Logo" width="34" height="34" className='w-auto h-auto dark:invert mb-10 md:mb-0' />
						<p className='font-quicksand font-medium ml-4 hover:text-mygreen transition-all ease-in-out dark:text-white dark:hover:text-lightg hidden md:block'>alvarez.portfolio&#40;&#41;</p>
					</div>
					<p className='font-quicksand self-end text-center md:text-left text-sm md:text-md w-full md:w-fit'>© 2023 | Made with ❤ by Alexis Ken Alvarez</p>
				</div>



			</footer>
		</div>
	);
}

export default Index;