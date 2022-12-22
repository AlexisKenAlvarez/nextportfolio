import Nav from "../components/Nav";
import { AiOutlineGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillFacebook } from 'react-icons/ai'
import Head from 'next/head';
import Hero from "../components/Hero";
import About from "../components/About";
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Hello from "../components/HeroAnimation/Hello";
import Image from 'next/image';

const Index = () => {



	const soc = [
		<a href="https://github.com/AlexisKenAlvarez" target="_blank" rel="noopener noreferrer" key="1">
			<AiOutlineGithub />
		</a>,
		<a href="https://www.instagram.com/alexiskenalvarez/" target="_blank" rel="noopener noreferrer" key="2">
			<AiFillInstagram />
		</a>,
		<a href="https://www.linkedin.com/in/alexiskenalvarez/" target="_blank" rel="noopener noreferrer" key="3">
			<AiFillLinkedin />
		</a>,
		<a href="mailto:alexisken1432@gmail.com" target="_blank" rel="noopener noreferrer" key="4">
			<AiFillMail />
		</a>,
		<a href="https://www.facebook.com/alvarez.aki/" target="_blank" rel="noopener noreferrer" key="5">
			<AiFillFacebook />
		</a>,
	]

	const stag = {
		initial: {
			opacity: 0
		},
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1
			}
		},
		exit: {
			transition: {
				staggerChildren: 0.1
			}
		}
	}

	const letterVar = {
		initial: {
			y: 80,
			opacity: 0
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8
			}
		},
		exit: {
			y: 80,
			opacity: 0
		}
	}

	const [exit, setExit] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setExit(true)
		}, 2000);
	}, [])


	// const letters = (
	// 	<motion.div className="flex">
	// 		<motion.h1 variants={letterVar} className="text-[6rem] md:text-[9rem] lg:text-[14rem] xl:text-[17rem]">H</motion.h1>
	// 		<motion.h1 variants={letterVar} className="text-[6rem] md:text-[9rem] lg:text-[14rem] xl:text-[17rem]">E</motion.h1>
	// 		<motion.h1 variants={letterVar} className="text-[6rem] md:text-[9rem] lg:text-[14rem] xl:text-[17rem]">L</motion.h1>
	// 		<motion.h1 variants={letterVar} className="text-[6rem] md:text-[9rem] lg:text-[14rem] xl:text-[17rem]">L</motion.h1>

	// 	</motion.div>

	// )

	return (
		<>
			<Head>
				<title>Alvarez</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
			</Head>
			<div className="w-full h-screen overflow-hidden">
				<div className="h-[38rem] lg:h-[52rem] w-full bg-topog relative overflow-hidden">
					<Nav />
					<Hero />


					<div className="fixed bottom-0 lg:bottom-2 lg:left-2 lg:w-10 w-full lg:h-72 h-12 bg-white lg:bg-transparent opacity-1">
						<ul className="flex lg:flex-col w-full justify-center items-center relative h-full pb-0">
							{soc.map(items => {
								return (
									<li key={items.key} className="mx-3 lg:mb-4 text-2xl text-grey cursor-pointer hover:text-black transition-all ease-in-out">
										{items}
									</li>
								)
							})}
							<div className="h-full w-[2px] bg-grey lg:block hidden"></div>
						</ul>
					</div>
					<div className="w-[80%] xl:w-[70%] h-[1px] bg-grey mx-auto hidden lg:block"></div>
				</div>

				<About />

				<AnimatePresence>

					{exit ? null : <motion.div transition={{ height: { ease: "easeOut", delay: 0.8, duration: 2 } }} initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ height: 0, top: 0 }} className="fixed top-0 w-full bg-white z-12 h-screen bg-fixed">
						<div className="mynav p-7 flex items-center justify-between relative">
							<div className='flex items-center w-fit cursor-pointer'>
								<Image src="/icon.webp" alt="Logo" width="34" height="34" />
								<p className='font-quicksand font-medium ml-4 hover:text-mygreen transition-all ease-in-out'>alvarez.portfolio&#40;&#41;</p>
							</div>
						</div>


						<div className="w-full h-[76%] flex justify-center items-center">
							<div className="flex">
								<Hello />
							</div>
						</div>


					</motion.div>}
				</AnimatePresence>


			</div>

		</>
	);
}

export default Index;